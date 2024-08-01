import { FaHouse } from "react-icons/fa6";
import image1 from '../public/assets/images/image1.png';

export default function App() {
  return (
    <div>
      <section className="flex font-poppins bg-[#eaedff]">
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
        <main className="w-[92%] h-screen">
          <nav className="flex justify-between items-center p-2.5 pr-0">
            <div className="flex items-center gap-8 p-2.5 pl-6 border-l-2 border-gray-500 text-sm">
              <p>Products</p>
              <p className="text-gray-500">Selected</p>
            </div>
            <div className="flex items-center gap-6 p-2.5">
              <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-poppins">
                <i className="fa-solid fa-plus mr-1"></i> Order
              </button>
              <i className="fa-regular fa-message"></i>
              <i className="fa-regular fa-bell"></i>
              <i className="fa-solid fa-user w-8 h-8 flex justify-center items-center rounded-full border border-black"></i>
            </div>
          </nav>
          <header className="h-[85vh] p-[15px] px-[25px] mr-[12px] rounded-[10px] bg-white">
            <div className="flex justify-between items-start">
              <div className="w-[70%] h-[38vh] flex justify-between relative bg-[#f5d661] rounded-[15px]">
                <div className="lep">
                  <div className="absolute mt-[7px] ml-[15px] text-[25px]">
                    <h1>Explore New</h1>
                  </div>
                  <div className="w-[22%] p-[10px] bg-white rounded-[10px] absolute mt-[75px] ml-[15px]">
                    <h3 className="text-[12px]">Air Spain</h3>
                    <p className="mt-[4px] text-[11px] text-red-500">
                      $149.00 <span className="text-black line-through">$199.00</span>
                    </p>
                    <div className="mt-[10px] flex items-center gap-[40px]">
                      <button className="py-[2px] px-[9px] rounded-[20px] border-none font-poppins text-[8px] bg-[#d0e0ff] text-[#356aa5] cursor-pointer">
                        Colors
                      </button>
                      <div className="flex gap-[7px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex absolute bottom-0 text-[13px]">
                    <p className="py-[8px] px-[20px] text-white text-[11px] bg-[#ef6000] rounded-bl-[15px] rounded-tr-[15px] z-[9]">
                      NEW
                    </p>
                    <p className="py-[8px] px-[20px] text-white text-[11px] bg-[#0079ff] rounded-tr-[15px] -ml-[12px]">
                      HOT
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <img src={image1} alt="" className="absolute w-[340px] right-0 mr-[80px] rotate-[-9deg]"
                  />
                  <h1 className="absolute bottom-0 right-0 text-[35px] rotate-[-30deg] mb-[10px]">
                    10k+
                  </h1>
                </div>
              </div>
              <div className="w-[26%] h-[40vh] p-[13px] flex justify-between bg-[#c8ecd8] rounded-[15px] border-0 text-[12px]">
                <div className="graf1">
                  <div className="w-[80%] h-[3.8vh] mt-[8px] bg-[#cabcff] rounded-[3px]"></div>
                  <div className="mt-[10px] flex flex-col gap-[8.5px]">
                    <p>30</p>
                    <p>25</p>
                    <p>20</p>
                    <p>15</p>
                    <p>10</p>
                    <p>5</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center gap-[55px]">
                    <p>Product Views</p>
                    <select className="p-[7px] bg-transparent border-[1.8px] border-white rounded-[13px] outline-none text-[12px]">
                      <option value="">Last 7 days</option>
                      <option value="">1</option>
                      <option value="">2</option>
                    </select>
                  </div>
                  <div className="h-[30vh] flex justify-end items-end gap-[22px]">
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[20.7vh] bg-[#8983ff]"></div>
                      <p>22</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[16vh] bg-[#ffbe9a]"></div>
                      <p>23</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[24vh] bg-[#3185fc]"></div>
                      <p>24</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[13vh] bg-[#8983ff]"></div>
                      <p>25</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[19vh] bg-[#8983ff]"></div>
                      <p>26</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[10.6vh] bg-[#ffbe9a]"></div>
                      <p>27</p>
                    </div>
                    <div className="flex flex-col justify-center items-end gap-[8px]">
                      <div className="w-full h-[17.6vh] bg-[#abd4bf]"></div>
                      <p>28</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[8px] flex justify-between">
              <div className="w-[75%] h-[40vh]">
                <div className="flex justify-between items-center text-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="flex items-center gap-[8px] before:content-[''] before:inline-block before:w-[10px] before:h-[22px] before:relative before:bg-[#80e199] before:rounded-[2px]">
                      Recent Products
                    </p>
                  </div>
                  <div className="flex items-center gap-[13px]">
                    <select className="p-[7px] bg-transparent border-[1.3px] border-[#bdbcbc] rounded-[5px] outline-none text-[12px] font-poppins">
                      <option value="">Last 7 days</option>
                      <option value="">Last 30 days</option>
                      <option value="">Last 90 days</option>
                    </select>
                    <button className="p-[7px] px-[15px] bg-[#0079ff] text-white rounded-[5px] border-none text-[12px] font-poppins cursor-pointer">
                      New Post
                    </button>
                  </div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <div className="cardd w-1/5 h-[33vh]">
                    <div className="relative h-[18vh] rounded-[17px] overflow-hidden">
                      <img src={image1} alt="" className="absolute left-5 w-4/5 bg-[#7de399]" />
                    </div>
                    <div className="h-[15vh] p-3">
                      <h3 className="text-xs">Nike air</h3>
                      <p className="mt-1 text-xs text-red-500">
                        $180.00 <span className="ml-2 text-black line-through">$289,00</span>
                      </p>
                      <div className="mt-2 flex items-center gap-10">
                        <button className="px-2 py-1 rounded-full border-none bg-[#d0e0ff] text-[#356aa5] text-xs cursor-pointer">Colors</button>
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-black"></div>
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mr-20 flex flex-col items-start gap-5 text-xs">
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#b9e3cb]">
                          <i className="fa-regular fa-circle-user text-lg"></i>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <p>People reached</p>
                          <i className="fa-solid fa-circle-info text-sm"></i>
                        </div>
                      </div>
                      <h1 className="mt-1 text-lg">256k</h1>
                      <div className="mt-1">
                        <div className="flex items-center">
                          <p className="text-xs text-green-500 flex items-center gap-1">
                            <i className="fa-solid fa-arrow-up"></i> 37.8%
                            <span className="text-black ml-1">this week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#c8bdfe] rotate-[-90deg]">
                          <i className="fa-solid fa-right-left text-lg"></i>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <p>Engagement</p>
                          <i className="fa-solid fa-circle-info text-sm"></i>
                        </div>
                      </div>
                      <h1 className="mt-1 text-lg">1.2x</h1>
                      <div className="mt-1">
                        <div className="flex items-center">
                          <p className="text-xs text-green-500 flex items-center gap-1">
                            <i className="fa-solid fa-arrow-up"></i> 37.8%
                            <span className="text-black ml-1">this week</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </main>
      </section>
    </div>
  )
}