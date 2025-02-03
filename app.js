function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50, // Adjusts for navbar height
        behavior: 'smooth'
    });
}
