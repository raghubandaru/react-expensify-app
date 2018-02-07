import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404 - url not found.<Link to="/">Go Home</Link>
    </div>
);

export default NotFoundPage;