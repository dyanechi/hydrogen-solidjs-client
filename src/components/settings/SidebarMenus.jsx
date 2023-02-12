import { NavLink } from "solid-app-router";
import { RiSystemSettings5Fill, RiLogoMessengerFill } from "solid-icons/ri";
import { FaSolidUserFriends } from "solid-icons/fa";
import { Si1password } from "solid-icons/si";
import { FaSolidUsers } from "solid-icons/fa";
import { BsFilePost } from "solid-icons/bs";
import { BiCurrentLocation } from "solid-icons/bi";
import { BsActivity } from "solid-icons/bs";
import { AiFillDelete } from 'solid-icons/ai'

import { For } from "solid-js";
export default function SidebarMenus() {
  return (
    <ul className="h-[90%] px-2 py-4 flex flex-col space-y-2">
      <For each={menus}>
        {(menu) => (
          <li>
            <NavLink
              href={menu.href}
              className="flex items-center justify-between  py-2 px-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              end={menu.end}
              activeClass="bg-gray-100 dark:bg-gray-700"
            >
              <div className="flex items-center space-x-3">
                <div className="flex place-items-center p-2 bg-purple-500 rounded-full text-white text-xl">
                  {menu.icon()}
                </div>
                <p>{menu.name}</p>
              </div>
            </NavLink>
          </li>
        )}
      </For>
    </ul>
  );
}

const menus = [
  {
    name: "General",
    icon: () => <RiSystemSettings5Fill />,
    href: "general_settings",
    end: true,
  },
  {
    name: "Change Password",
    icon: () => <Si1password />,
    href: "change_password",
    end: false,
  },
  {
    name: "Login History",
    icon: () => <BsActivity />,
    href: "login_history",
    end: false,
  },
  {
    name: "Delete Account",
    icon: () => <AiFillDelete />,
    href: "delete_account",
    end: false,
  },
];
