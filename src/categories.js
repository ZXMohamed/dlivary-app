import React, { Fragment } from 'react'

import veg from "./photos/veg.jpg"
import bread from "./photos/bread.jpg"
import dre from "./photos/DRE.jpg"
import fru from "./photos/fru.jpg"
import swe from "./photos/SWE.jpg"
import pas from "./photos/PAS.jpg"
import { useNavigate } from 'react-router'
import Header from './header'


export default function Categories() {
    const link = useNavigate();
    return (
        <Fragment>
            <Header title={ "Categories" } />
            <section className="itemview">
                <Cat bg={ veg } name={ "Vegetables" } amount={ "43" } onclick={ link.bind(null,"/products")} />
                <Cat bg={ fru } name={ "Fruits" } amount={ "32" } />
                <Cat bg={ bread } name={ "Bread" } amount={ "22" } />
                <Cat bg={ swe } name={ "Sweets" } amount={ "56" } />
                <Cat bg={ pas } name={ "Pasta" } amount={ "43" } />
                <Cat bg={ dre } name={ "Drinks" } amount={ "43" } />
                <Cat bg={ dre } name={ "Drinks" } amount={ "43" } />
            </section>
        </Fragment>
    )
}




function Cat(props) {
  return (
      <div className="card item" onClick={props.onclick}>
          <div className="card-img-top itembg" style={ { backgroundImage: `url(${props.bg})` } }></div>
          <div className="card-body">
              <h5 className="card-title itemtitle">{props.name}</h5>
              <p className="card-text">({ props.amount })</p>
          </div>
      </div>
  )
}
