"use client"
import React, { useEffect } from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import Spinner from '../Spinner/Spinner'
import { product, loading, fetchOneProduct } from '@/store/oneProductSlice'
import Image from 'next/image'
import { createStructuredSelector } from 'reselect';
import { AppDispatch } from '@/store/store'
import { bindActionCreators } from '@reduxjs/toolkit'
import { addToCart } from '@/store/cartSlice'
import { ConnectedProps, connect } from 'react-redux'
import { useShowAddToCartModal } from '@/services/services'

interface IProductPageContentProps extends PropsFromRedux {
        id: string
}

const ProductPageContent: React.FC<IProductPageContentProps> = ({ addToCart, product, loading, fetchOneProduct, id }) => {
    const { handleAddToCart, showAddToCartModal} = useShowAddToCartModal({ addToCart, product })

    useEffect(() => {
        fetchOneProduct(`products/${id}`)
    }, [])

    return (
        <>
        {loading && <div className='mt-10'><Spinner/></div>}
            {product && !loading ?
                <div 
                    className='flex flex-col items-center py-6 rounded-md  shadow-slate-300 cursor-pointer mt-10 px-3'
                >
                    <Image
                        src={product?.image}
                        alt={product?.title}
                        width={300}
                        height={300}
                        className='object-contain h-72'
                    />
                    <div className='my-5 flex-auto'>
                        <div className='text-center text-base lg:text-xl font-semibold text-slate-700'>
                            {product?.title}
                        </div>
                        <div className='text-center mt-3 capitalize text-base font-semibold'>
                            {product?.category}
                        </div>
                        <div className='text-center mt-3'>
                            {`Rating: ${product?.rating.rate}`}
                        </div>
                        <div className='text-center mt-3'>
                            {product?.description}
                        </div>
                        <div className='text-center capitalize mt-3 font-semibold'>
                            {`price: ${product?.price}$`}
                        </div>
                    </div>
                    <button
                        className='bg-lime-500 text-white text-base font-semibold px-3 py-1 rounded-md hover:bg-lime-700 duration-200'
                        onClick={() => handleAddToCart()}
                    >
                        Придбати
                    </button>
                    <div 
                        className={`${showAddToCartModal ? 'visible opacity-100' : 'invisible opacity-0'} absolute py-4 top-1/2 left-1/2 duration-200 bg-sky-500 w-1/3 -translate-x-1/2 text-center rounded-md font-semibold text-white`}
                    >
                        Товар додано до корзини
                    </div>
                </div> : !product && !loading &&
                <div className="mt-10">
                    <ErrorComponent title={"Product not found"}/>
                </div>
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    product,
    loading,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchOneProduct: bindActionCreators(fetchOneProduct, dispatch),
    addToCart: bindActionCreators(addToCart, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProductPageContent)