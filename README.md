BUDDY — Your AI Study Partner

1. About The Project

BUDDY is an AI-powered web application currently under active development, designed to transform static class notes into a dynamic, personalized, and interactive study experience. By integrating advanced AI techniques such as Retrieval-Augmented Generation (RAG) with generative AI (Gemini), sentiment detection, and gamified quizzes, BUDDY empowers students to learn directly from their own materials, ensuring context-grounded answers and adaptive learning paths.

2. Features
 
Note-Driven Q&A: Allows students to upload handwritten or digital notes, building a private knowledge base for syllabus-specific question answering

Retrieval-Augmented Generation (RAG): Combines vector search with Google's Gemini generative AI to provide context-grounded answers and minimize AI hallucinations.

Sentiment Awareness: Detects the student’s mood during chat interactions, adapting its tone and responses—offering motivational replies or suggesting quizzes when appropriate.

Auto-Generated Quizzes: Creates practice questions directly from the uploaded study material to reinforce learning and aid self-assessment.

Progress Tracker: Logs covered topics, identifies syllabus gaps, tracks study time, and sends personalized reminders to maintain study consistency.

Future Modes (Planned): A planned feature to toggle between 'Notes Only' and 'Notes + Internet' for extended answers when additional context is required.

4. Tech Stack

Frontend: React.js

Backend: Python, FastAPI

AI & NLP:

Gemini (Google Generative AI) - For question answering and quiz generation.

Hugging Face Transformers - For sentiment analysis.

Tesseract OCR / Google Vision API - For extracting text from handwritten notes.

LangChain - For orchestrating the RAG pipeline.

Vector Store: FAISS

Authentication & Storage: Firebase Auth or JWT; MongoDB/Firestore (for user data and logs)

4. Project Overview

Many students face challenges with scattered study materials, generic online search results, and passive note reading. BUDDY addresses these pain points by creating a personalized learning environment where students can upload their specific notes and interact with them through an intelligent chatbot. This chatbot is designed to provide answers solely based on the student's provided content, ensuring relevance and accuracy. Beyond answering questions, BUDDY actively tracks topic coverage, detects student sentiment to tailor interactions, and generates quizzes to enhance understanding and boost motivation.

5. Getting Started

This project is currently under active development. The following instructions outline how to set up the development environment.

Prerequisites

Python 3.x

pip (Python package installer)

Node.js & npm (for React.js frontend)

Git

Installation

Clone the repository:

git clone https://github.com/your-username/buddy-ai-study-partner.git

cd buddy-ai-study-partner

Backend Setup:

cd backend

python -m venv venv

source venv/bin/activate

pip install -r requirements.txt

Frontend Setup:

cd frontend

npm install

6. Future Enhancements

Integration with more document types and learning platforms.

Advanced analytics for study habits and performance visualization.

Mobile application development for on-the-go learning.

Collaborative study features for group learning sessions.

Voice interaction capabilities for hands-free study.

7. License

Distributed under the MIT License. See LICENSE for more information.

8. Contact

Lochan Didla - lochan.didla884@gmail.com

