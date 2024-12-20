// Select all tab buttons and content
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each button
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and content
    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabContents.forEach((content) => {
      content.classList.remove('active');
      content.classList.add('hidden'); // Ensure hidden class is added
    });

    // Add 'active' class to clicked button and corresponding content
    button.classList.add('active');
    const target = button.dataset.target; // Make sure each button has a data-target
    const targetContent = document.getElementById(target);
    if (targetContent) {
      targetContent.classList.add('active');
      targetContent.classList.remove('hidden'); // Ensure it's not hidden
    }
  });
});
