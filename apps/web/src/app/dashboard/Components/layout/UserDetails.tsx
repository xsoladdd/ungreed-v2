"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useZustand } from "@/store";

const UserDetails: React.FC = () => {
  const { user } = useZustand();

  const dicebearImage = `https://api.dicebear.com/7.x/open-peeps/svg?seed=${user.email}&backgroundColor=b6e3f4,c0aede,d1d4f9`;

  return (
    <>
      {" "}
      <div className="flex flex-col items-center gap-2 px-4 py-4">
        <Avatar className="h-16 w-16">
          <AvatarImage
            src={user.dbData?.image ? user.dbData?.image : dicebearImage}
            alt="dicebear avatar"
          />
          <AvatarFallback>{}</AvatarFallback>
        </Avatar>
        <div className="space-y-1 w-full text-center">
          <div className="font-medium">{user.dbData?.name}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
        </div>
      </div>
    </>
  );
};
export default UserDetails;
