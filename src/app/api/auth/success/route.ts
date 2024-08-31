import db from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

const GET = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    throw new Error("Authentication error");
  }

  const dbUser = await db.user.findUnique({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) {
    await db.user.create({
      data: {
        id: user.id,
        email: user.email!,
        first_name: user.given_name!,
        last_name: user.family_name!,
        avatart_url: user.picture!,
      },
    });
  }

  return NextResponse.redirect(process.env.KINDE_SITE_URL!);
};

export { GET };
