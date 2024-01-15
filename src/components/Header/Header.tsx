'use client'

import Layout from "../Layout/Layout";
import { useRouter } from "next/navigation";
import { changeShowMenu, showMenu, changeFilter, changeCurrentPage } from "@/store/productsSlice";
import { ConnectedProps, connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { createStructuredSelector } from 'reselect';
import { AppDispatch } from "@/store/store";
import { cart } from "@/store/cartSlice";

interface IHeaderProps extends PropsFromRedux {}

const Header: React.FC<IHeaderProps> = ({ changeShowMenu, showMenu, changeFilter, changeCurrentPage, cart }) => {
    const router = useRouter()

    return (
        <div className="bg-lime-500 py-4 lg:py-6">
            <Layout>
                <div className="flex justify-between items-center">
                    <div 
                        className={`icon-menu ${showMenu && '_active'}`}
                        onClick={() => changeShowMenu()}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <h1 
                        className="uppercase text-2xl font-bold text-white cursor-pointer"
                        onClick={() => {
                            router.push("/")
                            changeFilter('all')
                            changeCurrentPage(1)
                        }}
                    >
                        shop
                    </h1>

                    <div 
                        className="cursor-pointer relative"
                        onClick={() => router.push("/cart")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        <div className={`${!!cart.length ? "block" : "hidden"} bg-red-600 absolute -top-2 -left-2 rounded-full w-5 h-5 text-center text-sm text-white font-bold`}>
                            {cart.length}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    showMenu,
    cart
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    changeShowMenu: bindActionCreators(changeShowMenu, dispatch),
    changeFilter: bindActionCreators(changeFilter, dispatch),
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch),
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header);