"use client"
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import products from '@/mocks/products';
import { featured, latest, popular } from '@/constants';
import { Card, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import ButtonLatest from '../UI/Button';
import Icon from '../UI/Icon';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Products() {
    const [value, setValue] = React.useState(0);
    const [search, setSearch] = React.useState("");
    const [latestProducts, setLatestPro] = React.useState([]);
    const [popularProducts, setPopularPro] = React.useState([]);
    const [featuredProducts, setFeaturedPro] = React.useState([]);
    const { palette } = useTheme();

    products?.filter((prod: any) => prod?.priority === popular);
    products?.filter((prod: any) => prod?.priority === featured);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const getFiltered = (productName: string, val: string) => {
        if (productName === latest) {
            let latPro
            if (search === "") {
                latPro = products?.filter((prod: any) => prod?.priority === latest);
                setLatestPro(latPro);
            } else {
                let latPro = products?.filter((prod: any) => prod?.priority === latest && prod?.title.includes(val));
                setLatestPro(latPro);
            }
            return;
        }
        if (productName === popular) {
            let latPro
            if (search === "") {
                latPro = products?.filter((prod: any) => prod?.priority === popular);
                setPopularPro(latPro);
            } else {
                let latPro = products?.filter((prod: any) => prod?.priority === popular && prod?.title.includes(val));
                setPopularPro(latPro);
            }
            return;
        }
        if (productName === featured) {
            let latPro
            if (search === "") {
                latPro = products?.filter((prod: any) => prod?.priority === featured);
                setFeaturedPro(latPro);
            } else {
                let latPro = products?.filter((prod: any) => prod?.priority === featured && prod?.title.includes(val));
                setFeaturedPro(latPro);
            }
            return;
        }
    }

    React.useEffect(() => {
        if (value === 0) {
            getFiltered(latest, search)
        } else if (value === 1) {
            getFiltered(popular, search)
        } else if (value === 2) {
            getFiltered(featured, search)
        } else {
            return
        }

    }, [search, setSearch])

    const searchHandler = (e: any) => {
        const val = e.target.value;
        setSearch(val);
    }

    return (
        <Box sx={{ fontFamily: "var(--font-nunito-sans)", padding: { lg: "20px 110px", xs: "20px 30px" }, marginTop: "60px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Latest" {...a11yProps(0)} />
                    <Tab label="Popular" {...a11yProps(1)} />
                    <Tab label="Featured" {...a11yProps(2)} />
                </Tabs>
                <Box sx={{ position: "relative", border: "1px solid #B8B8B8", borderRadius: "40px", paddingRight: "10px" }}>
                    <input type='search' placeholder='Search your Products' onChange={searchHandler} className="p-4 outline-none  text-sm" />
                    <IconButton className='absolute top-0 right-0' sx={{ background: palette.secondary.main, "&:hover": { background: palette.secondary.main } }}><Icon name='search' /></IconButton>
                </Box>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, marginTop: "20px" }}>
                    {
                        latestProducts?.length===0 && (
                            <Box>
                                <Typography>No products Found</Typography>
                            </Box>
                        )
                    }
                    {latestProducts?.map((pro: any, ind: number) => (
                        <Box key={ind}>
                            <Card  sx={{ width: "305.08px", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: palette.secondary.light, padding: "30px" }}>
                                    <Image
                                        src={pro?.image}
                                        alt="product"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                </Box>
                                <Box sx={{ padding: "30px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", textAlign: "left" }}>{pro?.title}</Typography>
                                </Box>
                            </Card>
                            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "left", fontSize: "17px", marginTop: "20px", color: palette.primary.main }}>${pro?.priceStart} - ${pro?.priceEnd}</Typography>
                            <Box sx={{ marginBottom: "30px", marginTop: "17px", display: "flex", justifyContent: "space-between", gap: 1 }}>
                                <ButtonLatest sx={{ width: "100%" }}>
                                    Add to Cart
                                </ButtonLatest>
                                <ButtonLatest sx={{ width: "100%", background: palette.secondary.light, color: "#000" }}>
                                    Select Options
                                </ButtonLatest>
                            </Box>
                        </Box>
                    ))
                    }
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, marginTop: "20px" }}>
                    {
                        popularProducts?.length===0 && (
                            <Box>
                                <Typography>No products Found</Typography>
                            </Box>
                        )
                    }
                    {popularProducts?.map((pro: any, ind: number) => (
                        <Box key={ind}>
                            <Card  sx={{ width: "305.08px", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: palette.secondary.light, padding: "30px" }}>
                                    <Image
                                        src={pro?.image}
                                        alt="product"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                </Box>
                                <Box sx={{ padding: "30px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", textAlign: "left" }}>{pro?.title}</Typography>
                                </Box>
                            </Card>
                            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "left", fontSize: "17px", marginTop: "20px", color: palette.primary.main }}>${pro?.priceStart} - ${pro?.priceEnd}</Typography>
                            <Box sx={{ marginBottom: "30px", marginTop: "17px", display: "flex", justifyContent: "space-between", gap: 1 }}>
                                <ButtonLatest sx={{ width: "100%" }}>
                                    Add to Cart
                                </ButtonLatest>
                                <ButtonLatest sx={{ width: "100%", background: palette.secondary.light, color: "#000" }}>
                                    Select Options
                                </ButtonLatest>
                            </Box>
                        </Box>
                    ))
                    }
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 3, marginTop: "20px" }}>
                    {
                        featuredProducts?.length===0 && (
                            <Box>
                                <Typography>No products Found</Typography>
                            </Box>
                        )
                    }
                    {featuredProducts?.map((pro: any, ind: number) => (
                        <Box key={ind}>
                            <Card  sx={{ width: "305.08px", "&:hover": { transform: "scale(1.05)" }, transition: "0.5s ease" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: palette.secondary.light, padding: "30px" }}>
                                    <Image
                                        src={pro?.image}
                                        alt="product"
                                        width={300}
                                        height={300}
                                        priority
                                    />
                                </Box>
                                <Box sx={{ padding: "30px" }}>
                                    <Typography variant="body1" sx={{ fontWeight: 700, color: "#000", textAlign: "left" }}>{pro?.title}</Typography>
                                </Box>
                            </Card>
                            <Typography variant="h6" sx={{ fontWeight: 700, textAlign: "left", fontSize: "17px", marginTop: "20px", color: palette.primary.main }}>${pro?.priceStart} - ${pro?.priceEnd}</Typography>
                            <Box sx={{ marginBottom: "30px", marginTop: "17px", display: "flex", justifyContent: "space-between", gap: 1 }}>
                                <ButtonLatest sx={{ width: "100%" }}>
                                    Add to Cart
                                </ButtonLatest>
                                <ButtonLatest sx={{ width: "100%", background: palette.secondary.light, color: "#000" }}>
                                    Select Options
                                </ButtonLatest>
                            </Box>
                        </Box>
                    ))
                    }
                </Box>
            </CustomTabPanel>
        </Box>
    );
}