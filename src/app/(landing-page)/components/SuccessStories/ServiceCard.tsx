import MasterButton from "@/components/buttons/MasterButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Image from "next/image";
import React from "react";
import VideoModal from "./VideoModal";
import styles from "./ServiceCard.module.css";
interface ServiceCardProps {
    title: string;
    description: string;
    outcome: string;
    timeline: string;
    name: string;
    image: string;
    youtube: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
                                                     title,
                                                     description,
                                                     outcome,
                                                     timeline,
                                                     name,
                                                     image,
                                                     youtube,
                                                 }) => {
    return (
        <div className="bg-black bg-opacity-30 backdrop-blur-xl rounded-2xl flex flex-col lg:flex-row items-center lg:items-stretch gap-0 lg:gap-10 w-full max-w-[328px] md:max-w-[672px] lg:max-w-[1320px] 2xl:max-w-[1320px] 2xl:max-h-[566px] overflow-hidden">
            <div className="relative w-[328px] md:w-[672px] h-[233px] md:h-[400px] lg:h-auto  lg:w-[50%] flex-shrink-0 overflow-hidden">
                <Image src={image} alt={title} width={1000} height={1000} className="object-cover h-full w-full" />
            </div>
            {/* Story Text */}
            <div className="text-white w-full lg:max-w-[50%] p-3 md:p-0 md:py-12 md:pl-10 lg:pl-0 md:pr-[120px] pb-[82px] flex flex-col justify-center">
                <div>
                    <h2 className="text-xl md:text-2xl lg:text-heading-3 font-medium mb-2">
                        {title}
                    </h2>
                    <p className="text-sm md:text-base lg:text-body-default font-normal">
                        Outcome: {outcome}
                    </p>
                    <p className="text-sm md:text-base lg:text-body-default font-normal mb-6">
                        Timeline: {timeline}
                    </p>
                    <p className={`italic text-sm md:text-base lg:text-[15px] font-normal mb-2 max-h-[120px] overflow-y-auto ${styles.noScrollButtons} ${styles.scrollTransparent}`}>
                        &quot;{description}&quot;
                    </p>
                    <p className="text-body-small-sub font-medium mb-6">— {name}</p>
                </div>
                <div>
                    <VideoModal
                        youtubeUrl={youtube}
                        trigger={
                            <MasterButton
                                text="View Full Case Study"
                                variant="white"
                                size="md"
                                containerClass="w-fit"
                                suffixIcon="/landing/Arrow_right.svg"
                                hoverSuffixIcon="/landing/Arrow_right_white.svg"
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;