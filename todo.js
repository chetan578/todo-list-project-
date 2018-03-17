//strike out todo
$("ul").on("click","li",function()
{

$(this).toggleClass("completed");
});
//delete todo 
$("ul").on("click","span",function(){
$(this).parent().fadeOut(500,function()
{
	$(this).remove();
});
});
//add todo to list 
$("input").on("keypress",function(event)
{
if(event.which===13)
{ var todotext = $(this).val();
$(this).val=("");
//append takes a string of html and appends it to the document .
$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todotext + "</li>");
}
});

$(".fa-angle-double-right").on("click",function(){
$("input").fadeToggle();

});