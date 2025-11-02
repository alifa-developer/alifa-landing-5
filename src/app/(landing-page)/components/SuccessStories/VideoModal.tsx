"use client";

import { useState } from "react";
import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { CircleX } from "lucide-react";

interface VideoModalProps {
  youtubeUrl: string;
  trigger: React.ReactNode; 
}

export default function VideoModal({ youtubeUrl, trigger }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  const videoId = youtubeUrl.includes("youtube.com")
    ? new URL(youtubeUrl).searchParams.get("v")
    : youtubeUrl.includes("youtu.be")
    ? youtubeUrl.split("/").pop()
    : youtubeUrl;

  return (
    <>
      <div onClick={toggleModal}>{trigger}</div>

      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        size="3xl"
        hideCloseButton
        className="bg-black bg-opacity-80"
      >
        <ModalContent>
          <div className="relative w-full h-[70vh] flex items-center justify-center bg-black">
            {/* Close button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <CircleX size={28} />
            </button>

            {/* YouTube Iframe */}
            {videoId && (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            )}
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}
