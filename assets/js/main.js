// assets/js/main.js

// Function to include HTML components
function includeComponent(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${file}:`, error);
    });
}

// Call this in each HTML file like:
// includeComponent("components/header.html", "header");
// includeComponent("components/sidebar.html", "sidebar");
// includeComponent("components/footer.html", "footer");
