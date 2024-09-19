document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.querySelector(".chat__form-ta");
  const messageContainer = document.querySelector(".chat__body");
  const form = document.querySelector(".chat__form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = textArea.value.trim();

    if (text === "") {
      return;
    }

    createMessage(text);
    textArea.value = "";
    messageContainer.scrollTop = messageContainer.scrollHeight;
  });

  const createMessage = (text) => {
    const data = new Date();
    const h = data.getHours().toString().padStart(2, '0');
    const m = data.getMinutes().toString().padStart(2, '0');
    messageContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="chat__message chat__message--my">
          <time class="chat__time">${h}:${m}</time>
          <div class="chat__message-content">${text}</div>
        </div>`
    );
  };
});
