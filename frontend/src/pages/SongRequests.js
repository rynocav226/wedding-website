import React, { Component } from 'react';
import { apiCall } from "../services/api";
import FavSongForm from "../components/FavSongForm";
// import SongItem from "../components/SongItem";
import DislikedSongForm from "../components/DislikedSongForm";
import ReactDom from "react-dom";
import { DragDropContext } from 'react-beautiful-dnd'
import SongItem from  "../components/Song"
// import SongItem from "./Song.jsx"
import SongColumn from '../components/songColumn'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
`;

class SongRequests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: { "song1": "", "song2": "", "song3": "", "song4": "", "song5": "" },
      dislikes: { "song1": "", "song2": "", "song3": "", "song4": "", "song5": ""},
      likesD:[],
      dislikesD:[],
      songList: []
    };
    
    this.addFavSongs = this.addFavSongs.bind(this);
    this.addLeastFavSongs = this.addLeastFavSongs.bind(this);
    this.populateSongs = this.populateSongs.bind(this);

  }


  addFavSongs(songs) {
    let songJson = {}
    let i = 1
    this.state.likesD.forEach((song)=>{
      let keyD = "song"+i
      // console.log(song)
      songJson[keyD] = song.song
      i=i+1
    })
    // var songJson = {likes:songs}
    console.log(songJson)
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
    return apiCall("put", path, songJson)
      .then(res => {console.log(`Successful response ${res}`) })
      .catch( err => {console.log(`Error is ${err}`)})
  }

  addLeastFavSongs(songs) {
    var songJson = { dislikes: songs }
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
    return apiCall("put", path, songJson)
      .then(res => { console.log(`Successful response ${res}`) })
      .catch(err => { console.log(`Error is ${err}`) })
  }

  populateSongs() {
    console.log(this.props)
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
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
      // console.log("POPULATE SONGS")
      // this.populateSongs() 
    }
    // console.log(this.state.dislikes)
    
  }

  getStateArray(input){
        if(input ==="likes"){
            return this.state.likesD
        } else if (input === "dislikes") {
            return this.state.dislikesD
        } else if (input === "songs") {
            return this.state.songList
        }
    }

    setStateArray(input, array){
        if (input === "songs")
          this.setState({ songList: array })
        else if (input === "likes")
          this.setState({ likesD: array })
        else if (input === "dislikes")
          this.setState({ dislikesD: array })
    }

    onDragEnd = result => {
        const { destination, source} = result;

        if(!destination){
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ){
            return;
        }
       

        if (source.droppableId === destination.droppableId){

            let sourceArray = this.getStateArray(source.droppableId);
            let song = sourceArray[source.index]
            sourceArray.splice(source.index,1);
            sourceArray.splice(destination.index, 0, song);

            this.setStateArray(source.droppableId, sourceArray)
            return;
        }
        
        let sourceArray = this.getStateArray(source.droppableId);
        let destinationArray = this.getStateArray(destination.droppableId);
        console.log(source.droppableId)
        console.log(destination.droppableId)
        let song = sourceArray[source.index]
        destinationArray.splice(destination.index, 0, song);
        if ((destination.droppableId === 'likes' || destination.droppableId === 'dislikes') && destinationArray.length > 5){
          let retSong = destinationArray.splice(-1, 1)
          console.log("REmoved")
          console.log(retSong)
          // sourceArray.push(retSong)
        }           
        sourceArray.splice(source.index,1);
        this.setStateArray(source.droppableId, sourceArray)
        this.setStateArray(destination.droppableId, destinationArray)
    }

  render() {
    const songList = this.state.songList.map((t) => (
      <SongItem
        key={t._id}
        {...t}
      />
    ));
    console.log("Rendering song requests")
    const songColumn = { title: "Songs", id: "songs", taskIds: [] }
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <FavSongForm addFavSongs={this.addFavSongs} likedSongs={this.state.likesD}/>
              <br/>
              <DislikedSongForm addLeastFavSongs={this.addLeastFavSongs} dislikedSongs={this.state.dislikesD}/>
            </div>
            <div className="col-md">
              <div style={{height: '500px', width:'400px', overflow:"auto"}}>
                 <SongColumn key={songColumn.id} column={songColumn} tasks={songList} taskIds={[]} />
              </div>
            </div>
          </div>
        </div>
      </DragDropContext >
    );
  }
};


// export default DragDropContext(TouchBackend)(SongRequests)

export default SongRequests