// import React from "react";
// import { Box, Typography, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
// import { Link } from "react-router-dom";
// import { ArrowForwardIos } from "@mui/icons-material";
// import Paper from '@mui/material/Paper';
// import item1 from "../../assets/featured/featured-1.svg"
// import item2 from "../../assets/featured/featured-2.svg"
// import item3 from "../../assets/featured/featured-3.svg"
// import item4 from "../../assets/featured/featured-4.svg"
// import RemoveIcon from '@mui/icons-material/Remove';
// import AddIcon from '@mui/icons-material/Add';

// interface ProductData {
//     img: string,
//     name: string,
//     color: string,
//     price: string,
//     Quantity: string
// }

// const rows: ProductData[] = [
//     {
//         img: item1,
//         name: "Yellow T-shirt",
//         color: "#23A6F0",
//         price: "$20",
//         Quantity: "1"
//     },
//     {
//         img: item2,
//         name: "White T-shirt",
//         color: "#23856D",
//         price: "$10",
//         Quantity: "2"
//     },
//     {
//         img: item3,
//         name: "Pink T-shirt",
//         color: "#E77C40",
//         price: "$30",
//         Quantity: "1"
//     },
//     {
//         img: item4,
//         name: "Brown Jacket",
//         color: "#252B42",
//         price: "$20",
//         Quantity: "1"
//     }
// ];

// const Cart = () => {
//     return (
//         <Box>
//             <Box>
//                 <Stack maxWidth={"1050px"} mx={"auto"} py={"24px"} direction={"row"} gap={"15px"} sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: { xs: "center", sm: "start" }, p: { xs: "50px 20px", lg: "50px 0px" } }}>
//                     <Link to="/">
//                         <Typography variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
//                     </Link>
//                     <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
//                     <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>Cart</Typography>
//                 </Stack>
//             </Box>
//             <Box textAlign={"center"} pb="40px">
//                 <Typography variant="h1" color="secondary">Your Cart</Typography>
//             </Box>
//             <Box maxWidth={"1050px"} mx="auto" pb="40px" sx={{ p: { xs: "0 20px", lg: "0 0" } }}>
//                 <TableContainer component={Paper} elevation={0}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
//                             <TableRow>
//                                 <TableCell sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Product</TableCell>
//                                 <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Color</TableCell>
//                                 <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Quantity</TableCell>
//                                 <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Price</TableCell>
//                                 <TableCell align="center" sx={{ border: "none" }}></TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {rows.map((row) => (
//                                 <TableRow
//                                     key={row.name}
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell component="th" scope="row" align="left" sx={{ pl: "0px" }}>
//                                         <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
//                                             <Box sx={{ p: "0px 0px ", width: "150px", height: "120px", overflow: "hidden", borderRadius: "10px" }}>
//                                                 <img src={row.img} alt="" style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
//                                             </Box>
//                                             <Stack>
//                                                 <Typography variant="h5" fontWeight={"700"} color="secondary">{row.name}</Typography>
//                                             </Stack>
//                                         </Stack>
//                                     </TableCell>
//                                     <TableCell align="center">
//                                         <Box display="flex" justifyContent="center">
//                                             <Box width={"16px"} height={"16px"} sx={{ backgroundColor: row.color, borderRadius: "50%" }}></Box>
//                                         </Box>
//                                     </TableCell>
//                                     <TableCell align="center" >
//                                         <Stack direction={"row"} gap="20px" justifyContent={"center"} alignItems={"center"}>
//                                             <RemoveIcon fontSize="small" />
//                                             <Typography sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{row.Quantity}</Typography>
//                                             <AddIcon fontSize="small" />
//                                         </Stack>
//                                     </TableCell>
//                                     <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{row.price}</TableCell>
//                                     <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42" }}>X</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             </Box>
//             <Box maxWidth={"1050px"} mx="auto" display={"flex"} justifyContent={"flex-end"} p="50px 0 100px 0">
//                 <Box sx={{}}>
//                     <Stack width={"430px"} sx={{ p: "32px 24px 100px 24px" }} border={"1.5px solid #000000"} borderRadius={"4px"}>
//                         <Typography variant="h4" fontWeight={"500"} color="#000000" sx={{ pb: "24px" }}>Cart Total</Typography>
//                         <Stack direction={"row"} justifyContent={"space-between"}>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">Subtotal:</Typography>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">$300</Typography>
//                         </Stack>
//                         <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
//                         <Stack direction={"row"} justifyContent={"space-between"}>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">Shipping:</Typography>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">Free</Typography>
//                         </Stack>
//                         <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
//                         <Stack direction={"row"} justifyContent={"space-between"}>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">Total:</Typography>
//                             <Typography variant="h6" fontWeight={"400"} color="#000000">$300</Typography>
//                         </Stack>
//                     </Stack>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default Cart;


import React from "react";
import { Box, Typography, Stack, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowForwardIos } from "@mui/icons-material";
import Paper from '@mui/material/Paper';
import item1 from "../../assets/featured/featured-1.svg"
import item2 from "../../assets/featured/featured-2.svg"
import item3 from "../../assets/featured/featured-3.svg"
import item4 from "../../assets/featured/featured-4.svg"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeProductFromCart } from "../../store/Slices/CartSlice";

interface ProductData {
    img: string,
    name: string,
    color: string,
    price: string,
    Quantity: string
}

const rows: ProductData[] = [
    {
        img: item1,
        name: "Yellow T-shirt",
        color: "#23A6F0",
        price: "$20",
        Quantity: "1"
    },
    {
        img: item2,
        name: "White T-shirt",
        color: "#23856D",
        price: "$10",
        Quantity: "2"
    },
    {
        img: item3,
        name: "Pink T-shirt",
        color: "#E77C40",
        price: "$30",
        Quantity: "1"
    },
    {
        img: item4,
        name: "Brown Jacket",
        color: "#252B42",
        price: "$20",
        Quantity: "1"
    }
];

const Cart = () => {

    const cartData = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log("cart:", cartData);

    const incQuantity = (id) => {
        console.log("add++", id);
        dispatch(increaseQuantity(id));
    }

    const decQuantity = (id) => {
        console.log("dec--", id);
        dispatch(decreaseQuantity(id));
    }

    return (
        <Box>
            <Box>
                <Stack maxWidth={"1050px"} mx={"auto"} py={"24px"} direction={"row"} gap={"15px"} sx={{ justifyContent: { xs: "center", sm: "start" }, alignItems: { xs: "center", sm: "start" }, p: { xs: "50px 20px", lg: "50px 0px" } }}>
                    <Link to="/">
                        <Typography variant='h6' color='secondary' fontWeight={"700"}>Home</Typography>
                    </Link>
                    <ArrowForwardIos fontSize='small' htmlColor='#BDBDBD' />
                    <Typography variant='h6' color='#BDBDBD' fontWeight={"700"}>Cart</Typography>
                </Stack>
            </Box>
            <Box textAlign={"center"} pb="40px">
                <Typography variant="h1" color="secondary">Your Cart</Typography>
            </Box>
            <Box maxWidth={"1050px"} mx="auto" pb="40px" sx={{ p: { xs: "0 20px", lg: "0 0" } }}>
                <TableContainer component={Paper} elevation={0} sx={{ overflowX: "auto", width: "100%" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#FAFAFA" }}>
                            <TableRow>
                                <TableCell sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Product</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Color</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Quantity</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Price</TableCell>
                                <TableCell align="center" sx={{ fontSize: "14px", color: "#737373", border: "none" }}>Total Price</TableCell>
                                <TableCell align="center" sx={{ border: "none" }}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartData.map((item) => (
                                <TableRow
                                    key={item.title}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" align="left" sx={{ pl: "0px" }}>
                                        <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                                            <Box sx={{ p: "0px 0px ", width: "150px", height: "120px", overflow: "hidden", borderRadius: "10px" }}>
                                                <img src={item.image} alt="" style={{ objectFit: "cover", width: "100%", height: "100%", display: "block" }} />
                                            </Box>
                                            <Stack>
                                                <Typography variant="h5" fontWeight={"700"} color="secondary">{item.title}</Typography>
                                            </Stack>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Box display="flex" justifyContent="center">
                                            <Box width={"16px"} height={"16px"} sx={{ backgroundColor: item.color, borderRadius: "50%" }}></Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Stack direction={"row"} gap="20px" justifyContent={"center"} alignItems={"center"}>
                                            <Box sx={{ cursor: "pointer" }} onClick={() => decQuantity(item.id)}>
                                                <RemoveIcon fontSize="small" />
                                            </Box>
                                            <Typography sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{item.quantity}</Typography>
                                            <Box sx={{ cursor: "pointer" }} onClick={() => incQuantity(item.id)}>
                                                <AddIcon fontSize="small" />
                                            </Box>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{item.price}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42", fontWeight: "700" }}>{(item.price * item.quantity).toFixed(2)}</TableCell>
                                    <TableCell align="center" sx={{ fontSize: "16px", color: "#252B42" }}>
                                        <Box sx={{ cursor: "pointer" }} onClick={() => { console.log("hello"); dispatch(removeProductFromCart(item.id))}}>X
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Box
                sx={{
                    maxWidth: "1050px",
                    mx: "auto",
                    display: "flex",
                    justifyContent: "flex-end",  // Center instead of flex-end
                    p: "50px 20px 100px 20px",  // Added horizontal padding
                    flexDirection: { xs: "column", sm: "row" },  // Stack on small screens
                    alignItems: "center"
                }}
            >
                <Stack
                    width={{ xs: "280px", sm: "400px", lg: "400px" }}
                    sx={{ p: "32px 24px 100px 24px" }}
                    border={"1.5px solid #000000"}
                    borderRadius={"4px"}
                >
                    <Typography variant="h4" fontWeight={"500"} color="#000000" sx={{ pb: "24px" }}>Cart Total</Typography>
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Subtotal:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">$300</Typography>
                    </Stack>
                    <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Shipping:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Free</Typography>
                    </Stack>
                    <hr style={{ backgroundColor: "#000000", height: "1px", border: "none", opacity: "40%", margin: "16px 0" }} />
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">Total:</Typography>
                        <Typography variant="h6" fontWeight={"400"} color="#000000">$300</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Box >
    );
};

export default Cart;

