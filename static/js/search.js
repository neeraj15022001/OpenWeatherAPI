// Implementing Search Functionality
function searchFunctionality() {
  // Declare variables
  var input, filter, ul, li, i, txtValue;
  input = document.getElementById("cityName");
  filter = input.value.toUpperCase();
  ul = document.getElementById("city-list");
  li = ul.getElementsByTagName("li");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    // a = li[i].getElementsByTagName("a")[0];
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("d-none");
    } else {
      li[i].classList.add("d-none");
    }
  }
  input.defaultValue = input.value;
}
