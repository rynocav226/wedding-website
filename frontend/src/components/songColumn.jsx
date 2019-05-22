import React from 'react';
import { Card, CardTitle, CardBody, Table } from 'reactstrap';
import SongDraggable from './Song';
import { Droppable } from 'react-beautiful-dnd';

function RenderHeader(props) {
    if (props.headerType === "Song List") {
        return (
            <tr>
                <th>Artist</th>
                <th>Song</th>
                <th>
                    <select id="songCategory" onChange={props.handleOnChange}>
                        <option value={"All"}>All</option>
                        <option value={"Classics"}>Classics</option>
                        <option value={"Country"}>Country</option>
                        <option value={"Pop"}>Pop</option>
                        <option value={"Rock"}>Rock</option>
                    </select>
                </th>
            </tr>
        )
    } else {
        return (
            <tr>
                <th>Artist</th>
                <th>Song</th>
                <th>Category</th>
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
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        this.setState({
            selectValue: e.target.value
        });
        this.forceUpdate()
    }
    render(){
        const { selectValue } = this.state;
        return (
            <Droppable droppableId={this.props.column.id}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        <Card>
                            <CardBody>
                                <CardTitle>{this.props.column.title}</CardTitle>
                                <Table>
                                    <thead>
                                        <RenderHeader headerType={this.props.column.title} handleOnChange={this.handleOnChange.bind(this)} />
                                    </thead>
                                    <tbody>
                                        {this.props.tasks.map((task, index) =>

                                            <SongDraggable key={task.props._id} task={task} index={index} category={selectValue}/>
                                        )}
                                        {provided.placeholder}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </div>
                )}
            </Droppable>
        );
    }    
};
