import { Box, Stack, Typography, useTheme } from "@mui/material";

interface ShopCardProps {
    data: {
        id: number;
        image: string;
        heading: string;
        items: number;
    };
}

const ShopCard: React.FC<ShopCardProps> = ({ data }) => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                mx:"auto",
                position: "relative",
                width: "100%",
                maxWidth: "250px",
                height: { xs: "180px", sm: "200px", md: "220px", lg: "250px" },
                backgroundImage: `url(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                },
            }}
        >
            {/* Overlay Text */}
            <Box sx={{ position: "relative", zIndex: 2, px: 2 }}>
                <Typography
                    variant="h6"
                    fontWeight="700"
                    color="white"
                    pb="5px"
                    sx={{
                        fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                    }}
                >
                    {data.heading.toUpperCase()}
                </Typography>
                <Typography
                    variant="body2"
                    color="white"
                    sx={{
                        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                    }}
                >
                    {data.items} Items
                </Typography>
            </Box>
        </Box>
    );
};

export default ShopCard;
