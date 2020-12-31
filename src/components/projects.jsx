import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects" id="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/pro-1.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://youtu.be/zFuiOtIRbvY" target="_blank">EchoPal</a></h3>
											<span>This project built a human-in-the-loop system to enhance Amazon Echo’s conversation quality, overall quality score is 3.71/5.0 from 17 users and 88% of users considered it outperformed than Amazon Echo. Watch the video in detail:</span>											
											<p className="icon">
												<span><a href="https://youtu.be/zFuiOtIRbvY" target="_blank" rel="noopener noreferrer"><i className="icon-youtube" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/pro-2.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/SandyKuan/MealMatch" target="_blank" rel="noopener noreferrer">MealMatch</a></h3>
											<span>This project built a web-based automatic crowdsourcing system to allow users to upload food photographs and receive correct restaurant information (90% accuracy) within a few minutes. Check out the link below:</span>
											<p className="icon">
												<span><a href="https://github.com/SandyKuan/MealMatch" target="_blank" rel="noopener noreferrer"><i className="icon-link" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>
							
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/pro-3.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">COVID-19</a></h3>
											<span>This project created a website which allows the user to check the school policy of COVID-19. The information includes school name, location (State), when school started virtual learning, etc.</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												{/* <span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span> */}
											</p>
										</div>
									</div>
								</div>
							</div>		
						</div>
					</div>
				</section>
      </div>
    )
  }
}
