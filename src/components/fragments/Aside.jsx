import { FaCircleQuestion, FaCircleUser, FaGem, FaHouse, FaPercent, FaStore } from "react-icons/fa6";
import AsideLink from "../elements/AsideLink";

export default function Aside() {
    return (
        <aside className="h-screen pt-[10px] pr-[15px] pb-[15px] pl-[20px] flex flex-col items-center text-[#4d4f57] relative">
            <div className="logo text-[25px]">
                <h1 className="text-[#f8990e] text-[35px] font-semibold">
                    P<span className="text-black">J</span>
                </h1>
            </div>
            <div className="bar mt-9 flex flex-col items-center gap-3.5">
                <AsideLink>
                    <FaHouse className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Home</p>
                </AsideLink>
                <AsideLink>
                    <FaGem className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Products</p>
                </AsideLink>
                <AsideLink>
                    <FaCircleUser className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Customers</p>
                </AsideLink>
                <AsideLink>
                    <FaStore className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Shop</p>
                </AsideLink>
                <AsideLink>
                    <FaPercent className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Promote</p>
                </AsideLink>
            </div>
            <div className="help pb-7 flex flex-col items-center gap-1 text-[12px] absolute bottom-0">
                <AsideLink>
                    <FaCircleQuestion className="text-[30px] p-1.5 flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
                    <p>Help</p>
                </AsideLink>
            </div>
        </aside>
    )
}