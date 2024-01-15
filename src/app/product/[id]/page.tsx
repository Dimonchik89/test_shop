import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import React from 'react'
import Layout from '@/components/Layout/Layout'
import ProductPageContent from '@/components/Product/ProductPageContent'


interface IProductPageProps {
    params: {
        id: string
    }
}

const page: React.FC<IProductPageProps> = ({ params: { id }}) => {

    return (
        <main className="flex flex-col min-h-screen">
            <div className="flex-1">
                <Header />
                <Layout>
                    <ProductPageContent id={id}/>
                </Layout>
            </div>
            <Footer/>
        </main>
    )
}

export default page