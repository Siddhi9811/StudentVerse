// Add some interactivity here if necessary
document.querySelector(".search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = e.target.querySelector("input").value;
    alert("You searched for: " + query);
});