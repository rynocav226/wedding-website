import React, { Component } from 'react'
import { apiCall } from "../services/api";
import ReactDom from "react-dom"
import SongItem from './SongItem';

class FavSongForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            song1: "",
            song2: "",
            song3: "",
            song4: "",
            song5: ""   
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleSubmit() {
        var favSong = [this.state.song1, this.state.song2, this.state.song3, this.state.song4, this.state.song5]
        this.props.addFavSongs(this.state)

    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
    }

    jsonIsEmmpty(jsonArray) {
        for (let key in jsonArray) {
            if (jsonArray[key] !== "")
                return false
        }
        return true
    }

    handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        this.setState({ [e.target.name]: data })
    }

    allowDrop(e){
        e.preventDefault();
    }

    componentDidUpdate() {
        console.log("Component did update Dislike form")
        // console.log(this.props.dislikes)
        // console.log(this.state)
        if (this.jsonIsEmmpty(this.state) && !this.jsonIsEmmpty(this.props.likes)) {
            this.setState({ song1: this.props.likes.song1 })
            this.setState({ song2: this.props.likes.song2 })
            this.setState({ song3: this.props.likes.song3 })
            this.setState({ song4: this.props.likes.song4 })
            this.setState({ song5: this.props.likes.song5 })
        }
    }

    render() {
        // this.state.song1 = this.props.songs[0]
        // if(this.props.songs){
        // this.setState({"song1" : this.props.songs[0]})
        // console.log("Songs in fav song form hit")
        // }
        // console.log("Props")
        // console.log(this.props)
        return(
            <div id="favSongs">
                <h1>Favorite Songs</h1>
                1. <input type="text" name="song1" onDrop={this.handleDrop} value={this.state.song1} onChange={this.handleChange}></input><br/>
                2. <input type="text" name="song2" onDrop={this.handleDrop} value={this.state.song2} onChange={this.handleChange}></input><br/>
                3. <input type="text" name="song3" onDrop={this.handleDrop} value={this.state.song3} onChange={this.handleChange}></input><br/>
                4. <input type="text" name="song4" onDrop={this.handleDrop} value={this.state.song4} onChange={this.handleChange}></input><br/>
                5. <input type="text" name="song5" onDrop={this.handleDrop} value={this.state.song5} onChange={this.handleChange}></input><br/>
                <button onClick={this.handleSubmit}>Submit Song</button>
            </div>
        )
    }
}

export default FavSongForm;
