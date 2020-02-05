import React, { createContext, useState, useEffect } from 'react';
import items from './data';

export const RoomContext = createContext();

// Room Consumer
const RoomConsumer = RoomContext.Consumer;
export { RoomConsumer };

const RoomProvider = (props) => {

    const [values, setValues] = useState(
        {
            rooms: [],
            sortedRooms: [],
            featuredRooms: [],
            loading: true,
            type: "all",
            capacity: 1,
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            minSize: 0,
            maxSize: 0,
            breakfast: false,
            pets: false
        }
    )

    const formatData = (items) => {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url)
            let room = { ...item.fields, images, id }
            return room
        })
        return tempItems
    }

    // GetData
    useEffect(() => {
        let rooms = formatData(items);
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map(item => item.price));
        let maxSize = Math.max(...rooms.map(item => item.size));
        setValues(
            {
                rooms,
                featuredRooms,
                sortedRooms: rooms,
                loading: false,
                price: maxPrice,
                maxPrice,
                maxSize,
                type: "all",
                capacity: 1,
                minPrice: 0,
                minSize: 0,
                breakfast: false,
                pets: false
            }
        );
    }, [])

    //Change Handler
    const handleChange = (event) => {
        const target = event.target;
        const value = event.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;
        setValues(
            {
                [name]: value
            },
            filterRooms
        );
        // console.log(`this is type:${target}, this is name:${name}, this is value: ${value}`);
    };

    //filter Room
    const filterRooms = () => {
        let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = values

        // all the rooms
        let tempRooms = [...rooms];

        // transform value
        capacity = parseInt(capacity)

        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        setValues({
            sortedRooms: tempRooms
        })
    }

    // getRoom function for pass data in singleRoom.js
    const getRoom = (slug) => {
        let tempRooms = [...values.rooms]
        const room = tempRooms.find(room => room.slug === slug)
        return room
    }

    return (
        <RoomContext.Provider value={{ ...values, setValues, getRoom: getRoom, handleChange: handleChange }}>
            {props.children}
        </RoomContext.Provider>
    );
}


// Higher Order Component
export function withRoomConsumer(Component) {
    return function ConsumerWrapper(props) {
        return (
            <RoomConsumer>
                {value => <Component {...props} context={value} />}
            </RoomConsumer>
        )
    }
}

export default RoomProvider;







