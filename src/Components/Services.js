import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {

    const [state, setState] = useState({
        services: [
            {
                icon: <FaCocktail/>,
                title: "free cocktail",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaHiking/>,
                title: "free FaHiking",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaShuttleVan/>,
                title: "free shuttleVan",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            },
            {
                icon: <FaBeer/>,
                title: "free beer",
                info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            }
        ]
    })


    return (
        <section className="services">
            <Title title="services title" />
            <div className="services-center">
                {state.services.map((item, index) => {
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;