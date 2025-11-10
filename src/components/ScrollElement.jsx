import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollElement() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
      if (hash) {
        history.scrollRestoration = "manual";
      }
      
      const timer = setTimeout(() => {
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            const header = document.querySelector("header");
            const headerHeight = header ? header.offsetHeight : 100;

            const elementPosition =
              element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}