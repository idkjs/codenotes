
<script>
  $(document).ready(function() {

    $("#getMessage").on("click", function() {
      $.getJSON("/json/cats.json", function(json) {

        var html = "";

        // pre-filter json.
        
        json = json.filter(function(val) {
  return (val.id !== 1);
});

        
        // Only change code above this line.

        json.forEach(function(val) {

          html += "<div class = 'cat'>"

          html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

          html += "</div>"

        });

        $(".message").html(html);

      });
    });
  });
</script>

<div class="container-fluid">
  <div class = "row text-center">
    <h2>Cat Photo Finder</h2>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12 well message">
      The message will go here
    </div>
  </div>
  <div class = "row text-center">
    <div class = "col-xs-12">
      <button id = "getMessage" class = "btn btn-primary">
        Get Message
      </button>
    </div>
  </div>
</div>

// location 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  });
}