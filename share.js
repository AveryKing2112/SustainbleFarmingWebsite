const currentPageUrl = encodeURIComponent(window.location.href); 
// Define a default message to share, also encoded.
const shareText = encodeURIComponent('Check out my website hosted on GitHub Pages!');

// B. Function for Twitter
function shareOnTwitter() {
    // Twitter's share API: https://twitter.com/intent/tweet?text=[text]&url=[url]
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentPageUrl}`;
    
    // Opens the share dialog in a new pop-up window
    window.open(twitterUrl, 'Share to Twitter', 'width=600,height=400');
}

// C. Function for LinkedIn
function shareOnLinkedIn() {
    // Get the page title from the HTML document's <title> tag.
    const pageTitle = encodeURIComponent(document.title);

    // LinkedIn's share API: https://www.linkedin.com/shareArticle?url=[url]&title=[title]
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${currentPageUrl}&title=${pageTitle}`;
    
    // Opens the share dialog in a new pop-up window
    window.open(linkedInUrl, 'Share to LinkedIn', 'width=600,height=400');
}