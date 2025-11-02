"use client";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import { useRef, useState } from "react";

type SocialMediaItem = {
  type: string;
  iconPath: string;
  src: string;
  alt: string;
  qrCode: string;
};
export const AboutUsIcons = () => {
  const [hoveredMedia, setHoveredMedia] = useState<SocialMediaItem | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (media: SocialMediaItem) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredMedia(media);
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsModalOpen(false);
      setHoveredMedia(null);
    }, 1000); 
  };

  const socialMedia: SocialMediaItem[] = [
    {
      type: "WhatsApp",
      iconPath: "/about/Whatsapp.svg",
      src: "/about/Whatsapp-icon.svg",
      alt: "WhatsApp Account icon",
      qrCode: "/about/whatsapp-qr.png",
    },
    {
      type: "Telegram",
      iconPath: "/about/telegram.svg",
      src: "/about/telegram-icon.svg",
      alt: "Telegram Channel icon",
      qrCode: "/about/telegram-qr.png",
    },
    {
      type: "Viber",
      iconPath: "/about/Viber.svg",
      src: "/about/Viber-icon.svg",
      alt: "Viber Channel icon",
      qrCode: "/about/viber-qr.png",
    },
  ];

  return (
    <div className="flex space-x-2 lg:space-x-3">
      {socialMedia.map((media, index) => (
        <div
          key={index}
          onMouseEnter={() => handleMouseEnter(media)}
       
          className="cursor-pointer"
        >
          <div className="bg-primary-text w-6 h-6 lg:w-9 lg:h-9 border rounded-lg p-1 lg:p-2 flex items-center justify-center">
            <Image
              src={media.src}
              width={40}
              height={40}
              className="w-6 lg:w-10"
              alt={media.alt}
            />
          </div>
        </div>
      ))}
       <Modal
        isOpen={isModalOpen}
        backdrop="blur"
        onClose={() => {
          setIsModalOpen(false);
          setHoveredMedia(null);
        }}
        className="pointer-events-none"
      >
        <ModalContent
          className="p-4 rounded-2xl pointer-events-auto"
         
        >
          <ModalHeader className="text-center justify-center" />
          <ModalBody className="flex flex-col items-center text-center gap-4 mt-2 mb-6">
            {hoveredMedia && (
              <>
                <Image
                  src={hoveredMedia.iconPath}
                  alt={hoveredMedia.type}
                  width={64}
                  height={64}
                />

                <div className="font-medium text-heading-3-mb md:text-heading-3-tb lg:text-heading-3">
                  Alifa Education Services
                </div>

                <div className="text-body-default-mb md:text-body-default-tb lg:text-body-default text-primary-content">
                  {hoveredMedia.type} Contact
                </div>

                <Image
                  src={hoveredMedia.qrCode}
                  width={338}
                  height={338}
                  alt={`${hoveredMedia.type} QR Code`}
                />

                <p className="text-[14px] text-primary-content max-w-xs">
                  Use your phone&apos;s camera or QR scanner app to scan the
                  code and quickly connect with us!
                </p>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};
