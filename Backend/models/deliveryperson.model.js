var mongoose = require('mongoose');
var schema = new mongoose.Schema({
  deliveryPersonUsername: {
    type: String,
    required: true,
  },
  deliveryPersonName: {
    type: String,
    required: true,
  },
  deliveryPersonMobileNo: {
    type: String,
    required : true
  },
  deliveryPersonPickupLocation :{
    type: String
  },
  deliveryPersonPassword: {
    type: String,
    required: true,
  },
  deliveryPersonWalletAmount :{
    type : Number,
    default : 0
  },
  status: {
    type: String,
    default: 'Booked'
  },
  courierId: {
    type: String,
  },
  customerId: {
    type: String,
  }

}, { collection: 'deliverypersons' }
);
var deliveryPerson = new mongoose.model("deliveryperson", schema);
module.exports = deliveryPerson;