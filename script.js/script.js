document.addEventListener('DOMContentLoaded', () => {
    const forumForm = document.getElementById('forumForm');
    const messagesDiv = document.getElementById('messages');

    // Function to add a new message to the forum
    function addMessage(username, message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const usernameP = document.createElement('p');
        usernameP.classList.add('username');
        usernameP.textContent = username;

        const messageP = document.createElement('p');
        messageP.classList.add('content');
        messageP.textContent = message;

        messageDiv.appendChild(usernameP);
        messageDiv.appendChild(messageP);
        messagesDiv.appendChild(messageDiv);
    }

    // Handle form submission
    forumForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const message = document.getElementById('message').value.trim();

        if (username && message) {
            addMessage(username, message);
            forumForm.reset();
        } else {
            alert('Please fill in both fields!');
        }
    });
});