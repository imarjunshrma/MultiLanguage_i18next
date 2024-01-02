import express from 'express';
const app = express();
// import './tutorials/context';
// import './tutorials/essentials';
// import './tutorials/formatter';
// import './tutorials/interpolation';
// import './tutorials/namespace';
// import './tutorials/pluralization';

// Serve static files from the locales directory
app.use('/locales', express.static("locales"));







app.listen(3002, () => {
    console.log("server running..")
})