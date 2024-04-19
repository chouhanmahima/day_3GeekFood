import React from 'react'
import './ReviewCard.css'

const ReviewCard = (props) => {
    return (
        <div>
            <div className='review'>
                <p>{props.review}</p>
            </div>
            <div className="reviewer-details">
                <img src={props.imgSrc} alt="image of the reviewer" ></img>
                <div>
                    <p className='reviewer-name'>{props.reviewerName}</p>
                    <p>{props.reviewerDesignation}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard