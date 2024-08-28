import React, { useState } from "react";
import { FaHome, FaSearch, FaPlus, FaStar } from "react-icons/fa";
import { RiMovie2Fill } from "react-icons/ri";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { HiEllipsisVertical } from "react-icons/hi2";
import Logo from "../assets/images/logo.png";
import HeaderItems from "./HeaderItems";

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const movie = [
        {
            name: "Home",
            icon: FaHome,
        },
        {
            name: "Search",
            icon: FaSearch,
        },
        {
            name: "Watch List",
            icon: FaPlus,
        },
        {
            name: "Original",
            icon: FaStar,
        },
        {
            name: "Movie",
            icon: RiMovie2Fill,
        },
        {
            name: "Series",
            icon: PiTelevisionSimpleFill,
        },
    ];
    return (
        <div className="flex text-white gap-8 items-center p-7 justify-between">
            <div className="flex gap-10 items-center">
                <img
                    src={Logo}
                    className="md:w-[150px] w-[120px] cursor-pointer"
                />
                <div className="hidden md:flex gap-8">
                    {movie.map((item, index) => {
                        return (
                            <HeaderItems
                                key={index}
                                name={item.name}
                                Icon={item.icon}
                            />
                        );
                    })}
                </div>
            </div>

            <div className="md:hidden flex gap-8">
                {movie.map(
                    (item, index) =>
                        index < 3 && (
                            <HeaderItems
                                key={index}
                                name={""}
                                Icon={item.icon}
                            />
                        )
                )}
                <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                    <HeaderItems name={""} Icon={HiEllipsisVertical} />
                    {toggle ? (
                        <div className="absolute mt-5 bg-[#121212] border-[1px] border-gray-700 px-5 py-3 flex flex-col gap-3 rounded-xl">
                            {movie.map(
                                (item, index) =>
                                    index > 2 && (
                                        <HeaderItems
                                            key={index}
                                            name={item.name}
                                            Icon={item.icon}
                                        />
                                    )
                            )}
                        </div>
                    ) : null}
                </div>
            </div>
            <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="avatar"
                className="w-[40px] rounded-full cursor-pointer"
            />
        </div>
    );
};

export default Header;
