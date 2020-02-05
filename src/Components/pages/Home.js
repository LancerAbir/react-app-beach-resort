import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import Services from '../Services';
import Featured from '../Featured';


const Home = () => {
    return (
        <>
            <Hero>
                <Banner title="luxurious rooms" subtitle="rooms are available here">
                    <Link to='/rooms' className="btn-primary"> ours rooms </Link>
                </Banner>
            </Hero>
            <Services />
            <Featured />
        </>
    );
};

export default Home;