import { Component } from "react";

import PersonalDetails from './PersonalDetails';
import Experience from './Experience';
import Project from './Project';
import Education from './Education';
import Success from './Success';
import Extras from './Extras';
//import Resume from './Resume';
import App from '../App';

class UserForm extends Component {

    state = {

        step: 1,

        // name: '',
        // email: '',
        // phone: '',
        // linkedin: '',
        // github: '',
        // skills: '',

        // exp1_org: '',
        // exp1_pos: '',
        // exp1_desc: '',
        // exp1_dur: '',

        // exp2_org: '',
        // exp2_pos: '',
        // exp2_desc: '',
        // exp2_dur: '',

        // proj1_title: '',
        // proj1_link: '',
        // proj1_desc: '',

        // proj2_title: '',
        // proj2_link: '',
        // proj2_desc: '',

        // edu1_school: '',
        // edu1_year: '',
        // edu1_qualification: '',
        // edu1_desc: '',

        // edu2_school: '',
        // edu2_year: '',
        // edu2_qualification: '',
        // edu2_desc: '',

        // extra_1: '',
        // extra_2: '',
        // extra_3: '',
        // extra_4: '',
        // extra_5: '',


    

        name: 'Mohit Mudgal',
        email: 'mmudgal33@gmail.com',
        phone: '8860828435',
        linkedin: 'linkedin.com/in/mohit-mudgal-a722399a',
        github: 'mmudgal33/',
        skills: `Language R, SAS, SQL, C++, Visual Basic
        Platforms Windows, Linux (Ubuntu)
        RDBMS Tools Microsoft SQL Developer, DB2, MySQL
        Android Development: Android SDK, JavaScript, Hybrid app
        Other Applications: Microsoft Office, Visual Basic Alternative
        Linear Regression, Logistic Regression, Decision Tree, Random Forest, XGboost and SVM
        unsupervised learning using K-means clustering and hierarchical clustering
        Time Series analysis using - Hot winters, AR, MA and ARMA
        Data visualization in R using ggplot2 and plotly for interactive graphs
        Feature engineering in R and SAS. Missing value and outlier handling, transforming variable, Creating new variables,
        Reshaping data using packages like dplyr and tidyr in R
        ROC, AUC, KS, Accuracy and lift performance matrix`,

        exp1_org: 'Amex',
        exp1_pos: 'Data Analysis',
        exp1_desc: 'Financial Data Aanalysis',
        exp1_dur: '1',

        exp2_org: `Aarya International (Research Analyst) Gurgaon, Haryana (June 2017-Feb 2021)`,
        exp2_pos: 'Data Analysis',
        exp2_desc: `The Research associate at Aarya International is responsible for providing the client with advice and guidance on how to
        obtain required electronic circuit devices from manufacturing partners and how to complete the delivery process
        smoothly. The Aarya International work within strict timelines and communicate with manufacturing partners and the
        client consistently via email or telephone. Clients must be treated individually and the process tailored to suit them, with
        the consultation of manufacturing partners if necessary.`,
        exp2_dur: '3',

        proj1_title: `Real Estate: A real estate agency wanted to reduce the negotiation time and improve closure for buyers and sellers of homes by
        ensuring that both sides were advised well on the potential sale/purchase price of the home. Predict a transaction price for all
        the houses in its market which would be as close as possible to a price where the transaction would take place
        Environment: R use Linear regression
        Solution: Created a predictive model to arrive at a potential transaction price for all future transactions. We can’t predict house
        having more than 7 rooms efficiently. More important is space and distance from market
        II) Human Resource: A mid-sized IT company with over 10,000 employees needed to plan its hiring and reduce risk of projects
        getting delayed due to employees leaving. It also wanted to understand why its attrition rate was high and how it could be
        reduced
        Environment: use Python Vector machines
        Solution: Created a decision tree model along with a Random Forest model to predict attrition and also to better understand the
        factors (like experience and salary) related to attrition taking place. Random Forest provided greater accuracy 91%`,
        proj1_link: 'mmudgal33/',
        proj1_desc: 'Real Estate',

        proj2_title: `Consumer Complaints Resolution: Given detailed consumer complaints along with whether consumer disputed with the
        conclusion If we are able to predict this, consumer who is more likely to dispute a conclusion can be given more attention, as to
        how the complaints are handled as well as how persuasively the final conclusions are conveyed to them.
        Environment: Python Text modeling and Random Forest.
        Solution: Used Text mining for getting important words in complaints. Use other variables for extra information in observation
        Retail: Retail giant plan new store openings over the next 12-18 months and has multiple locations, which would be the best to
        open new stores in terms of market size and potential revenues. Relevant data regarding locations, population, sales and
        revenues of key products for stores opened in the past was provided to be analyzed and for model building
        Environment: R logistic regression
        Solution: Random Forest worked out to be a better model, 23 locations were selected to open new stores based on this
        analysis. We get information that not every city is important, more important is locality not state or city`,
        proj2_link: 'mmudgal33/',
        proj2_desc: 'Consumer Complaints Resolution',

        edu1_school: 'kendriya vidyalaya',
        edu1_year: '2010',
        edu1_qualification: 'senior secondary',
        edu1_desc: 'school',

        edu2_school: 'Deenbandhu Chotu Ram University of Science and Technology',
        edu2_year: '2016',
        edu2_qualification: 'B.Tech',
        edu2_desc: 'Electronics and communication',

        extra_1: `Edvancer: 'Certified Business Analytics Professional in R and SAS' in 2018
        Edvancer: ’Certified Machine Learning Expert with Python’ in 2018
        Edvancer: ’Certified Data Analyst using SQL’& ‘Certified Tableau Professional’ in 2018`,
        extra_2: 'IBM Education India: ‘Android Development from IBM using Db2 database’ in 2015',
        extra_3: 'Prolific: PLC, SCADA short term internship in 2013',
        extra_4: 'Full Stack Web Development',
        extra_5: 'SQL Certified',


        status: 0

    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    submitted = () => {
        const { status } = this.state;
        this.setState({
            status: status + 1
        });
    }


    nextResume = () => {
        const { step } = this.state;
        this.setState({
            step: step/step
        });
    };

    



    handleChange = ({ target: { value, name } }) => this.setState({ [name]: value })



   




    /*formSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            linkedin: this.state.linkedin,
            github: this.state.github,
            skills: this.state.skills
        }


        axios.post('/create-pdf', data)
            .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
            .then((res) => {
                const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Resume.pdf');
            });

        e.target.reset();

    } */

    /*createAndDownloadPdf = () => {
      axios.post('/create-pdf', this.state)
           .then(() => axios.get('fetch-pdf', { responseType: 'blob' }))
           .then((res) => {
              const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
              saveAs(pdfBlob, 'Resume.pdf');
           })
    } */
    render() {
        const { step } = this.state;
        // const { name, email, phone, linkedin, github, skills, exp1_org, exp1_pos, exp1_desc, exp1_dur,
        //     exp2_org, exp2_pos, exp2_desc, exp2_dur, status, proj1_title, proj1_link, proj1_desc,
        //     proj2_title, proj2_link, proj2_desc, edu1_school, edu1_year, edu1_qualification,
        //     edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc, extra_1, extra_2,
        //     extra_3, extra_4, extra_5 } = this.state;
        // const values = {
        //     name, email, phone, linkedin, github, skills, exp1_org, exp1_pos, exp1_desc, exp1_dur,
        //     exp2_org, exp2_pos, exp2_desc, exp2_dur, edu1_school, edu1_year, edu1_qualification,
        //     edu1_desc, edu2_school, edu2_year, edu2_qualification, edu2_desc, status, proj1_title,
        //     proj1_link, proj1_desc,
        //     proj2_title, proj2_link, proj2_desc,
        //     extra_1, extra_2,
        //     extra_3, extra_4, extra_5
        // };

        switch (step) {
            case 1:
                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <h1><b>Lets generate your Resume!</b></h1>
                            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
                            <hr />

                            <PersonalDetails
                                values={this.state}
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 2:

                return (
                    <div className="App pt-5 mt-5">

                        <div className="container col-lg-8 mx-auto text-center">

                            <h1><b>Lets generate your Resume!</b></h1>
                            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
                            <hr />

                            <Experience
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 3:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <h1><b>Lets generate your Resume!</b></h1>
                            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
                            <hr />

                            <Project
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 4:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <h1><b>Lets generate your Resume!</b></h1>
                            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
                            <hr />

                            <Education
                                values={this.state}
                                prevStep={this.prevStep}
                                /*submitted={this.submitted}*/
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );


            case 5:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <h1><b>Lets generate your Resume!</b></h1>
                            <p className="lead">Please provide accurate and clear description wherever necessary.</p>
                            <hr />

                            <Extras
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                submitted={this.submitted}
                                handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );

            case 6:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">

                            <Success
                                values={this.state}
                                prevStep={this.prevStep}
                                nextStep={this.nextStep}
                                submitted={this.submitted}
                                handleChange={this.handleChange}
                                nextResume={this.nextResume}
                            />
                        </div>
                        <br />
                    </div>
                );

                default:

                return (
                    <div className="App pt-5 mt-5">
                        <div className="container col-lg-8 mx-auto text-center">



                            <App
                                // values={this.state}
                                // prevStep={this.prevStep}
                                // nextStep={this.nextStep}
                                // submitted={this.submitted}
                                // handleChange={this.handleChange}
                            />
                        </div>
                        <br />
                    </div>
                );



        }
    }
}

export default UserForm;















































 // data = {

    //     name: 'Mohit Mudgal',
    //     email: 'mmudgal33@gmail.com',
    //     phone: '8860828435',
    //     linkedin: 'linkedin.com/in/mohit-mudgal-a722399a',
    //     github: 'mmudgal33/',
    //     skills: `Language R, SAS, SQL, C++, Visual Basic
    //     Platforms Windows, Linux (Ubuntu)
    //     RDBMS Tools Microsoft SQL Developer, DB2, MySQL
    //     Android Development: Android SDK, JavaScript, Hybrid app
    //     Other Applications: Microsoft Office, Visual Basic Alternative
    //     Linear Regression, Logistic Regression, Decision Tree, Random Forest, XGboost and SVM
    //     unsupervised learning using K-means clustering and hierarchical clustering
    //     Time Series analysis using - Hot winters, AR, MA and ARMA
    //     Data visualization in R using ggplot2 and plotly for interactive graphs
    //     Feature engineering in R and SAS. Missing value and outlier handling, transforming variable, Creating new variables,
    //     Reshaping data using packages like dplyr and tidyr in R
    //     ROC, AUC, KS, Accuracy and lift performance matrix`,

    //     exp1_org: 'Amex',
    //     exp1_pos: 'Data Analysis',
    //     exp1_desc: 'Financial Data Aanalysis',
    //     exp1_dur: '1',

    //     exp2_org: `Aarya International (Research Analyst) Gurgaon, Haryana (June 2017-Feb 2021)`,
    //     exp2_pos: 'Data Analysis',
    //     exp2_desc: `The Research associate at Aarya International is responsible for providing the client with advice and guidance on how to
    //     obtain required electronic circuit devices from manufacturing partners and how to complete the delivery process
    //     smoothly. The Aarya International work within strict timelines and communicate with manufacturing partners and the
    //     client consistently via email or telephone. Clients must be treated individually and the process tailored to suit them, with
    //     the consultation of manufacturing partners if necessary.`,
    //     exp2_dur: '3',

    //     proj1_title: `Real Estate: A real estate agency wanted to reduce the negotiation time and improve closure for buyers and sellers of homes by
    //     ensuring that both sides were advised well on the potential sale/purchase price of the home. Predict a transaction price for all
    //     the houses in its market which would be as close as possible to a price where the transaction would take place
    //     Environment: R use Linear regression
    //     Solution: Created a predictive model to arrive at a potential transaction price for all future transactions. We can’t predict house
    //     having more than 7 rooms efficiently. More important is space and distance from market
    //     II) Human Resource: A mid-sized IT company with over 10,000 employees needed to plan its hiring and reduce risk of projects
    //     getting delayed due to employees leaving. It also wanted to understand why its attrition rate was high and how it could be
    //     reduced
    //     Environment: use Python Vector machines
    //     Solution: Created a decision tree model along with a Random Forest model to predict attrition and also to better understand the
    //     factors (like experience and salary) related to attrition taking place. Random Forest provided greater accuracy 91%`,
    //     proj1_link: 'mmudgal33/',
    //     proj1_desc: 'Real Estate',

    //     proj2_title: `Consumer Complaints Resolution: Given detailed consumer complaints along with whether consumer disputed with the
    //     conclusion If we are able to predict this, consumer who is more likely to dispute a conclusion can be given more attention, as to
    //     how the complaints are handled as well as how persuasively the final conclusions are conveyed to them.
    //     Environment: Python Text modeling and Random Forest.
    //     Solution: Used Text mining for getting important words in complaints. Use other variables for extra information in observation
    //     Retail: Retail giant plan new store openings over the next 12-18 months and has multiple locations, which would be the best to
    //     open new stores in terms of market size and potential revenues. Relevant data regarding locations, population, sales and
    //     revenues of key products for stores opened in the past was provided to be analyzed and for model building
    //     Environment: R logistic regression
    //     Solution: Random Forest worked out to be a better model, 23 locations were selected to open new stores based on this
    //     analysis. We get information that not every city is important, more important is locality not state or city`,
    //     proj2_link: 'mmudgal33/',
    //     proj2_desc: 'Consumer Complaints Resolution',

    //     edu1_school: 'kendriya vidyalaya',
    //     edu1_year: '2010',
    //     edu1_qualification: 'senior secondary',
    //     edu1_desc: 'school',

    //     edu2_school: 'Deenbandhu Chotu Ram University of Science and Technology',
    //     edu2_year: '2016',
    //     edu2_qualification: 'B.Tech',
    //     edu2_desc: 'Electronics and communication',

    //     extra_1: `Edvancer: 'Certified Business Analytics Professional in R and SAS' in 2018
    //     Edvancer: ’Certified Machine Learning Expert with Python’ in 2018
    //     Edvancer: ’Certified Data Analyst using SQL’& ‘Certified Tableau Professional’ in 2018`,
    //     extra_2: 'IBM Education India: ‘Android Development from IBM using Db2 database’ in 2015',
    //     extra_3: 'Prolific: PLC, SCADA short term internship in 2013',
    //     extra_4: 'Full Stack Web Development',
    //     extra_5: 'SQL Certified'

    //     }