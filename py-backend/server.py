from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
genai.configure(api_key=GOOGLE_API_KEY)

app = Flask(__name__)
CORS(app)

@app.route("/ask-buddy", methods=["POST"])
def ask_buddy():
    data = request.get_json()
    question = data.get("question", "")
    context = data.get("context", "")

    prompt = f"""
You are Buddy, a chill AI study partner.
ONLY use these notes:
{context}

QUESTION:
{question}

Reply in a clear, friendly way.
    """

    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        answer = response.text
        return jsonify({"answer": answer})
    except Exception as e:
        print(e)
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000)