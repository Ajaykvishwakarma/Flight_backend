const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect(
        'mongodb://localhost:27017/flightOrfight'
    );
}

module.exports = connect;

// mongodb+srv://ajaykv:ajaykv@cluster0.t6wyj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority