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

  addFavSongs() {
    let songJson = {}
    let i = 1
    this.state.likesD.forEach((song)=>{
      let keyD = "song"+i
      // console.log(song)
      songJson[keyD] = song.song
      i=i+1
    })
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
