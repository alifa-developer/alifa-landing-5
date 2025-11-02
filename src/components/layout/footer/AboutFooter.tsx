"use client";
import Modal from "@/components/modals/TidyCalModal";
import config from "@/types/Config";
import Link from "next/link";
import React, { useEffect, useState, useCallback } from "react";

interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isSelected?: boolean;
}


const AboutFooter = () => {

  const bookingDay: Day = {
    date: new Date(),
    isCurrentMonth: true,
  };

  const handleDayClick = (day: Day) => {
    if (!day.isCurrentMonth) return;

    const selectedDate = day.date.toISOString().split("T")[0];
    const tidyCalPath = config.tidyCalPath || "publisher/standard-minute-meeting";
    const tidyCalUrl = `https://tidycal.com/${tidyCalPath}?date=${selectedDate}`;
    window.open(tidyCalUrl, "_blank");
  };


  const itemsCSS =
    "text-grey-2 font-normal text-body-default-mb md:text-body-default-tb lg:text-body-default text-left transition-all duration-200 ease-in-out hover:text-orange active:text-orange-2";

  return (
    <div className="flex flex-col gap-[30.5px] md:gap-[21px] lg:gap-[54.5px]">
      <p className="text-body-default-sub-mb md:text-body-default-sub-tb lg:text-body-default-sub font-medium text-grey-1">
        About
      </p>
      <section>
        <div className="flex flex-col gap-[29px] md:gap-4 lg:gap-[29px]">
          <Link href="https://alifaedtech.com/about" className={itemsCSS}>
            About Us
          </Link>
          <Link href="https://alifaedtech.com/cities" className={itemsCSS}>
            All Cities
          </Link>
          <Link href="https://alifaedtech.com/schools" className={itemsCSS}>
            All Schools
          </Link>
          <button
            onClick={() => handleDayClick(bookingDay)}
            className={itemsCSS}
          >
            Book Consultation
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutFooter;
