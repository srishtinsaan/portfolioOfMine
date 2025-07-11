import { useState, useEffect } from "react";

function PageUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div
  onClick={scrollToTop}
  className="fixed bottom-6 right-6 z-50 w-0 h-0 
             border-l-[15px] border-r-[15px] border-b-[20px] 
             border-l-transparent border-r-transparent border-b-gray-500
             hover:border-b-white cursor-pointer transition-all"></div>

    )
  );
}

export default PageUpButton;
