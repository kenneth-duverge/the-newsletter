import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {SignOutButton, useUser } from "@clerk/clerk-react";

export const UserButton = () => {
  const user = useUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user.user?.imageUrl} alt="@shadcn"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><SignOutButton>Sign Out</SignOutButton></DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}