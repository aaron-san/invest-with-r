window.initializeCodeFolding = function (show) {
  // handlers for show-all and hide all
  $("#rmd-show-all-code").click(function () {
    $("div.r-code-collapse").each(function () {
      $(this).collapse("show");
    });
  });
  $("#rmd-hide-all-code").click(function () {
    $("div.r-code-collapse").each(function () {
      $(this).collapse("hide");
    });
  });

  // index for unique code element ids
  var currentIndex = 1;

  // select all R code blocks
  var rCodeBlocks = $(
    "pre.sourceCode, pre.r, pre.python, pre.bash, pre.sql, pre.cpp, pre.stan, pre.js"
  );
  rCodeBlocks.each(function () {
    // create a collapsable div to wrap the code in
    var div = $('<div class="collapse r-code-collapse"></div>');
    if (show) div.addClass("in");
    // if (show) div.addClass(5000, function () {
    //   setTimeout($(this).appendTo(div));
    // });

    // if (show) {
    //   setTimeout(function () {
    //     div.addClass("in");
    //   }, 4000);
    // }

    // if (show)
    //   $(document).ready(function () {
    //     div.delay("slow").addClass("in");
    //   });
    var id = "rcode-643E0F36" + currentIndex++;
    div.attr("id", id);
    $(this).before(div);
    $(this).detach().appendTo(div);
    // $(this).hide(5000, function () {
    //   setTimeout($(this).appendTo(div));
    // });

    // add a show code button right above
    var showCodeText = $(
      "<span>" + (show ? "Show Code" : "Hide Code") + "</span>"
    );
    var showCodeButton = $(
      '<button type="button" class="btn btn-default btn-xs code-folding-btn pull-right"></button>'
    );
    showCodeButton.append(showCodeText);
    showCodeButton
      .attr("data-toggle", "collapse")
      .attr("data-target", "#" + id)
      .attr("aria-expanded", show)
      .attr("aria-controls", id);

    var buttonRow = $('<div class="row"></div>');
    var buttonCol = $('<div class="col-md-12"></div>');

    buttonCol.append(showCodeButton);
    buttonRow.append(buttonCol);

    div.before(buttonRow);

    // update state of button on show/hide
    div.on("hidden.bs.collapse", function () {
      // setTimeout(function () {
      showCodeText.text("Show Code");
      // }, 4000);
    });
    div.on("show.bs.collapse", function () {
      // setTimeout(function () {
      showCodeText.text("Hide Code");
      // }, 5000);
    });
  });
};
