import React, { useContext, useState } from 'react';
import defaultBcg from '../../images/room-1.jpeg';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../../Context';

import StyledHero from '../StyledHero';



const SingleRoom = (props) => {
    
    const [ state, setstate ] = useState({
        slug: props.match.params.slug,
        defaultBcg
    })

    const { getRoom }  = useContext(RoomContext);
    const sRoom = getRoom(state.slug)
    
    // console.log(sRoom);
    // sRoom প্রথম বাঁর undefined ছিল তাই condition use করে undefined off করা হইছে
    if(!sRoom){
        return (
            <div className="error">
                <h3> ! Sorry no such could be found...</h3>
                <Link to="/rooms" className="btn-primary"> back rooms page </Link>
                <Link to="/" className="btn-primary"> back Home page </Link>
            </div>
        )
    }
    

    // Destructor Data
    const { name, price, size, capacity, pets, breakfast, description, extras, images } = sRoom

    // Destructor images
    const [ mainImg, ...arrayImg ] = images; 
    

    return (
        <>
            <StyledHero img={ mainImg || {...state.defaultBcg} }>
                <Banner title= {` ${name} room `} subtitle={` ${sRoom.name} rooms are available here  `}>
                    <Link to='/rooms' className="btn-primary"> back to rooms page </Link>
                </Banner>
            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {arrayImg.map( (item, index) => {
                        return <img key={index} src={item} alt={name} />
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3> details </h3>
                        <p> {description} </p>
                    </article>
                    <article className="info">
                        <h3> info </h3>
                        <h6> price : ${price} </h6>
                        <h6> size : ${size} SQFT </h6>
                        <h6>
                            max capacity : {
                            capacity > 1 ? `${capacity} people` : `${capacity} person`}
                        </h6>
                        <h6> {pets ? "pets allower" : "no pets allowed" } </h6>
                        <h6> {breakfast && "free breakfast included" } </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6> extras </h6>
                <ul className="extras">
                    {extras.map((item, index) => {
                        return <li key={index}> - {item}</li>
                    })}
                </ul>
            </section>
        </>
    );
};

export default SingleRoom;