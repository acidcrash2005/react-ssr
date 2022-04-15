import React, { Suspense } from 'react';
import {Link} from "react-router-dom";
import fetch from 'node-fetch';

interface Props {
}

const OtherComponent = React.lazy(() => new Promise(async (resolve) => {
    const {default: List} = await import('./List');
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    resolve({default: () => <List data={data} />});
}));

const Suspens: React.FC<Props> = () => {
    return (
        <div>Suspens
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>

            <Link to="/">Home</Link>
        </div>
    );
};

export default Suspens;
