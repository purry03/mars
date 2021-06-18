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
    let newOpacity = scale(
      currentScrollPosition,
      0,
      maxMarsScroll + 100,
      1.0,
      0.0
    );
    newWidth *= 100;
    newTextPosition *= 100;
    newOpacity *= 100;
    $(".mars-wrapper").css("width", newWidth + "%");
    $(".mars-text-wrapper").css("top", newTextPosition + "%");
    $(".mars-wrapper").css("opacity", newOpacity + "%");
  }
});

let currentRover = 1;

$(document).on("click", ".control", function () {
  let roverContainerWidth = $(this).parent().get(0).scrollWidth;
  let currentScrollPosiiton = $(this).parent().scrollLeft();
  let toScroll = $(".rover").get(0).getBoundingClientRect().width;
  console.log(toScroll);
  if ($(this).hasClass("left-control")) {
    $(this)
      .parent()
      .scrollLeft(currentScrollPosiiton - toScroll - 100);
  } else {
    $(this)
      .parent()
      .scrollLeft(currentScrollPosiiton + toScroll + 100);
  }
});
