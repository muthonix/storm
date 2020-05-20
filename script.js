/*var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {            //find overflowing element
      console.log(el);
    }
  }
);*/

$(document).ready(function(){
    $(".fa-search").click(function(){
        $(".icon").toggleClass("active");
        $("input[type='text']").toggleClass("active");
    });
});
