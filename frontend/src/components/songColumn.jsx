import React from 'react';
import { Card, CardTitle, CardBody, Table } from 'reactstrap';
import SongDraggable from './Song';
import { Droppable } from 'react-beautiful-dnd';

const SongColumn = (props) => {
    return (
        <Droppable droppableId={props.column.id}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    <Card>
                        <CardBody>
                            <CardTitle>{props.column.title}</CardTitle>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Artist</th>
                                        <th>Song</th>
                                        <th>Category</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.tasks.map((task, index) =>
                                        
                                        <SongDraggable key={task.props._id} task={task} index={index} />
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
};

export default SongColumn;