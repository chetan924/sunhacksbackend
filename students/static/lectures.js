/**
 * JavaScript for the Lectures Page
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the lectures page
    initLecturesPage();
    
    // Initialize video modal functionality
    initVideoModal();
});

/**
 * Initialize the lectures page functionality
 */
function initLecturesPage() {
    // Get subject from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const subject = urlParams.get('subject') || 'physics';
    
    // Update page title with subject
    const subjectTitle = document.getElementById('subjectTitle');
    if (subjectTitle) {
        subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
    }
    
    // Get subject data
    const currentSubjectData = subjectVideoData[subject] || subjectVideoData.physics;
    
    // Load playlist
    loadPlaylist(currentSubjectData.playlistId);
    
    // Set up topic filters
    setupTopicFilters(currentSubjectData.topics);
    
    // Load video cards
    loadVideoCards(currentSubjectData.videos);
}

/**
 * Load YouTube playlist
 * @param {string} playlistId - YouTube playlist ID
 */
function loadPlaylist(playlistId) {
    const playlistContainer = document.getElementById('playlistContainer');
    if (playlistContainer) {
        playlistContainer.innerHTML = `
            <iframe src="https://www.youtube.com/embed/videoseries?list=${playlistId}" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>
        `;
    }
}

/**
 * Set up topic filtering functionality
 * @param {Array} topics - Array of topic objects with id and name properties
 */
function setupTopicFilters(topics) {
    const topicFilters = document.getElementById('topicFilters');
    if (!topicFilters) return;
    
    // Clear existing filters
    topicFilters.innerHTML = '';
    
    // Add 'All Topics' button
    const allTopicsBtn = document.createElement('button');
    allTopicsBtn.className = 'btn btn-outline-primary active';
    allTopicsBtn.setAttribute('data-topic', 'all');
    allTopicsBtn.textContent = 'All Topics';
    topicFilters.appendChild(allTopicsBtn);
    
    // Add topic-specific buttons
    topics.forEach(topic => {
        const button = document.createElement('button');
        button.className = 'btn btn-outline-primary';
        button.setAttribute('data-topic', topic.id);
        button.textContent = topic.name;
        topicFilters.appendChild(button);
    });
    
    // Add click event listeners to each topic button
    const topicButtons = topicFilters.querySelectorAll('button');
    topicButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the selected topic
            const selectedTopic = this.getAttribute('data-topic');
            
            // Remove active class from all buttons
            topicButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            this.classList.add('active');
            
            // Show/hide video items based on the selected topic
            const videoItems = document.querySelectorAll('.video-item');
            videoItems.forEach(item => {
                if (selectedTopic === 'all' || item.getAttribute('data-topic') === selectedTopic) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Load video cards into the grid
 * @param {Array} videos - Array of video objects
 */
function loadVideoCards(videos) {
    const videoGrid = document.getElementById('videoGrid');
    if (!videoGrid) return;
    
    // Clear existing video cards
    videoGrid.innerHTML = '';
    
    // Add video cards
    videos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'col video-item';
        videoCard.setAttribute('data-topic', video.topic);
        
        videoCard.innerHTML = `
            <div class="card h-100 video-card">
                <div class="ratio ratio-16x9">
                    <img src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" class="card-img-top" alt="${video.title} Thumbnail">
                    <div class="video-play-button">
                        <i class="fas fa-play-circle fa-3x"></i>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${video.title}</h5>
                    <p class="card-text">${video.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="badge bg-primary">${video.topic.charAt(0).toUpperCase() + video.topic.slice(1).replace(/-/g, ' ')}</span>
                        <span class="text-muted">${video.channel}</span>
                    </div>
                </div>
            </div>
        `;
        
        videoGrid.appendChild(videoCard);
    });
}

/**
 * Initialize video modal functionality
 */
function initVideoModal() {
    // We'll add click event listeners to video cards after they're loaded
    document.addEventListener('click', function(e) {
        // Check if clicked element is a video card or a child of a video card
        const videoCard = e.target.closest('.video-card');
        if (videoCard) {
            e.preventDefault();
            
            // Get video data
            const imgElement = videoCard.querySelector('img');
            const videoId = imgElement ? extractVideoIdFromImgSrc(imgElement.src) : null;
            
            if (videoId) {
                // Get video title
                const titleElement = videoCard.querySelector('.card-title');
                const title = titleElement ? titleElement.textContent : 'Video';
                
                // Create and show modal with embedded video
                showVideoModal(videoId, title);
            }
        }
    });
}

/**
 * Extract YouTube video ID from image source URL
 * @param {string} src - Image source URL
 * @returns {string|null} - YouTube video ID or null if not found
 */
function extractVideoIdFromImgSrc(src) {
    if (!src) return null;
    
    // Try to match YouTube video ID from thumbnail URL
    const regExp = /\/vi\/([^\/]+)\//;
    const match = src.match(regExp);
    
    return (match && match[1]) ? match[1] : null;
}

/**
 * Extract YouTube video ID from URL
 * @param {string} url - YouTube video URL
 * @returns {string|null} - YouTube video ID or null if not found
 */
function extractVideoId(url) {
    if (!url) return null;
    
    // Try to match YouTube video ID from various URL formats
    const regExp = /^.*(youtu\.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}

/**
 * Show video modal with embedded YouTube player
 * @param {string} videoId - YouTube video ID
 * @param {string} title - Video title
 */
function showVideoModal(videoId, title) {
    // Check if modal already exists, remove if it does
    let videoModal = document.getElementById('videoModal');
    if (videoModal) {
        videoModal.remove();
    }
    
    // Create modal HTML
    const modalHTML = `
    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="videoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="videoModalLabel">${title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0">
                    <div class="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Add modal to document
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Initialize and show the modal
    const modal = new bootstrap.Modal(document.getElementById('videoModal'));
    modal.show();
    
    // Add event listener to stop video when modal is closed
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
        const iframe = this.querySelector('iframe');
        if (iframe) {
            iframe.src = iframe.src;
        }
    });
}