import React from 'react';
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.tr`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${props => (props.isDragging ? 'lightgreen' : 'white')};
`;

function RenderArtist(props) {    
  if (props.selectedCategory === "All") {
      return (
              <td className="artist">{props.artist}</td>
      )
  }

  if (props.selectedCategory === props.category) {
      return (           
              <td className="artist">{props.artist}</td>
      )
  }
  return null
}

function RenderSong(props) {    
  if (props.selectedCategory === "All") {
      return (
              <td className="song">{props.song}</td>
      )
  }

  if (props.selectedCategory === props.category) {
      return (
              <td className="song">{props.song}</td>
      )
  }
  return null
}

function RenderCategory(props) {
  if (props.selectedCategory === "All") {
      return (
          <td className="category">{props.category}</td>
      )
  }

  if (props.selectedCategory === props.category) {
      return (
          <td className="category">{props.category}</td>
      )
  }
  return null
}

export default class SongDraggable extends React.Component {
  render() {
      return (
          <Draggable draggableId={this.props.task.props._id} index={this.props.index} category={this.props.category}>
              {(provided, snapshot) => (
                  <Container
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                  >
                      <RenderArtist artist={this.props.task.props.artist} song={this.props.task.props.song} category={this.props.task.props.category} selectedCategory={this.props.category}/>
                      <RenderSong artist={this.props.task.props.artist} song={this.props.task.props.song} category={this.props.task.props.category} selectedCategory={this.props.category} />
                      <RenderCategory artist={this.props.task.props.artist} song={this.props.task.props.song} category={this.props.task.props.category} selectedCategory={this.props.category} />
                  </Container>
              )}
          </Draggable>
      )
  }
}
