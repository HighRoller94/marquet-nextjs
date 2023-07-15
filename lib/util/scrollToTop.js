"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const ScrollToTop = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    handleRouteChange();
  }, [router.events]);

  return null;
};

export default ScrollToTop;
