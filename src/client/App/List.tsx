import React from "react";
import fetch from 'node-fetch';

interface Data {
    title:string,
    created:string
}

interface Props {
    data: Data
}

const List:React.FC<Props> = ({data}) => {
    const {results} = data;

    return <ul>
        {
            results.map(
                film => <li key={film.created}>{film.title}</li>
            )
        }
    </ul>
}

export default React.lazy(() => new Promise(async (resolve) => {
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();

    resolve({default: () => <List data={data} />});
}));
