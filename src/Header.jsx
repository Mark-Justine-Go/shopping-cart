import "./styles/header.css"
import { Link } from 'react-router';

function Header(){
    return(
        <div id="header">
            <h1>Virtual Vault</h1>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="shop">Shop</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    )
}

export {Header}