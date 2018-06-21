$(document).ready(function () {
  animate_frontpage_start();
  $("#contact").attr("href", "mailto:contact@detaen.com");
});

function animate_frontpage_start() {
  var width = $(window).width();
  var height = $(window).height();
  var size = width < height ? width : height;
  $("#title").width(size);
  $("#title").height(size);
  var list = [];
  for (var i = 0; i < 2; i++) {
    var element = document.createElement("object");
    $(element).attr("type", "image/svg+xml");
    $(element).attr("data", "assets/anim_title/" + i + ".svg");
    $("#title").append(element);
    list.push(element);
  }
  
  setTimeout(function() {
    list[0].style.opacity = 1;
  }, 0);

  setTimeout(function() {
    $("#cover").css({background: "#FFF"});
  }, 17000);

  setTimeout(function() {
    $("#info, footer, #contact").css("opacity", 1);
  }, 10800);

  setTimeout(function() {
    list[1].style.opacity = 1;
    list[0].style.opacity = 0;
    $("#info, footer, #contact").addClass("appear");
    animate_frontpage_end();
  }, 13500);

  setTimeout(function() {
    $("body").css({
      "background-image": "url('assets/background-min.png')"
    });
  }, 10);
}

function fade_in(list, index) {
  if (index < list.length) {
    setTimeout(function() {
      if (index > 0) {
        setTimeout(function() {
          list[index - 1].style.opacity = 0;
          setTimeout(function() {
            $(list[index - 1]).remove();
          }, 1000);
        }, 1000);
      }
      list[index].style.opacity = 1;
      fade_in(list, index + 1);
    }, index == 0 ? 0 : 3000);
  } else {
    setTimeout(animate_frontpage_end, 0);
  }
}

function animate_frontpage_end() {
  if ($(window).width() < 500) {
    $("#title").width($(window).width());
  } else {
    $("#title").width(500);
  }

  $("#title").css({
    "transform": "translate(0, -36%)"
  });

  $("#cover").css({opacity: 0});
  $("#info, footer").css({ opacity: 1});
}

$(window).resize(function() {
  if ($(window).width() < 500) {
    $("#title").width($(window).width());
  } else {
    $("#title").width(500);
  }
});
