import { emailTemplate } from "@/email/emailTemplate"
import { IProduct, ISendEmail } from "@/types/types"
import axios from "axios"
import { useState } from "react"

const sendEmail = async ({ values, cart }: ISendEmail) => {

    return await axios({
        url: "https://apiconfig.mailtarget.co/v1/layang/transmissions",
        method: "POST",
        data: emailTemplate({ values, cart }),
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer Lsb9U6TDge3yGWpfjp1aLCy7"
        }
    })
}

const useShowAddToCartModal = ({ addToCart, product }: { addToCart: (arg: IProduct) => void, product: any }) => {
    const [showAddToCartModal, setShowAddToCartModal] = useState(false)

    const handleAddToCart = () => {
        addToCart(product)
        setShowAddToCartModal(true)

        setTimeout(() => {
            setShowAddToCartModal(false)
        }, 3000)
    }

    return { showAddToCartModal, handleAddToCart }
}

export { sendEmail, useShowAddToCartModal }