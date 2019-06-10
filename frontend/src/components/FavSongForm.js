import React, { Component } from 'react';
import SongColumn from './songColumn';
import SongItem from './Song';

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
      const likeColumn = { title: "Add 5 Songs You MUST Hear", id: "likes", taskIds: [] }

      return(
          <div id="favSongs">
              <SongColumn key={likeColumn.id} column={likeColumn} tasks={likes} taskIds={[]} />
          </div>
      )
  }
};

export default FavSongForm;
