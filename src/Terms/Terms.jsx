import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus vero ipsum iure laboriosam itaque laborum, omnis maxime labore veritatis quasi odit mollitia reiciendis animi. Amet, perspiciatis? Quo non tenetur minima.</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;