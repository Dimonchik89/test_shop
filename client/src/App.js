import React, {lazy} from "react";
import { Routes, Route } from "react-router";
import Layout from "./components/layout/Layout";
import "./style/reset.scss";
import "./style/style.scss"

const HomePage = lazy(() => import('./components/pages/homePage/HomePage'))
const DevicePage = lazy(() => import('./components/pages/devicePage/DevicePage'));
const FilterPage = lazy(() => import('./components/pages/filterPage/FilterPage'));
const Cart = lazy(() => import('./components/cart/Cart'))
const LogUp = lazy(() => import("./components/logup/LogUp"));

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="/filter" element={<FilterPage/>}/>
                    <Route path="/:id" element={<DevicePage/>}/>
                </Route>
            </Routes>
            <Cart/>
            <LogUp/>
        </>

    )
}
export default App;