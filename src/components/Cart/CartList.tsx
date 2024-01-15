"use client"
import React from 'react'
import { cart } from '@/store/cartSlice'
import { createStructuredSelector } from 'reselect';
import { connect, ConnectedProps } from 'react-redux';
import { useRouter } from 'next/navigation';
import CartItem from './CartItem';
import { nanoid } from 'nanoid';

interface ICartListProps extends PropsFromRedux {}

const CartList: React.FC<ICartListProps> = ({ cart }) => {
    const router = useRouter()
    const content = cart.map(item => <CartItem key={nanoid()} product={item}/>)

    return (
        <>
            {
                cart.length ? 
                <div className='mt-14'>
                    <div className='flex flex-col min-h-[80vh]'>
                        <div className='flex-auto'>
                            {content}
                        </div>
                        <button 
                            onClick={() => router.push('/order')}
                            className='bg-sky-500 w-52 py-2 text-white font-bold hover:bg-sky-700 mx-auto rounded-lg'
                        >
                            Оформити замовлення
                        </button>
                    </div>
                </div> :
                <div className="mt-10">
                    <h2 className='text-center text-lg lg:text-2xl font-bold'>Cart is empty</h2>
                </div>
            }
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    cart
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartList)