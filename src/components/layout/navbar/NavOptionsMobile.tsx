"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SignUpButton from "./SignUpButton";
import { User } from "@/types/User";
import { usePathname } from "next/navigation";
import { useFormState } from "react-dom";
import { defaultActionResult, DefaultActionResult } from "@/types/Form";
import logout from "./actions/LogoutAction";
import Modal from "@/components/modals/TidyCalModal";
import { useDisclosure } from "@nextui-org/modal";

interface Props {
  userData: User | null;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
}

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

const NavOptionsMobile: React.FC<Props> = ({
  userData,
  setIsOpen,
  isMobileOpen,
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const bgNav =
    pathname === "/" ? "bg-black text-white" : "bg-white text-black";
  const isHome = pathname === "/" ? "" : "-black";
  const [error, action] = useFormState<DefaultActionResult, FormData>(
    logout,
    defaultActionResult
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleDayClick = (day: Day) => {
    if (!day.isCurrentMonth) return;
    setSelectedDate(day.date);
    setIsModalOpen(true);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`absolute left-0 w-full z-40 transition-all duration-300 lg:hidden ${
        isScrolled ? "top-0" : "top-[56px]"
      }`}
    >
      <div
        className={`fixed w-[100vw] h-[100vh] left-0 ${bgNav} z-60 bg-opacity-65`}
      ></div>
      <div
        className={`absolute top-0 inset-0 flex flex-col text-white lg:hidden transition-all duration-500 z-50 h-full ${bgNav} ${
          isMobileOpen ? "animate-slide-in" : "opacity-0"
        }`}
      >
        {userData ? (
          <div className={`p-7 ${bgNav}`}>
            <div className={`flex items-center gap-2 mb-4  z-20`}>
              <Image
                 src={
                  userData?.image ||
                  (userData?.relation === "Mother"
                    ? "/navbar/default-user-female.svg"
                    : "/navbar/default-user-male.svg")
                }
                width={40}
                height={40}
                alt="User Profile"
                className="rounded-full"
              />
              <span>{userData.name}</span>
            </div>

            <nav className="flex flex-col gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start gap-3"
              >
                <Image
                  src={`/navbar/profile${isHome}.svg`}
                  width={20}
                  height={20}
                  alt="User Profile"
                  className=""
                />
                <Link href="/my-account" className="text-lg">
                  My Profile
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start gap-3"
              >
                <Image
                  src={`/navbar/preferences${isHome}.svg`}
                  width={20}
                  height={20}
                  alt="preferences"
                  className=""
                />
                <Link href="/my-account/preferences" className="text-lg">
                  Preferences
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start gap-3"
              >
                <Image
                  src={`/navbar/favorites${isHome}.svg`}
                  width={20}
                  height={20}
                  alt="favorites"
                  className=""
                />
                <Link href="/my-account/favorites" className="text-lg">
                  Favorites
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start gap-3"
              >
                <Image
                  src={`/navbar/compare${isHome}.svg`}
                  width={20}
                  height={20}
                  alt="compare"
                  className=""
                />
                <Link href="/my-account/compare" className="text-lg">
                  Compare Schools
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start gap-3"
              >
                <Image
                  src={`/navbar/changepass${isHome}.svg`}
                  width={20}
                  height={20}
                  alt="compare"
                  className=""
                />
                <Link href="/my-account/change-password" className="text-lg">
                  Change Password
                </Link>
              </button>

              <div className="border-t border-gray-700 mt-4 pt-4 flex flex-col gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-start"
                >
                  <Link href="https://alifaedtech.com/schools" className="text-lg">
                    Find Schools
                  </Link>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-start"
                >
                  <Link href="https://blog.alifaedtech.com/" className="text-lg">
                    News & Articles
                  </Link>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-start"
                >
                  <Link href="https://alifaedtech.com/about" className="text-lg">
                    About
                  </Link>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex justify-start"
                >
                  <Link href="/book-consultation" className="text-lg">
                    Book Consultation
                  </Link>
                </button>
              </div>
            </nav>
       
          </div>
        ) : (
          <div className={`p-7 ${bgNav} z-20`}>
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start"
              >
                <Link href="https://alifaedtech.com/schools" className="text-lg ">
                  Find Schools
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start"
              >
                <Link href="https://blog.alifaedtech.com/" className="text-lg">
                  News & Articles
                </Link>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex justify-start"
              >
                <Link href="https://alifaedtech.com/about" className="text-lg">
                  About
                </Link>
              </button>
              <button
                onClick={() => handleDayClick(bookingDay)}
                className="flex justify-start"
              >
                <div className="text-lg">Book Consultation</div>
              </button>
            </nav>

            <div className="mt-4 " onClick={() => setIsOpen(false)}>
              <SignUpButton />
            </div>
          </div>
        )}
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
    </div>
  );
};

export default NavOptionsMobile;
