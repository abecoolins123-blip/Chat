// Select DOM elements
const chatBox = document.getElementById('chat-box');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

// Add event listener to the send button
sendBtn.addEventListener('click', () => {
  sendMessage();
});

// Optional: Send message on Enter key press
messageInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Function to send a message
function sendMessage() {
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();

  if (name === '' || message === '') {
    alert('Please enter both your name and message.');
    return;
  }

  // Create message element
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  // Format message
  messageDiv.innerHTML = `<strong>${escapeHTML(name)}:</strong> ${escapeHTML(message)}`;

  // Append message to chat box
  chatBox.appendChild(messageDiv);

  // Scroll to latest message
  chatBox.scrollTop = chatBox.scrollHeight;

  // Clear message input
  messageInput.value = '';
}

// Helper function to escape HTML to prevent injection
function escapeHTML(str) {
  const div = document.createElement('div');
  div.innerText = str;
  return div.innerHTML;
}
