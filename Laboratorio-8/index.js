$(document).ready(function() {
    $(".btn-cal").prop('disabled', true);
    $("#string").keyup(function() {
       if($(this).val() != '') {
          $(".btn-cal").prop('disabled', false);
       }
    });
});

$(".btn-cal").click(function(){
    var str = $("#string").val();    
    var obj={}

    for(x = 0, length = str.length; x < length; x++) {
        var l = str.charAt(x);     
        obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }   

    var siz = JSON.stringify(obj, null, 2); 
    $(".result-text").append("" + siz.replace(/[{","}]/g, '')  + "");
    $(".btn-clr").removeClass("visibility-h");
    $("h2").removeClass("visibility-h");
    $(".btn-cal").prop('disabled', true);
});

$(".btn-clr").click(function(){
    $(".result-text").empty();
    $(".btn-clr").addClass("visibility-h");
    $("h2").addClass("visibility-h");
    $(".btn-cal").prop('disabled', true);
});