import React, { useState } from 'react'
import '../../styles/App.scss';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {

  const [hide , setHide] = useState(false);;

  const hideFunc = ()=>{
    if(hide === true){
      setHide(false)
    }else{
      setHide(true)
    }
  };


  return (
    <div className='mainNav'>
                                <div className="mainHeader">
                                    <div className="search">
                                        <span><CiSearch /></span>
                                        <input type="" />
                                    </div>
                                    <div className="options">
                                        <div className="span">Categories</div>
                                        <div className="span">Website Builders</div>
                                        <div className="span">Todays Deals</div>
                                    </div>
                                    <div className="hamBurger" onClick={hideFunc}>
                                    <GiHamburgerMenu />
                                    </div>
                                </div>


                              {hide === true ?   <div className="mainHeaderHide">
                                <div className="options">
                                        <div className="span">Categories</div>
                                        <div className="span">Website Builders</div>
                                        <div className="span">Todays Deals</div>
                                    </div>
                                </div> : null}
    </div>
  )
}

export default NavBar
