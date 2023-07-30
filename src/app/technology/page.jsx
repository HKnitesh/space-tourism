'use client'
import { useState } from "react";
import Nav from "../components/Nav";
import Image from "next/image";

const data =
    [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-launch-vehicle-portrait_t3nh0f.jpg",
                "landscape": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-launch-vehicle-landscape_kyamnm.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-spaceport-portrait_bhi18v.jpg",
                "landscape": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-spaceport-landscape_zm7sor.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-space-capsule-portrait_p3wy2c.jpg",
                "landscape": "https://res.cloudinary.com/drw8eqw3i/image/upload/v1690431531/spaceturism_assets/technology/image-space-capsule-landscape_agrtky.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]



export default function Technology() {


    const [vehicle, setVehicle] = useState(true);
    const [spaceport, setSpaceport] = useState(false);
    const [capsule, setCapsule] = useState(false);

    const Vehicle = () => {
        setVehicle(true);
        setSpaceport(false);
        setCapsule(false);
    }
    const Spaceport = () => {
        setVehicle(false);
        setSpaceport(true);
        setCapsule(false);
    }
    const Capsule = () => {
        setVehicle(false);
        setSpaceport(false);
        setCapsule(true);
    }


    return (
        <div className="flex flex-col bgi technology_bg">
            <Nav />

            <div className="center md:items-start flex-col mt-7 md:mt-14  lg:ml-40 lg:mt-7 text-white">

                <h3 className="heading-01 md:ml-10 lg:ml-0">
                    <span className="font-bold opacity-25">03</span>
                    <span>SPACE LAUNCH 101</span>
                </h3>

                <div className="flex flex-col lg:flex-row-reverse mt-7 md:mt-20 gap-8 md:gap-14 lg:mt-10">

                    {/* Vehicle button */}
                    {vehicle ? <>
                        <Image
                            src={data[0].images.landscape}
                            height={100}
                            width={100}
                            alt={data[0].name}
                            className="w-screen lg:hidden"
                        />
                        <Image
                            src={data[0].images.portrait}
                            height={100}
                            width={100}
                            alt={data[0].name}
                            className="w-[405px] lg:block hidden"
                        />
                    </> : null}

                    {/* spaceport button */}
                    {spaceport ? <>
                        <Image
                            src={data[1].images.landscape}
                            height={100}
                            width={100}
                            alt={data[1].name}
                            className="w-screen lg:hidden"
                        />
                        <Image
                            src={data[1].images.portrait}
                            height={100}
                            width={100}
                            alt={data[1].name}
                            className="w-[405px] lg:block hidden"
                        />
                    </> : null}

                    {/* capsule button */}
                    {capsule ? <>
                        <Image
                            src={data[2].images.landscape}
                            height={100}
                            width={100}
                            alt={data[2].name}
                            className="w-screen lg:hidden"
                        />
                        <Image
                            src={data[2].images.portrait}
                            height={100}
                            width={100}
                            alt={data[2].name}
                            className="w-[405px] lg:block hidden"
                        />
                    </> : null}

                    <div className="center flex-col lg:flex-row gap-7 md:gap-10 lg:gap-16 ">

                        <div className="center flex-row gap-4 font-Bellefair lg:flex-col md:gap-8 lg:gap-5  ">

                            {/* Vehicle button */}
                            <button onClick={Vehicle}>
                                {vehicle ? <div className="tech_btn bg-white text-new_black">1</div> : <div className="tech_btn ">1</div>}
                            </button>

                            {/* Spaceport button */}
                            <button onClick={Spaceport}>
                                {spaceport ? <div className="tech_btn bg-white text-new_black">2</div> : <div className="tech_btn ">2</div>}
                            </button>

                            {/* Capsule button */}
                            <button onClick={Capsule}>
                                {capsule ? <div className="tech_btn bg-white text-new_black">3</div> : <div className="tech_btn ">3</div>}
                            </button>


                        </div>

                        {/* vehicle */}
                        {vehicle ? <div className="center flex-col lg:items-start text-new_gray font-Barlow gap-1 md:gap-5 lg:gap-8 font-normal ">
                            <h3 className=" text-sm tracking-2xm md:text-base md:tracking-sm">THE TERMINOLOGY…</h3>
                            <h1 className="text-white text-2xl md:text-4.5xl lg:text-5.5xl uppercase font-Bellefair">{data[0].name}</h1>
                            <p className=" text-[15px] leading-6 mx-8 text-center md:text-base md:leading-7 md:mx-44 lg:text-left lg:mx-0 lg:w-2/3 lg:text-lg lg:leading-8">{data[0].description}</p>
                        </div> : null}

                        {/* spaceport */}
                        {spaceport ? <div className="center flex-col lg:items-start text-new_gray font-Barlow gap-1 md:gap-5 lg:gap-8 font-normal ">
                            <h3 className=" text-sm tracking-2xm md:text-base md:tracking-sm">THE TERMINOLOGY…</h3>
                            <h1 className="text-white text-2xl md:text-4.5xl lg:text-5.5xl uppercase font-Bellefair">{data[1].name}</h1>
                            <p className=" text-[15px] leading-6 mx-8 text-center md:text-base md:leading-7 md:mx-44 lg:text-left lg:mx-0 lg:w-2/3 lg:text-lg lg:leading-8">{data[1].description}</p>
                        </div> : null}

                        {/* capsule */}
                        {capsule ? <div className="center flex-col lg:items-start text-new_gray font-Barlow gap-1 md:gap-5 lg:gap-8 font-normal ">
                            <h3 className=" text-sm tracking-2xm md:text-base md:tracking-sm">THE TERMINOLOGY…</h3>
                            <h1 className="text-white text-2xl md:text-4.5xl lg:text-5.5xl uppercase font-Bellefair">{data[2].name}</h1>
                            <p className=" text-[15px] leading-6 mx-8 text-center md:text-base md:leading-7 md:mx-44 lg:text-left lg:mx-0 lg:w-2/3 lg:text-lg lg:leading-8">{data[2].description}</p>
                        </div> : null}


                    </div>
                </div>





            </div>



        </div>
    );
}