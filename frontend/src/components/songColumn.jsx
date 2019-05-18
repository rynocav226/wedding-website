import React from 'react';
import styled from 'styled-components'
import SongDraggable from './Song';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.table`
margin: 8px;
border: 1px solid lightgrey;
border-radius: 2px
width: 400px;

display: flex;
flex-direction: column;
`;
const Title = styled.caption`
padding: 8px;
`;
const TaskList = styled.tbody`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 100px;
`;

const StyleTh = styled.th`
    padding: 15px;
    min-width: 100px;
`



export default class SongColumn extends React.Component {
    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            <tr>
                                <StyleTh>Artist</StyleTh> 
                                <StyleTh>Song</StyleTh> 
                                <StyleTh>Category</StyleTh> 
                            </tr>
                            {this.props.tasks.map((task, index) =>
                                
                                <SongDraggable key={task.props._id} task={task} index={index} />
                            )}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}