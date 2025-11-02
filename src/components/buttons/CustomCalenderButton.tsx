import React, { useState, useRef } from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import Image from "next/image";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

interface CustomCalendarButtonProps {
  onDateChange: (date: Date) => void;
  initialDate?: Date;
}

export default function CustomCalendarButton({
  onDateChange,
  initialDate,
}: CustomCalendarButtonProps) {
  const [selectedDate, setSelectedDate] = useState(initialDate || null);

  const handleDateChange = (date: any) => {
    if (date) {
      const selected = date.toDate();
      setSelectedDate(selected);
      onDateChange(selected);
    }
  };
  const disableDates = (current: any) => {
  if (!current) return false;

  const today = dayjs();
  const currentYear = today.year();

  // Disable if the year matches current year
  if (current.year() === currentYear) {
    return true;
  }

  // (Optional) still block future years
  return current > today.endOf("day");
};
  return (
    <div>
      <DatePicker
        onChange={handleDateChange}
        suffixIcon={
          <Image
            src="/profile-complete/calender.svg"
            width={20}
            height={20}
            alt="Calendar Icon"
          />
        }
        value={selectedDate ? dayjs(selectedDate) : null}
        className="w-full cursor-pointer p-3 font-normal text-grey-1 text-body-field-mb md:text-body-field-tb lg:text-body-field placeholder:text-grey-2 placeholder:text-body-field-mb md:placeholder:text-body-field-tb lg:placeholder:text-body-field border-strokes no-focus"
        placeholder="Select"
        style={{
          fontWeight: "normal",
          fontStyle: "normal",
          lineHeight: "1.5rem",
        }}
        disabledDate={disableDates}
        format="Do MMMM YYYY"
      />
    </div>
  );
}
