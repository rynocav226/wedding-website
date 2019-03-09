import React, { Component } from 'react';
import { postSongRequests } from "../store/actions/songs"
import { apiCall } from "../services/api";
import FavSongForm from "../components/FavSongForm"
import SongItem from "../components/SongItem"
import DislikedSongForm from "../components/DislikedSongForm"
import ReactDom from "react-dom"



class SongRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: "",
      songList: []
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.addFavSongs = this.addFavSongs.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNewMessage = event => {
    console.log(`Song is ${this.state.song}`)
    var text = this.state.song
    // this.props.(this.state.song);
    // this.setState({song:"postSongRequests"});
    // postSongRequests(this.state.song)
      // let { currentUser } = getState();
      console.log("Post Song Requests " + text)
      const id = "5c154d170c26da3bec966861"
      var path = "http://localhost:8080/api/users/5c154d170c26da3bec966861/songRequests"
      return apiCall("post", path, { text })
          .then(res => { console.log(`Response of ${res}`)})
          .catch(
            err => {console.log(`Error is blank ${err}`)}
          
          )
      // .catch(err => dispatch(addError(err.message)));
    // }
    // this.props.history.push("/");
  }

  addFavSongs(songs) {
    console.log(`Fav songs ${songs}`)
    var songJson = {}
    var i = 1
    songs.forEach(song => {
      songJson["song"+i] = song
      console.log(song)
      i++
    });

    console.log(songJson)
    var path = "http://localhost:8080/api/users/5c154d170c26da3bec966861/songRequests"
    return apiCall("put", path, songJson)
      .then(res => {console.log(`Successfule response ${res}`) })
      .catch( err => {console.log(`Error is ${err}`)})
  }

  addLeastFavSongs(songs) {
    console.log(`Least Fav songs ${songs}`)
  }

  handleChange(event) {
    this.setState({song: event.target.value})
  }
  
  componentWillMount() {
    var path = "http://localhost:8080/api/songs"
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
    // console.log("Ev target")
    let node = ReactDom.findDOMNode(ev.target)
    let child = node.querySelector('.song')
    ev.dataTransfer.setData("text", child.innerHTML)
    // console.log(ev.target)
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
      
      <div class="container">
        <div class="row">
          <div class="col-md">
            <FavSongForm addFavSongs={this.addFavSongs} />
            <br/>
            <DislikedSongForm addLeastFavSongs={this.addLeastFavSongs}/>
          </div>
          <div class="col-md">
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

// function mapStateToProps(state) {
//   return {
//     errors: state.errors
//   };
// }

export default SongRequests// connect(mapStateToProps, { postSongRequests })(SongRequests);