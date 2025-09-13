import MainCanvas from '../../components/ThreeJsComp/Blog/MainCanvas'
import ProductSlider from '../../components/ProductSlider/ProductSlider'
import FeatProductSlider from '../../components/FeatProductSlider/FeatProductSlider'
import InformationComp from '../../components/HomePage/InformationComp/InformationComp'

import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogSpotlight from '../../components/BlogPage/Spotlight';

const Blogs = () => {
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();
    const location = useLocation();

    const controls3D = useAnimation();

    // Entrance animation on route change or reload
    useEffect(() => {
        controls3D.set({ y: 50, opacity: 0 }); // reset before animating in
        const timer = setTimeout(() => {
            controls3D.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            });
        }, 250);
        return () => clearTimeout(timer);
    }, [location.pathname, controls3D]);

    // Entrance animation on route change or reload
    useEffect(() => {
        controls.set({ y: -50, opacity: 0 }); // reset before animating in
        const timer = setTimeout(() => {
            controls.start({
                y: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            });
        }, 250);
        return () => clearTimeout(timer);
    }, [location.pathname, controls]);

    // Scroll animation
    useEffect(() => {
        return scrollYProgress.on("change", (latest) => {
            controls.start({
                y: latest * -8500, // moves text upward
                // y: latest * 8500, // moves text downward
                opacity: 1 - latest * 1.2, // fades out
                transition: { duration: 0.4 },
            });
        });
    }, [scrollYProgress, controls]);


    return (
        <>
            {/* >>>>>>>>>>>>>> Full Width Spotlight */}
            <BlogSpotlight />

            {/* >>>>>>>>>>>>>> In Cont */}
            <div className="container_layout mx-auto flex justify-center items-center flex-col   "  >
                {/* >>>>>>>>>>>>>> Information Comp */}
                <InformationComp />

                {/* >>>>>>>>>>>>>> Featured Prod Slider */}
                <FeatProductSlider title="Featured Products" urlText="GO TO SHOP" urlVal="/products" />

                {/* >>>>>>>>>>>>>> Mobile Prod Slider */}
                <ProductSlider title="Mobile Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Covers and Cases" />

                {/* >>>>>>>>>>>>>> Watch Prod Slider */}
                <ProductSlider title="Watch Products" urlText="GO TO SHOP" urlVal="/products" categoryName="Stand and Straps" />

            </div>


            {/* >>>>>>>>>>>>>> In Cont */}
            <div className=" h-[200vh] container_layout mx-auto flex justify-center items-center flex-col  "  >

            </div>


        </>
    )
}

export default Blogs