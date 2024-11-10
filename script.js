function toggleContent(contentId) {
    const content = document.getElementById(contentId);
    const button = content.previousElementSibling;

    // Toggle display of content
    if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove("active");
    } else {
        content.style.display = "block";
        button.classList.add("active");
    }
}
