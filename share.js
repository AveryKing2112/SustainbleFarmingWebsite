const currentPageUrl = encodeURIComponent(window.location.href); 
const shareText = encodeURIComponent('Check out this website hosted on GitHub.');
function shareOnFacebook() {    
    const FacebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${currentPageUrl}`;  
    window.open(FacebookUrl, 'Share to Facebook', 'width=600,height=400');
}
function shareOnLinkedIn() {
    const pageTitle = encodeURIComponent(document.title);
    const linkedInUrl = `https://www.linkedin.com/shareArticle?url=${currentPageUrl}&title=${pageTitle}`;   
    window.open(linkedInUrl, 'Share to LinkedIn', 'width=600,height=400');
}