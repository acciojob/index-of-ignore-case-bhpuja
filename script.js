// Function to perform case-insensitive indexOf
function indexOfIgnoreCase(str, subStr) {
    const lowerStr = str.toLowerCase();
    const lowerSubStr = subStr.toLowerCase();
    return lowerStr.indexOf(lowerSubStr);
}

// Handling form submission
document.getElementById('indexForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const mainString = document.getElementById('mainString').value;
    const subString = document.getElementById('subString').value;

    // Call the function and display the result
    const result = indexOfIgnoreCase(mainString, subString);
    document.getElementById('output').textContent = result;
});
