import {configureStore} from "@reduxjs/toolkit";
import devices from "./devices/devicesSlice";
import device from "./device/deviceSlice";
import cart from "./cart/cartSlice";
import filter from "./filter/filterSlice";
import filtersDevices from "./filtersDevices/filtersDevicesSlice";

const store = configureStore({
    reducer: {
        devices,
        device,
        cart,
        filter,
        filtersDevices
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store;