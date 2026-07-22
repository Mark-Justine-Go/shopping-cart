import { useEffect, useState } from "react";
import "./styles/shop.css";

function Shop(){

    const [shopItemsArr, setShopItemsArr] = useState([]);

    useEffect(() => {
            
        async function getShopItems(){
            const response = await fetch("https://dummyjson.com/c/cca2-3c8e-4ca2-8bfd");
            const data = await response.json();
            setShopItemsArr(data);
        }

        getShopItems();
    }, [])

    console.log(shopItemsArr)

    return(
        <div id="shop">
            {
                shopItemsArr.map(item => {
                    return <div className="card" style={{ backgroundImage: `url("${item.img}")` }}>
                        <div className="description">
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button>Add To Cart</button>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export {Shop}