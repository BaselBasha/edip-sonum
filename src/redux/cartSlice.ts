import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
    id: string;
    name: string;
    price: number;
    size: string;
    icon: string;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        incrementQuantity: (state, action: PayloadAction<{ id: string; size: string }>) => {
            const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action: PayloadAction<{ id: string; size: string }>) => {
            const item = state.items.find(item => item.id === action.payload.id && item.size === action.payload.size);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
                }
            }
        },
        removeItem: (state, action: PayloadAction<{ id: string; size: string }>) => {
            state.items = state.items.filter(item => !(item.id === action.payload.id && item.size === action.payload.size));
        },
    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
