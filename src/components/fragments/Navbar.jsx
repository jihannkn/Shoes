import NavLink from "../elements/NavLink";
import ButtonPrimary from "../elements/ButtonPrimary";
import NavMessage from "../elements/NavMessage";
import NavNotif from "../elements/NavNotif";
import NavProfile from "../elements/NavProfile";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-2.5 pr-0">
            <div className="flex items-center gap-8 p-2.5 pl-6 border-l-2 border-gray-500 text-sm">
                <NavLink label="Products" />
                <NavLink label="Selected" className="text-gray-500" />
            </div>
            <div className="flex items-center gap-6 p-2.5">
                <ButtonPrimary />
                <NavMessage />
                <NavNotif />
                <NavProfile />
            </div>
        </nav>
    )
}