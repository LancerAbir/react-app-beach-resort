import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';
import Spinner from './Spinner';
import Room from './pages/Room';


const Featured = () => {

    let { loading, featuredRooms } = useContext(RoomContext);

    const FRooms = featuredRooms.map(room => {
        return <Room key={room.id} room={room} />
    });


    return (
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {loading ? <Spinner /> : FRooms}
            </div>
        </section>
    );
};

export default Featured;