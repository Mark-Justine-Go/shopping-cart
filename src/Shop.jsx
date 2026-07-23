import { useEffect, useState } from "react";
import "./styles/shop.css";
import { useActionData, useOutletContext } from "react-router";

function Shop(){

    const [shopItemsArr, setShopItemsArr] = useState([]);
    const {addToCartTrigger} = useOutletContext();

    function addToCart(item){
        addToCartTrigger(prev => new Set([...prev, item]));
    }

    useEffect(() => {
            
        async function getShopItems(){
            const response = await fetch("https://dummyjson.com/c/cca2-3c8e-4ca2-8bfd");
            const data = await response.json();
            setShopItemsArr(data);
        }

        getShopItems();
    }, [])

    return(
        <div id="shop">
            {
                shopItemsArr.map(item => {
                    return <div className="card" style={{ backgroundImage: `url("${item.img}")` }} key={item.name}>
                        <div className="description">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={(e)=>addToCart(item)}>Add To Cart</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export {Shop}