import React, { Fragment, useState } from 'react'

import bos from "./photos/bos.jpg"
import sav from "./photos/sav.jpg"

import cart from "./photos/cartbtn.svg"
import love from "./photos/lovebtn.svg"
import check from "./photos/check.svg"
import Header from './header'

export default function Product() {
    return (
        <Fragment>
            <Header title={"Vegetables"}/>
            <section className='searchfilterview'>
                <Searchfilter text={ "Сabbage and lettuce (14)"} />
                <Searchfilter text={ "Сucumbers and tomatoes (10)"} />
                <Searchfilter text={ "Oinons and garlic (8)"} />
                <Searchfilter text={ "СPeppers (7)"} />
                <Searchfilter text={ "Potatoes and carrots (4)"} />
                <Searchfilter text={ "Сabbage and lettuce (14)"} />
                <Searchfilter text={ "Сucumbers and tomatoes (10)"} />
                <Searchfilter text={ "Oinons and garlic (8)"} />
                <Searchfilter text={ "СPeppers (7)"} />
                <Searchfilter text={ "Potatoes and carrots (4)"} />
            </section>
            <section className='productview'>
                <Pro bg={ bos } name={ "Boston Lettuce" } price={"1.10"} per={"Piece"} />
                <Pro bg={ sav } name={ "Purple Cauliflower" } price={ "1.85" } per={ "Kg" } />
                <Pro bg={ bos } name={ "Boston Lettuce" } price={"1.10"} per={"Piece"} />
                <Pro bg={ sav } name={ "Purple Cauliflower" } price={ "1.85" } per={ "Kg" } />
            </section>
        </Fragment>
    )
}




function Pro(props) {
    return (
        <div className='product'>
            <div className='productbg' style={ { backgroundImage: `url('${props.bg}')` } }></div>
            <div className='productinfo'>
                <div className='productname'>{ props.name}</div>
                <div className='productpriceper'><span className='productprice'>{ props.price }</span><span className='productper'>€ / { props.per}</span></div>
                <div className='productbtns'>
                    <button type="button" className="btn btn-light productbtn"><img src={love} alt="love icon"/></button>
                    <button type="button" className="btn btn-success productbtn"><img src={cart} alt="cart icon"/></button>
                </div>
            </div>
        </div>
    )
}




function Searchfilter(props) {
    const [checked, setcheck] = useState(false);

    const checkaction = () => {
        checked?setcheck(false) : setcheck(true);
    }
    
  return (
      <button type="button" onClick={checkaction} className="btn btn-light searchfilterbtn">{checked&&<img src={check} alt="checked"/>} {props.text}</button>
  )
}
