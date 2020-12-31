import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

export default class Travel extends Component {
    render() {
      return (
        <div>
            <section className="colorlib-travel" data-section="travel" id="travel">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">My Travel</span>
                            <h2 className="quote">"I haven't been everywhere, but it is on my list." <br/>- Susan Sontag</h2>
                            <div className="container-fluid">                                    
                                <Image className="world-img" src="images/worldmap.png" usemap="#image-map"/>                                                              
                            </div>                                 
                        </div>
                    </div>                                              
                </div>
            </section>
        </div>
      )
    }
  }