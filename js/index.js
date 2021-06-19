const maxMarsScroll = 700;
const elementsToAnimate = $(".animated");

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

function animateHeader(currentScrollPosition) {
  if (currentScrollPosition < maxMarsScroll) {
    let newWidth = scale(currentScrollPosition, 0, maxMarsScroll, 0.5, 1.0);
    let newTextPosition = scale(
      currentScrollPosition,
      0,
      maxMarsScroll,
      0.05,
      -0.5
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
    $(".mars-text-wrapper").css("bottom", newTextPosition + "%");
    $(".mars-wrapper").css("opacity", newOpacity + "%");
  }
}

function animateText(currentScrollPosiiton) {
  const windowHeight = $(window).height();
  elementsToAnimate.each(function () {
    let elementPosition = $(this).position().top - currentScrollPosiiton;
    let targetOpacity = 1;
    if ($(this).hasClass("full-opacity")) {
      targetOpacity = 1;
    } else if ($(this).hasClass("three-quarter-opacity")) {
      targetOpacity = 0.75;
    } else if ($(this).hasClass("half-opacity")) {
      targetOpacity = 0.5;
    }
    let newOpacity = scale(
      elementPosition,
      windowHeight * 0.66,
      0,
      0,
      targetOpacity
    );

    if ($(this).hasClass("triggerLeftFlyIn")) {
      if (newOpacity > 0) {
        $(this).addClass("animateLeftFlyIn");
      }
    } else if ($(this).hasClass("triggerRightFlyIn")) {
      if (newOpacity > 0) {
        $(this).addClass("animateRightFlyIn");
      }
    }

    $(this).css("opacity", newOpacity);
  });
}

$(window).scroll(function () {
  let currentScrollPosition = $(window).scrollTop();
  animateHeader(currentScrollPosition);
  animateText(currentScrollPosition);
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
