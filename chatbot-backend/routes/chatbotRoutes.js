// routes/chatbotRoutes.js
const express = require('express');
const router = express.Router();
const chatbotController = require('../controllers/chatbotController');

router.post('/query', chatbotController.handleUserQuery);
router.get('/faqs', chatbotController.getFAQs);
router.post('/fallback', chatbotController.fallbackToDoubtAssistant);
router.post('/feedback', chatbotController.userSatisfactionFeedback);

module.exports = router;
