'use client'
import React, { useEffect } from 'react'
import { fetchAllCategory, allCategory, filter, changeFilter, changeCurrentPage } from '@/store/productsSlice'
import { ConnectedProps, connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { createStructuredSelector } from 'reselect';
import { AppDispatch } from '@/store/store'
import FilterCategoryItem from './FilterCategoryItem'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

interface IFilterCategoryProps extends PropsFromRedux{}

const FilterCategory: React.FC<IFilterCategoryProps> = ({ allCategory, filter, fetchAllCategory, changeFilter, changeCurrentPage }) => {
    const router = useRouter()

    useEffect(() => {
        fetchAllCategory()
    }, [])

    const content = allCategory.map(item => <FilterCategoryItem key={nanoid()} title={item} filter={filter} changeFilter={changeFilter}/>)

    return (
        <div className='mt-10 md:mt-5'>
            <div className='flex gap-3 md:gap-7 flex-col md:flex-row'>
                {allCategory.length 
                    ? <button 
                        className={`${filter === 'all' ? "bg-sky-700" : "bg-sky-500"} px-2 lg:px-3 py-1 rounded-md text-xs lg:text-base text-white font-bold capitalize hover:bg-sky-700 duration-200`}
                        onClick={() => {
                            router.push(`/`)
                            changeFilter("all")
                            changeCurrentPage(1)
                        }}    
                    >
                        all
                    </button> : 
                    null
                }
                {content}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    allCategory,
    filter
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchAllCategory: bindActionCreators(fetchAllCategory, dispatch),
    changeFilter: bindActionCreators(changeFilter, dispatch),
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FilterCategory)