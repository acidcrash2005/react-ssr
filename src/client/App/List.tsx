import React from "react";

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

export default List;
