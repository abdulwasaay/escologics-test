import MainBanner from "@/components/Features/Banner";
import MainSlider from "@/components/Features/MainSlider";
import Products from "@/components/Features/Products";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <MainBanner />
      <MainSlider />
      <Products />
    </Box>
  );
}
