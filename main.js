
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function likeFunction(buttonNumber) {
  alert('You liked button ' + buttonNumber);
  // You can customize this function to perform any action when a like button is clicked
}
function squareIconFunction(iconNumber) {
  alert('You clicked square icon ' + iconNumber);
  // You can customize this function to perform any action when a square icon is clicked
}
    // Function to handle menu item click
    function handleMenuItemClick(item) {
        console.log("Selected menu item:", item.textContent);
        // Add your desired actions here
    }

    // Function to set up event listeners for menu items
    function setupMenu() {
        var menuItems = document.querySelectorAll("#myMenu a");

        menuItems.forEach(function (item) {
            item.addEventListener("click", function () {
                handleMenuItemClick(item);
            });
        });
    }

    // Call the setupMenu function when the document is ready
    document.addEventListener("DOMContentLoaded", function () {
        setupMenu();
    });

    // Function to handle menu item click
    function handleMenuItemClick(item) {
        console.log("Selected menu item:", item.textContent);

        // Check if the clicked item is "SOFA"
        if (item.textContent === "SOFA") {
            // Add your specific action for "SOFA"
            displaySofaSuggestions();
        }

        // Add your desired actions for other menu items here
    }

    // Function to display suggestions for "SOFA"
    function displaySofaSuggestions() {
        // Replace this with your logic to display suggestions for "SOFA"
        alert("Here are some sofa suggestions!");
    }

    // Function to set up event listeners for menu items
    function setupMenu() {
        var menuItems = document.querySelectorAll("#myMenu a");

        menuItems.forEach(function (item) {
            item.addEventListener("click", function () {
                handleMenuItemClick(item);
            });
        });
    }

    // Call the setupMenu function when the document is ready
    document.addEventListener("DOMContentLoaded", function () {
        setupMenu();
    });

