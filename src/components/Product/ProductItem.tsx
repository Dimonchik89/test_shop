"use client"
import { IProduct } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'
import { addToCart } from '@/store/cartSlice'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppDispatch } from '@/store/store'
import { useShowAddToCartModal } from '@/services/services'

interface IProductItemProps extends PropsFromRedux {
    product: IProduct,
}

const ProductItem: React.FC<IProductItemProps> = ({ product, addToCart }) => {
    const router = useRouter()
    const { handleAddToCart, showAddToCartModal } = useShowAddToCartModal({ addToCart, product })

    return (
        <div 
            className='flex flex-col items-center border-2 py-6 rounded-md shadow-md shadow-slate-300 px-2 relative'
        >
            <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={300}
                className='object-contain h-72 cursor-pointer'
                onClick={() => router.push(`/product/${product.id}`)}
            />
            <div className='my-5 flex-auto flex flex-col'>
                <div className='flex-auto text-center text-base lg:text-xl font-semibold text-slate-700'>
                    {product.title}
                </div>
                <div className='text-center capitalize mt-1'>
                    {product.category}
                </div>
                <div className='text-center'>
                    {`price: ${product.price}$`}
                </div>
            </div>
            <button
                onClick={() => {
                    handleAddToCart()
                }}
                className='bg-lime-500 text-white text-base font-semibold px-3 py-1 rounded-md hover:bg-lime-700 duration-200'
            >
                Придбати
            </button>

            <div 
                className={`${showAddToCartModal ? 'visible opacity-100' : 'invisible opacity-0'} absolute py-4 top-1/2 left-1/2 duration-200 bg-sky-500 w-1/3 -translate-x-1/2 text-center rounded-md font-semibold text-white`}
            >
                Товар додано до корзини
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    addToCart: bindActionCreators(addToCart, dispatch)
})
const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProductItem)