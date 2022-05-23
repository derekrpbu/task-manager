const mongoose = require('mongoose');

//Schema
const TaskSchema = new mongoose.Schema({
   name: {
      //validations
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'name can not be more than 20 characters'],
   },
   completed: {
      type: Boolean,
      default: false,
   },
});

//Model
module.exports = mongoose.model('Task', TaskSchema); //params: name and Schema
