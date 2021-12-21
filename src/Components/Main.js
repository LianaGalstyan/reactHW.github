import React, { Component } from 'react'
import Fi from "./icons/f.png"
import Ii from "./icons/instagram.png"
import Twit from "./icons/twitter.png"
import Sofa from "./contImg/sofa.png"
import Ellips from "./contImg/Ellipse2.png"
import Sofa1 from "./contImg/sofa1.png"
import Sofa2 from "./contImg/sofa2.png"
import Sofa3 from "./contImg/sofa3.png"
import Vect1 from "./vector/Ellipse 8.png"
import Vect2 from "./vector/Vector.png"


export default class Main extends Component {
    
    render() {
        return (
            <div className='main-section'>
                    <div className='tit-block'>
                        <span>100% Quality Guranty</span>
                        <h4>Find Classy Furnitures For Your Comfort</h4>
                        <p>All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet. </p>
                        <div className='icon-btn'>
                            <div className='social-icons'>
                                <img src={Fi}/>
                                <img src={Ii}/>
                                <img src={Twit} />
                            </div>
                            <div className='btn'>
                                <span>Start From</span>
                                <strong>102.99 USD</strong>
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className='cont-block'>
                        <div className='img-cont'>
                            <img className='main-img' src={Sofa}/>
                            <img className='background-img' src={Ellips}/>
                        </div>
                        <div className='sofa-imgs'>
                            <div className='img1'>
                                <img src={Sofa1} />
                                <p>Comfort Launge Chairs</p>
                            </div>
                            <div className='img2'>
                                <img src={Sofa2} />
                                <p>Comfort Launge Chairs</p>
                            </div>
                            <div className='img3'>
                                <img src={Sofa3} />
                                <p>Comfort Launge Chairs</p>
                            </div>
                            <div className='vector'>
                              <img className='first-vect' src={Vect1} />
                              <img className='second-vect' src={Vect2} />
                            </div>
                        </div>
                        
                    </div>
            </div>
        )
    }
}
