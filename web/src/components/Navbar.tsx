import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="px-8 py-4 flex flex-row gap-8 justify-between items-center">
      <h1 className="font-bold">Minecraft Console</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <Link to="/">
            <NavigationMenuItem className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition duration-150">
              <NavigationMenuLink>Dashboard</NavigationMenuLink>
            </NavigationMenuItem>
          </Link>
          <Link to="/console">
            <NavigationMenuItem className="hover:bg-gray-100 px-4 py-1 rounded cursor-pointer transition duration-150">
              <NavigationMenuLink>Console</NavigationMenuLink>
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
