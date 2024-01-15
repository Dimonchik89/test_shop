'use client'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { currentPage } from '@/store/productsSlice'
import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect';

interface IPaginationItemProps extends PropsFromRedux {
    title: number
}

const PaginationItem: React.FC<IPaginationItemProps> = ({ title, currentPage }) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const handleChangeParams = () => {
        const params = new URLSearchParams(searchParams.toString())
        params.set('page', `${title}`)        
        router.push(`?${params}`, { scroll: false })
    }

    return (
        <button 
            className={`${currentPage === title ? "bg-sky-700 text-slate-100" : 'bg-sky-500 text-white'} px-2 text-white font-bold hover:bg-sky-700 hover:text-slate-100 duration-200`}
            onClick={() => handleChangeParams()}
        >
            {title}
        </button>
    )
}

const mapStateToProps = createStructuredSelector({
    currentPage
})
const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(PaginationItem)