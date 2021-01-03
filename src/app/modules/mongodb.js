const mongoose = require('mongoose');

mongoose.connect(process.env["URL_MONGOOSE"], {useNewUrlParser: true, useUnifiedTopology: true}).then(con =>
    console.log(process.env["URL_MONGOOSE"])
)
