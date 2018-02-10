import React, {Component} from 'react'

class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dl3e0kbis',
        upload_preset: 'imagefy',
        tags: ['imagefy'],
        sources: ['local', 'url', 'google_photos', 'facebook']
      }, ((error, result) => {
        if (error) {
          alert('An error happened!')
        } else {
          this.props.history.push('/')
        }
      })
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
