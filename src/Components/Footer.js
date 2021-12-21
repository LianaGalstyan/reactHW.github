import React, { Component } from 'react'
import SofaImg from "./footerImg/sofaImg.png"
import User1 from "./users/user1.png"
import User2 from "./users/user2.png"
import User3 from "./users/user3.png"

export default class Footer extends Component {
    
    render() {
        return (
                <div className='footer-section'>
                  <div className='footer-img'>
                     <img src={SofaImg} />
                  </div>
                <div className='footer-desc'>
                    <h5>Luxury & Fancy Chair</h5>
                    <p>All the Lorem Ipsum generators on the Internet tend to predefined chunks  this the first true generator on the Internet. </p>
                </div>
                <div className='footer-cont'>
                     <div className='first-txt'>
                        <p><strong>20K+</strong>People Visiting this year</p>
                        <p><strong>15</strong>Years Experience</p>
                     </div>
                     <div className='text-block'>
                        <div className='users'>
                            <img src={User1} />
                            <img src={User2} />
                            <img src={User3} />
                        </div>
                        <div className='text'>
                            <h6>Trust Members</h6>
                            <p>More than 50k peoples integrate with us.</p>
                        </div>
                     </div>
                </div>
             </div>
        )
    }
}
