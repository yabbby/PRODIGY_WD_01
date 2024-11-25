function showDescription(item) {
    // Hide all descriptions
    const descriptions = document.querySelectorAll('.description p');
    descriptions.forEach(desc => desc.classList.add('hidden'));

    // Show selected description
    const selectedDescription = document.getElementById(item);
    selectedDescription.classList.remove('hidden');
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60, // Adjust for the fixed navbar
        behavior: 'smooth'
    });
}

alert('This is an interactive navigation bar. Click on the links to scroll to the corresponding section.');