import React from 'react';
import Room from './pages/Room';

const RoomsList = ({sortedRooms}) => {
    // console.log(sortedRooms);

    if ( sortedRooms.length === 0 ) {
        return (
            <div className="empty-search">
                <h3> !!! unfortunately no room matched your search parameters </h3>
            </div>
        )
    }
    
    return (
        <section className="roomlist">
            <div className="roomslist-center">
                {
                    sortedRooms.map( item => {
                        return <Room key={item} room={item} />
                    })
                }
            </div>
        </section>
    );
};

export default RoomsList;