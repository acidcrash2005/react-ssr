import React, { Suspense } from 'react';
import {Link} from "react-router-dom";

import List from './List';

const Suspens: React.FC = () => {
    return (
        <div>Suspens
            <Suspense fallback={<div>Loading...</div>}>
                <List />
            </Suspense>

            <Link to="/">Home</Link>
        </div>
    );
};

export default Suspens;
