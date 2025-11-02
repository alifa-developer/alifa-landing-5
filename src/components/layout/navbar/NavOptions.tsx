import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Modal from "@/components/modals/TidyCalModal";

interface Day {
  date: Date;
  isCurrentMonth: boolean;
  isSelected?: boolean;
}

declare global {
  interface Window {
    TidyCal?: any;
  }
}

const NavOptions = () => {
  const pathname = usePathname();
  

  const isActive = (path: string) =>
    pathname === path
      ? "heading-caps-mb md:text-heading-caps-tb lg:text-heading-caps text-primary-content lg:font-bold "
      : "heading-caps-mb md:text-heading-caps-tb lg:text-heading-caps lg:font-medium hover:text-primary-text";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const bookingDay: Day = {
    date: new Date(),
    isCurrentMonth: true,
  };

  const initializeTidyCal = useCallback(() => {
    if (window.TidyCal) {
      const existingEmbeds = document.querySelectorAll(".tidycal-embed");
      existingEmbeds.forEach((embed) => {
        embed.innerHTML = "";
      });

      window.TidyCal.init();
    }
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      const loadTidyCalScript = () => {
        return new Promise<void>((resolve) => {
          if (window.TidyCal) {
            resolve();
            return;
          }

          const script = document.createElement("script");
          script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
          script.async = true;
          script.id = "tidycal-script";
          script.onload = () => resolve();
          document.body.appendChild(script);
        });
      };

      loadTidyCalScript().then(() => {
        setTimeout(initializeTidyCal, 1000);
      });

      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isModalOpen, initializeTidyCal]);

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <div className={`hidden lg:flex lg:flex-row lg:gap-[62px] font-medium text-heading-caps`}>
        <Link href="https://alifaedtech.com/schools" className={`${isActive("https://alifaedtech.com/schools")}`}>
          FIND SCHOOLS
        </Link>
        <Link
          href="https://blog.alifaedtech.com/"
          className={`${isActive("https://blog.alifaedtech.com/")}`}
        >
          NEWS & ARTICLES
        </Link>
        <Link href="https://alifaedtech.com/about" className={`${isActive("https://alifaedtech.com/about")}`}>
          ABOUT US
        </Link>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={
          selectedDate
            ? `Schedule for ${formatDate(selectedDate)}`
            : "Schedule Meeting"
        }
      >
        <div
          className="tidycal-embed w-full h-full"
          data-path="publisher/standard-minute-meeting"
          data-default-date={selectedDate?.toISOString().split("T")[0]}
        />
      </Modal>
    </>
  );
};

export default NavOptions;
