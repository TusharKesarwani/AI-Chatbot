// controllers/chatbotController.js
const FAQ = require("../models/FAQ");
const fs = require("fs");
const path = require("path");

exports.handleUserQuery = async (req, res) => {
  try {
    const query = req.body.query;

    // Search for relevant FAQs based on the user's query
    const faqs = await FAQ.find({ question: { $regex: query, $options: "i" } });

    if (faqs.length > 0) {
      // If relevant FAQs are found, send the response
      const response = faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      }));
      res.json({ response });
    } else {
      // If no relevant FAQs are found, send sorry message
      res.json({
        response: "I'm sorry, I couldn't find an answer to your query.",
      });
    }
  } catch (error) {
    console.error("Error handling user query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
    console.log(faqs);
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.fallbackToDoubtAssistant = (req, res) => {
  try {
    res.json({
      response:
        "I apologize for the inconvenience. Your query will be forwarded to our support team for further assistance.",
    });
  } catch (error) {
    console.error("Error handling fallback to doubt assistant:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.userSatisfactionFeedback = (req, res) => {
  try {
    const { satisfaction } = req.body;
    if (satisfaction === "satisfied") {
      res.json({ message: "Thank you for your feedback." });
    } else if (satisfaction === "unsatisfied") {
      res.json({ message: "We apologize for the inconvenience." });
    } else {
      res.status(400).json({ error: "Invalid satisfaction level." });
    }
  } catch (error) {
    console.error("Error handling user satisfaction feedback:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
