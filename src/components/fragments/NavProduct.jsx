<<<<<<< HEAD
const NavProduct = () => {
    return (
        <div className="flex items-center gap-8 p-2.5 pl-6 border-l-2 border-gray-500 text-sm">
            <p>Products</p>
            <p className="text-gray-500">Selected</p>
        </div>
    )
}

export default NavProduct
=======
import ProductUploadFilter from "../elements/ProductUploadFilter";

export default function NavProduct() {
    return (
        <div className="flex justify-between items-center text-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <p className="flex items-center gap-[8px] before:content-[''] before:inline-block before:w-[10px] before:h-[22px] before:relative before:bg-[#80e199] before:rounded-[2px]">
                      Recent Products
                    </p>
                  </div>
                  <div className="flex items-center gap-[13px]">
                    <ProductUploadFilter/>
                    <button className="p-[7px] px-[15px] bg-[#0079ff] text-white rounded-[5px] border-none text-[12px] font-poppins cursor-pointer">
                      New Post
                    </button>
                  </div>
                </div>
    )
}
>>>>>>> diki/main
