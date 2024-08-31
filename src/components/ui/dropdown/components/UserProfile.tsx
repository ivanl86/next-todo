import { Avatar } from "@nextui-org/avatar";
import { User } from "@prisma/client";

interface UserProfileProps {
  user: User;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <div className="flex justify-center items-center cursor-pointer gap-2">
      <Avatar as={"button"} src={user.avatart_url ?? ""} size="sm" isBordered />
      <div className="flex flex-col max-sm:hidden">
        <span className="text-sm text-gray-600">{`${user.first_name} ${user.last_name}`}</span>
        <span className="text-[0.625rem]/[0.875rem] text-gray-400 w-full max-w-24 truncate">
          {user.email}
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
