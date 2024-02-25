import React from 'react'
import img from "../Images/img.png";
import Button from './Button';
import Off from './Off';

const SmallCard = () => {
  return (
    <div>
            <div className="cardMainSmall">
                <div className="images"><img src={img} alt="img" /></div>
                <div className="offCont"> <Off off="20% Off" /> <Off off="Limited time " /> </div>
                <div className="cardName">Webbuilder 1</div>
                <div className="">Computer  Modern clasic with wix support</div>
                <div className="smallCardPrice">
                    <div className="newPrice">$39.96</div>
                    <div className="oldPrice">$49.96</div>
                    <div className="discount">(20% Off)</div>
                </div>

                <Button val="View Deal" />
            </div>        
    </div>
  )
}

export default SmallCard
