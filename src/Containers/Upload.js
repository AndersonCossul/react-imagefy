import React, {Component} from 'react'

class Upload extends Component {
  render () {
    return (
      <div>
        <h1 className="text-center">
          Upload your 20-seconds Video
        </h1>
        <br/>
        
        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button className="btn btn-lg btn-info">
              Upload Video
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Upload
