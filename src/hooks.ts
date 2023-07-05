import React from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function onResize() {
      setIsMobile(window.innerWidth < 767);
    }

    onResize();

    window.addEventListener("resize", onResize);
  });

  return isMobile;
}
