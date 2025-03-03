import { Box, Button, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link, useParams } from 'react-router-dom';
import productDetail1 from "../../assets/productDatail/productDetail1.svg"
import productDetail2 from "../../assets/productDatail/productDetail1.svg"
import productDetail3 from "../../assets/productDatail/productDetail2.svg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../../components/Navbar/Navbar';
import ProductDes from '../../components/ProductDetails/ProductDes';
import BestSellerProducts from '../../components/ProductDetails/BestSellerProducts';
import BrandsStrip from '../../components/ProductDetails/BrandsStrip';
import Footer from '../../components/Home/Footer';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../../store/Slices/CartSlice';
import { Product, productsData } from '../../Data';

const colors: string[] = ["#23A6F0", "#23856D", "#E77C40", "#252B42"]

const images = [productDetail1, productDetail2, productDetail3];
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%", // New slide enters from correct side
        opacity: 0,
    }),
    center: {
        x: 0, // Center the current image
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction > 0 ? "-100%" : "100%", // Current slide exits in opposite direction
        opacity: 0,
    }),
};


const ProductDetails = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const { id } = useParams();
    console.log(id);

    const product = productsData.find((product) => product.id === Number(id));

    if (!product) {
        return <Typography variant="h4" color="error">Product not found</Typography>;
    }

    const [value, setValue] = useState<number | null>(2);
    interface CartItem {
        id: number;
        title: string;
        description: string,
        price: number;
        quantity: number;
        images: string[];
        color: string[],
        availability: Boolean,
        review: number
    }

    const dispatch = useDispatch();
    const [isAdded, setIsAdded] = useState(false);

    const handleClick = (product: Product) => {
        console.log("clicked");
        if (isAdded) {
            console.log("inside isAdded");
            dispatch(removeProductFromCart(product.id));
            setIsAdded(false);
        } else {
            console.log("inside not isAdded");
            const cartItem = {
                id: product.id,
                title: product.title,
                description: product.descriptionSmall,
                price: product.price,
                quantity: 1,
                image: product.images[0],
                color: product.colors[0],
                availability: product.availability,
                rating: product.rating,
                brand: product.brand,
                category: product.category
            }
            dispatch(addProductToCart(cartItem));
            setIsAdded(true);
        }
    }


    return (
        <>
            <Navbar />
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Stack maxWidth={"1050px"} mx={"auto"} py={"24px"} direction={"row"} gap={"15px"} sx={{ justifyContent: { xs: "center", sm: "start" }, pl: { xs: "0px", sm: "20px", md: "0" }, alignItems: { xs: "center", sm: "start" } }}>
                    <Link to="/">
                        <Typography variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
                    </Link>
                    <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
                    <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>Shop</Typography>
                </Stack>
            </Box>
            <Box sx={{ backgroundColor: "#FAFAFA" }}>
                <Box key={product.id}>
                    <Box sx={{ gap: { xs: "30px", sm: "10px", md: "30px" }, pb: "48px", pt: { xs: "48px", sm: "0px", md: "0px" }, px: { xs: "33px", sm: "20px", md: "0", lg: "0" }, display: "flex", flexDirection: { xs: "column", sm: "row" }, maxWidth: { xs: "100%", sm: "1050px" }, mx: "auto" }}>
                        <Box sx={{ p: "0px 0px ", width: { xs: "100%", md: "100%" }, height: "auto", overflow: "hidden" }}>
                            <Stack gap={"20px"}>
                                <Box position="relative" width="100%" height="500px" overflow="hidden">
                                    <AnimatePresence custom={direction} mode="popLayout">
                                        <motion.img
                                            key={index}
                                            src={product.images[index]}
                                            alt={`Slide ${index}`}
                                            style={{
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                display: "block",
                                                objectFit: "cover",
                                            }}
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            custom={direction}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </AnimatePresence>

                                    {/* Previous Button */}
                                    <Button
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "10px",
                                            transform: "translateY(-50%)",
                                            color: "white",
                                        }}
                                        onClick={prevSlide}
                                    >
                                        <ArrowBackIos fontSize='large' htmlColor='#FFFFFF' />
                                    </Button>

                                    {/* Next Button */}
                                    <Button
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "10px",
                                            transform: "translateY(-50%)",
                                            color: "white",
                                        }}
                                        onClick={nextSlide}
                                    >
                                        <ArrowForwardIos fontSize='large' htmlColor='#FFFFFF' />
                                    </Button>
                                </Box>



                                <Stack direction={"row"} gap={"20px"}>
                                    <img src={product.images[1]} alt="" style={{ objectFit: "cover", width: "100px", height: "75px", display: "block" }} />
                                    <img src={product.images[2]} alt="" style={{ objectFit: "cover", width: "100px", height: "75px", display: "block" }} />
                                </Stack>
                            </Stack>
                        </Box>

                        <Stack p="24px" sx={{ width: { xs: "100%", sm: "50%", md: "60%" } }} height={"100%"}>
                            <Typography variant='h4' color="secondary" pb={"12px"}>{product.title}</Typography>
                            <Stack direction={"row"} gap={"10px"}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.1} sx={{ pb: "20px" }} value={product.rating} />
                                <Typography variant='h6' color="gray" fontWeight={"700"}>{product.noOfReviews} Reviews</Typography>
                            </Stack>
                            <Typography variant='h3' color="secondary" pb={"5px"}>${product.price}</Typography>
                            <Stack direction={"row"} pb={"32px"}>
                                <Typography variant='h6' fontWeight={"700"} color="gray" >Availability  : </Typography>
                                <Typography variant='h6' fontWeight={"700"} color="lightBlue" >In Stock</Typography>
                            </Stack>
                            <Typography variant='h6' color="#858585" >{product.descriptionSmall}</Typography>
                            <hr color='#BDBDBD' style={{ margin: "28px 0px" }} />
                            <Stack spacing={1.25} direction={"row"} sx={{ pb: { xs: "58px", sm: "68px" } }}>
                                {
                                    product.colors.map((color) => (
                                        <Box key={color} width={"30px"} height={"30px"} sx={{ backgroundColor: color, borderRadius: "50%" }}></Box>
                                    ))
                                }
                            </Stack>
                            <Stack sx={{ gap: { xs: "10px", sm: "5px", md: "10px" }, flexDirection: { xs: "column", sm: "row", md: "row" } }}>
                                <Button
                                    sx={{
                                        color: "#FAFAFA",
                                        backgroundColor: "#23A6F0",
                                        p: { md: "10px 10px", lg: "10px 20px" },
                                        whiteSpace: "nowrap",
                                        minWidth: "fit-content",
                                        width: "fit-content",
                                        alignSelf: "flex-start",
                                    }}
                                >
                                    Select Options
                                </Button>
                                <Stack direction={"row"} sx={{ gap: { xs: "5px", md: "10px" } }}>
                                    <Box key="favorite-icon" width={"40px"} height={"40px"} border={"1px solid #E8E8E8"} borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
                                        <FavoriteBorderIcon fontSize='small' />
                                    </Box>
                                    <Box key="cart-icon" width={"40px"} height={"40px"} border={"1px solid #E8E8E8"} borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} display={"flex"} onClick={() => handleClick(product)}>
                                        {isAdded ? <RemoveShoppingCartIcon fontSize="small" color="success" /> : <ShoppingCartIcon fontSize="small" />}
                                    </Box>
                                    <Box key="visibility-icon" width={"40px"} height={"40px"} border={"1px solid #E8E8E8"} borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} display={"flex"}>
                                        <VisibilityIcon fontSize='small' />
                                    </Box>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box >
                </Box >
            </Box>
            <ProductDes product={product} />
            <BestSellerProducts />
            <BrandsStrip />
            <Footer />
        </>
    )
}

export default ProductDetails
