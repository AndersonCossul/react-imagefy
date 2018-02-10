import React from 'react'
import {CloudinaryContext, Image} from 'cloudinary-react'
import '../../App.css'

const images = (props) => {
  return (
    <CloudinaryContext className="row">
      {
        props.images.map((image, index) => {
          return (
            <div className="col-sm-3 mt-2" key={index}>
              <Image
                className="image"
                publicId={image.public_id}
                cloudName="dl3e0kbis"/>
            </div>
          )
        })
      }
    </CloudinaryContext>
  )
}

export default images
