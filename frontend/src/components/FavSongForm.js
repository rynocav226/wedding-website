import React, { Component } from 'react'
import { apiCall } from "../services/api";

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
        this.handleNewMessage = this.handleNewMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
    }

    handleNewMessage = event => {
        console.log(`Song is ${this.state.song}`)
        var text = this.state.song1
        console.log("Post Song Requests " + text)
        const id = "5c154d170c26da3bec966861"
        var path = "http://localhost:8080/api/users/5c154d170c26da3bec966861/songRequests"
        return apiCall("post", path, { text })
            .then(res => { })
            .catch(console.log("Error"))
        // .catch(err => dispatch(addError(err.message)));
        // }
        // this.props.history.push("/");
    }

    handleSubmit() {
        var favSong = [this.state.song1, this.state.song2, this.state.song3, this.state.song4, this.state.song5]
        // console.log(`Fav song list from from ${favSong}`)
        this.props.addFavSongs(favSong)

    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value })
        console.log(`e target name ${e.target.value}`)
        console.log("FavSong this")
        console.log(this)
    }

    handleDrop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        this.setState({ [e.target.name]: data })
    }

    allowDrop(e){
        e.preventDefault();
    }

    render() {
        return(
            <div id="favSongs" class="container">
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
