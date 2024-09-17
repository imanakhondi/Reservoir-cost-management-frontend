import React, { useEffect, useState, useRef } from "react";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);

      if (window.innerWidth < 768) {
        setIsVisible(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the A2HS prompt");
        } else {
          console.log("User dismissed the A2HS prompt");
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  const handleClosePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div
        ref={popupRef}
        className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md text-center"
      >
        <h3 className="text-lg font-semibold mb-2">نصب اپلیکیشن</h3>
        <p className="text-gray-700 mb-4">
          جهت تجربه بهتر اپلیکیشن را نصب کنید!
        </p>
        <div className="flex justify-center items-center gap-x-2">
          <button
            onClick={handleInstallClick}
            className=" px-4 py-2 rounded bg-primary border-2 border-primary text-sm text-white transition duration-200"
          >
            نصب اپلیکیشن
          </button>
          <button
            onClick={handleClosePopup}
            className=" px-4 py-2 rounded bg-white border-2 border-primary text-sm text-primary"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
