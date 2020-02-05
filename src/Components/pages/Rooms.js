import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../RoomContainer';

const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="ours rooms" subtitle="Hi, they have however at time of booking please make it ."  >
                    <Link to='/' className='btn-primary'> back home </Link>
                </Banner>
            </Hero>
            <RoomContainer />
        </>
    );
};

export default Rooms;