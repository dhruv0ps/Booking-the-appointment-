
const mongoose = require('mongoose');

const Registerschema = new mongoose.Schema({
    username: { type: String, required: true  },
    password: { type: String, required: true   },
    email : {
     type:String, required : true
    },
    confirmPassword: { type: String, required: true   },
    selectedDate: { type: String, required: true   },
    number: { type: String, required: true  },
    bloodGroup: { type: String, required: true   },
    medicalConditions: { type: String,  },
    allergies: { type: String,  },
    gender : {type:String,required : true },
    insuranceProvider: { type: String, default: 'ABC Insurance' },
    policyNumber: { type: String, required: true, default: '123456789' },
    height: { type: Number,required: true   },
    weight: { type: Number, required: true  }

},{timestamps:true})

const Register = mongoose.model('Register', Registerschema);

module.exports = Register;