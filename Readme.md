# AI Chat Bot

## Overview
This project implements an AI chat bot for an ed-tech website to assist users with queries related to courses. The chat bot utilizes natural language processing (NLP) techniques to understand user queries and provides relevant responses. It also integrates a FAQ database to retrieve answers to frequently asked questions. The project includes features such as fallback to a doubt assistant, user satisfaction feedback, data sharing with the sales team, and performance monitoring.

## Key Features
- **Chat Bot**: A user-friendly chat bot interface where users can input their queries regarding courses.
- **FAQ Integration**: Integration of a database of frequently asked questions (FAQs) related to courses. The chat bot retrieves relevant answers from the FAQ database to respond to user queries.
- **Natural Language Processing (NLP)**: Utilizes NLP techniques to understand user queries and extract key information required to provide relevant responses.
- **Fallback to Doubt Assistant**: Implements a mechanism where if a user is not satisfied with the response, the chat bot will fallback to a doubt assistant for further assistance.
- **User Satisfaction Feedback**: After resolving a user query, prompts the user for feedback on their satisfaction level.
- **Data Sharing with Sales Team**: Shares user data and chat transcripts with the sales executive team for follow-up and analysis purposes.
- **Performance Monitoring**: Implements monitors to track the efficiency and effectiveness of the chat bot.

## Installation
1. Clone the repository: `git clone https://github.com/TusharKesarwani/AI-Chatbot.git`
2. Navigate to the project directory: `cd AI-Chatbot`

## Backend Setup
1. Navigate to the `backend` directory: `cd chatbot-backend`
2. Install dependencies: `npm install`
3. Start the backend server: `npm start`
4. The backend server will run at `http://localhost:3000`

## Frontend Setup
1. Navigate to the `frontend` directory: `cd ai-chatbot-frontend`
2. Install dependencies: `npm install`
3. Start the frontend server: `npm start`
4. The frontend application will run at `http://localhost:3001`

## Usage
1. Access the frontend application at `http://localhost:3001` in your web browser.
2. Start interacting with the chat bot by entering your queries.
3. The chat bot will respond with relevant answers based on the FAQs and NLP processing.
4. Provide feedback on your satisfaction level after each query resolution.

## Technologies Used
- Backend: Node.js, Express.js, MongoDB
- Frontend: React.js, Axios
- Database: MongoDB

## Credits
This project was created by [Tushar Kesarwani](https://github.com/TusharKesarwani) as a part of AI Chatbot Project.

