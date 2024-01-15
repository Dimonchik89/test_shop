import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Layout from '@/components/Layout/Layout'
import React from 'react'
import OrderContent from '@/components/OrderContent/OrderContent'


const page = () => {
  
    return (
        <main className="flex flex-col min-h-screen">
            <div className="flex-1">
                <Header />
                <Layout>
                    <OrderContent/>
                </Layout>
            </div>
            <Footer/>
        </main>
  )
}

export default page