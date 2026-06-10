import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Har route switch par document scroll view automatically top layout par switch hoga
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;