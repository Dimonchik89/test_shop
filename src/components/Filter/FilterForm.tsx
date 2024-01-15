"use client"
import React, { useState } from 'react';
import { changeFindName, resetFindName } from '@/store/productsSlice';
import { ConnectedProps, connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch } from '@/store/store';

interface CustomElements extends HTMLFormControlsCollection   {
  findName: HTMLInputElement;
}
 
interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

interface IFilterForm extends PropsFromRedux {}

const FilterForm: React.FC<IFilterForm> = ({ changeFindName, resetFindName }) => {
    const [findName, setFindName] = useState("")

    const handleSubmit = (e: React.FormEvent<CustomForm>) => {
        e.preventDefault()
        
        if(findName.trim().length > 0) {
            changeFindName(findName)
        } else {
            resetFindName()
        }
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFindName(e.target.value)
    }

    return (
        <div>
            <form 
                onSubmit={handleSubmit}
                className='flex gap-2 lg:gap-3 flex-col md:flex-row'
            >
                <input 
                    onChange={handleChangeInput}
                    value={findName}
                    name="findName"
                    type="text"
                    placeholder='Введiть назву товару'  
                    className='border-2 border-sky-500 rounded-md px-1 md:px-2 outline-none focus:border-sky-700'  
                />
                <button 
                    type="submit"
                    className='border rounded-md px-3 md:px-4 lg:px-5 py-1 text-white font-bold bg-sky-500 hover:bg-sky-700 duration-200 text-sm md:text-base lg:text-xl'
                >
                    Пошук
                </button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    changeFindName: bindActionCreators(changeFindName, dispatch),
    resetFindName: bindActionCreators(resetFindName, dispatch),
})

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FilterForm)