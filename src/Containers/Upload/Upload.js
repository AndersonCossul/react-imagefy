import React, {Component} from 'react'

class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'react-minivimeo',
        upload_preset: 'dl3e0kbis',
        tags: ['react-minivimeo'],
        sources: ['local', 'url', 'google_photos', 'facebook']
      }
    )
  }

  render () {
    return (
      <div>
        <h1 className="text-center">
          Upload your Image
        </h1>
        <br/>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button className="btn btn-lg btn-info" onClick={this.uploadWidget}>
              Upload Image
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
