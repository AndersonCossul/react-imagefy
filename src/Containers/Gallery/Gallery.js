import React, {Component} from 'react'
import axios from 'axios'
import Images from '../../Components/Images/Images'
import {Link} from 'react-router-dom'

class Videos extends Component {
  state = {
    images: [],
    hasError: false
  }

  getImages () {
    axios.get('http://res.cloudinary.com/dl3e0kbis/image/list/imagefy.json')
    .then(res => {
      this.setState({images: res.data.resources});
    })
    .catch(err => {
      this.setState({hasError: true});
    });
  }

  componentDidMount () {
    this.getImages()
  }

  render () {
    let images = <p className="text-muted text-center">...</p>

    if (this.state.hasError) {
      images = <p className="text-danger text-center">Sorry, we couldn't fetch the images. Please try again.</p>
    }

    if (this.state.images) {
      if (this.state.images.length) {
        images = <Images images={this.state.images}/>
      } else {
        images = (
          <div className="mt-5">
            <p className="text-muted">No images were found.</p>
            <Link to="/upload">Upload new image</Link>
          </div>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Latest Uploads</h1>
        <div className="col-sm-12 mt-4">
          {images}
        </div>
      </div>
    )
  }
}

export default Videos
