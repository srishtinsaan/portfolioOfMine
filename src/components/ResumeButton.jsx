export default function ResumeButton() {
  const handleView = () => {
    const url =
      "https://drive.google.com/file/d/1ZhBfmGdhwocxlaNEAyAIrM-NOhAiySh1/view?usp=drivesdk";
    window.open(url, "_blank"); // opens resume in a new tab
  };

  return (
    <div className="flex justify-center items-center mb-7">
      <button
        onClick={handleView}
        className="p-1 px-3 text-sm rounded bg-white/10 border border-white/20 
        text-white backdrop-blur-md hover:bg-white hover:text-black 
        hover:font-semibold transition shadow-[0_0_7px_rgba(255,255,255,0.5)]"
      >
        View My Resume
      </button>
    </div>
  );
}
