import React, { Component } from 'react';
import styled from 'styled-components'
import SongColumn from './songColumn'
import SongItem from './Song'

class DislikedSongForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.props.addLeastFavSongs(this.state)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
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
        const dislikes = this.props.dislikedSongs.map((t) => (
            <SongItem
                key={t._id}
                {...t}
            />
        ));
        const dislikeColumn = { title: "Least Favorites", id: "dislikes", taskIds: [] }
        return (
            <div id="favSongs" className="container">
                <SongColumn key={dislikeColumn.id} column={dislikeColumn} tasks={dislikes} taskIds={[]} />
                <button onClick={this.handleSubmit}>Submit Song</button>
            </div>
        )
    }
}

export default DislikedSongForm;