import { Component } from "react";
import "../App.css";   // file in outer folder
//import "./Resume.css";



class Resume extends Component {
      render() {
            const { values } = this.props;
            return (

                  <div class="col-lg-12 mx-auto">
                        <br /><br />
                        <div class="row text-center">
                              <div class="col-lg-10">
                                    <h1><b>{values.name}</b></h1>
                                    <div className="row col-lg-10 mx-auto">
                                          <div class="col-lg-6">
                                                <p class="lead email"><strong>Email:</strong> {values.email}</p>
                                                <p class="lead"><strong>Contact:</strong> (+91){values.phone}</p>
                                          </div>
                                          <div class="col-lg-6">
                                                <p class="lead"><strong>LinkedIn:</strong> {values.linkedin}</p>
                                                <p class="lead"><strong>Github:</strong> {values.github}</p>
                                          </div>

                                    </div>


                              </div>
                        </div>

                        <hr />
                        <div class="col-lg-10 mx-auto bg-light">
                              <h3><b>Skills</b></h3>
                        </div>
                        <div class="col-lg-10 row mx-auto">
                              <p class="lead"> {values.skills}</p>
                        </div>


                        <div class="col-lg-10 mx-auto bg-light">
                              <h3><b>Experience</b></h3>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.exp1_org}, {values.exp1_pos}</b> ({values.exp1_dur})</p>
                              <p class="mt-0">{values.exp1_desc}</p>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.exp2_org}, {values.exp2_pos}</b> ({values.exp2_dur})</p>
                              <p class="mt-0">{values.exp2_desc}</p>
                        </div>


                        <div class="col-lg-10 mx-auto bg-light">
                              <h3><b>Projects</b></h3>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.proj1_title}</b>({values.proj1_link})</p>
                              <p class="mt-0">{values.proj1_desc}</p>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.proj2_title}</b> ({values.proj2_link})</p>
                              <p class="mt-0">{values.proj2_desc}</p>
                        </div>


                        <div class="col-lg-10 mx-auto bg-light">
                              <h3><b>Education</b></h3>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.edu1_school}</b> ({values.edu1_qualification}, {values.edu1_year})</p>
                              <p class="mt-0">{values.edu1_desc}</p>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <p class="lead"><b>{values.edu2_school}</b> ({values.edu2_qualification}, {values.edu2_year})</p>
                              <p class="mt-0">{values.edu2_desc}</p>
                        </div>

                        <div class="col-lg-10 mx-auto bg-light">
                              <h3><b>Extra-Curriculars/Activities</b></h3>
                        </div>
                        <div class="col-lg-10 mx-auto">
                              <ul>
                                    <li><p class="lead"><b>Languages: </b>{values.extra_1} </p></li>
                                    <li><p class="lead"><b>Hobbies: </b>{values.extra_2} </p></li>
                                    <li><p class="lead">{values.extra_3} </p></li>
                                    <li><p class="lead">{values.extra_4} </p></li>
                                    <li><p class="lead">{values.extra_5} </p></li>
                              </ul>

                        </div>
                  </div>


                  // <div><h1>{values.name}</h1></div>
            );
      }
}




export default Resume;

























































