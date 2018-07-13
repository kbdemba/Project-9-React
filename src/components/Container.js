import React, {Component} from "react";
import Header from "./Header";
import axios from "axios";
import ApiKey from "../config"
import PhotoContainer from "./PhotoContainer"

class Container extends Component{
  state = {
    images: []
  }

  getDataFromAxios = (tag="soccer") => {
    let photosArray = [];
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${ApiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        response.data.photos.photo.forEach((photo)=>{
          let image = {};
          image.id = photo.id
          image.url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`;
          image.title = photo.title;
          photosArray.push(image)
        })
        //put an if staement to check if no image found
        this.setState({
          images: photosArray
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let query = e.target.search.value;
    e.target.reset()
    this.props.history.push(`/search/${query}`)

  }
  componentDidMount(){
    if(this.props.tag !== "search"){
      this.getDataFromAxios(this.props.tag)
    }
  }
  componentDidUpdate(prevProps){
    if (this.props.tag !== prevProps.tag) {
      this.getDataFromAxios(this.props.tag);
    }
  }
  render(){
    return (
      <div className="Container">
        <Header displaySearchForm={this.props.displaySearchForm}
          tag={this.props.tag}
          handleFormSubmit={this.handleFormSubmit}/>
        <h4>Gifs For {this.props.tag}</h4>
        <PhotoContainer images={this.state.images} />
      </div>
    )
  }
}

export default Container;
