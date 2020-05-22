$("#plusBtn").on("click", function(){
    $("input[type='text']").fadeToggle();    
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    }); 
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $("this").val("");
        $("ul").append('<li><span><i class="far fa-trash-alt"></i></span>' + todoText + '</li>');
    }
});