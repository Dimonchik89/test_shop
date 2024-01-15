import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import CartList from '@/components/Cart/CartList'

const CartPage = () => {

    return (
        <main className="flex flex-col min-h-screen">
            <div className="flex-1">
                <Header />
                <Layout>
                        <CartList/>
                </Layout>
            </div>
            <Footer/>
        </main>
    )
}

export default CartPage