import React from 'react'

const SongItem = ({ artist, song, category }) => (


    // <li style={{listStyle: 'none'}}>
    //     {artist} by {song} category is {category}
    // </li>
    <tr draggable="true" /*onDragStart={drag({artist})}*/>
        <td className="artist">{artist}</td>
        <td className="song">{song}</td>
        <td>{category}</td>
    </tr>
);

export default SongItem;