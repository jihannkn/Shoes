import { FaHouse } from "react-icons/fa6";



export default function Aside() {
    return (
        <aside className="w-[8%] h-screen pt-[10px] pr-[15px] pb-[15px] pl-[20px] flex flex-col items-center text-[#4d4f57] relative">
          <div className="logo text-[25px]">
            <h1 className="text-[#f8990e]">P<span className="text-black">J</span></h1>
          </div>
          <div className="bar mt-9 flex flex-col items-center gap-3.5">
            <div className="choose flex flex-col items-center justify-center gap-1 text-[12px]">
              <FaHouse className="text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full" />
              <p>Home</p>
            </div>
            <div className="choose flex flex-col items-center gap-1 text-[12px]">
              <i className="fa-regular fa-gem text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full"></i>
              <p>Products</p>
            </div>
            <div className="choose flex flex-col items-center gap-1 text-[12px]">
              <i className="fa-regular fa-circle-user text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full"></i>
              <p>Customers</p>
            </div>
            <div className="choose flex flex-col items-center gap-1 text-[12px]">
              <i className="fa-solid fa-store text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full"></i>
              <p>Shop</p>
            </div>
            <div className="choose flex flex-col items-center gap-1 text-[12px]">
              <i className="fa-solid fa-percent text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full"></i>
              <p>Promote</p>
            </div>
          </div>
          <div className="help pb-7 flex flex-col items-center gap-1 text-[12px] absolute bottom-0">
            <i className="fa-regular fa-circle-question text-[14px] w-[30px] h-[30px] flex justify-center items-center hover:bg-[#0079ff] hover:text-white hover:rounded-full"></i>
            <p>Help</p>
          </div>
        </aside>
    )
}