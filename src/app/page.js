import Nav from "./components/Nav"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col bgi h-screen text-new_cream home_bg">
      <Nav />
      <div className="flex lg:flex-row flex-col justify-between font-Barlow items-center lg:mx-40 lg:mt-40 md:mt-28 mt-12">
        {/* home information */}
        <div className="flex flex-col text-new_gray justify-center lg:items-start items-center lg:gap-6 md:gap5 gap-4">
          <h3 className=" font-normal lg:text-2.5xl  lg:tracking-xl md:text-xl md:tracking-md text-base tracking-sm">
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1 className="text-white font-Bellefair font-normal md:text-10xl text-7.5xl md:leading-[150px] leading-[100px]">
            SPACE
          </h1>
          <p className="font-normal lg:text-lg  lg:leading-8 md:text-base md:leading-7 text-[15px] tracking-wider leading-6 lg:w-[36%] lg:mx-0 md:mx-40 mx-10 lg:text-left text-center">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on
            the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </p>
        </div>
        <Link href='/destination'
          className="big_btn"
        >
          <span className="">
            EXPLORE
          </span>
        </Link>

      </div>
    </main>
  )
}
