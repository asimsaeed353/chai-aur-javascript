/* Difference between 'innerHTML', 'textContent', and 'innerText' */

// consider the following HTML code

// <h2>Hello this is Chai aur JavaScript series. It's amazing series <span style:"display: none"> and I'm loving it.</span></h2>

// Result of:

// innerText: Hello this is Chai aur JavaScript series. It's amazing series
// => innerText is showing only visible text inside the h2 and not showing the hidden text.

// textContent: Hello this is Chai aur JavaScript series. It's amazing series and I'm loving it.
// => textContent is showing all the text inside the h2 including the hidden text.

// innerHTML: Hello this is Chai aur JavaScript series. It's amazing series <span style:"display: none"> and I'm loving it.</span>
// => innerHTML is showing all the content inside <h2> including text and any HTML tags.

/* Node List and HTML List */

// Node Lists and HTML Lists are similar to Arrays but they are not Arrays. NodeList have some properites of Arrays e.g. 'forEach', 'indexing like array i.e. nodeList[0], htmlList[2]' but not all properties of Arrays.

// HTML List doesn't have 'forEach' functionality as like of arrays.


/* Converting NodeList or HTMLList into array */

// Array.from(nodeList)
