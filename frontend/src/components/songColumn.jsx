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

function RenderHeader(props) {
    if (props.headerType === "Songs") {
        return (
            <tr>
                <StyleTh>Artist</StyleTh>
                <StyleTh>Song</StyleTh>
                <StyleTh>
                    <select id="songCategory" onChange={props.handleOnChange}>
                        <option value={"All"}>All</option>
                        <option value={"Classics"}>Classics</option>
                        <option value={"Country"}>Country</option>
                        <option value={"Pop"}>Pop</option>
                        <option value={"Rock"}>Rock</option>
                    </select>
                </StyleTh>
            </tr>
        )
    } else {
        return (
            <tr>
                <StyleTh>Artist</StyleTh>
                <StyleTh>Song</StyleTh>
                <StyleTh>Blank
                </StyleTh>
            </tr>
        )
    }
}


export default class SongColumn extends React.Component {
    constructor() {
        super();
        this.state = {
            selectValue: 'All' // use this as default
        }
        this.handleOnChange=this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        this.setState({
        selectValue: e.target.value
        });
        this.forceUpdate()
    }
    render() {
        const { selectValue } = this.state;
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
                            <RenderHeader headerType={this.props.column.title} handleOnChange={this.handleOnChange.bind(this)}/>
                            
                            {this.props.tasks.map((task, index) =>
                                // <Greeting task={task} category={"Rock"} index={index} key={task.props._id} />
                                <SongDraggable key={task.props._id} task={task} index={index} category={selectValue}/>
                                
                            )}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}


