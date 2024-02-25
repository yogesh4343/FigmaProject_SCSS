import React from 'react'
import LargeCard from '../../Assets/LargeCard';
import { IoTrophyOutline } from "react-icons/io5";
import { IoDiamondOutline } from "react-icons/io5";
import "../../styles/LargeCard.scss";;

const LargeCardComponent = () => {
  return (
    <div className="allLarge">
              <LargeCard id="1" tag="Best Choice"  Trophy=<IoTrophyOutline /> paraUpper1="WixPro 72-Inch Responsive Website Builder- " paraUpper2="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" middleHeading="Main highlights"   paraLower="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." rating="9.8" ratingVal="Exceptional" imageName="Builder 1"    />

              <LargeCard id="2" tag="Best Value"  Trophy=<IoDiamondOutline />  paraUpper1="SiteCraft 68-Inch Ultimate Web Design Studio- " paraUpper2=" Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)" middleHeading="Main highlights"   paraLower="[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations." rating="9.5" ratingVal="Excellent" imageName="Biulder"   />



              <LargeCard id="3" paraUpper1="WixPro 72-Inch Responsive Website Builder- " paraUpper2="Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)" middleHeading="Main highlights"   paraLower="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." rating="9.3" ratingVal="Exceptional" imageName="Builder 1"    />



              <LargeCard id="4" paraUpper1="CDK Resposive Builder:    "   off="26% Off"  paraUpper2="An extensive library of widgets and apps, and detailed step-by-step guides" middleHeading="Main highlights"   paraLower="[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides." rating="9.1" ratingVal="Very Good" imageName="CDK"  highlightOne="building responsive" highlightTwo="Cool" highlightThree="Docs" one="Documentation" two="Easy Use " three="Out of box"    />


    </div>
  )
}

export default LargeCardComponent
