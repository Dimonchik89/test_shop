import React, { useEffect, useState, memo } from "react";
import { fetchFilter, filters, loading, error} from "../../store/filter";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Button, FormGroup, Typography } from "@mui/material";
import FilterItem from "../filterItem/FilterItem";
import { useNavigate } from "react-router-dom";

const FilterBloc = memo(({fetchFilter, filters, loading}) => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleChecked = (e) => {
        if(e.target.checked) {
            if(search.length) {
                setSearch(prevState => prevState + e.target.name + ",")
            } else {
                setSearch(e.target.name + ",")
            }
        } else {
            const str = e.target.name + ","
            setSearch(prevState => prevState.replace(str, ""))
        }
    }

    const handleQuery = () => {
            navigate(`/filter?category=${search}`, { replace: true })
    }

    useEffect(() => {
        fetchFilter()
    }, [])

    if(loading) {
        return <h3>Loading...</h3>
    }

    const allFilter = filters.map(filter => <FilterItem key={filter} label={filter} name={filter} handleChecked={handleChecked}/>)

    return (
        <>
            <Typography
                component="h2"
                variant="h5"
                align="center"
            >
                Filter
            </Typography>
            <FormGroup>
                {allFilter}
            </FormGroup>
            <Button
                onClick={handleQuery}
            >
                Фильтр
            </Button>
        </>
    )
})

const mapStateToProps = createStructuredSelector({
    filters,
    loading,
    error
})

const mapDispatchToProps = (dispatch) => ({
    fetchFilter: bindActionCreators(fetchFilter, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterBloc);