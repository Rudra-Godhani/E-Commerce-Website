import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import productDesImage from "../../assets/productDatail/productImage.svg";
import { ArrowForwardIos } from "@mui/icons-material";
import { Product } from '../../Data';

// interface ProductProps {
//     product: Product; // The component expects a 'product' prop of type 'Product'
// }

const ProductDes: React.FC<Product> = ({ product }) => {
    console.log(product);
    return (    
        <Box>
            <Stack maxWidth={"1050px"} mx={"auto"} pt="10px" pb="10px" sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: "center" }}>
                <Stack direction={"row"}>
                    <Typography variant='h6' color='gray' fontWeight={"700"} sx={{ p: { xs: "24px 2.5px", sm: "24px" }, fontSize: { xs: "12px", sm: "14px" } }}>Description</Typography>
                    <Typography variant='h6' color='gray' fontWeight={"700"} sx={{ p: { xs: "24px 2.5px", sm: "24px" }, fontSize: { xs: "12px", sm: "14px" } }}>Additional Information</Typography>
                    <Typography variant='h6' color='gray' fontWeight={"700"} sx={{ p: { xs: "24px 2.5px", sm: "24px" }, fontSize: { xs: "12px", sm: "14px" } }}>Reviews (0)</Typography>
                </Stack>
                <hr color='#ECECEC' style={{ width: "100%", height: "2px" }} />
            </Stack>

            <Box sx={{ pt: "40px", pl: { xs: "40px", sm: "10px", md: "10px", lg: "0px" }, pr: { xs: "40px", sm: "0" } }} maxWidth={"1050px"} mx="auto">
                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { sm: "20px", md: "30px" }, justifyContent: { xs: "center", sm: "space-between" } }}>
                    <Box sx={{ p: "0px 0px ", width: { xs: "100%", sm: "332px" }, height: "392px", overflow: "hidden" }}>
                        <img src={product.images[0]} alt="" style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
                    </Box>
                    <Stack sx={{ gap: { xs: "30px", sm: "20px", md: "30px" }, pb: { xs: "30px", sm: "0" }, width: { xs: "100%", sm: "332px" } }}>
                        <Typography variant='h3' color="secondary" sx={{ fontSize: { sm: "22px", md: "24px" }, pt: { xs: "55px", sm: "0" } }}>Product Description</Typography>
                        <Typography variant='h6' color="gray">{product.descriptionLong}</Typography>
                        <Typography variant='h6' color="gray">A striking combination of soft blush pink and deep charcoal walls creates a dramatic yet cozy ambiance, setting the perfect backdrop for statement decor pieces.</Typography>
                        <Typography variant='h6' color="gray">The minimalist yet classical artwork in a black and gold frame enhances the aesthetic appeal, making it a focal point of sophistication.</Typography>
                    </Stack>
                    <Stack sx={{ gap: { xs: "30px", sm: "20px", md: "30px" }, width: { xs: "100%", sm: "332px" }, pb: { xs: "20px", sm: "0" } }}>
                        <Stack sx={{ gap: { xs: "30px", sm: "20px", md: "30px" } }}>
                            <Typography variant='h3' color='secondary' sx={{ fontSize: { sm: "22px", md: "24px" } }} >Additional Information</Typography>
                            <Stack gap="10px">
                                <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">{product.additionalInformation}</Typography>
                                </Stack>
                                {/* <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">Frame Material: High-quality wood</Typography>
                                </Stack>
                                <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">Chair Material: Soft velvet upholstery</Typography>
                                </Stack>
                                <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">Tabletop: White marble with gold.
                                    </Typography>
                                </Stack> */}
                            </Stack>
                        </Stack>

                        <Stack sx={{ gap: { xs: "30px", sm: "20px", md: "30px" } }}>
                            <Typography variant='h3' color='secondary' sx={{ fontSize: { sm: "22px", md: "24px" } }}>Customer Review</Typography>
                            <Stack gap="10px">
                                <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">{product.reviewsText[0]} – Emma L.</Typography>
                                </Stack>
                                <Stack direction={"row"} gap="20px">
                                    <ArrowForwardIos htmlColor='gray' />
                                    <Typography variant='h6' color="gray">{product.reviewsText[1]} – Mark R.</Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductDes
