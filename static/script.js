document.addEventListener("DOMContentLoaded", () => {
  const chatForm = document.getElementById("chat-form");
  const questionInput = document.getElementById("question");
  const chatBox = document.getElementById("chat-box");

  // === Handle Enter & Shift+Enter ===
  questionInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      chatForm.dispatchEvent(new Event("submit"));
    }
  });

  // === Handle Form Submission ===
  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const question = questionInput.value.trim();
    if (!question) return;

    appendMessage("user", sanitizeHTML(question));
    questionInput.value = "";

    const loaderId = appendTypingIndicator();

    try {
      const res = await fetch("/ask-buddy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      removeMessageById(loaderId);

      if (data.answer) {
        appendMessage("buddy", renderMarkdown(data.answer));
        enableComplexityAnalysis(); // Enable complexity buttons if code exists
      } else {
        appendMessage("buddy", "🤖 I couldn't find an answer. Try rephrasing?");
      }
    } catch (err) {
      console.error("Buddy Error:", err);
      removeMessageById(loaderId);
      appendMessage("buddy", "⚠️ Something went wrong while talking to Buddy.");
    }
  });

  // === Append a new chat message ===
  function appendMessage(sender, html) {
    const msg = document.createElement("div");
    msg.className = `chat-message ${sender}`;
    msg.innerHTML = html;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // === Add typing indicator ===
  function appendTypingIndicator() {
    const id = "loader-" + Date.now();
    const el = document.createElement("div");
    el.className = "chat-message buddy";
    el.id = id;
    el.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
    chatBox.appendChild(el);
    chatBox.scrollTop = chatBox.scrollHeight;
    return id;
  }

  // === Remove message by ID ===
  function removeMessageById(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  // === Sanitize User Input ===
  function sanitizeHTML(str) {
    return str.replace(/[&<>"']/g, (match) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[match]));
  }

  // === Render Markdown with Code Block Support ===
  function renderMarkdown(text) {
    return text
      .replace(/```([\s\S]*?)```/g, (match, code) => {
        const escaped = sanitizeHTML(code.trim());
        const id = "code-" + Date.now() + Math.floor(Math.random() * 1000);
        return `
          <div class="code-block" id="${id}">
            <pre><code>${escaped}</code></pre>
            <button class="analyze-btn btn btn-outline-secondary btn-sm mt-2" data-code="${encodeURIComponent(code.trim())}" data-target="${id}">
              🧮 Analyze Time & Space Complexity
            </button>
          </div>
        `;
      })
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\n/g, "<br>");
  }

  // === Add Complexity Analysis Event Listeners ===
  function enableComplexityAnalysis() {
    setTimeout(() => {
      document.querySelectorAll(".analyze-btn").forEach((btn) => {
        btn.addEventListener("click", async () => {
          const code = decodeURIComponent(btn.dataset.code);
          const target = btn.dataset.target;
          btn.disabled = true;
          btn.textContent = "⏳ Analyzing...";

          try {
            const res = await fetch("/analyze-complexity", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code }),
            });

            if (!res.ok) throw new Error("Server error");

            const data = await res.json();
            const block = document.getElementById(target);

            const output = document.createElement("div");
            output.className = "alert alert-info mt-2";
            output.innerHTML = `
              <strong>🧮 Time Complexity:</strong> ${sanitizeHTML(data.time)}<br>
              <strong>💾 Space Complexity:</strong> ${sanitizeHTML(data.space)}<br>
              <details><summary>📘 Explanation</summary><p>${sanitizeHTML(data.explanation)}</p></details>
            `;
            block.appendChild(output);
          } catch (err) {
            alert("Failed to analyze complexity.");
          } finally {
            btn.disabled = false;
            btn.textContent = "🧮 Analyze Time & Space Complexity";
          }
        });
      });
    }, 500);
  }
});
