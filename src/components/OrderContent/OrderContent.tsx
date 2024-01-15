"use client"
import React, { useState } from 'react'
import OrderForm from '../OrderForm/OrderForm'
import { createStructuredSelector } from 'reselect';
import { cart } from '@/store/cartSlice';
import { ConnectedProps, connect } from 'react-redux';
import CartItem from '../Cart/CartItem';
import { nanoid } from 'nanoid';

interface IOrderProps extends PropsFromRedux {}

const OrderContent: React.FC<IOrderProps> = ({ cart }) => {
    const [showAcceptModel, setShowAcceptModel] = useState(false)
    const [statusText, setStatusText] = useState("")

    const handleShowModal = () => {
        setShowAcceptModel(true)
    }

    const handleHiddenModal = () => {
        setShowAcceptModel(false)
    }

    const handleChangeStatusText = (str: string) => {
        setStatusText(str)
    }
  
    const content = cart.map(item => <CartItem key={nanoid()} product={item}/>)

    return (
        <div className='relative'>
            <OrderForm 
                cart={cart}
                handleShowModal={handleShowModal}
                handleHiddenModal={handleHiddenModal}
                handleChangeStatusText={handleChangeStatusText}
            />
            <div className='mt-10'>
                {content}
            </div>
            <div 
                className={`${showAcceptModel ? "opacity-100 visible" : "opacity-0 invisible"} absolute top-1/2 left-1/2 bg-slate-500 w-1/2 h-52 -translate-x-1/2 -translate-y-1/2 rounded-xl flex items-center justify-center duration-200`}
            >
                <h2 className='text-white text-xl font-bold'>
                    {statusText}
                </h2>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cart
})
const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(OrderContent)