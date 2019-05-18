import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class SongDraggable extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.props._id} index={this.props.index}>
                {(provided) => (
                    <tr
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                            <td className="artist">{this.props.task.props.artist}</td>
                            <td className="song">{this.props.task.props.song}</td>
                            <td>{this.props.task.props.category}</td>
                    </tr>
                )}
            </Draggable>
        )
    }
}
