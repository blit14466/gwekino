// Wait for the DOM to fully load
window.onload = function () {
    // Variables for delete buttons, pagination, and notification settings
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const paginationLinks = document.querySelectorAll('.pagination a');
    const emailNotificationCheckbox = document.getElementById('email-notifications');
    const rssNotificationCheckbox = document.getElementById('rss-notifications');

    // Function to handle deleting a message
    function deleteMessage(event) {
        const row = event.target.closest('tr');  // Find the row (tr) of the clicked delete button
        row.remove();  // Remove the row from the table
        updatePagination();
    }

    // Function to handle pagination (dummy functionality for now)
    function handlePagination(event) {
        const pageLink = event.target;
        const pageNum = pageLink.textContent;

        // Basic pagination logic (this can be expanded)
        console.log('Navigating to page:', pageNum);
        // For now, we're just logging the page number
    }

    // Function to handle notification settings changes
    function handleNotificationChange(event) {
        const checkbox = event.target;
        if (checkbox.checked) {
            console.log(`${checkbox.name} is enabled`);
        } else {
            console.log(`${checkbox.name} is disabled`);
        }
    }

    // Add event listeners for delete buttons
    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteMessage);
    });

    // Add event listeners for pagination links
    paginationLinks.forEach(link => {
        link.addEventListener('click', handlePagination);
    });

    // Add event listeners for notification checkboxes
    emailNotificationCheckbox.addEventListener('change', handleNotificationChange);
    rssNotificationCheckbox.addEventListener('change', handleNotificationChange);

    // Function to update pagination (can be expanded as needed)
    function updatePagination() {
        const totalMessages = document.querySelectorAll('tbody tr').length;
        const paginationContainer = document.querySelector('.pagination');

        if (totalMessages <= 0) {
            paginationContainer.style.display = 'none';
        } else {
            paginationContainer.style.display = 'block';
        }
    }

    // Initial call to set pagination visibility based on message count
    updatePagination();
};