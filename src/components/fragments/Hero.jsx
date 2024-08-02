import image1 from '../../../public/assets/images/image1.png';
// import PruductList from './PruductList'
// import UserProduct from '../elements/UserProduct'
import GraphCandle from '../elements/GraphCandle'
// import NavProduct from './NavProduct'
import Home from '../../pages/Home'




export default function Hero() {
    return (
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
                  <img src={image1} alt="" className="absolute w-[340px] right-0 mr-[80px] rotate-[-9deg]" />
                  <h1 className="absolute bottom-0 right-0 text-[35px] rotate-[-30deg] mb-[10px]">
                    10k+
                  </h1>
                </div>
              </div>
              <GraphCandle/>
            </div>
            <Home/>
          </header>
    )
}