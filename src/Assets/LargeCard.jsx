import React from 'react'
import { FaStar } from "react-icons/fa";
import { IoTrophyOutline } from "react-icons/io5";
import { FaRegCircleCheck } from "react-icons/fa6";
import img from "../Images/img.png"
import Button from './Button';
import Off from './Off';

const LargeCard = ({id , tag , Trophy , off,  paraUpper1 , paraUpper2 , middleHeading , paraLower , rating , ratingVal , imageName , highlightOne , highlightTwo , highlightThree , one , two , three}) => {
    return (
        <>
            <div className="CardMain">
                <div className="left">
                    <img src={img} alt="img" />
                    <p className="cont">{imageName}</p>
                </div>

                <div className="middle">
                    <p className="paraUpper">
                        <strong>{paraUpper1}</strong> {paraUpper2}
                    </p>

                   {/* {off ?  <div className="offBox">
                      <div className="off"> {off}</div>
                    </div> : null } */}
                   {off ?  <Off off={off} /> : null }

                    <div className="middleHeading">
                       {middleHeading}
                    </div>

                    
                   {highlightOne ? <> <div className="docs">
                        <div className="docsInner">
                            <div className="rank"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightOne}</div>
                        </div>
                        
                        <div className="docsInner">
                            <div className="rank"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightTwo}</div>
                        </div>
                        
                        <div className="docsInner">
                            <div className="rank"> <span className='rankSpan'>9.9</span></div>
                            <div className="rankName">{highlightThree}</div>
                        </div>
                    </div>



                        <div className="useBox">
                            <p className="useBoxPara">Why we love it</p>

                            <div className="points">
                                <div className="pointOne"><FaRegCircleCheck />  {one} </div>
                            </div>
                            <div className="points">
                                <div className="pointOne"><FaRegCircleCheck />  {two}  </div>
                            </div>
                            <div className="points">
                                <div className="pointOne"><FaRegCircleCheck />  {three}</div>
                            </div>
                        </div>
                        </>

 : null }
                    {/* ==== */}
                    <div className="paraLower">
                        {paraLower}
                    </div>

                    <div className="showMore">
                        Show more ⋎
                    </div>
                </div>


                <div className="right">
                    <div className="rightTopBox">
                        <div className="num">{rating}</div>
                        <div className="Exceptional">{ratingVal}</div>
                        <div className="stars">
                            <div className="star"><FaStar />  </div>
                            <div className="star"><FaStar />  </div>
                            <div className="star"><FaStar />  </div>
                            <div className="star"><FaStar />  </div>
                            <div className="star"><FaStar />  </div>
                        </div>
                    </div>

                    <Button />

                </div>
            <div className="id">
                {id}
            </div>

          {tag ?   <div className="bestSeller">
                    <div className="troffy"> {Trophy}  </div>
                    <div className="bestChoise">
                       {tag}
                    </div>
            </div> : null}
            </div>

        </>
    )
}

export default LargeCard
