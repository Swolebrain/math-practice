$(".menu > span").click(function() {
  console.log($(this).attr("target"));
  window.location = $(this).attr("target"); 
});