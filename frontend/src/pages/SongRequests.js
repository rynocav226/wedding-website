import React, { Component } from 'react';
import { apiCall } from "../services/api";
import FavSongForm from "../components/FavSongForm";
import SongItem from "../components/SongItem";
import DislikedSongForm from "../components/DislikedSongForm";
import ReactDom from "react-dom";

class SongRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: "",
      songList: [],
      invitation:props.invitation
    };
    
    this.addFavSongs = this.addFavSongs.bind(this);
    this.addLeastFavSongs = this.addLeastFavSongs.bind(this);
  }


  addFavSongs(songs) {
    var songJson = {likes:{}}
    var i = 1
    
    songs.forEach(song => {
      songJson.likes["song"+i] = song
      i++
    });
    var path = `/api/invitation/${this.props.invitation}/songRequests`
    return apiCall("put", path, songJson)
      .then(res => {console.log(`Successful response ${res}`) })
      .catch( err => {console.log(`Error is ${err}`)})
  }

  addLeastFavSongs(songs) {
    var songJson = { dislikes: {} }
    var i = 1

    songs.forEach(song => {
      songJson.dislikes["song" + i] = song
      i++
    });

    var path = `/api/invitation/${this.props.invitation}/songRequests`
    return apiCall("put", path, songJson)
      .then(res => { console.log(`Successful response ${res}`) })
      .catch(err => { console.log(`Error is ${err}`) })
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

  drag(ev) {
    ev.persist()
    let node = ReactDom.findDOMNode(ev.target)
    let child = node.querySelector('.song')
    ev.dataTransfer.setData("text", child.innerHTML)
  }

  render() {
    console.log(this.state.songList)
    const songList = this.state.songList.map((t) => (
      <SongItem
        key={t._id}
        {...t}
      />
    ));
    return (
      
      <div className="container">
        <div className="row">
          <div className="col-md">
            <FavSongForm addFavSongs={this.addFavSongs} />
            <br/>
            <DislikedSongForm addLeastFavSongs={this.addLeastFavSongs}/>
          </div>
          <div className="col-md">
            <div style={{height: '500px', width:'400px', overflow:"auto"}}>
              <table onDragStart={this.drag} >
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
    );
  }
};


export default SongRequests
