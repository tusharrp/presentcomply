function toggleDetails(button) {
    const memberDetails = button.parentElement.nextElementSibling;
    const isVisible = memberDetails.style.display === 'block';
    
    document.querySelectorAll('.member-details').forEach(details => {
        details.style.display = 'none';
    });
    
    if (!isVisible) {
        memberDetails.style.display = 'block';
    }
}
