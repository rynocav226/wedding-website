import React from 'react'
import {DragSource} from 'react-dnd'

// Drag sources and drop targets only interact
// if they have the same string type.
// You want to keep types in a separate file with
// the rest of your app's constants.
const Types = {
    SONG: 'song',
}

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const songSource = {
    beginDrag(props) {
        // Return the data describing the dragged item
        const item = { song: props.song }
        return item
    },

    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) {
            return
        }

        // When dropped on a compatible target, do something
        const item = monitor.getItem()
        const dropResult = monitor.getDropResult()
        // SongActions.moveCardToList(item.song, dropResult.listId)
    },
}

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
    return {
        // Call this function inside render()
        // to let React DnD handle the drag events:
        connectDragSource: connect.dragSource(),
        // You can ask the monitor about the current drag state:
        isDragging: monitor.isDragging(),
    }
}

function SongItem(props) {
    // Your component receives its own props as usual
    const { id } = props

    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource, artist, song, category } = props

    return connectDragSource(
        <tr draggable="true" /*onDragStart={drag({artist})}*/>
            <td className="artist">{artist}</td>
            <td className="song">{song}</td>
            <td>{category}</td>
        </tr>
    )
}

export default DragSource(Types.SONG, songSource, collect)(SongItem);



// import React from 'react'

// const SongItem = ({ artist, song, category }) => (


//     // <li style={{listStyle: 'none'}}>
//     //     {artist} by {song} category is {category}
//     // </li>
//     <tr draggable="true" /*onDragStart={drag({artist})}*/>
//         <td className="artist">{artist}</td>
//         <td className="song">{song}</td>
//         <td>{category}</td>
//     </tr>
// );

// export default SongItem;

