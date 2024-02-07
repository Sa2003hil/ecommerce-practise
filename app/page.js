import Image from "next/image";
import { Cards } from "./components/Cards/Cards";
import Navbar from './components/Navbar/index'

export default function Home() {
  return (
    <>
      <div className=" flex flex-col  gap-12 justify-center m-auto">


        <div className="max-w-[1200px] m-auto p-28">
          <p className="font-semibold text-2xl">Popular Products</p>
          <div className=" flex  gap-3 items-center justify-center mb-10">
            <Cards />
            <Cards />
            <Cards />

          </div>
        </div>
      </div>
    </>
  );
}
