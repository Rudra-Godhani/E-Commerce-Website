import { Box, Checkbox, FormControlLabel, FormGroup, Slider, Stack, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React from 'react'

function valuetext(value: number) {
    return `${value}°C`;
}

const minDistance = 10;

const Filters = () => {
    const [value2, setValue2] = React.useState<number[]>([20, 80]);

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue as number[]);
        }
    };

    return (
        <Box px="20px">
            <Typography variant='h3' fontWeight={"700"} color='#000000' pb="20px">Filter by</Typography>
            <Box>
                <Stack>
                    <Stack pb="12px" direction={"row"} marginLeft={"-8px"}>
                        <KeyboardArrowLeftIcon />
                        <Typography variant='h6' fontWeight="700" color='#000000'>All Categories</Typography>
                    </Stack>
                    <Stack gap="12px">
                        <Typography variant='h6' color='#000000'>All Men's Clothing</Typography>
                        <Typography variant='h6' color='#000000'>Women's Clothing</Typography>
                        <Typography variant='h6' color='#000000'>Footwear</Typography>
                        <Typography variant='h6' color='#000000'>Watches</Typography>
                        <Typography variant='h6' color='#000000'>Beauty</Typography>
                        <Typography variant='h6' color='#000000'>Kid's Clothing</Typography>
                        <Typography variant='h6' color='#000000'>Hang Bags</Typography>
                        <Typography variant='h6' color='#000000'>Jwellery</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography variant='h6' fontWeight={"700"} color='#000000' pt={"30px"} pb={"12px"}>Price</Typography>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value2}
                        onChange={handleChange2}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        <Typography variant='body1' fontWeight={"500"} color="#000000">$ 12</Typography>
                        <Typography variant='body1' fontWeight={"500"} color="#000000">$ 425</Typography>
                    </Stack>
                </Stack>
            </Box>
            <Box>
                <Stack>
                    <Typography variant='h6' fontWeight={"700"} color='#000000' pt={"30px"} pb={"12px"}>Brands</Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label={<Typography variant='h6' color="#000000">All</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Zara</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Levi's</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Adidas</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Peter England</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Allen Solly</Typography>}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={<Typography variant='h6' color="#000000">Fabindia</Typography>}
                        />
                    </FormGroup>
                </Stack>
            </Box>
        </Box >
    )
}

export default Filters
