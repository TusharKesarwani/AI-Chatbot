// models/FAQ.js
const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

const FAQ = mongoose.model('FAQ', faqSchema);

module.exports = FAQ;
