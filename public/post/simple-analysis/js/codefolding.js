$(document).ready(function () {
  $chunks = $(".fold");

  $chunks.each(function () {
    // add button to source code chunks
    if ($(this).hasClass("s")) {
      $("pre.r", this).prepend(
        '<div class="showopt">Show Source</div><br style="line-height:22px;"/>'
      );
      $("pre.r", this).children("code").attr("class", "folded");
    }

    // add button to output chunks
    if ($(this).hasClass("o")) {
      $("pre:not(.r)", this)
        .has("code")
        .prepend(
          '<div class="showopt">Show Output</div><br style="line-height:22px;"/>'
        );
      $("pre:not(.r)", this).children("code:not(r)").addClass("folded");

      // add button to plots
      $(this).find("img").wrap('<pre class="plot"></pre>');
      $("pre.plot", this).prepend(
        '<div class="showopt">Show Plot</div><br style="line-height:22px;"/>'
      );
      $("pre.plot", this).children("img").addClass("folded");
    }
  });

  // hide all chunks when document is loaded
  $(".folded").css("display", "none");

  // function to toggle the visibility
  $(".showopt").click(function () {
    var label = $(this).html();
    if (label.indexOf("Show") >= 0) {
      $(this).html(label.replace("Show", "Hide"));
    } else {
      $(this).html(label.replace("Hide", "Show"));
    }
    $(this).siblings("code, img").slideToggle("fast", "swing");
  });
});

// $(".toggle").click(function () {
//   $(this).toggleClass("open");
// });

// myFunction() {
//   var x = document.getElementById("rcode");
//   if(x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
//   }

// window.initializeCodeFolding = function (show) {
//   handlers for show-all and hide all
//   $("#rmd-show-all-code").click(function () {
//     $("div.r-code-collapse").each(function () {
//       $(this).collapse("show");
//     });
//   });
//   $("#rmd-hide-all-code").click(function () {
//     $("div.r-code-collapse").each(function () {
//       $(this).collapse("hide");
//     });
//   });

//   // index for unique code element ids
//   var currentIndex = 1;

//   // select all R code blocks
//   var rCodeBlocks = $(
//     "pre.sourceCode, pre.r, pre.python, pre.bash, pre.sql, pre.cpp, pre.stan, pre.js"
//   );
//   rCodeBlocks.each(function () {
//     // create a collapsable div to wrap the code in
//     var div = $('<div class="collapse r-code-collapse"></div>');
//     if (show) div.addClass("in");

//     $(this).appendTo(div);

//     var id = "rcode-643E0F36" + currentIndex++;
//     div.attr("id", id);
//     $(this).before(div);
//     $(this).detach().appendTo(div);

//     // add a show code button right above
//     var showCodeText = $(
//       "<span>" + (show ? "Show Code" : "Hide Code") + "</span>"
//     );
//     var showCodeButton = $(
//       '<button type="button" class="btn btn-default btn-xs code-folding-btn pull-right"></button>'
//     );
//     showCodeButton.append(showCodeText);
//     showCodeButton
//       .attr("data-toggle", "collapse")
//       .attr("data-target", "#" + id)
//       .attr("aria-expanded", show)
//       .attr("aria-controls", id);

//     var buttonRow = $('<div class="row"></div>');
//     var buttonCol = $('<div class="col-md-12"></div>');

//     buttonCol.append(showCodeButton);
//     buttonRow.append(buttonCol);

//     // Place an element before each div
//     div.before(buttonRow);

//     // update state of button on show/hide
//     div.on("hidden.bs.collapse", function () {
//       showCodeText.text("Show Code");
//     });
//     div.on("show.bs.collapse", function () {
//       showCodeText.text("Hide Code");
//     });
//   });
// };
