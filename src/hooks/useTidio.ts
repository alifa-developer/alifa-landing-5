import { useState, useEffect } from "react";

interface TidioChatApi {
  open(): void;
  close(): void;
  show(): void;
  hide(): void;
}

declare global {
  interface Window {
    tidioChatApi?: TidioChatApi;
  }
}

export const useTidio = () => {
  const [isTidioReady, setIsTidioReady] = useState(false);

  useEffect(() => {
    const checkTidioInterval = setInterval(() => {
      if (typeof window !== "undefined" && window.tidioChatApi) {
        setIsTidioReady(true);
        clearInterval(checkTidioInterval);
      }
    }, 100);

    return () => {
      clearInterval(checkTidioInterval);
    };
  }, []);

  
  const handleChat = () => {
    if (typeof window !== "undefined" && window.tidioChatApi) {
      try {
        window.tidioChatApi.show();
        setTimeout(() => {
          window.tidioChatApi?.open();
        }, 100);
      } catch (error) {
        console.error("Error opening Tidio chat:", error);
      }
    } else {
      console.warn("Tidio chat API not available");
    }
  };

  return {
    isTidioReady,
    handleChat,
  };
};
