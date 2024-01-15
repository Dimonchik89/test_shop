export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: IRating
}

export interface IRating {
    rate: number
    count: number
}

export interface ICart extends IProduct {
    quantity: number
}

export interface IFormValues {
    email?: string,
    name?: string,
    tel?: string
}


export interface IFormError extends IFormValues {
}

export interface IFormTouch extends IFormValues { }

export interface ISendEmail {
    values: IFormValues,
    cart: ICart[],
}