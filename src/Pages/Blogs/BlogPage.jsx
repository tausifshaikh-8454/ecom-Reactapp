import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { MdAssistantPhoto } from "react-icons/md";
import { useLocation } from "react-router-dom";
import MainSpot from "../../components/BlogPage/mainSpot";
import BlogTabs from "../../components/BlogPage/BlogTabs";



const Blogs = () => {
    // const controls = useAnimation();
    // const { scrollYProgress } = useScroll();
    // const location = useLocation();

    // const controls3D = useAnimation();

    // // Entrance animation on route change or reload
    // useEffect(() => {
    //     controls3D.set({ y: 50, opacity: 0 }); // reset before animating in
    //     const timer = setTimeout(() => {
    //         controls3D.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: { duration: 0.8, ease: "easeOut" },
    //         });
    //     }, 250);
    //     return () => clearTimeout(timer);
    // }, [location.pathname, controls3D]);

    // // Entrance animation on route change or reload
    // useEffect(() => {
    //     controls.set({ y: -50, opacity: 0 }); // reset before animating in
    //     const timer = setTimeout(() => {
    //         controls.start({
    //             y: 0,
    //             opacity: 1,
    //             transition: { duration: 0.8, ease: "easeOut" },
    //         });
    //     }, 250);
    //     return () => clearTimeout(timer);
    // }, [location.pathname, controls]);

    // // Scroll animation
    // useEffect(() => {
    //     return scrollYProgress.on("change", (latest) => {
    //         controls.start({
    //             y: latest * -8500, // moves text upward
    //             // y: latest * 8500, // moves text downward
    //             opacity: 1 - latest * 1.2, // fades out
    //             transition: { duration: 0.4 },
    //         });
    //     });
    // }, [scrollYProgress, controls]);


    return (
        <div >
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <MainSpot/>
            <BlogTabs />
        </div>
    )
}

export default Blogs