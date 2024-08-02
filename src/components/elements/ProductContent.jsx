/* eslint-disable react/prop-types */
// export default function ProductContent() {
//     return(
//         <div className="card">
//     <div className="img  bg-lime-600 flex items-center justify-center rounded-[10px]">
//         <img src={image1} alt="" className=" w-[110px] py-[30px]"/>
//     </div>
//     <div className="product">
//         <h1 className="font-extrabold">Nike Air</h1>
//         <div className="range flex items-center gap-[10px]">
//             <p className="text-pink-600">$149.00</p>
//             <p className="line-through">$199.00</p>
//         </div>
//         <div className="flex items-center gap-[10px]">
//             <button className="border-2 border-sky-500 px-[5px] rounded-[20px]">colors</button>
//             <ul className="flex gap-[5px]">
//                 <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
//                 <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
//                 <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
//                 <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
//             </ul>
//         </div>
//     </div>
// </div>
//     )
// }

const ProductContent =({children})=>{
    return(
        <div className="card">
            {children}
    </div>
    )
}

const  Image =({image})=>{
    return(
        <div className="img  bg-lime-600 flex items-center justify-center rounded-[10px]">
        <img src={image} alt="" className=" w-[110px] py-[30px]"/>
    </div>
    )
}

const Descripsion =({title, price, discon})=>{
    return(
        <div className="">
        <h1 className="font-extrabold">{title}</h1>
        <div className="range flex items-center gap-[10px]">
            <p className="text-pink-600">{price}</p>
            <p className="line-through">{discon}</p>
        </div>
        </div>
    )
}
const color =({col})=>{
    return(
        <div className="flex items-center gap-[10px]">
            <button className="border-2 border-sky-500 px-[5px] rounded-[20px]">colors</button>
            <ul className="flex gap-[5px]">
                <li className={`w-[15px] h-[15px] rounded-[50px] bg-lime-600 ${col}`}></li>
                <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
                <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
                <li className="w-[15px] h-[15px] rounded-[50px] bg-lime-600"></li>
            </ul>
        </div>
    )
}

ProductContent.Image = Image
ProductContent.Descripsion = Descripsion
ProductContent.color = color


export default ProductContent