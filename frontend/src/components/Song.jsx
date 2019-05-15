import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.tr`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

const styleTR = styled.tr`
 border: 1px solid lightgrey
`;

const styleTD = styled.td`
 border: 1px solid lightgrey
`;

const SongContainer = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;


export default class SongDraggable extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.props._id} index={this.props.index}>
                {(provided, snapshot) => (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <td className="artist">{this.props.task.props.artist}</td>
                        <td className="song">{this.props.task.props.song}</td>
                        <td>{this.props.task.props.category}</td>

                    </Container>
                )}
            </Draggable>
        )
    }
}