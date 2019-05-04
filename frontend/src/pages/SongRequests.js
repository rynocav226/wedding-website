import React, { Component } from 'react';
import { apiCall } from "../services/api";
import FavSongForm from "../components/FavSongForm";
import SongItem from "../components/SongItem";
import DislikedSongForm from "../components/DislikedSongForm";
import ReactDom from "react-dom";
import { DragDropContextProvider } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend';


class SongRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: { "song1": "", "song2": "", "song3": "", "song4": "", "song5": "" },
      dislikes: { "song1": "", "song2": "", "song3": "", "song4": "", "song5": ""},
      songList: []
    };
    
    this.addFavSongs = this.addFavSongs.bind(this);
    this.addLeastFavSongs = this.addLeastFavSongs.bind(this);
    this.populateSongs = this.populateSongs.bind(this);

  }


  addFavSongs(songs) {
    var songJson = {likes:songs}
    var path = `/api/invitations/${this.props.invitation}/songRequests`
    return apiCall("put", path, songJson)
      .then(res => {console.log(`Successful response ${res}`) })
      .catch( err => {console.log(`Error is ${err}`)})
  }

  addLeastFavSongs(songs) {
    var songJson = { dislikes: songs }
    var path = `/api/invitations/${this.props.invitation}/songRequests`
    return apiCall("put", path, songJson)
      .then(res => { console.log(`Successful response ${res}`) })
      .catch(err => { console.log(`Error is ${err}`) })
  }

  populateSongs() {
    var path = `/api/users/${this.props.invitation}/songRequests`
    return apiCall("get", path)
      .then(res => { 
        console.log(`Successful response ${res}`)
        this.setState({likes: res.likes})
        this.setState({dislikes: res.dislikes})
        // this.likes = res.likes
        // this.dislikes = res.dislikes
       })
      .catch(err => { console.log(`Error is ${err}`) })
  }

  jsonIsEmmpty(jsonArray){
    for(let key in jsonArray) {
      if(jsonArray[key] !== "")
        return false
    }
    return true
  }
  
  componentWillMount() {
    var path = "/api/songs"
    return apiCall("get", path)
      .then(songList => this.setState({songList}))
      .catch(err => {console.log(`Error ${err}`)
      console.log(err)
    })
  }

  componentDidMount() {
    if (!this.props.invitation) {
      this.props.toggleCode();
    }
  }

  componentDidUpdate(){
    if (this.props.invitation && this.jsonIsEmmpty(this.state.dislikes)) {
      console.log(this.state.dislikes)
      console.log("updating dislikes")
      // this.setState({ dislikes: {"song1":"Red","song2":"blue"} })
      console.log("POPULATE SONGS")
      this.populateSongs() 
    }
    // console.log(this.state.dislikes)
    
  }

  drag(ev) {
    ev.persist()
    let node = ReactDom.findDOMNode(ev.target)
    let child = node.querySelector('.song')
    ev.dataTransfer.setData("text", child.innerHTML)
  }

  render() {
    const songList = this.state.songList.map((t) => (
      <SongItem
        key={t._id}
        {...t}
      />
    ));
    // <table onDragStart={this.drag} ></table>
    console.log("Rendering song requests")
    return (
      
      <DragDropContextProvider backend={TouchBackend}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <FavSongForm addFavSongs={this.addFavSongs} />
              <br/>
              <DislikedSongForm addLeastFavSongs={this.addLeastFavSongs}/>
            </div>
            <div className="col-md">
              <div style={{height: '500px', width:'400px', overflow:"auto"}}>
                <table >
                  <tbody>
                    <tr>
                      <td>Artist</td>
                      <td>Song</td>
                      <td>Genre</td>
                    </tr>
                    {songList}
                  </tbody>                
                </table>
              </div>
            </div>
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
};


// export default DragDropContext(TouchBackend)(SongRequests)

export default SongRequests