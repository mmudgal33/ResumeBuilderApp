

import React, { Component } from 'react'

// import axios from 'axios';
// import { saveAs } from 'file-saver';






export default class Success extends Component {


  

  // continue = e => {
  //   e.preventDefault();
  //   this.props.nextStep();
  //   e.target.reset();
  // }

  nextResume = e => {
    e.preventDefault();
    this.props.nextResume();
    e.target.reset();
  }

  



  // @babel/plugin-proposal-private-property-in-object


  render() {

    // const { values, handleChange } = this.props;

    

    return (


      // <form onSubmit={this.continue}>
      <form onSubmit={this.nextResume}>

        <div className="container text-center">

          <div className="card animated bounceIn">
            <div className="card-body text-center pt-5 pb-5">
              <i className="fas fa-check-circle fa-7x text-success"></i>
              <h2>Hang Tight while your Resume Downloads!</h2>
              <br />

            </div>

          </div>

          {/* <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button> */}
          {/* <button type="submit" className="btn btn-info" >Download PDF<i className="fas fa-download ml-1"></i></button> */}
          <button type="submit" className="btn btn-info" >Next Resume<i className="fas fa-submit ml-1"></i></button>
        </div>
        <br />
      </form>
    )
  }
}















  // import React, { Component } from 'react'
// import Resume from './Resume';

// class Success extends Component {



//     render() {
//         const { values } = this.props;



//         return (
//             <div className="card animated bounceIn">
//                 <div className="card-body text-center pt-5 pb-5">
//                     <i className="fas fa-check-circle fa-7x text-success"></i>
//                     {/* <h2>Hang Tight while your Resume Downloads!</h2> */}
//                     <Resume
//                         values={this.props}

//                     // name={this.state.name}
//                     // email= {this.state.email}
//                     // phone= {this.state.phone}
//                     // linkedin= {this.state.linkedin}
//                     // github= {this.state.github}
//                     // skills= {this.state.skills}

//                     // exp1_org= {this.state.exp1_org}
//                     // exp1_pos= {this.state.exp1_pos}
//                     // exp1_desc= {this.state.exp1_desc }
//                     // exp1_dur= {this.state.exp1_dur}

//                     // exp2_org= {this.state.exp2_org}
//                     // exp2_pos= {this.state.exp2_pos}
//                     // exp2_desc= { this.state.exp2_desc}
//                     // exp2_dur= {this.state.exp2_dur}

//                     // proj1_title= {this.state.proj1_title}
//                     // proj1_link= {this.state.proj1_link}
//                     // proj1_desc= {this.state.proj1_desc}

//                     // proj2_title= {this.state.proj2_title}
//                     // proj2_link= {this.state.proj2_link}
//                     // proj2_desc= {this.state.proj2_desc}

//                     // edu1_school= {this.state.edu1_school}
//                     // edu1_year= {this.state.edu1_year}
//                     // edu1_qualification= {this.state.edu1_qualification}
//                     // edu1_desc= {this.state.edu1_desc}

//                     // edu2_school= {this.state.edu2_school }
//                     // edu2_year= {this.state.edu2_year}
//                     // edu2_qualification= {this.state.edu2_qualification}
//                     // edu2_desc= {this.state.edu2_desc}

//                     // extra_1= { this.state.extra_1}
//                     // extra_2= { this.state.extra_2}
//                     // extra_3= { this.state.extra_3}
//                     // extra_4= {this.state.extra_4 }
//                     // extra_5= {this.state.extra_5}
//                     />
//                     <br />

//                 </div>

//             </div>
//         )
//     }
// }

// export default Success;