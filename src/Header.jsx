import "./styles/header.css"
import { Link, useOutletContext } from 'react-router';

function Header({cartItemsArr}){

    return(
        <div id="header">
            <h1>Virtual Vault</h1>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">Cart <sup id="cartItemCount">{cartItemsArr.size || 0}</sup></Link></li>
                </ul>
            </div>
        </div>
    )
}

export {Header}