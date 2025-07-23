<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# BUDDY — Your AI Study Partner

# 1. About The Project

BUDDY is an AI-powered web application currently under active development, designed to transform static class notes into a dynamic, personalized, and interactive study experience. By integrating advanced AI techniques such as Retrieval-Augmented Generation (RAG) with generative AI (Gemini), sentiment detection, and gamified quizzes, BUDDY empowers students to learn directly from their own materials, ensuring context-grounded answers and adaptive learning paths.

# 2. Features
 
Note-Driven Q&A: Allows students to upload handwritten or digital notes, building a private knowledge base for syllabus-specific question answering

Retrieval-Augmented Generation (RAG): Combines vector search with Google's Gemini generative AI to provide context-grounded answers and minimize AI hallucinations.

Sentiment Awareness: Detects the student’s mood during chat interactions, adapting its tone and responses—offering motivational replies or suggesting quizzes when appropriate.

Auto-Generated Quizzes: Creates practice questions directly from the uploaded study material to reinforce learning and aid self-assessment.

Progress Tracker: Logs covered topics, identifies syllabus gaps, tracks study time, and sends personalized reminders to maintain study consistency.

Future Modes (Planned): A planned feature to toggle between 'Notes Only' and 'Notes + Internet' for extended answers when additional context is required.

# 3. Tech Stack

Frontend: React.js

Backend: Python, FastAPI

AI & NLP:

Gemini (Google Generative AI) - For question answering and quiz generation.

Hugging Face Transformers - For sentiment analysis.

Tesseract OCR / Google Vision API - For extracting text from handwritten notes.

LangChain - For orchestrating the RAG pipeline.

Vector Store: FAISS

Authentication & Storage: Firebase Auth or JWT; MongoDB/Firestore (for user data and logs)

# 4. Project Overview

Many students face challenges with scattered study materials, generic online search results, and passive note reading. BUDDY addresses these pain points by creating a personalized learning environment where students can upload their specific notes and interact with them through an intelligent chatbot. This chatbot is designed to provide answers solely based on the student's provided content, ensuring relevance and accuracy. Beyond answering questions, BUDDY actively tracks topic coverage, detects student sentiment to tailor interactions, and generates quizzes to enhance understanding and boost motivation.

# 5. Getting Started

This project is currently under active development. The following instructions outline how to set up the development environment.

Prerequisites: Python 3.x, pip (Python package installer), Node.js & npm (for React.js frontend), Git

## Installation:

### Clone the repository:

git clone https://github.com/your-username/buddy-ai-study-partner.git

cd buddy-ai-study-partner

### Backend Setup:

cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

Frontend Setup:

cd frontend

npm install

# 6. Future Enhancements

Integration with more document types and learning platforms.

Advanced analytics for study habits and performance visualization.

Mobile application development for on-the-go learning.

Collaborative study features for group learning sessions.

Voice interaction capabilities for hands-free study.

# 7. Contact

Lochan Didla - lochan.didla884@gmail.com
>>>>>>> b7d5f3f2c15a0e4e27979bd3a142d4bb83a8dbf5
