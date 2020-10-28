const express = require('express');
const cors = require('cors');
const ytdl = require('tdl-core');
const app = express()

app.listen(4000, () => {
    console.log('Server works!!! At port 4000 ');
});