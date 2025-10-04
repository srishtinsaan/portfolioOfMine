import { useState } from "react";
import { FaCheck, FaSpinner } from "react-icons/fa";

export default function ResumeDownloadButton() {
  const [status, setStatus] = useState("idle");

  const handleDownload = () => {
    setStatus("loading");

    const url =
      "https://drive.google.com/uc?export=download&id=1nrbz-W_57ICu2EuhHDXPVHf9L1yQnYDd";

    // Instead of programmatic download, open link in new tab (works on mobile too)
    window.open(url, "_blank");

    setTimeout(() => {
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center mb-7">
      <button
        onClick={handleDownload}
        disabled={status === "loading"}
        className={`flex items-center gap-2 p-1 px-3 text-sm rounded 
          bg-white/10 border border-white/20 text-white backdrop-blur-md
          hover:bg-white hover:text-black transition hover:font-semibold
          shadow-[0_0_7px_rgba(255,255,255,0.5)]
          ${status === "loading" ? "opacity-80 cursor-not-allowed" : ""}
        `}
      >
        {status === "loading" && <FaSpinner className="animate-spin text-white" />}
        {status === "success" && <FaCheck className="text-white" />}
        {status === "idle" && "Download My Resume"}
        {status === "loading" && "Downloading..."}
        {status === "success" && "Downloaded!"}
      </button>
    </div>
  );
}
