<<<<<<< HEAD
import MainLayout from "../components/layouts/MainLayout";

export default function Home() {
    return (
      <MainLayout>
          Home
      </MainLayout>
    )
  }
=======
import UserProduct from "../components/elements/UserProduct";
import NavProduct from "../components/fragments/NavProduct";
import PruductList from "../components/fragments/PruductList";

export default function Home() {
    return(
        <div className="mt-[8px] flex justify-between">
              <div className="w-[75%] h-[40vh]">
                <NavProduct />
                <div className="mt-2 flex justify-between items-center">
                  <PruductList className="w-full"/>
                </div>
              </div>
              <UserProduct/>
            </div>
    )
}
>>>>>>> diki/main
