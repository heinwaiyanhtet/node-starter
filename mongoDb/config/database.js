const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.createConnection('mongodb+srv://heinwaiyanhtet2020:BiWbBUJ8gQmyZMP4@testmonogo.bifhw7j.mongodb.net/?retryWrites=true&w=majority&appName=testMonogo', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

module.exports = connectToDatabase;


