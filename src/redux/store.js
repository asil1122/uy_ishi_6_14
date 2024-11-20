import { configureStore, createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import productReducer, { addCart, deleteProduct, toggleAmount, totalCount, totalPrice } from "./reducers/product-reducer";
import { loadState, saveState } from "../utils/storage";

const Middleware = createListenerMiddleware();
Middleware.startListening({
    matcher: isAnyOf(addCart, deleteProduct, toggleAmount),
    effect: (action, api) => {
        api.dispatch(totalCount()); 
        api.dispatch(totalPrice()); 
    }
});


export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    preloadedState: {
        product: loadState("product"),
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().prepend(Middleware.middleware),
})

store.subscribe(() => {
    saveState("product", store.getState().product);
})