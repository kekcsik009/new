// window.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#btn-menu").addEventListener("click", function () {
//     document.querySelector("#menu").classList.toggle("is-active");
//   });
// });

// $(".envelope").on("click", function (e) {
//   $(".envelope__top").toggleClass("envelope__top_close");
//   $(".paper").toggleClass("paper_close");
// });

// Получаем модальное окно и кнопку для его открытия
var modal = document.getElementById("modal");
var btn = document.querySelector(".open-button");

// Получаем элемент закрытия модального окна
var span = document.getElementsByClassName("close")[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function () {
  modal.style.display = "block";
};

// Закрываем модальное окно при клике на элемент закрытия
span.onclick = function () {
  modal.style.display = "none";
};

// Закрываем модальное окно при клике вне его области
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

(function ($) {
  function injector(t, splitter, klass, after) {
    var text = t.text(),
      a = text.split(splitter),
      inject = "";
    if (a.length) {
      $(a).each(function (i, item) {
        inject +=
          '<span class="' +
          klass +
          (i + 1) +
          '" aria-hidden="true">' +
          item +
          "</span>" +
          after;
      });
      t.attr("aria-label", text).empty().append(inject);
    }
  }

  var methods = {
    init: function () {
      return this.each(function () {
        injector($(this), "", "char", "");
      });
    },

    words: function () {
      return this.each(function () {
        injector($(this), " ", "word", " ");
      });
    },

    lines: function () {
      return this.each(function () {
        var r = "eefec303079ad17405c889e092e105b0";
        injector($(this).children("br").replaceWith(r).end(), r, "line", "");
      });
    },
  };

  $.fn.lettering = function (method) {
    // Method calling logic
    if (method && methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else if (method === "letters" || !method) {
      return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
    }
    $.error("Method " + method + " does not exist on jQuery.lettering");
    return this;
  };
})(jQuery);

$(document).ready(function () {
  $("#text").lettering();
});
