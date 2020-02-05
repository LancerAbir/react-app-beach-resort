import React from 'react';
import Hero from '../Hero';
import Banner from '../Banner';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found" >
                <Link to='/' className='btn-primary'> return home </Link>
            </Banner>
        </Hero>
    );
};

export default Error;