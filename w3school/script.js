
// Get the list element
const scrollableNav = document.querySelector('.scrollable-nav');

// Function to handle mouse click and hold scroll event
let holdScroll = false; // Flag to indicate if scroll should be held
let scrollInterval; // Interval variable to store setInterval reference

// Function to start scrolling when the fixed-item is clicked and held
function startScrolling() {
    holdScroll = true;
    scrollInterval = setInterval(() => {
        scrollableNav.scrollLeft += 1; // Adjust the scrolling speed here
    }, 10); // Adjust the scrolling interval here
}

// Function to stop scrolling when the fixed-item is released
function stopScrolling() {
    holdScroll = false;
    clearInterval(scrollInterval);
}

// Attach event listeners to the fixed-item for mouse events
const fixedItem = document.querySelector('.fixed-item');
fixedItem.addEventListener('mousedown', startScrolling);
fixedItem.addEventListener('mouseup', stopScrolling);
fixedItem.addEventListener('mouseleave', stopScrolling);
