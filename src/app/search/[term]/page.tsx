import TodoListSkeleton from "@/components/ui/skeletons/TodoListSkeleton";
import TodoList from "@/components/ui/TodoList";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React, { Suspense } from "react";

interface SearchPageProps {
  params: {
    term: string;
  };
}

const SearchPage = async ({ params: { term } }: SearchPageProps) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <main className="flex-1 max-w-full items-center justify-center px-4">
      <Suspense fallback={<TodoListSkeleton count={6} />}>
        <TodoList userId={user?.id} searchTerm={term} />
      </Suspense>
    </main>
  );
};

export default SearchPage;
