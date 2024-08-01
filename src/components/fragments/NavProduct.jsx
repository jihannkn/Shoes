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