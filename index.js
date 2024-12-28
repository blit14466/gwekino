window.onload = function () {
    // Elements from HTML
    const userNameElement = document.querySelector('.account-info p:nth-of-type(1)');
    const adTitleElement = document.querySelector('.account-info p:nth-of-type(2)');
    const messagesCountElement = document.querySelector('.messages-count');
    const messagesLinkElement = document.querySelector("nav a[href='messages.html']");

    // Sample Data (this can be dynamically fetched from a backend later)
    const user = {
        name: "John Doe",
        adTitle: "Looking for a Penpal from Spain",
        messages: [
            { sender: "Cankan", subject: "Let's chat about movies", date: "2024-12-28" },
            { sender: "Lizzieloo82", subject: "Poetry lover?", date: "2024-12-27" }
        ]
    };

    // Update the account overview
    userNameElement.textContent = `Welcome, ${user.name}!`;
    adTitleElement.textContent = `Your current ad: ${user.adTitle}`;

    // Update the messages section
    const newMessagesCount = user.messages.length;
    messagesCountElement.textContent = `${newMessagesCount} new message${newMessagesCount !== 1 ? 's' : ''}`;
    messagesLinkElement.textContent = `Messages (${newMessagesCount})`;

    // Optionally, if a user has messages, highlight the messages tab or show a notification
    if (newMessagesCount > 0) {
        messagesLinkElement.style.backgroundColor = '#4CAF50';
        messagesLinkElement.style.color = 'white';
    }
};