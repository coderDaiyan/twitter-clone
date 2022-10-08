import {
  BellIcon,
  BookmarkIcon,
  DocumentTextIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col col-span-2 px-4 md:items-start">
      <img
        className="h-10 w-10 m-3"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={BookmarkIcon} title="Bookmarks" />
      <SidebarRow Icon={DocumentTextIcon} title="Lists" />
      <SidebarRow
        Icon={UserIcon}
        title={session ? `Sign Out` : `Sign In`}
        onClick={session ? signOut : signIn}
      />
      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
};

export default Sidebar;
