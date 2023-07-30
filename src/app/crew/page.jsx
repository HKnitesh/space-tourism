'use client'
import { useState } from "react";
import Nav from "../components/Nav";
import Image from "next/image";

const data =
    [
        {
            "name": "Douglas Hurley",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431527/spaceturism_assets/crew/image-douglas-hurley_uw567h.png',
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431528/spaceturism_assets/crew/image-mark-shuttleworth_bkjgst.png',
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431528/spaceturism_assets/crew/image-victor-glover_ywqh3y.png',
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431527/spaceturism_assets/crew/image-anousheh-ansari_jhbfgu.png',
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ]


export default function Crew() {


    const [commander, setCommander] = useState(true);
    const [specialist, setSpecialist] = useState(false);
    const [pilot, setPilot] = useState(false);
    const [engineer, setEngineer] = useState(false);

    const Commander = () => {
        setCommander(true);
        setSpecialist(false);
        setPilot(false);
        setEngineer(false);
    }
    const Specialist = () => {
        setCommander(false);
        setSpecialist(true);
        setPilot(false);
        setEngineer(false);
    }
    const Pilot = () => {
        setCommander(false);
        setSpecialist(false);
        setPilot(true);
        setEngineer(false);
    }
    const Engineer = () => {
        setCommander(false);
        setSpecialist(false);
        setPilot(false);
        setEngineer(true);
    }



    return (
        <div className="flex flex-col bgi crew_bg">
            <Nav />

            <div className="flex items-center md:relative flex-col lg:flex-row h-full lg:mx-40 md:mt-12 mt-5 text-white ">



                <div className="center flex-col md:justify-start md:items-start">
                    <h3 className="heading-01 md:ml-8 lg:ml-0 ">
                        <span className="font-bold opacity-25">02</span>
                        <span>MEET YOUR CREW</span>
                    </h3>

                    <div className="center flex-col font-Bellefair text-white font-normal lg:gap-4 md:gap-2 lg:my-32 lg:mb-0 md:mt-16 mt-6 lg:items-start md:items-center">

                        {/* commander */}
                        {commander ? <>
                            <h2 className=" opacity-50 lg:text-3xl md:text-2xl text-base uppercase">
                                {data[0].role}
                            </h2>

                            <h1 className="lg:text-6xl md:text-[40px] text-2xl leading-normal uppercase">
                                {data[0].name}
                            </h1>
                            <p className="text-new_gray tracking-wide font-Barlow lg:text-lg md:text-base text-sm leading-7 lg:w-5/12 lg:mx-0 md:mx-48 mx-10 text-center lg:text-left md:mt-2">
                                {data[0].bio}
                            </p>
                        </> : null}

                        {/* Mission Specialist */}
                        {specialist ? <>
                            <h2 className=" opacity-50 lg:text-3xl md:text-2xl text-base uppercase">
                                {data[1].role}
                            </h2>

                            <h1 className="lg:text-6xl md:text-[40px] text-2xl leading-normal uppercase">
                                {data[1].name}
                            </h1>
                            <p className="text-new_gray tracking-wide font-Barlow lg:text-lg md:text-base text-sm leading-7 lg:w-5/12 lg:mx-0 md:mx-48 mx-10 text-center lg:text-left md:mt-2">
                                {data[1].bio}
                            </p>
                        </> : null}

                        {/* pilot */}
                        {pilot ? <>
                            <h2 className=" opacity-50 lg:text-3xl md:text-2xl text-base uppercase">
                                {data[2].role}
                            </h2>

                            <h1 className="lg:text-6xl md:text-[40px] text-2xl leading-normal uppercase">
                                {data[2].name}
                            </h1>
                            <p className="text-new_gray tracking-wide font-Barlow lg:text-lg md:text-base text-sm leading-7 lg:w-5/12 lg:mx-0 md:mx-48 mx-10 text-center lg:text-left md:mt-2">
                                {data[2].bio}
                            </p>
                        </> : null}

                        {/* Flight Engineer */}
                        {engineer ? <>
                            <h2 className=" opacity-50 lg:text-3xl md:text-2xl text-base uppercase">
                                {data[3].role}
                            </h2>

                            <h1 className="lg:text-6xl md:text-[40px] text-2xl leading-normal uppercase">
                                {data[3].name}
                            </h1>
                            <p className="text-new_gray tracking-wide font-Barlow lg:text-lg md:text-base text-sm leading-7 lg:w-5/12 lg:mx-0 md:mx-48 mx-10 text-center lg:text-left md:mt-2">
                                {data[3].bio}
                            </p>
                        </> : null}

                        {/* buttons */}
                        <div className="flex flex-row lg:gap-8 gap-5 lg:mt-16 md:mt-8 mt-4 ">

                            {/* Specialist */}
                            <button onClick={Specialist}>
                                {specialist ?
                                    <div className="crew_btn bg-white outline-black/50"></div>
                                    : <div className="crew_btn bg-white/30 "></div>
                                }
                            </button>

                            {/* commander */}
                            <button onClick={Commander}>
                                {commander ?
                                    <div className="crew_btn bg-white outline-black/50"></div>
                                    : <div className="crew_btn bg-white/30 "></div>
                                }
                            </button>

                            {/* Pilot */}
                            <button onClick={Pilot}>
                                {pilot ?
                                    <div className="crew_btn bg-white outline-black/50"></div>
                                    : <div className="crew_btn bg-white/30 "></div>
                                }
                            </button>

                            {/* Engineer */}
                            <button onClick={Engineer}>
                                {engineer ?
                                    <div className="crew_btn bg-white outline-black/50"></div>
                                    : <div className="crew_btn bg-white/30 "></div>
                                }
                            </button>
                        </div>

                    </div>


                </div>

                {commander ? <Image
                    src={data[0].images}
                    height={50}
                    width={400}
                    className="shrink-0 absolute bottom-0 lg:right-0 md:w-[350px] w-[200px] "
                    alt={data[0].name}

                /> : null}
                {specialist ? <Image
                    src={data[1].images}
                    height={50}
                    width={400}
                    className="shrink-0 absolute bottom-0 lg:right-0 md:w-[300px] w-[150px] "
                    alt={data[1].name}

                /> : null}
                {pilot ? <Image
                    src={data[2].images}
                    height={50}
                    width={400}
                    className="shrink-0 absolute bottom-0 lg:right-0 md:w-[350px] w-[200px] "
                    alt={data[2].name}

                /> : null}
                {engineer ? <Image
                    src={data[3].images}
                    height={50}
                    width={400}
                    className="shrink-0 absolute bottom-0 lg:right-0 md:w-[350px] w-[200px] "
                    alt={data[3].name}

                /> : null}

            </div>

        </div>
    );
}