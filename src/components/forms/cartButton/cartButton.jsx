import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import styles from './cartButton.module.css'
import { BsCart4 } from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'
import { cartState } from '@/atoms/cart'



export default function CartButton(){
    const cart = useRecoilValue(cartState)
    const [open, setOpen] = useState(false)
    let menuAberto = false

    return(
        <div className={styles.cartbutton}onClick={() => {setOpen(!open)}}>
            <BsCart4 
                size={40}
            />
            <div className={styles.quantity}>{cart.length}</div>
            {open && <CartMenu/>}
        </div>
    )
}