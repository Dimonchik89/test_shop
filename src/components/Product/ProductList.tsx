'use client'
import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { fetchProducts } from "@/store/productsSlice/productsSlice";
import { connect, ConnectedProps } from "react-redux";
import { createStructuredSelector } from "reselect"
import { loading, error, actualProducts, changeFilter, handlePagination, changeCurrentPage } from "../../store/productsSlice"
import { bindActionCreators } from "@reduxjs/toolkit";
import { AppDispatch } from "@/store/store";
import Spinner from "../Spinner/Spinner";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ProductItem from "./ProductItem";
import { useSearchParams } from "next/navigation";

interface IProducts extends PropsFromRedux {}

const ProductList: React.FC<IProducts> = ({ actualProducts, loading, error, fetchProducts, changeFilter, handlePagination, changeCurrentPage }) => {
    const params = useSearchParams()

    const handleFetchIfSearchParams = async(searchParamPage: string) => {
        await fetchProducts(`products`)
            handlePagination(+searchParamPage)
            changeCurrentPage(+searchParamPage)
    }

    useEffect(() => {
        const searchParamCategory = params.get('category')
        const searchParamPage = params.get('page')
        if(searchParamCategory) {
            changeFilter(searchParamCategory)
            fetchProducts(`products/category/${searchParamCategory}`)
        } 
        if(searchParamPage) {
            handleFetchIfSearchParams(searchParamPage)
        }

        if(!searchParamCategory && !searchParamPage) {
            fetchProducts('products')
        }
    }, [params])

    const content = actualProducts?.map(item => <ProductItem key={item.id} product={item}/>)

    return (
        <div className="mt-10 md:mt-0 min-h-screen">
            <Layout>
                {loading && <Spinner/>}
                {error && <ErrorComponent title={error}/>}
                {!loading && !error &&
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{content}</div>
                }
                
            </Layout>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    actualProducts,
    loading,
    error
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    fetchProducts: bindActionCreators(fetchProducts, dispatch),
    changeFilter: bindActionCreators(changeFilter, dispatch),
    handlePagination: bindActionCreators(handlePagination, dispatch),
    changeCurrentPage: bindActionCreators(changeCurrentPage, dispatch)
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(ProductList);