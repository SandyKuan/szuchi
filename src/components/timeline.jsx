import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-bookmark" />
                      </div>
                      <div className="timeline-label">
                        <h2>Cirrus Logic <span>2020.09 - present (Austin, TX)</span></h2>
                        <i><b>Internship</b></i>
                        <p>I recently have joined the Cirrus Logic as a Software Developer-Intern. My major part of the work has been into the field of creating sustainable and flexible...</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-study" />
                      </div>
                      <div className="timeline-label">
                        <h2>Pennsylvania State University <span> 2019 - 2021 (State College, PA)</span></h2>
                        <i><b>M.S. in Information Science and Technology, Data Sciences Concentration</b></i>
                        <p>I am pursuing my 2nd master degree with major in I.S.T. (Information Science & Technology). 
                          <br />Relevant Coursework: Data Structure and Algorithm, Database Management System, Data Mining, Applied Statistics, Crowdsourcing and Crowd-AI Systems.
                          <br />GPA: 3.95 / 4.0
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Industrial Technology Research Institute <span>2012-2019 (Hsinchu, Taiwan)</span></h2>
                        <i><b>Industrial Marketing Data Analyst & Project Management</b></i>
                        <p>1. Interpreted global trading data, policies, economic, and technology trends of the machine tool industry to make recommendations and offer counsel to the Taiwan government.
                          <br/> 2. Managed several projects (~$20 million) in smart manufacturing and advanced metrology field.
                          <br/> 3. Planned and analyzed cost control and project scheduling; Performed risk assessments, strategic planning, and communications across customers and team members. 
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-book" />
                      </div>
                      <div className="timeline-label">
                        <h2>National Taiwan University <span>2010 - 2012 (Taipei, Taiwan)</span></h2>
                        <i><b>M.S. in Mechanical Engineering</b></i>
                        <p>Ranking: 1 / 19, Overall GPA: 4.22 / 4.3</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen" />
                      </div>
                      <div className="timeline-label">
                        <h2>National Tsing Hua University <span>2007 - 2010 (Hsinchu, Taiwan)</span></h2>
                        <i><b>B.S. in Power Mechanical Engineering</b></i>
                        <p>Ranking: 1 / 53, Overall GPA: 3.90 / 4.0</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
