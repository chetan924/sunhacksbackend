// Main JavaScript for AI Student Assessment System

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

/**
 * Initialize the application
 */
function initApp() {
    // Set up event listeners
    setupClassSelection();
    setupSubjectSelection();
    setupFeatureSelection();
    setupMockQuiz();
}

/**
 * Set up class selection functionality
 */
function setupClassSelection() {
    const class12Card = document.getElementById('class12Card');
    const subjectSelection = document.getElementById('subjectSelection');
    
    if (class12Card) {
        class12Card.addEventListener('click', function() {
            // Show subject selection
            if (subjectSelection) {
                subjectSelection.classList.remove('d-none');
                // Scroll to subject selection
                subjectSelection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

/**
 * Set up subject selection functionality
 */
function setupSubjectSelection() {
    const subjectCards = document.querySelectorAll('.subject-card');
    
    subjectCards.forEach(card => {
        card.addEventListener('click', function() {
            const subject = this.getAttribute('data-subject');
            // Navigate to the feature selection page with the selected subject
            window.location.href = `feature.html?subject=${subject}`;
        });
    });
}

/**
 * Set up feature selection functionality
 */
function setupFeatureSelection() {
    // Check if we're on the feature selection page
    if (!document.querySelector('.feature-selection-card')) {
        return; // Not on feature selection page
    }
    
    // Get subject from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject') || 'physics';
    
    // Update page title with subject
    const subjectTitle = document.getElementById('subjectTitle');
    if (subjectTitle) {
        subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    }
    
    // Set up event listeners for feature cards
    const quizFeature = document.getElementById('quizFeature');
    const lecturesFeature = document.getElementById('lecturesFeature');
    const practiceFeature = document.getElementById('practiceFeature');
    const papersFeature = document.getElementById('papersFeature');
    const booksFeature = document.getElementById('booksFeature');
    
    if (quizFeature) {
        quizFeature.querySelector('button').addEventListener('click', function() {
            window.location.href = `quiz.html?subject=${subject}`;
        });
    }
    
    if (lecturesFeature) {
        lecturesFeature.querySelector('button').addEventListener('click', function() {
            window.location.href = `lectures.html?subject=${subject}`;
        });
    }
    
    if (practiceFeature) {
        practiceFeature.querySelector('button').addEventListener('click', function() {
            window.location.href = `practice.html?subject=${subject}`;
        });
    }
    
    if (papersFeature) {
        papersFeature.querySelector('button').addEventListener('click', function() {
            // This would link to the papers page when implemented
            alert('Previous Year Papers feature coming soon!');
        });
    }
    
    if (booksFeature) {
        booksFeature.querySelector('button').addEventListener('click', function() {
            // This would link to the books page when implemented
            alert('Download Books feature coming soon!');
        });
    }
}

/**
 * Set up mock quiz functionality (for demonstration)
 * This will be replaced with actual API calls in production
 */
function setupMockQuiz() {
    // This function will be used on the quiz page
    if (!document.querySelector('.quiz-container')) {
        return; // Not on quiz page
    }
    
    // Get subject from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject') || 'physics';
    
    // Update page title with subject
    const subjectTitle = document.getElementById('subjectTitle');
    if (subjectTitle) {
        subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    }
    
    // Load mock questions
    loadMockQuestions(subject);
}

/**
 * Load mock questions for demonstration
 * @param {string} subject - The selected subject
 */
function loadMockQuestions(subject) {
    // Mock questions data (in production, this would come from an API)
    const mockQuestions = {
        physics: [
            {
                question: "What is Newton's First Law of Motion?",
                options: [
                    "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force.",
                    "Force equals mass times acceleration.",
                    "For every action, there is an equal and opposite reaction.",
                    "Energy cannot be created or destroyed, only transformed."
                ],
                correctAnswer: 0,
                explanation: "Newton's First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This is also known as the law of inertia."
            },
            {
                question: "Which of the following is a unit of force?",
                options: [
                    "Joule",
                    "Newton",
                    "Watt",
                    "Coulomb"
                ],
                correctAnswer: 1,
                explanation: "The Newton (N) is the SI unit of force. It is defined as the amount of force required to accelerate a mass of one kilogram at a rate of one meter per second squared."
            }
        ],
        biology: [
            {
                question: "What is the powerhouse of the cell?",
                options: [
                    "Nucleus",
                    "Endoplasmic Reticulum",
                    "Mitochondria",
                    "Golgi Apparatus"
                ],
                correctAnswer: 2,
                explanation: "Mitochondria are often referred to as the powerhouse of the cell because they generate most of the cell's supply of adenosine triphosphate (ATP), which is used as a source of chemical energy."
            },
            {
                question: "Which of the following is NOT a function of the liver?",
                options: [
                    "Detoxification",
                    "Protein synthesis",
                    "Bile production",
                    "Oxygen transport"
                ],
                correctAnswer: 3,
                explanation: "The liver has many functions including detoxification, protein synthesis, and bile production. Oxygen transport is primarily a function of red blood cells, not the liver."
            }
        ],
        chemistry: [
            {
                question: "What is the chemical symbol for gold?",
                options: [
                    "Go",
                    "Gd",
                    "Au",
                    "Ag"
                ],
                correctAnswer: 2,
                explanation: "The chemical symbol for gold is Au, which comes from the Latin word 'aurum' meaning gold."
            },
            {
                question: "Which of the following is a noble gas?",
                options: [
                    "Chlorine",
                    "Helium",
                    "Sodium",
                    "Magnesium"
                ],
                correctAnswer: 1,
                explanation: "Helium (He) is a noble gas. Noble gases are a group of chemical elements with similar properties: they are all odorless, colorless, monatomic gases with very low chemical reactivity."
            }
        ],
        mathematics: [
            {
                question: "What is the derivative of x²?",
                options: [
                    "x",
                    "2x",
                    "x²",
                    "2"
                ],
                correctAnswer: 1,
                explanation: "The derivative of x² is 2x. This can be found using the power rule of differentiation, which states that the derivative of x^n is n*x^(n-1)."
            },
            {
                question: "What is the value of π (pi) to two decimal places?",
                options: [
                    "3.14",
                    "3.41",
                    "3.12",
                    "3.24"
                ],
                correctAnswer: 0,
                explanation: "The value of π (pi) to two decimal places is 3.14. Pi is the ratio of a circle's circumference to its diameter."
            }
        ]
    };
    
    // Get questions for the selected subject
    const questions = mockQuestions[subject] || mockQuestions.physics;
    
    // Display the first question
    if (questions.length > 0) {
        displayQuestion(questions[0], 0, questions);
    }
}

/**
 * Display a question in the quiz container
 * @param {Object} questionData - The question data
 * @param {number} index - The question index
 * @param {Array} questions - The array of questions
 */
function displayQuestion(questionData, index, questions) {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    // Clear previous question
    quizContainer.innerHTML = '';
    
    // Create question container
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    
    // Add question number and text
    const questionHeader = document.createElement('h3');
    questionHeader.textContent = `Question ${index + 1} of ${questions.length}`;
    questionContainer.appendChild(questionHeader);
    
    const questionText = document.createElement('p');
    questionText.className = 'lead';
    questionText.textContent = questionData.question;
    questionContainer.appendChild(questionText);
    
    // Add timer
    const timerContainer = document.createElement('div');
    timerContainer.className = 'timer-container';
    
    const timerBar = document.createElement('div');
    timerBar.className = 'timer-bar';
    
    const timerProgress = document.createElement('div');
    timerProgress.className = 'timer-progress';
    timerBar.appendChild(timerProgress);
    
    const timerText = document.createElement('div');
    timerText.className = 'timer-text';
    timerText.textContent = '30s';
    
    timerContainer.appendChild(timerBar);
    timerContainer.appendChild(timerText);
    questionContainer.appendChild(timerContainer);
    
    // Add options
    const optionContainer = document.createElement('div');
    optionContainer.className = 'option-container';
    
    questionData.options.forEach((option, optionIndex) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.dataset.index = optionIndex;
        
        optionElement.addEventListener('click', function() {
            // Remove selected class from all options
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Check answer
            checkAnswer(this, questionData, index, questions);
        });
        
        optionContainer.appendChild(optionElement);
    });
    
    questionContainer.appendChild(optionContainer);
    
    // Add explanation container (hidden initially)
    const explanationContainer = document.createElement('div');
    explanationContainer.className = 'explanation';
    explanationContainer.textContent = questionData.explanation;
    questionContainer.appendChild(explanationContainer);
    
    // Add next button (hidden initially)
    const nextButton = document.createElement('button');
    nextButton.className = 'btn btn-primary mt-3 d-none';
    nextButton.textContent = 'Next Question';
    nextButton.addEventListener('click', function() {
        // Load next question
        if (index < questions.length - 1) {
            displayQuestion(questions[index + 1], index + 1, questions);
        } else {
            // End of quiz
            showQuizResults(questions);
        }
    });
    questionContainer.appendChild(nextButton);
    
    // Add to quiz container
    quizContainer.appendChild(questionContainer);
    
    // Start timer
    startTimer(30, timerProgress, timerText, function() {
        // Time's up - show correct answer
        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            const optIndex = parseInt(opt.dataset.index);
            if (optIndex === questionData.correctAnswer) {
                opt.classList.add('correct');
            }
        });
        
        // Show explanation
        explanationContainer.classList.add('show');
        
        // Show next button
        nextButton.classList.remove('d-none');
    });
}

/**
 * Start a countdown timer
 * @param {number} seconds - The number of seconds
 * @param {HTMLElement} progressBar - The progress bar element
 * @param {HTMLElement} timerText - The timer text element
 * @param {Function} callback - The callback function when timer ends
 */
function startTimer(seconds, progressBar, timerText, callback) {
    let timeLeft = seconds;
    
    // Update timer text
    timerText.textContent = `${timeLeft}s`;
    
    // Set initial width
    progressBar.style.width = '100%';
    
    // Create interval
    const interval = setInterval(() => {
        timeLeft--;
        
        // Update timer text
        timerText.textContent = `${timeLeft}s`;
        
        // Update progress bar
        const percentage = (timeLeft / seconds) * 100;
        progressBar.style.width = `${percentage}%`;
        
        // Add warning class when time is running out
        if (timeLeft <= 10) {
            progressBar.classList.add('warning');
        }
        
        if (timeLeft <= 5) {
            progressBar.classList.remove('warning');
            progressBar.classList.add('danger');
        }
        
        // Check if time is up
        if (timeLeft <= 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
    
    // Store interval ID in a data attribute to clear it if needed
    progressBar.dataset.intervalId = interval;
}

/**
 * Check if the selected answer is correct
 * @param {HTMLElement} selectedOption - The selected option element
 * @param {Object} questionData - The question data
 * @param {number} index - The question index
 * @param {Array} questions - The array of questions
 */
function checkAnswer(selectedOption, questionData, index, questions) {
    // Get all options
    const options = document.querySelectorAll('.option');
    
    // Disable all options
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
    
    // Get selected index
    const selectedIndex = parseInt(selectedOption.dataset.index);
    
    // Check if correct
    if (selectedIndex === questionData.correctAnswer) {
        selectedOption.classList.add('correct');
    } else {
        selectedOption.classList.add('incorrect');
        
        // Show correct answer
        options.forEach(opt => {
            const optIndex = parseInt(opt.dataset.index);
            if (optIndex === questionData.correctAnswer) {
                opt.classList.add('correct');
            }
        });
    }
    
    // Show explanation
    const explanation = document.querySelector('.explanation');
    if (explanation) {
        explanation.classList.add('show');
    }
    
    // Show next button
    const nextButton = document.querySelector('.btn-primary');
    if (nextButton) {
        nextButton.classList.remove('d-none');
    }
    
    // Clear timer
    const timerProgress = document.querySelector('.timer-progress');
    if (timerProgress && timerProgress.dataset.intervalId) {
        clearInterval(parseInt(timerProgress.dataset.intervalId));
    }
}

/**
 * Show quiz results
 * @param {Array} questions - The array of questions
 */
function showQuizResults(questions) {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;
    
    // Clear container
    quizContainer.innerHTML = '';
    
    // Create results container
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'text-center';
    
    // Add heading
    const heading = document.createElement('h2');
    heading.textContent = 'Quiz Completed!';
    resultsContainer.appendChild(heading);
    
    // Add score
    const scoreContainer = document.createElement('div');
    scoreContainer.className = 'mt-4 mb-4';
    
    const scoreText = document.createElement('p');
    scoreText.className = 'lead';
    scoreText.textContent = 'Your Score:';
    scoreContainer.appendChild(scoreText);
    
    const score = document.createElement('div');
    score.className = 'display-1 text-primary mb-3';
    score.textContent = '80%';
    scoreContainer.appendChild(score);
    
    const scoreDescription = document.createElement('p');
    scoreDescription.textContent = 'Great job! You have a good understanding of the subject.';
    scoreContainer.appendChild(scoreDescription);
    
    resultsContainer.appendChild(scoreContainer);
    
    // Add recommendations
    const recommendationsContainer = document.createElement('div');
    recommendationsContainer.className = 'mt-4';
    
    const recommendationsHeading = document.createElement('h3');
    recommendationsHeading.textContent = 'Recommendations';
    recommendationsContainer.appendChild(recommendationsHeading);
    
    const recommendationsList = document.createElement('ul');
    recommendationsList.className = 'list-group mt-3';
    
    const recommendations = [
        'Review the concepts of electromagnetic induction',
        'Practice more problems on circular motion',
        'Check out our video tutorials on thermodynamics'
    ];
    
    recommendations.forEach(recommendation => {
        const item = document.createElement('li');
        item.className = 'list-group-item d-flex align-items-center';
        
        const icon = document.createElement('i');
        icon.className = 'fas fa-lightbulb text-warning me-3';
        item.appendChild(icon);
        
        const text = document.createElement('span');
        text.textContent = recommendation;
        item.appendChild(text);
        
        recommendationsList.appendChild(item);
    });
    
    recommendationsContainer.appendChild(recommendationsList);
    resultsContainer.appendChild(recommendationsContainer);
    
    // Add buttons
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'mt-4';
    
    const retryButton = document.createElement('a');
    retryButton.href = window.location.href;
    retryButton.className = 'btn btn-primary me-2';
    retryButton.textContent = 'Retry Quiz';
    buttonsContainer.appendChild(retryButton);
    
    const dashboardButton = document.createElement('a');
    dashboardButton.href = 'dashboard.html';
    dashboardButton.className = 'btn btn-outline-primary';
    dashboardButton.textContent = 'Go to Dashboard';
    buttonsContainer.appendChild(dashboardButton);
    
    resultsContainer.appendChild(buttonsContainer);
    
    // Add to quiz container
    quizContainer.appendChild(resultsContainer);
}