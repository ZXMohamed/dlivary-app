import React, { Fragment } from 'react'


import cart from "./photos/cart.svg";
import search from "./photos/search.svg";


export default function Header(props) {
    return (
        <Fragment>
            <section className="header">
                <h1 className="pagemaintitle">{props.title}</h1>
                <span className="cartbtn"><img src={ cart } alt="cart button"/><div>8</div></span>
            </section>
            <section className="input-group mb-3 searchbar">
                <span className="input-group-text searchicon" id="basic-addon1"><img src={search} alt="search icon"/></span>
                <input type="search" className="form-control searchinput" placeholder="Search" />
            </section>
      </Fragment>
  )
}
