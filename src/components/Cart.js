import { useState } from "react";
import style from "../App.module.css";
import Home from "./Home";
function Cart(props){
    let arr = props.data;
    let total = arr.reduce((acc,item) => acc + item.price,0);
    

    return(
        <>
            <div className={style.Cart2}>
            <div className={style.cartDiv}>
                {
                    arr.map((x)=>(

                        <ul>
                            <li>{x.title}-{x.price+`$`}</li>
                        </ul>

                    ))
                }
                {
                    <h6>Total:{total}</h6>
                }
            </div>
            </div> 

        </>
    )
}
export default Cart;