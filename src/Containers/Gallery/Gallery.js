import React, {Component} from 'react'
import axios from 'axios'
import Images from '../../Components/Images/Images'

class Videos extends Component {
  state = {
    images: []
  }

  getImages () {
    axios.get('	http://res.cloudinary.com/dl3e0kbis/image/list/imagefy.json')
    .then(res => {
      this.setState({images: res.data.resources});
    });
  }

  componentDidMount () {
    this.getImages()
  }

  render () {
    return (
      <div>
        <h1 className="text-center">Latest Uploads</h1>
        <div className="col-sm-12 m-4">
          <Images images={this.state.images}/>
        </div>
      </div>
    )
  }
}

export default Videos
