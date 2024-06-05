import {useEffect} from "react";
import style from "../App.module.css";

function Home({funaddCart,setCategory,category}){

    async function display(){
        let col1 = await fetch("https://dummyjson.com/products");
        let val2 = await col1.json();
        setCategory(val2.products)
    }
    
    useEffect(()=>{
        display();
    },[])
 

    return(
        <>
        <div className="container">
        
                    <div className="row">
                        {
                            category.map((ele,i)=>(
                                <>
                                <div className="col-12 col-md-4 col-lg-2 mt-2 mb-2" key={i}>
                                    <div className= {`card ${style.card}`}>
                                    <img className={style.image} src={ele.thumbnail} alt={ele.title}/>
                                    <p>{ele.title}</p>

                                    <div className="row">

                                        <div className="col-md-6">{ele.price+"$"}</div>
                                        <div className="col-md-6">
                                            <input type="button" value="ADD" onClick={()=>{funaddCart(ele)}}></input>
                                        </div>

                                    </div>
                                    
                                    </div>
                                </div>
                                


                               </> 
                            ))
                        }
                    </div>
        </div>


        </>
    )
}
export default Home;