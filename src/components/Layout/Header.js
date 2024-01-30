import React from 'react';
import { Fragment } from 'react';
import classes from './Header.module.css';
import MealsPicture from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Food Order</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={MealsPicture} alt="A table full of delicious food!" />
            </div>
        </>
    )
}

export default Header;