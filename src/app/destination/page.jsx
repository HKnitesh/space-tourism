'use client'
import { useState } from "react";
import Nav from "../components/Nav";
import Image from "next/image";

const data =
    [
        {
            "name": "MOON",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/destination/image-moon_eyxiwa.png',
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 KM",
            "travel": "3 DAYS"
        },
        {
            "name": "MARS",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/destination/image-mars_ydn7jh.png',
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 MIL. KM",
            "travel": "9 MONTHS"
        },
        {
            "name": "EUROPA",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/destination/image-europa_gi1vwf.png',
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 BIL. KM",
            "travel": "3 YEARS"
        },
        {
            "name": "TITAN",
            "images": 'https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431529/spaceturism_assets/destination/image-titan_mmqbug.png',
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 BIL. KM",
            "travel": "7 YEARS"
        }
    ]


export default function Destination() {


    const [moon, setMoon] = useState(true);
    const [mars, setMars] = useState(false);
    const [europa, setEuropa] = useState(false);
    const [titan, setTitan] = useState(false);

    const Moon = () => {
        setMoon(true);
        setMars(false);
        setEuropa(false);
        setTitan(false);
    }
    const Mars = () => {
        setMoon(false);
        setMars(true);
        setEuropa(false);
        setTitan(false);
    }
    const Europa = () => {
        setMoon(false);
        setMars(false);
        setEuropa(true);
        setTitan(false);
    }
    const Titan = () => {
        setMoon(false);
        setMars(false);
        setEuropa(false);
        setTitan(true);
    }

   

    return (
        <div className="flex flex-col bgi destination_bg">
            <Nav/>
            <div className="center flex-col lg:mx-40 lg:mt-16 md:mt-7 mt-5 text-white  md:items-start ">
                <h3 className="heading-01 md:ml-8 lg:ml-0">
                    <span className="font-bold opacity-25">01</span>
                    <span>PICK YOUR DESTINATION</span>
                </h3>

                {/* main */}
                <div className="center lg:flex-row flex-col md:mt-10 mt-5 lg:gap-48 md:gap-10 gap-5">
                    {/* planet images */}
                    {moon ? <Image
                        src={data[0].images}
                        height={445}
                        width={445}
                        className="planet"
                        alt={data[0].name}
                    /> : null}

                    {mars ? <Image
                        src={data[1].images}
                        height={445}
                        width={445}
                        className="planet"
                        alt={data[1].name}
                    /> : null}

                    {europa ? <Image
                        src={data[2].images}
                        height={445}
                        width={445}
                        className="planet"
                        alt={data[2].name}
                    /> : null}

                    {titan ? <Image
                        src={data[3].images}
                        height={445}
                        width={445}
                        className="planet"
                        alt={data[3].name}
                    /> : null}

                    {/* button's */}
                    <div className="flex-col lg:justify-start lg:items-start center lg:gap-6 md:gap-8 gap-5">
                        <div className="center flex-row gap-5 font-Barlow md:text-base font-normal md:tracking-sm text-sm tracking-2xm text-new_gray ">

                            {/* moon */}
                            <button className="flex flex-col lg:gap-2 gap-1"
                                onClick={Moon}
                            >
                                {moon ? <p className="text-white">{data[0].name}</p> : <p >{data[0].name}</p>}
                                {moon ? <div className=" bottom-0 shrink-0 h-[3px] bg-white md:w-8 w-7"></div> : null}
                            </button>

                            {/* mars */}
                            <button className="flex flex-col lg:gap-2 gap-1"
                                onClick={Mars}
                            >
                                {mars ? <p className="text-white" >{data[1].name}</p> : <p >{data[1].name}</p>}
                                {mars ? <div className=" bottom-0 shrink-0 h-[3px] bg-white md:w-8 w-7"></div> : null}
                            </button>

                            {/* europa */}
                            <button className="flex flex-col lg:gap-2 gap-1"
                                onClick={Europa}
                            >
                                {europa ? <p className="text-white" >{data[2].name}</p> : <p >{data[2].name}</p>}
                                {europa ? <div className=" bottom-0 shrink-0 h-[3px] bg-white md:w-11 w-10"></div> : null}
                            </button>

                            {/* titan */}
                            <button className="flex flex-col lg:gap-2 gap-1"
                                onClick={Titan}
                            >
                                {titan ? <p className="text-white" >{data[3].name}</p> : <p >{data[3].name}</p>}
                                {titan ? <div className=" bottom-0 shrink-0 h-[3px] bg-white md:w-8 w-7"></div> : null}
                            </button>



                        </div>
                        {/* moon detail */}
                        {moon ? <>
                            <h1 className=" font-Bellefair font-normal lg:text-8xl md:text-[80px] text-6xl">
                                {data[0].name}
                            </h1>

                            <p className=" text-new_gray font-Barlow font-normal md:text-lg text-base lg:text-left w-[70%] text-center">
                                {data[0].description}
                            </p>

                            <div className="flex flex-col md:gap-2.5 gap-5 lg:mt-5 w-[70%]">
                                <div className=" shrink-0 h-0 border-bg_line border border-solid w-full "></div>
                                <div className=" center  lg:justify-start md:flex-row flex-col md:gap-20 gap-8 text-white lg:mt-3 md:mt-5">
                                    {/* distance */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            AVG. DISTANCE
                                        </p>
                                        <h4 className=" font-Bellefair font-normal text-2.5xl">
                                            {data[0].distance}
                                        </h4>
                                    </div>
                                    {/* time */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            EST. TRAVEL TIME
                                        </p>
                                        <h4 className=" font-Bellefair font-normal text-2.5xl">
                                            {data[0].travel}
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </> : null}

                        {/* mars detail */}
                        {mars ? <>
                            <h1 className=" font-Bellefair font-normal lg:text-8xl md:text-[80px] text-6xl">
                                {data[1].name}
                            </h1>

                            <p className=" text-new_gray font-Barlow font-normal md:text-lg text-base lg:text-left w-[70%] text-center">
                                {data[1].description}
                            </p>

                            <div className="flex flex-col md:gap-2.5 gap-5 lg:mt-5 w-[70%]">
                                <div className=" shrink-0 h-0 border-bg_line border border-solid w-full "></div>
                                <div className=" center  lg:justify-start md:flex-row flex-col md:gap-20 gap-8 text-white lg:mt-3 md:mt-5">
                                    {/* distance */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            AVG. DISTANCE
                                        </p>
                                        <h4 className="font-Bellefair font-normal text-2.5xl">
                                            {data[1].distance}
                                        </h4>
                                    </div>
                                    {/* time */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            EST. TRAVEL TIME
                                        </p>
                                        <h4 className="font-Bellefair font-normal text-2.5xl">
                                            {data[1].travel}
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </> : null}

                        {/* europa detail */}
                        {europa ? <>
                            <h1 className=" font-Bellefair font-normal lg:text-8xl md:text-[80px] text-6xl">
                                {data[2].name}
                            </h1>

                            <p className=" text-new_gray font-Barlow font-normal md:text-lg text-base lg:text-left w-[70%] text-center">
                                {data[2].description}
                            </p>

                            <div className="flex flex-col md:gap-2.5 gap-5 lg:mt-5 w-[70%]">
                                <div className=" shrink-0 h-0 border-bg_line border border-solid w-full "></div>
                                <div className=" center  lg:justify-start md:flex-row flex-col md:gap-20 gap-8 text-white lg:mt-3 md:mt-5">
                                    {/* distance */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            AVG. DISTANCE
                                        </p>
                                        <h4 className=" font-Bellefair font-normal text-2.5xl">
                                            {data[2].distance}
                                        </h4>
                                    </div>
                                    {/* time */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            EST. TRAVEL TIME
                                        </p>
                                        <h4 className=" font-Bellefair font-normal text-2.5xl">
                                            {data[2].travel}
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </> : null}

                        {/* titan detail */}
                        {titan ? <>
                            <h1 className=" font-Bellefair font-normal lg:text-8xl md:text-[80px] text-6xl">
                                {data[3].name}
                            </h1>

                            <p className=" text-new_gray font-Barlow font-normal md:text-lg text-base lg:text-left w-[70%] text-center">
                                {data[3].description}
                            </p>

                            <div className="flex flex-col md:gap-2.5 gap-5 lg:mt-5 w-[70%]">
                                <div className=" shrink-0 h-0 border-bg_line border border-solid w-full "></div>
                                <div className=" center  lg:justify-start md:flex-row flex-col md:gap-20 gap-8 text-white lg:mt-3 md:mt-5">
                                    {/* distance */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            AVG. DISTANCE
                                        </p>
                                        <h4 className="font-Bellefair font-normal text-2.5xl">
                                            {data[3].distance}
                                        </h4>
                                    </div>
                                    {/* time */}
                                    <div className="center flex-col gap-2 lg:items-start">
                                        <p className=" text-new_gray font-normal font-Barlow tracking-2xm text-sm">
                                            EST. TRAVEL TIME
                                        </p>
                                        <h4 className=" font-Bellefair font-normal text-2.5xl">
                                            {data[3].travel}
                                        </h4>
                                    </div>

                                </div>
                            </div>
                        </> : null}

                    </div>

                </div>
            </div>

        </div>
    );
}