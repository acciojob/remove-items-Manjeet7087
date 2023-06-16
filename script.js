//your JS code here. If required.
function removeColor() {
  var colorSelect = document.getElementById('colorSelect');
  var selectedValue = colorSelect.value;
  
  if (selectedValue !== '') {
    var selectedOption = colorSelect.options[colorSelect.selectedIndex];
    colorSelect.removeChild(selectedOption);
  }
}

