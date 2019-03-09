import React, {Component} from 'react'

function drag(ev, text) {
    ev.dataTransfer.setData("text", text);
}

const SongItem = ({ artist, song, category }) => (

    
    // <li style={{listStyle: 'none'}}>
    //     {artist} by {song} category is {category}
    // </li>
    <tr draggable="true" /*onDragStart={drag({artist})}*/>
        <td class="artist">{artist}</td>
        <td class="song">{song}</td>
        <td>{category}</td>
    </tr>
);

export default SongItem;
