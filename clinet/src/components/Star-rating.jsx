import React from 'react';
import ReactStars from 'react-rating-stars-component'; 
    function ReadStars (props) {
        // To check the screen width and make the star size fit for it 
        let size1;
        if(window.innerWidth >= 701 && window.innerWidth <= 1050){
            size1=25;
        }else{
            if(window.innerWidth <= 700){
                size1=15;
            }else{
                size1=30;
            }
        }
        // console.log(size1);
    return (
        // all these attributes are set by the author of the package
        <ReactStars 
            value={props.value}
            count={5}
            size={size1}
            edit={false}
            isHalf={true}
            activeColor="#ffea00"
        /> 
    )
}
    export default ReadStars;
