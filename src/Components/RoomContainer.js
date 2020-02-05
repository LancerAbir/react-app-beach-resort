import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';

import { withRoomConsumer } from '../Context';

import Spinner from './Spinner';



const RoomContainer = ({context}) => {
  
    // Destructor Data
    const { loading, sortedRooms, rooms } = context
    // console.log(sortedRooms);
    // console.log(rooms);
    
   
    if(loading) {
        return <Spinner />
    }

    return (
        <div>
            <RoomsFilter rooms={rooms} />
            <RoomsList sortedRooms={sortedRooms} />
        </div>
    );
};

export default withRoomConsumer(RoomContainer);











// import React from 'react';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';

// import { RoomConsumer } from '../Context';

// import Spinner from './Spinner';



// const RoomContainer = () => {
//     return (
//             <RoomConsumer>
//                 {
//                     (value) => {

//                         const { loading, sortedRooms, rooms } = value
//                         console.log(loading);
                        
//                         if(loading) {
//                             return <Spinner />
//                         }
                       
//                         return (
//                             <div>
//                                 Hello form room container  
//                                 <RoomsFilter rooms={rooms} />
//                                 <RoomsList sortedRooms={sortedRooms} />
                                
//                             </div>
//                         )
//                     }
//                 }
//             </RoomConsumer>
//     );
// };

// export default RoomContainer;