import React from "react";
const JobsCon = props => {
  return (
    <main className="jobs-container">
      <section className="job-block">
        <div className="container">
          <ul className="columns is-row">
            <li className="column is-4">
              <div className="box">
                <h3 className="job-title">Senior Software Engineer - MEAN</h3>
                <p className="job-con">3-5 YEARS</p>
                <p className="job-con">NOIDA</p>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <h3 className="job-title">Senior Software Engineer - MEAN</h3>
                <p className="job-con">3-5 YEARS</p>
                <p className="job-con">NOIDA</p>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <h3 className="job-title">Senior Software Engineer - MEAN</h3>
                <p className="job-con">3-5 YEARS</p>
                <p className="job-con">NOIDA</p>
              </div>
            </li>
            <li className="column is-4">
              <div className="box">
                <h3 className="job-title">Senior Software Engineer - MEAN</h3>
                <p className="job-con">3-5 YEARS</p>
                <p className="job-con">NOIDA</p>
              </div>
            </li>
          </ul>
          <div className="columns has-text-centered">
            <div className="column">
              <a className="btn white-btn">See More</a>
            </div>
          </div>
        </div>
      </section>
      <section className="resume-block has-text-centered">
        <div className="container">
          <ul className="columns">
            <li className="column">
              <h1 className="resume-title">
                <span>Excited to work with us...</span>
                But don't see your positions listed
              </h1>
              <a className="btn white-btn">Send Your Resume</a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default JobsCon;
