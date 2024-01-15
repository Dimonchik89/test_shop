"use client"
import { ICart } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppDispatch } from '@/store/store'
import { removeFromCart, increment, decrement } from '@/store/cartSlice'

interface ICartItemProps extends PropsFromRedux {
    product: ICart
}

const CartItem: React.FC<ICartItemProps> = ({ product, removeFromCart, increment, decrement }) => {
  return (
        <div 
            className='flex flex-col sm:flex-row items-center justify-center border-2 py-2 rounded-md shadow-md shadow-slate-300 px-6 mb-5'
        >
            <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={50}
                className='object-contain h-20'
            />
            <div className='my-5 flex-auto flex flex-col'>
                <div className='flex-auto text-center text-sm lg:text-xl font-semibold text-slate-700'>
                    {product.title}
                </div>
                <div className='text-center text-sm lg:text-base capitalize'>
                    {`price: ${product.price}$`}
                </div>
            </div>
            <div className='flex'>
                <button 
                    disabled={product.quantity <= 1}
                    className={`${product.quantity <= 1 ? "bg-gray-500" : "bg-sky-500 "} w-6 h-6 text-white font-bold hover:bg-sky-700`}
                    onClick={() => decrement(product.id)}
                >
                    -
                </button>
                <span 
                    className='mx-4 w-5 text-center'
                >
                    {product.quantity}
                </span>
                <button 
                    onClick={() => increment(product.id)}
                    className='bg-sky-500 w-6 h-6 text-white font-bold hover:bg-sky-700'
                >
                    +
                </button>
            </div>
            <button
                onClick={() => {
                    // handleAddToCart()
                    removeFromCart(product.id)
                }}
                className='bg-lime-500 text-white text-base font-semibold px-3 py-1 rounded-md hover:bg-lime-700 duration-200 ml-0 sm:ml-6 mt-5 sm:mt-0'
            >
                Вилучити
            </button>
        </div>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    removeFromCart: bindActionCreators(removeFromCart, dispatch),
    increment: bindActionCreators(increment, dispatch),
    decrement: bindActionCreators(decrement, dispatch)
})

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartItem)