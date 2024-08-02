import Aside from "../fragments/Aside";
import Hero from "../fragments/Hero";
import Navbar from "../fragments/Navbar";

/* eslint-disable react/prop-types */

export default function HomeLayout() {
    return (
        <div className='flex w-full min-h-screen max-h-screen overflow-hidden bg-[#eaedff]'>
            <div className=''>
                <Aside />
            </div>
            <div className='flex flex-col gap-5 w-full'>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Hero />
                </div>
            </div>
        </div>
    )
}