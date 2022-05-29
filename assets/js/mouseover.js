$(".productdetails-main__top__mainimage")
.on("mouseover", function() {
  $(this)
    .children(".img_producto")
    .css({ transform: "scale(" + $(this).attr("data-scale") + ")" });
})
.on("mouseout", function() {
  $(this)
    .children(".img_producto")
    .css({ transform: "scale(1)" });
})
.on("mousemove", function(e) {
  $(this)
    .children(".img_producto")
    .css({
      "transform-origin":
        ((e.pageX - $(this).offset().left) / $(this).width()) * 100 +
        "% " +
        ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +
        "%"
    });
});