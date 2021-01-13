import React from 'react'
import './styles.css'
import logo from '../../assets/images/logo.png';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Link } from 'react-router-dom'; 
import { useStateValue } from '../../StateProvider';


const Header = () => {
    const [{ cart }, dispatch] = useStateValue();


    return (
        <div className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    src={logo}
                    alt="logo"
                />
            </Link>
            
            <div className="header__search">
                <select className="header__searchCat">
                    <option className="searchbar_select_option" value="All">All</option>
                    <option className="searchbar_select_option" value="Cat1">Cat1</option>
                    <option className="searchbar_select_option" value="Cat2">Cat2</option>
                    <option className="searchbar_select_option" value="Cat3">Cat3</option>
                </select>
                <input className="header__searchInput" type="text" />
                <SearchOutlinedIcon  className="header__searchIcon"/>
            </div>
            
            
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">Hello guist</span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">Returns &amp;</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartOutlinedIcon /> 
                        <span className="header__optionLineTwo header__basketCount">{cart?.length}</span>
                    </div>
                </Link>
                
            </div>

        </div>
    );
  }
  
  export default Header;