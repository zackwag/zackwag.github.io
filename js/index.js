function getYear(yearStart, yearEnd) {
    // Use the current year if yearEnd is null or undefined
    yearEnd = yearEnd ?? new Date().getFullYear();

    // Calculate the difference
    let result = yearEnd - yearStart;

    // Return the result with the correct form of "year" or "years" using template literals
    return `${result} year${result === 1 ? '' : 's'}`;
}

window.addEventListener("DOMContentLoaded", function () {
    let relativeYearElements = document.querySelectorAll(".relativeYear");
    for(let i = 0; i < relativeYearElements.length; i++) {
        let element = relativeYearElements[i];

        // Retrieve and parse the yearStart value
        let yearStart = parseInt(element.getAttribute("data-year-start"));

        // Attempt to retrieve the yearEnd value; parse if it exists
        let yearEndAttribute = element.getAttribute("data-year-end");
        let yearEnd = yearEndAttribute ? parseInt(yearEndAttribute) : null;

        // Check whether yearEnd is not null and call getYear accordingly
        let relativeYearText = yearEnd !== null ? getYear(yearStart, yearEnd) : getYear(yearStart);

        // Set the element's text to be the newly created string
        element.replaceWith(relativeYearText);
    }
});
