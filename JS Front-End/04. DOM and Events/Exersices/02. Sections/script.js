function create(words) {

// Get the element with the id "content"
const contentElement = document.getElementById("content");

// Create a div with a hidden paragraph for each string
words.forEach(string => {
  // Create a div element
  const div = document.createElement("div");

  // Create a paragraph element
  const paragraph = document.createElement("p");
  paragraph.innerText = string;

  // Hide the paragraph initially
  paragraph.style.display = "none";

  // Add a click event listener to the div
  div.addEventListener("click", () => {
    // Toggle the display of the paragraph
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
    } else {
      paragraph.style.display = "none";
    }
  });

  // Append the paragraph to the div
  div.appendChild(paragraph);

  // Append the div to the content element
  contentElement.appendChild(div);
});

}