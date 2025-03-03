import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//     img: string,
//     title: string,
//     description: string,
//     price: string,
//     retailPrice: string,
//     color: string
// }

// const initialState = {
//     img: "",
//     title: "",
//     description: "",
//     price: "",
//     retailPrice: "",
//     color: ""
// }
interface CartItem {
    id: number;
    title: string;
    description: string,
    price: number;
    quantity: number;
    image: string;
    color: string,
    availability: Boolean,
    rating: number,
    brand: string,
    category: string
}

type CartState = CartItem[];

const initialState: CartState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProduct = state.find((item) => item.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push(action.payload);
            }
        },
        removeProductFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.find((item) => item.id === action.payload);
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const existingProduct = state.find((item) => item.id === action.payload);
            if (existingProduct && existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
            }
        }
    }
})

export const { addProductToCart, removeProductFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;