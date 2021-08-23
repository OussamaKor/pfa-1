const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const clientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cin: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    },
    timetable: [{
        start: { type: Date },
        end: { type: Date },
        title: { type: String },
        color: { type: String , default:"red" },
        eventContent: { type: String },
    }],
    employee: {
        type: ObjectId,
        ref: "Employee"
    },
    resetToken: String,
    expireToken: Date,
    pic: {
        type: String,
        default: "https://res.cloudinary.com/cnq/image/upload/v1586197723/noimage_d4ipmd.png"
    } ,
    status: {
        type: String,
        default: "Payé"
    } ,
    age: {
        type: String,
        required: true
    },
    seanceCode: {
        type: Number,
        default: 0
    },
    seancePermis: {
        type: Number,
        default: 0
    },
    seanceCodePayee: {
        type: Number,
        default: 0
    },
    seancePermisPayee: {
        type: Number,
        default: 0
    },
    montant: {
        type: Number,
        default: 0
    },
    notifications:[{
        title:{type:String},
        nom:{type:String},
        pic:{type:String}

        
    }]
},{timestamps : true})

Client =mongoose.model("Client", clientSchema)
module.exports =Client