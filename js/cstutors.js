/*
 * Allows for simple templates.
 */

// add bootstrap css and javascript to head
$.get("/html/bootstrap.html", function(html) {
  $('head').append(html);
}, "html");

// add navigation bar to before container
$.get("/html/navigation.html", function(html) {
  $("body").prepend(html);
  $("li#nav-" + activeid).addClass("active");
}, "html");

// add footer bar to end of container
$.get("/html/footer.html", function(html) {
  $(".container").append(html);
});
