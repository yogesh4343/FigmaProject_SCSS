import React from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";
import { FaGreaterThan } from "react-icons/fa";
import Dir from '../../Assets/Dir';
import Tools from '../../Assets/Tools';


const Header = () => {
  return (
    <div>
        <div className="main">
            <div className="box">
                <div className="heading">Best Website builders in the US</div>
                <hr />

                <div className="lastUpdateBox">
                    <div className="leftUpdateBox"> 
                    
                        <div className="date">
                        <span className='span'><CiCircleCheck /></span>
                        <span>Last Updated - February 22, 2020</span>
                        </div>
                        <div className="advertising">

                        <span className='span'> <CiCircleAlert /> </span>
                        <span>   Advertising Disclosure</span>
                        </div>
                     </div>
                    

                    <div className="rightUpdateBox">
                        <div className="topRelative">
                        <select>
                            <option >Top Relevant</option>
                            <option id="1">Option1</option>
                            <option id="2">Option2</option>
                        </select>
                        </div>
                    </div>
                </div>
                    <hr />
            </div>



            {/* tools  */}

          <div className="tools">
          <Tools val="Tools" />
          <Tools val="AWS Builder" />
          <Tools val="Start Build" />
          <Tools val="Build Supplies" />
          <Tools val="Tooling" />
          <Tools val="BlueHosting" />
          </div>

        <div className="dir">
        <div className="combine">
            <Dir val="Home"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine">
            <Dir val="Hosting for all"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine">
            <Dir val="Hosting"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>

            <div className="combine">
            <Dir val="Hosting 5"/>
                <span className="span"> <FaGreaterThan /> </span>
            </div>
            
                <Dir val="Hosting 6"/>
        </div>
            </div>
    </div>
  )
}

export default Header
