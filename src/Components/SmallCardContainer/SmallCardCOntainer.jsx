import React from 'react'
import SmallCard from '../../Assets/SmallCard';
import "../../styles/SmallCard.scss";;

const SmallCardCOntainer = () => {
  return (
    <div>
        <div className="smallContainerHeading">
            <p className="heading">Related deals you might like for</p>


            <div className="smallBoxContainer">
                <SmallCard />
                <SmallCard />
                <SmallCard />
            </div>
        </div>
    </div>
  )
}

export default SmallCardCOntainer
