//check off by clicking on todos
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete the todo
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  e.stopPropagation;
});

$("input[type='text']").keypress(function(e){
  if(e.which === 13){
    var todoText = $(this).val(); // use value that was inserted
    $(this).val(""); // set value in text box back to nothing
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
  }
})
