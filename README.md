# BUDDY - AI Study Partner 📚✨

**BUDDY** is an AI-powered educational companion that answers questions *strictly* using your own uploaded study notes.  
Unlike generic chatbots, Buddy minimizes hallucinations by grounding every answer in **your context** — your notes, your control.

## 🚀 Key Features

✅ **Note-Based QA** — Answers only from your uploaded files  
✅ **Gemini API Integration** — Uses Google’s Gemini model for advanced LLM answers  
✅ **Modern Full-Stack** — React frontend + Python Flask backend  
✅ **Privacy-First** — Only relevant note snippets are sent to Gemini; your full notes stay private  
✅ **Extensible** — Ready for study streaks, reminders, flashcards, summaries, and more

## 🗂️ Project Structure

```plaintext
Buddy/
│
├── app/
│   ├── server.py
│
├── templates/
│   ├── base.html
│   ├── index.html
│   ├── upload.html
│   ├── library.html
│   ├── progress.html
│   ├── quiz.html
│   ├── about.html
│
├── static/
│   ├── style.css
│   └── script.js
│
├── uploads/
│
├── buddy.db
│
├── requirements.txt
├── .env
├── README.md
```


## ⚙️ Getting Started


### 1️⃣ Clone the Repo
```
https://github.com/LochanD884/buddy-ai-study-partner.git

cd buddy-ai-study-partner
```

### 2️⃣ Run the Frontend (React)
```
npm install

npm start
```
### 3️⃣ Run the Python Backend (Flask)
```
cd py-backend

pip install -r requirements.txt

python server.py
```

### 4️⃣ Add Your API Key

Create a `.env` file inside `py-backend/`:

```
GOOGLE_API_KEY=YOUR_GEMINI_API_KEY
```


## 🔒 Security & Privacy

Buddy is designed with **local-first privacy** in mind. 

Only the **necessary note snippet** is sent to the Gemini API — never the entire file.  

Your study material stays on your machine — no permanent cloud storage, no hidden uploads.

## 🧩 Planned Improvements

- 📌 Study streak tracker and smart reminders
  
- 📌 Improved text chunking with embeddings or semantic search
  
- 📌 Automatic note summaries and flashcard generator

- 📌 Encrypted local storage option for note history and progress

  ---

### **📚 Happy Learning!**
