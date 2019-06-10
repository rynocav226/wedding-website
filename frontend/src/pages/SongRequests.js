import React, { Component } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardBody, CardText, Button } from 'reactstrap';
import { apiCall } from "../services/api";
import FavSongForm from "../components/FavSongForm";
import DislikedSongForm from "../components/DislikedSongForm";
import { DragDropContext } from "react-beautiful-dnd";
import SongItem from  "../components/Song";
import SongColumn from "../components/songColumn";
import "../styles/SongRequests.css";

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
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
    return apiCall("put", path, {likes:this.state.likesD})
      .then(res => {console.log(`Successful response`); console.log(res) })
      .catch( err => {console.log(`Error is ${err}`)})
  }

  addLeastFavSongs(songs) {
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
    return apiCall("put", path, {dislikes:this.state.dislikesD})
      .then(res => { console.log(`Successful response ${res}`) })
      .catch(err => { console.log(`Error is ${err}`) })
  }

  removeFromSongList(likes, dislikes){
    let songs = this.state.songList;
    let i =0
    let j =0
    let maxSongs = dislikes.length + likes.length
    let foundSongs = 0
    if(maxSongs > 0 ){
      for(i=0; i<songs.length; i++){
        for (j = 0; j < dislikes.length; j++){
          if(songs[i] !== undefined){
            if(songs[i]._id === dislikes[j]._id){
              dislikes[j] = songs[i] 
              songs.splice(i, 1)
              i= i-1
              foundSongs = foundSongs + 1
            }
          }
        }
        for (j = 0; j < likes.length; j++){
          if (songs[i] !== undefined) {
            if(songs[i]._id === likes[j]._id){
              likes[j] = songs[i]
              songs.splice(i, 1)
              i= i-1
              foundSongs = foundSongs + 1
            }
          }
        }
        if(foundSongs === maxSongs){
          break
        }
      }
      this.setState({ songList: songs })
      this.setState({ likesD: likes })
      this.setState({ dislikesD: dislikes })
    }
  }

  populateSongs() {
    var path = `/api/invitation/${this.props.invitation}/SongRequests/${this.props.requestId}`
    return apiCall("get", path)
      .then(res => {
        this.removeFromSongList( res.likes,  res.dislikes)
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
    })
  }

  componentDidMount() {
    if (!this.props.invitation) {
      this.props.toggleCode();
    }
  }

  componentDidUpdate(){
    if (this.props.invitation && (this.state.dislikesD.length) === 0 && (this.state.likesD.length === 0)) {
      this.populateSongs()
    }
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
    else if (input === "likes") {
      this.setState({ likesD: array })
    }
      
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
    let song = sourceArray[source.index]
    destinationArray.splice(destination.index, 0, song);
    if ((destination.droppableId === 'likes' || destination.droppableId === 'dislikes') && destinationArray.length > 5){
      let retSong = destinationArray.splice(-1, 1)
      sourceArray.push(retSong[0])
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
    const songColumn = { title: "Song List", id: "songs", taskIds: [] }
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container fluid className="songRequestsContainer">
          <Row>
            <Col sm="6" className="songList">
              <Card>
                <CardBody>
                  <CardTitle>Instructions</CardTitle>
                  <CardText>The wedding band has provided us with their songlist so we can work with them to form a setlist for the dance.  We would like your input into what you want and do not want to hear so everyone is on the dance floor all night long!  Look through the song list and when you find one you love or hate, drag the song to the appropriate table.  When finished, submit your requests.</CardText>
                  <div className="text-center"><Button size="lg" className="text-center" color="primary" onClick={this.addFavSongs}>Submit Requests</Button></div>
                </CardBody>
              </Card>
              <br/>
              <FavSongForm addFavSongs={this.addFavSongs} likedSongs={this.state.likesD}/>
              <br/>
              <DislikedSongForm addLeastFavSongs={this.addLeastFavSongs} dislikedSongs={this.state.dislikesD}/>
            </Col>
            <Col sm="6">
              <div className="songList">
              <SongColumn key={songColumn.id} column={songColumn} tasks={songList} taskIds={[]} />
              </div>
            </Col>
          </Row>
        </Container>
      </DragDropContext>
    );
  }
}

export default SongRequests;
