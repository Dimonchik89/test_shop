"use client"
import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { connect, ConnectedProps } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { allPages } from '@/store/productsSlice'
import PaginationItem from './PaginationItem'
import { nanoid } from 'nanoid'

interface IPaginationProps extends PropsFromRedux {}

const Pagination: React.FC<IPaginationProps> = ({ allPages }) => {
    const [pages, setPahes] = useState<React.ReactNode[]>([])

    useEffect(() => {
        if(!!allPages && allPages > 1) {
            const content = []
            for(let i = 1; i <= allPages; i++) {
                content.push(<PaginationItem key={nanoid()} title={i}/>)
            }
            setPahes(content)
        } else {
            setPahes([])
        }

        console.log(allPages);
        
    }, [allPages])


    return (
        <div className='mt-10'>
            <Layout>
                <div className="flex justify-center gap-5">
                    { pages }
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    allPages
})
const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Pagination)