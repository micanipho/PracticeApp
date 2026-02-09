// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('App initialized');

    // Your code here
    init();
});

/**
 * Initialize the application
 */
function init() {
    // Setup event listeners
    setupEventListeners();

    // Initialize components
    console.log('Application ready');
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
    // Example: Button click listener
    // const button = document.querySelector('.btn');
    // if (button) {
    //     button.addEventListener('click', handleButtonClick);
    // }
}

/**
 * Example event handler
 */
function handleButtonClick(event) {
    console.log('Button clicked', event);
}

// Utility functions
const utils = {
    /**
     * Select element(s) from DOM
     */
    select: (selector, all = false) => {
        return all ? document.querySelectorAll(selector) : document.querySelector(selector);
    },

    /**
     * Add event listener to element
     */
    on: (element, event, handler) => {
        if (element) {
            element.addEventListener(event, handler);
        }
    }
};
