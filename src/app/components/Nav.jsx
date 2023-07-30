'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";

export default function Nav() {
    const [underline00, setUnderline00] = useState(false);
    const [active00, setActive00] = useState(false);

    const [underline01, setUnderline01] = useState(false);
    const [active01, setActive01] = useState(false);

    const [underline02, setUnderline02] = useState(false);
    const [active02, setActive02] = useState(false);

    const [underline03, setUnderline03] = useState(false);
    const [active03, setActive03] = useState(false);

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="flex flex-row md:ml-10 mt-8 ml-6 items-center justify-between">
                <Image

                    src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690522320/spaceturism_assets/Group_2_Copy_ghejw3.svg'
                    height={48}
                    width={48}
                    alt="star-icon"
                    className=" w-10 h-10 md:w-12 md:h-12 "
                />
                <div className="flex flex-row items-center">

                    <div className=" shrink-0 lg:w-[425px] left-40 absolute hidden lg:flex h-0 border-white border border-solid opacity-25 z-10"></div>
                    {/* desktop */}
                    <div className="hidden md:flex md:flex-row flex-col lg:w-[900px] md:w-[450px] md:h-24 shrink-0 bg-white/[0.04] z-0 backdrop-blur-2xl center text-white lg:gap-12 md:gap-5">
                        <Link
                            href='/'
                            className=" nav_link"
                            onMouseOver={() => { setUnderline00(true) }}
                            onMouseOut={() => { setUnderline00(false) }}
                            onClick={() => { setActive00(!active00) }}
                        >
                            <span className="block lg:block md:hidden font-bold">00</span>
                            <span>HOME</span>
                            {underline00 ? <div className="hover md:w-11 lg:w-20 opacity-50"></div> : null}
                            {active00 ? <div className="hover md:w-11 lg:w-20"></div> : null}
                        </Link>

                        <Link
                            href='/destination'
                            className=" nav_link"
                            onMouseOver={() => { setUnderline01(true) }}
                            onMouseOut={() => { setUnderline01(false) }}
                            onClick={() => { setActive01(!active01) }}
                        >
                            <span className="block lg:block md:hidden font-bold">01</span>
                            <span>DESTINATION</span>
                            {underline01 ? <div className="hover md:w-24 lg:w-32 opacity-50"></div> : null}
                            {active01 ? <div className="hover md:w-24 lg:w-32"></div> : null}

                        </Link>
                        <Link
                            href='/crew'
                            className=" nav_link"
                            onMouseOver={() => { setUnderline02(true) }}
                            onMouseOut={() => { setUnderline02(false) }}
                            onClick={() => { setActive02(!active02) }}
                        >
                            <span className="block lg:block md:hidden font-bold">02</span>
                            <span>CREW</span>
                            {underline02 ? <div className="hover md:w-10 lg:w-[72px] opacity-50"></div> : null}
                            {active02 ? <div className="hover md:w-10 lg:w-[72px]"></div> : null}
                        </Link>
                        <Link
                            href='/technology'
                            className=" nav_link"
                            onMouseOver={() => { setUnderline03(true) }}
                            onMouseOut={() => { setUnderline03(false) }}
                            onClick={() => { setActive03(!active03) }}
                        >
                            <span className="block lg:block md:hidden font-bold">03</span>
                            <span>TECHNOLOGY</span>
                            {underline03 ? <div className="hover md:w-24 lg:w-32 opacity-50"></div> : null}
                            {active03 ? <div className="hover md:w-24 lg:w-32"></div> : null}
                        </Link>
                    </div>
                </div>
                <div class="md:hidden items-center mr-6 text-new_gray" onClick={() => { setToggle(true) }}>

                    <LiaBarsSolid className="w-8 h-8 font-extrabold" />
                </div>


            </div>
            {/* mobile responsiveness */}
            {
                toggle ? <div className="flex flex-row w-[250px] pt-8  h-screen  bg-white/[0.04] z-10 backdrop-blur-2xl text-white absolute top-0 right-0">
                    <div className="flex justify-end w-full mr-8 ">

                        <RxCross2 className="w-8 h-8 shrink-0 text-new_gray" onClick={() => { setToggle(false) }} />
                    </div>
                    <div className="flex flex-col gap-8 items-start justify-start top-36 absolute ml-10 w-[210px]">
                        <Link
                            href='/'
                            className=" nav_link relative w-full justify-start "
                            onMouseOver={() => { setUnderline00(true) }}
                            onMouseOut={() => { setUnderline00(false) }}
                        >
                            <span className="block lg:block md:hidden font-bold">00</span>
                            <span>HOME</span>
                            {underline00 ? <div className=" shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
                        </Link>
                        {/* <div className="flex text-green-700">hare krishna</div>
                            hi */}
                        <Link
                            href='/destination'
                            className=" nav_link relative w-full justify-start "
                            onMouseOver={() => { setUnderline01(true) }}
                            onMouseOut={() => { setUnderline01(false) }}
                        >
                            <span className="block lg:block md:hidden font-bold">01</span>
                            <span>DESTINATION</span>
                            {underline01 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
                        </Link>
                        <Link
                            href='/crew'
                            className=" nav_link relative w-full justify-start "
                            onMouseOver={() => { setUnderline02(true) }}
                            onMouseOut={() => { setUnderline02(false) }}
                        >
                            <span className="block lg:block md:hidden font-bold">02</span>
                            <span>CREW</span>
                            {underline02 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
                        </Link>
                        <Link
                            href='/technology'
                            className=" nav_link relative w-full justify-start "
                            onMouseOver={() => { setUnderline03(true) }}
                            onMouseOut={() => { setUnderline03(false) }}
                        >
                            <span className="block lg:block md:hidden font-bold">03</span>
                            <span>TECHNOLOGY</span>
                            {underline03 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
                        </Link>
                    </div>
                </div> : null
            }
        </>
    );
}





// 'use client'
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { LiaBarsSolid } from "react-icons/lia";
// import { RxCross2 } from "react-icons/rx";

// export default function Nav(props) {
//     const [underline00, setUnderline00] = useState(false);
//     const [underline01, setUnderline01] = useState(false);
//     const [underline02, setUnderline02] = useState(false);
//     const [underline03, setUnderline03] = useState(false);
    

//     const [home, setHome] = useState(true);
//     const [destination, setDestination] = useState(false);
//     const [crew, setCrew] = useState(false);
//     const [technology, setTechnology] = useState(false);

//     const [toggle, setToggle] = useState(false)

//     const Home = () => {
//         setHome(true);
//         setDestination(false);
//         setCrew(false);
//         setTechnology(false);

//     }
//     const Destination = () => {
//         setHome(false);
//         setDestination(true);
//         setCrew(false);
//         setTechnology(false);
//     }
//     const Crew = () => {
//         setHome(false);
//         setDestination(false);
//         setCrew(true);
//         setTechnology(false);
//     }
//     const Technology = () => {
//         setHome(false);
//         setDestination(false);
//         setCrew(false);
//         setTechnology(true);
//     }

//     return (
//         <>
//             <div className="flex flex-row md:ml-10 mt-8 ml-6 items-center justify-between">
//                 <Image

//                     src='https://res.cloudinary.com/drw8eqw3i/image/upload/v1690522320/spaceturism_assets/Group_2_Copy_ghejw3.svg'
//                     height={48}
//                     width={48}
//                     alt="star-icon"
//                     className=" w-10 h-10 md:w-12 md:h-12 "
//                 />
//                 <div className="flex flex-row items-center">

//                     <div className=" shrink-0 lg:w-[525px] left-40 absolute hidden lg:flex h-0 border-white border border-solid opacity-25 z-10"></div>
//                     {/* desktop */}
//                     <div className="hidden md:flex md:flex-row flex-col lg:w-[900px] md:w-[450px] md:h-24 shrink-0 bg-white/[0.04] z-0 backdrop-blur-2xl center text-white lg:gap-12 md:gap-5">
//                         <button onClick={Home}>
//                             <Link
//                                 href='/'
//                                 className=" nav_link"
//                                 onMouseOver={() => { setUnderline00(true) }}
//                                 onMouseOut={() => { setUnderline00(false) }}

//                             >
//                                 <span className="block lg:block md:hidden font-bold">00</span>
//                                 <span>HOME</span>
//                                 {underline00 ? <div className="hover md:w-11 lg:w-20 opacity-50"></div> : null}
//                                 {home ? <div className="hover md:w-11 lg:w-20"></div> : null}
//                             </Link>
//                         </button>

//                         <button onClick={Destination}>
//                             <Link
//                                 href='/destination'
//                                 className=" nav_link"
//                                 onMouseOver={() => { setUnderline01(true) }}
//                                 onMouseOut={() => { setUnderline01(false) }}
//                             // onClick={Destination}
//                             >
//                                 <span className="block lg:block md:hidden font-bold">01</span>
//                                 <span>DESTINATION</span>
//                                 {underline01 ? <div className="hover md:w-24 lg:w-32 opacity-50"></div> : null}
//                                 {destination ? <div className="hover md:w-24 lg:w-32"></div> : null}

//                             </Link>
//                         </button>

//                         <button onClick={Crew}>
//                             <Link
//                                 href='/crew'
//                                 className=" nav_link"
//                                 onMouseOver={() => { setUnderline02(true) }}
//                                 onMouseOut={() => { setUnderline02(false) }}
//                                 // onClick={Crew}
//                             >
//                                 <span className="block lg:block md:hidden font-bold">02</span>
//                                 <span>CREW</span>
//                                 {underline02 ? <div className="hover md:w-10 lg:w-[72px] opacity-50"></div> : null}
//                                 {crew ? <div className="hover md:w-10 lg:w-[72px]"></div> : null}
//                             </Link>
//                         </button>

//                         <button onClick={Technology}>
//                             <Link
//                                 href='/technology'
//                                 className=" nav_link"
//                                 onMouseOver={() => { setUnderline03(true) }}
//                                 onMouseOut={() => { setUnderline03(false) }}
//                                 // onClick={Technology}
//                             >
//                                 <span className="block lg:block md:hidden font-bold">03</span>
//                                 <span>TECHNOLOGY</span>
//                                 {underline03 ? <div className="hover md:w-24 lg:w-32 opacity-50"></div> : null}
//                                 {technology ? <div className="hover md:w-24 lg:w-32"></div> : null}
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//                 <div class="md:hidden items-center mr-6 text-new_gray" onClick={() => { setToggle(true) }}>

//                     <LiaBarsSolid className="w-8 h-8 font-extrabold" />
//                 </div>


//             </div>
//             {/* mobile responsiveness */}
//             {
//                 toggle ? <div className="flex flex-row w-[250px] pt-8  h-screen  bg-white/[0.04] z-10 backdrop-blur-2xl text-white absolute top-0 right-0">
//                     <div className="flex justify-end w-full mr-8 ">

//                         <RxCross2 className="w-8 h-8 shrink-0 text-new_gray" onClick={() => { setToggle(false) }} />
//                     </div>
//                     <div className="flex flex-col gap-8 items-start justify-start top-36 absolute ml-10 w-[210px]">
//                         <Link
//                             href='/'
//                             className=" nav_link relative w-full justify-start "
//                             onMouseOver={() => { setUnderline00(true) }}
//                             onMouseOut={() => { setUnderline00(false) }}
//                         >
//                             <span className="block lg:block md:hidden font-bold">00</span>
//                             <span>HOME</span>
//                             {underline00 ? <div className=" shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
//                         </Link>
//                         {/* <div className="flex text-green-700">hare krishna</div>
//                             hi */}
//                         <Link
//                             href='/destination'
//                             className=" nav_link relative w-full justify-start "
//                             onMouseOver={() => { setUnderline01(true) }}
//                             onMouseOut={() => { setUnderline01(false) }}
//                         >
//                             <span className="block lg:block md:hidden font-bold">01</span>
//                             <span>DESTINATION</span>
//                             {underline01 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
//                         </Link>
//                         <Link
//                             href='/crew'
//                             className=" nav_link relative w-full justify-start "
//                             onMouseOver={() => { setUnderline02(true) }}
//                             onMouseOut={() => { setUnderline02(false) }}
//                         >
//                             <span className="block lg:block md:hidden font-bold">02</span>
//                             <span>CREW</span>
//                             {underline02 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
//                         </Link>
//                         <Link
//                             href='/technology'
//                             className=" nav_link relative w-full justify-start "
//                             onMouseOver={() => { setUnderline03(true) }}
//                             onMouseOut={() => { setUnderline03(false) }}
//                         >
//                             <span className="block lg:block md:hidden font-bold">03</span>
//                             <span>TECHNOLOGY</span>
//                             {underline03 ? <div className="shrink-0 w-1 h-7 bg-white right-0 absolute"></div> : null}
//                         </Link>
//                     </div>
//                 </div> : null
//             }
//         </>
//     );
// }