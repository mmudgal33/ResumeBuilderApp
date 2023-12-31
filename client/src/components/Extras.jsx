import React, { Component } from 'react';

import axios from 'axios';
import { saveAs } from 'file-saver';

class Extras extends Component {

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.submitted();
        this.props.nextStep();
        const { values } = this.props;





        /*const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            linkedin: this.state.linkedin,
            github: this.state.github,
            skills: this.state.skills,
            exp1_org: this.state.exp1_org,
            exp1_pos: this.state.exp1_pos,
            exp1_desc: this.state.exp1_desc,

            exp2_org: this.state.exp1_org,
            exp2_pos: this.state.exp1_pos,
            exp2_desc: this.state.exp1_desc
        }*/




        // const data = this.props.values;
        // const data = this.props;


        // axios.post('/create-pdf', data)
        //     .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
        //     .then((res) => {
        //         const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

        //         saveAs(pdfBlob, 'Resume.pdf');
        //     });

        // e.target.reset();

        //let link = 'http://localhost:8000';



         axios.post('http://localhost:8000/create-pdf', values)

            .then(() => axios.get('http://localhost:8000/fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();
        
    }

    

   


    render() {
                const { values, handleChange } = this.props;
                return (
                    <div className="container">
                        <div className="card animated fadeInLeft">
                            <div className="card-body">

                                <h3 className="card-title">Miscellaneous</h3>
                                <hr />
                            </div>
                            {/* <form onSubmit={this.continue}> */}
                            <form onSubmit={this.formSubmit}>
                                <div className="row col-lg-10 mx-auto">

                                    {/* <div className="col-lg-12 text-left">
                                <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                            </div> */}

                                    <div className="col-lg-6 text-left">
                                        <label htmlFor="extra_1">Languages</label>
                                        <input type="text" name="extra_1" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_1} onChange={handleChange} required />

                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label htmlFor="extra_2">Hobbies</label>
                                        <input type="text" name="extra_2" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_2} onChange={handleChange} required />
                                        
                                    </div>
                                </div>
                                <br />
                                <div className="row col-lg-10 mx-auto">

                                    <div className="col-lg-6 text-left">
                                        <label htmlFor="extra_3">Activity/Achievement</label>
                                        <input type="text" name="extra_3" id="extra_3" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_3} onChange={handleChange} required />
                                        
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label htmlFor="extra_4">Activity/Achievement</label>
                                        <input type="text" name="extra_4" id="extra_4" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_4} onChange={handleChange} required />
                                        
                                    </div>
                                </div>

                                <div className="row col-lg-10 mx-auto">
                                    <div className="col-lg-12 text-left">
                                        <label htmlFor="extra_5">Activity/Achievement</label>
                                        <input type="text" name="extra_5" id="extra_5" className="form-control" defaultValue={values.status === 1 ? '' : values.extra_5} onChange={handleChange} required />
                                        
                                    </div>
                                </div>
                                <br />
                                <div className="container text-center">
                                    <button type="button" className="btn btn-info" onClick={this.back}><i className="fas fa-angle-left mr-1"></i>Back</button>
                                    {/* <button type="submit" className="btn btn-info" >Download PDF<i className="fas fa-download ml-1"></i></button> */}
                                    <button type="submit" className="btn btn-info" >Show Resume<i className="fas fa-submit ml-1"></i></button>
                                </div>
                                <br />
                            </form>
                        </div>
                    </div>

                )
            }
        }

        export default Extras;