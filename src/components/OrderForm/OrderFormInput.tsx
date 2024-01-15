import { IFormError, IFormTouch, IFormValues } from '@/types/types'
import { FormikTouched } from 'formik'
import React from 'react'

export enum EnumTypeInput {
    email="email",
    name="name",
    tel="tel"
}

interface IOrderFormInput {
    typeInput: EnumTypeInput,
    placeholder: string,
    handleChange: (e: React.ChangeEvent<any>) => void,
    handleBlur: (e: React.FocusEvent<any, Element>) => void,
    values: IFormValues,
    errors: IFormError,
    touched: FormikTouched<IFormTouch>
}

const OrderFormInput: React.FC<IOrderFormInput> = ({ typeInput, placeholder, handleChange, handleBlur, values, errors, touched }) => {
  return (
    <>
        <input
            type={typeInput}
            name={typeInput}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[typeInput]}
            className='mt-4 px-2 py-2 border-2 border-green-400 rounded-lg'
        />
        <span className='text-center text-red-500'>
            {errors[typeInput] && touched[typeInput] && errors[typeInput]}
        </span>
    </>
  )
}

export default OrderFormInput