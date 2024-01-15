"use client"
import React from 'react'
import { Formik } from 'formik';
import { ICart, IFormError, IFormValues } from '@/types/types';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { resetCart } from '@/store/cartSlice';
import { AppDispatch } from '@/store/store';
import OrderFormInput, { EnumTypeInput } from './OrderFormInput';
import { useRouter } from 'next/navigation'
import { changeFilter } from '@/store/productsSlice';
import { sendEmail } from '@/services/services';

interface IOrderForm extends PropsFromRedux {
  cart: ICart[],
  handleShowModal: () => void,
  handleHiddenModal: () => void,
  handleChangeStatusText: (str: string) => void
}

const OrderForm: React.FC<IOrderForm> = ({ cart, resetCart, handleShowModal, handleHiddenModal, handleChangeStatusText, changeFilter }) => {
  const router = useRouter()
    
  return (
    <div className='mt-10'>
        <Formik
          initialValues={{ name: '', email: '', tel: '' }}
          validate={(values: IFormValues) => {
          const errors: IFormError = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }

          if (!values.name) {
              errors.name = 'Required'
          }

          if(!values.tel) {
              errors.tel = 'Required'
          } else if(!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.tel)) {
              errors.tel = 'Invalid phone'
          }
          return errors;
       }}
       onSubmit={(values, { setSubmitting, resetForm }) => {

          sendEmail({ values, cart })
            .then(() => {
                handleChangeStatusText("Your order is accepted")
                handleShowModal()
                resetForm()
                resetCart()
                console.log(JSON.stringify({...values, cart}, null, 2));
                

                setTimeout(() => {
                    handleHiddenModal()
                    changeFilter("all")
                    router.push("/")
                }, 1500)
              
            }) 
            .catch(error => {
              if (error instanceof Error) {
                handleChangeStatusText(error.message)
                handleShowModal()

                setTimeout(() => {
                    handleHiddenModal()
                }, 1500)
              }
              
            })
            .finally(() => {
              setSubmitting(false);
            })
          
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
       }) => (
        <form 
            onSubmit={handleSubmit}
            className='flex flex-col mx-auto w-full sm:w-1/2 lg:w-1/3'
        >
          <OrderFormInput 
            typeInput={EnumTypeInput.name}
            placeholder="Name"  
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />

          <OrderFormInput 
            typeInput={EnumTypeInput.email}
            placeholder="Email"  
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />
          <OrderFormInput 
            typeInput={EnumTypeInput.tel}
            placeholder="Phone"  
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
            errors={errors}
            touched={touched}
          />

            <button 
                className='mt-5 py-1 bg-green-400 rounded-l-lg text-white font-bold hover:bg-green-700 duration-200' 
                type="submit" 
                disabled={isSubmitting}
            >
                Submit
            </button>
        </form>
       )}
     </Formik>
    </div>
  )
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  resetCart: bindActionCreators(resetCart, dispatch),
  changeFilter: bindActionCreators(changeFilter, dispatch),
})

const connector = connect(null, mapDispatchToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(OrderForm)