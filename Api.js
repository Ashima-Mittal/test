/*<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Validation</h2>

<p>Enter a number and click OK:</p>

<input id="id1" type="number" max="100">
<button onclick="myFunction()">OK</button>

<p>If the number is greater than 100 (the input's max attribute), an error message will be displayed.</p>

<p id="demo"></p>

<script>
function myFunction() {
  let text;
  if (document.getElementById("id1").validity.rangeOverflow) {
    text = "Value too large";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}
</script>

</body>
</html>


<script>
    const x = document.getElementById("demo");
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    }
    
    function showPosition(position) {
      x.innerHTML = "Latitude: " + position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude;
    }
    </script>



<button onclick="myFunction()">Go Back</button>

<script>
function myFunction() {
  window.history.back();
}
</script>

*/