import Aside from "../fragments/Aside";
import Hero from "../fragments/Hero";
import Navbar from "../fragments/Navbar";

/* eslint-disable react/prop-types */
export default function HomeLayout({ children }) {
    return (
        <div className='flex w-full min-h-screen max-h-screen overflow-hidden'>
            <div className=''>
                <Aside />
            </div>
            <div className='w-[92%] h-screen'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Hero />
                </div>
                <div className='overflow-y-auto'>
                    {children}
                </div>
            </div>
        </div>
    )
}