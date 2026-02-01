"use client";

import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper Styles Imported
import 'swiper/css';
import Image from "next/image";
import { useRef } from "react";
import { Autoplay } from "swiper/modules";

const MainSlider = () => {
    const swiperRef = useRef<any>(null);
    const matchOne = useMediaQuery("max-width:770px");

    return (
        <Box sx={{ fontFamily: "var(--font-nunito-sans)", padding: { lg: "20px 110px", xs: "20px 30px" }, marginTop: "20px" }}>
            <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 800, fontSize: { md: "60px", sm: "40px", xs: "30px" } }}>Example Applications</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "50px" }}>
                <IconButton sx={{ width: "50px", height: "50px" }} onClick={() => swiperRef.current?.slidePrev()}>{"<"}-</IconButton>
                <Box sx={{ width: "100%", marginLeft: "20px", marginRight: "20px" }}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3}
                        modules={[Autoplay]}
                        loop
                        autoplay={{ delay: 5000 }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        breakpoints={{
                            280: { slidesPerView: 1, spaceBetween: 10 },
                            768: { slidesPerView: 2, spaceBetween: 20 },
                            1000: { slidesPerView: 3, spaceBetween: 30 },
                        }}
                    >
                        <SwiperSlide><Image src="/assets/slide1.png" alt="Slide1" width={400} height={400} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/slide2.png" alt="Slide2" width={400} height={400} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/slide3.png" alt="Slide3" width={400} height={400} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/slide1.png" alt="Slide4" width={400} height={400} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/slide2.png" alt="Slide5" width={400} height={400} /></SwiperSlide>
                        <SwiperSlide><Image src="/assets/slide3.png" alt="Slide6" width={400} height={400} /></SwiperSlide>
                    </Swiper>
                </Box>
                <IconButton sx={{ width: "50px", height: "50px" }} onClick={() => swiperRef.current?.slideNext()}>-{">"}</IconButton>
            </Box>
        </Box>
    )
}

export default MainSlider