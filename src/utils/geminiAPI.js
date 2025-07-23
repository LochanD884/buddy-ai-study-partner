import axios from 'axios';

export const askBuddy = async (question, context) => {
  const safeContext = context.slice(0, 2000); // safe chunk
  const res = await axios.post('http://localhost:5000/ask-buddy', {
    question,
    context: safeContext
  });
  return res.data.answer || "Buddy is confused 😅";
};