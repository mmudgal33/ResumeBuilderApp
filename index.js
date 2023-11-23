const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');
// const dotenv = require("dotenv");

const pdfTemplate = require('./documents/index');

const app = express();



app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// POST Route - PDF generation and fetching of the data

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if (err) {
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});


// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});




// Serve static assets if in production
// if(process.env.NODE_ENV === 'production'){
//     //set static folder
//     app.use(express.static('../client/build'));

//     app.get('/', (req, res) => {
//         //res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//         // app.use(express.static(path.resolve(__dirname, 'client', 'build')))
//         res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
//     });
// }



// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    

    const path = require('path')
    //set static folder
    // app.use(express.static('./client/build'));

    app.get('/', (req, res) => {
        app.use(express.static(path.resolve(__dirname, 'client', 'build')));
        //res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}




const port = 8000;
app.listen(port, () => console.log(`Server started on port ${port}`));








// "server": "nodemon app.js",
// "client-install": "npm install --prefix client",
// "client": "npm run build --prefix client",
// "dev": "concurrently \"npm run server\" \"npm run client\""