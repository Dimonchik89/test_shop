"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { changeCurrentPage } from '@/store/productsSlice'
import { connect, ConnectedProps } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppDispatch } from '@/store/store'

interface IFilterCategoryItem extends PropsFromRedux {
    title: String,
    filter: String,
    changeFilter: (str: String) => void,
}

const FilterCategoryItem: React.FC<IFilterCategoryItem> = ({ title, filter, changeFilter, changeCurrentPage }) => {
    const router = useRouter()

    return (
        <>
            <button 
                className={`${filter === title ? "bg-sky-700" : "bg-sky-500"} px-2 lg:px-3 py-1 rounded-md text-xs lg:text-base text-white font-bold capitalize hover:bg-sky-700 duration-200`}
                onClick={() => {
                    changeFilter(title)
                    changeCurrentPage(1)
                    router.push(`?category=${title}`)
                }}
            >
                {title}
            </button>
        </>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch)
})

const connector = connect(null, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FilterCategoryItem)