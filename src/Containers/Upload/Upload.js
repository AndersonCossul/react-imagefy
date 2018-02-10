import React, {Component} from 'react'

class Upload extends Component {
  state = {
    isModalLoading: false
  }

  uploadWidget = () => {
    this.setState({isModalLoading: true})

    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'dl3e0kbis',
        upload_preset: 'imagefy',
        tags: ['imagefy'],
        sources: ['local', 'url', 'google_photos', 'facebook']
      }, ((error, result) => {
        if (result) {
          this.props.history.push('/')
        } else {
          this.setState({isModalLoading: false})
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
            <button
              className="btn btn-lg btn-info"
              onClick={this.uploadWidget}
              disabled={this.state.isModalLoading}>
              Upload Image
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
