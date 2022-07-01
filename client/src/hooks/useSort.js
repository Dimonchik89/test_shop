import {useSelector} from "react-redux";

const useSort = () => {
    const {cart} = useSelector(state => state.cart)
    let arr = [...cart]

    const sortGood = (good) => {
        if(arr.length) {
            let goodInc =  false;
            arr.forEach((item, i) => {
                if(item.id === good.id) {
                    goodInc = true;
                    arr.splice(i, 1, {...item, quantity: item.quantity + 1})
                }
            })
            if(!goodInc) {
                arr.push({...good, quantity: 1})
            }

        } else {
            arr.push({...good, quantity: 1})
        }
        return arr
    }

    return {sortGood}
}
export default useSort;