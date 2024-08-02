import { FaPlus } from "react-icons/fa6";

const ButtonPrimary = () => {
    return (
        <button className="px-4 py-2.5 rounded-lg bg-blue-600 text-white font-poppins flex items-center">
            <FaPlus className="fa-solid fa-plus mr-1" /> Order
        </button>
    )
}

export default ButtonPrimary;