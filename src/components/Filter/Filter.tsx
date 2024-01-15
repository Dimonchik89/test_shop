"use client"

import Layout from "../Layout/Layout";
import FilterCategory from "./FilterCategory";
import FilterForm from "./FilterForm";
import { showMenu } from "@/store/productsSlice";
import { ConnectedProps, connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

interface IFilterProps extends PropsFromRedux {
}

const Filter: React.FC<IFilterProps> = ({ showMenu }) => {

    return (
        <div 
            className={`py-14 shadow-lg shadow-slate-500 md:py-0 md:my-8 xl:my-10 absolute ${ showMenu ? 'translate-x-0 shadow-lg shadow-slate-500' : '-translate-x-full shadow-none'} h-4/6 md:h-auto bg-white md:static md:translate-x-0 duration-300`}>
            <Layout>
                <div className="flex flex-col items-center">
                    <FilterForm/>
                    <FilterCategory/>
                </div>
            </Layout>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    showMenu
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Filter);