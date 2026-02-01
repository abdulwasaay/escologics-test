"use client"
import { Box, Card, Typography } from "@mui/material"
import Image from "next/image"
import ButtonLatest from "../UI/Button"
import { useTheme } from "@mui/material/styles"
import Icon from "../UI/Icon"

const MainBanner = () => {
    const { palette } = useTheme();

    return (
        <>

            <Box sx={{ fontFamily: "var(--font-nunito-sans)", padding: { lg: "20px 110px", xs: "20px 30px" }, marginTop: "20px" }}>
                <Box sx={{ display: "flex", alignItems: "center", flexDirection: { md: "row", xs: "column" }, gap: 5 }}>
                    <Box sx={{ width: { md: "800px", xs: "100%" } }}>
                        <Typography variant="body1" sx={{ color: palette.secondary.main, textTransform: "uppercase", fontWeight: 800, textAlign: { md: "left", xs: "center" } }}>Products/ Partition and Cages</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 800, fontSize: { md: "60px", sm: "40px", xs: "30px" }, textAlign: { md: "left", xs: "center" } }}>Partitions and <span style={{ color: palette.primary.main }}>Cages</span></Typography>
                        <Typography variant="body1" sx={{ color: palette.text.secondary, fontWeight: 700, textAlign: { md: "left", xs: "center" } }}>Industrial partitions and cages are physical barriers in industrial and commercial settings to create distinct, secure areas within a larger space. They are typically constructed from sturdy materials like wire mesh and steel, providing both security and organization.
                            Industrial partitions and cages are durable structural solutions designed to divide, secure, and organize large industrial or commercial spaces. Built with heavy-gauge wire mesh, reinforced steel panels, and strong framing, they offer long-term reliability in demanding environments. These systems integrate seamlessly into existing facility layouts and can be expanded, relocated, or reconfigured as operational needs evolve. With multiple door options, locking systems, and customizable layouts, they provide flexible, secure, and efficient workspace management.
                        </Typography>
                        <Box sx={{ marginTop: "30px", display: "flex", justifyContent: { md: "left", xs: "center" } }}>
                            <ButtonLatest>View Products</ButtonLatest>
                        </Box>
                    </Box>
                    <Box>
                        <Image
                            src="/assets/banner.png"
                            alt="Banner"
                            width={800}
                            height={800}
                            priority
                        />
                    </Box>
                </Box>

            </Box >
            <Box sx={{ marginTop: "60px", background: palette.primary.light, padding: { lg: "110px 110px", xs: "20px 30px" }, }}>
                <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 800, fontSize: { md: "60px", sm: "40px", xs: "30px" } }}>Key Characteristics</Typography>
                <Box sx={{ marginTop: "49px", display: "flex", gap: 4 , alignItems:"center",justifyContent:"center" , flexWrap:{md:"nowrap" , xs:"wrap"} }}>
                    <Card sx={{ width: "435.08px", padding: "30px", boxShadow: "none", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                        <Icon name="security" />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#000", textAlign: "left", margin: "10px 0px" }}>Security</Typography>
                        <Typography variant="body1" sx={{ color: palette.text.secondary, fontWeight: 700, textAlign: "left" }}>They prevent unauthorized access to valuable inventory, tools, equipment, or sensitive areas like server rooms and hazardous material storage.</Typography>
                    </Card>
                    <Card sx={{ width: "435.08px", padding: "30px", boxShadow: "none", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                        <Icon name="org" />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#000", textAlign: "left", margin: "10px 0px" }}>Organization</Typography>
                        <Typography variant="body1" sx={{ color: palette.text.secondary, fontWeight: 700, textAlign: "left" }}>They help streamline workflow by creating specific work zones and separating different types of processes or materials within a facility.</Typography>
                    </Card>
                    <Card sx={{ width: "435.08px", padding: "30px", boxShadow: "none", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                        <Icon name="safety" />
                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#000", textAlign: "left", margin: "10px 0px" }}>Safety</Typography>
                        <Typography variant="body1" sx={{ color: palette.text.secondary, fontWeight: 700, textAlign: "left" }}>They contribute to a safer work environment by isolating hazardous areas or machinery and protecting employees from potential dangers.</Typography>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default MainBanner