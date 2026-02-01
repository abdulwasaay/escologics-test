"use client";

import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles"
import Image from "next/image"
import Link from "next/link";
import Icon from "../UI/Icon";
import AnchorTemporaryDrawer from "../UI/Drawer";

const NavBarLatest = () => {
    const { palette } = useTheme();
    const matches = useMediaQuery("(max-width:899px)");

    const navs = [
        {
            name: "About Us",
            link: "#",
        },
        {
            name: "Contact Us",
            link: "#",
        },
        {
            name: "Products",
            link: "#",
        },
        {
            name: "Customized Solutions",
            link: "#",
        },
        {
            name: "Services",
            link: "#"
        }
    ]

    return (
        <Box sx={{ background: palette.primary.main, padding: { lg: "20px 110px", xs: "20px 30px" } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Image
                    src="/assets/icon.png"
                    alt="Icon"
                    width={200}
                    height={200}
                    priority
                />
                <Box sx={{ color: palette.text.primary, display: { md: "flex", xs: "none" }, gap: 4 }}>
                    {
                        navs?.map((nav: any, ind: number) => (
                            <Link key={ind} href={nav.link} className={` text-sm hover:text-[#FFA920] hover:underline`}>{nav?.name}</Link>
                        ))
                    }
                </Box>
                <Box sx={{ color: palette.text.primary, display: "flex", alignItems: "center", gap: 4 }}>
                    <Link href="tel:800-922-6120" className={` text-sm flex items-center gap-2`}><span><Icon name="phone" /></span><span>800-922-6120</span></Link>
                    <button className="cursor-pointer" style={{ padding: "16px", background: palette.background.paper, borderRadius: "50%" }}><Icon name="search" /></button>
                    {matches && <AnchorTemporaryDrawer />}
                </Box>
            </Box>
        </Box>
    )
}

export default NavBarLatest