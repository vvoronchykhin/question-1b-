$(document).ready(function() {
    // Accordion
    $("#accordion").accordion();
  
    // Autocomplete
    var availableTags = ["Slider", "Styles", "Cherry", "Date", "Date Picker"];
    $("#autocomplete").autocomplete({
      source: availableTags
    });
  
    // Date Picker
    $("#datepicker").datepicker();
  
    // Slider
    $("#slider").slider({
      range: "min",
      value: 50,
      min: 0,
      max: 100,
      slide: function(event, ui) {
        $("#slider-value").text(ui.value);
      }
    });
    $("#slider-value").text($("#slider").slider("value"));
  });
  