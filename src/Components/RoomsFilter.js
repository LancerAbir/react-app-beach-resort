import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';


//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({rooms}) => {
    
    const context  = useContext(RoomContext);

    // Destructor Data
    const { handleChange, type, price, minPrice, maxPrice, minSize, maxSize, capacity, breakfast, pets } = context

    //get unique types
    let types = getUnique(rooms, 'type');
    
    //add all types
    types = ["all", ...types];
   
    //map in types
    types = types.map((item, index) => {
        return (
           <option value={item} key={index}> {item} </option> 
        )
    })

    let people = getUnique(rooms, 'capacity')
    people = people.map((item, index) => {
        return <option value={item} key={index}> {item} </option>
    })


    return (
        <section className="filter-container">
            <Title title="Search Rooms" />
            <form className="filter-form">
                {/* start select type */}
                    <div className="form-group">
                        <label htmlFor="type">room type</label>
                        <select name="type" id="type" className="form-control" value={type} onChange={handleChange}> 
                            {types}
                        </select>
                    </div>
                {/* end select type */}
                {/* start guests */}
                    <div className="form-group">
                        <label htmlFor="capacity">Guests</label>
                        <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}> 
                            {people}
                        </select>
                    </div>
                {/* end guests */}
            </form>
        </section>
    );
};

export default RoomsFilter;