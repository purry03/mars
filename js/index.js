const maxMarsScroll = 700;

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

$(window).scroll(function () {
  let currentScrollPosition = $(window).scrollTop();
  if (currentScrollPosition < maxMarsScroll) {
    let newWidth = scale(currentScrollPosition, 0, maxMarsScroll, 0.5, 1.0);
    let newTextPosition = scale(
      currentScrollPosition,
      0,
      maxMarsScroll,
      0.7,
      1.15
    );
    let newOpacity = scale(currentScrollPosition, 0, maxMarsScroll, 1.0, 0.0);
    newWidth *= 100;
    newTextPosition *= 100;
    newOpacity *= 100;
    $(".mars-wrapper").css("width", newWidth + "%");
    $(".mars-text-wrapper").css("top", newTextPosition + "%");
    $(".mars-wrapper").css("opacity", newOpacity + "%");
  }
});
