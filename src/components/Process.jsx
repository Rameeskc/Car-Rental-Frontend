import React from "react";
import { FaMobileAlt, FaCar, FaArrowRight } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const steps = [
    {
        icon: <FaMobileAlt />,
        text: "Log in to Drivo Website",
    },
    {
        icon: <RiCalendarScheduleLine />,
        text: "Select city, date and time",
    },
    {
        icon: <FaCar />,
        text: "Pick a car of your choice",
    },
    {
        icon: <IoLocationSharp />,
        text: "Explore your destinations",
    },
];

const Process = () => {
    return (
        <div className="w-full">

            {/* Top Description */}
            <div className="py-6 px-4 flex items-center justify-center">
                <p className="text-base lg:text-lg text-center max-w-4xl leading-relaxed">
                    Drivo makes hitting the road effortless — simply choose your car,
                    reserve it, and drive whenever and wherever you need.
                </p>
            </div>

            {/* Process Section */}
            <div className="w-full bg-green-600 py-12 px-7 lg:px-20">
                <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                    {steps.map((step, index) => (
                        <div key={index} className="relative flex flex-col items-center space-y-4">

                            {/* Step Number (Visible only on small screens) */}
                            <div className="absolute -top-5 -left-5 lg:hidden bg-white text-green-600 text-sm font-bold w-9 h-9 flex items-center justify-center rounded-full shadow-lg">
                                {index + 1}
                            </div>

                            {/* Icon */}
                            <div className="text-4xl text-white">
                                {step.icon}
                            </div>

                            {/* Text */}
                            <p className="text-sm lg:text-base font-medium text-white leading-relaxed max-w-[160px]">
                                {step.text}
                            </p>

                            {/* Arrow (Only Large Screen) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block absolute right-[-35px] top-1/2 -translate-y-1/2 text-white text-xl">
                                    <FaArrowRight />
                                </div>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default Process;