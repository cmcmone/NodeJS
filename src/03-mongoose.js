const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
  },
  createDate: {
    type: Date,
    default: new Date(),
  },
});

const User = mongoose.model('User', userSchema);

// save data
const user = new User({
  username: 'admin',
  password: '123456',
  age: 18,
});

user.save((err, result) => {
  if (err) {
    console.log('Failed to save data, ', err);
  } else {
    console.log('Save data successfully');
    // console.log(result);
  }
});

// query data
User.findOne(
  {
    username: 'admin',
    age: 18,
  },
  (err, result) => {
    if (err) {
      console.log('Failed to save data, ', err);
    } else {
      console.log(result);
    }
  }
);

// delete data
User.remove(
  {
    username: 'admin',
  },
  (err, result) => {
    if (err) {
      console.log('Failed to delete data, ', err);
    } else {
      console.log(result);
    }
  }
);

// update data
User.findOneAndUpdate(
  '605fdf8891944b54cc8b97cb',
  {
    password: 'admin',
  },
  (err, result) => {
    if (err) {
      console.log('Failed to update data by id, ', err);
    } else {
      console.log(result);
    }
  }
);
