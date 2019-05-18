import React, { Component } from 'react';
import styled from 'styled-components'
import SongColumn from './songColumn'
import SongItem from './Song'

const Container = styled.div`
    display: flex;
`;

const TaskList = styled.div`
padding: 8px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
flex-grow: 1;
min-height: 100px;
`;

class FavSongForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: [{
                _id:"32",
                song: "Wow",
                artist: "Roar",
                category: "Music"
                }
            ],
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: ""   
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);        
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleSubmit() {
        this.props.addFavSongs(this.state)
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        this.setState({ [e.target.name]: data })
    }

    jsonIsEmpty(jsonArray) {
        for (let key in jsonArray) {
            if (jsonArray[key] !== "")
                return false
        }
        return true
    }

    render() {
        
        const likes = this.props.likedSongs.map((t) => (
            <SongItem
                key={t._id}
                {...t}
            />
        ));
        const likeColumn = { title: "Add Your 5 favorites", id: "likes", taskIds: [] }
        return(
            <div id="favSongs" className="container">
                <SongColumn key={likeColumn.id} column={likeColumn} tasks={likes} taskIds={[]} />
                <button onClick={this.handleSubmit}>Submit Song</button>
            </div>
        )
    }
}

export default FavSongForm;
