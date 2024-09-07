$(document).ready(function(){
    $('#mobile_btn').on('click', function (){
        $('#mobile_servicos').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });
});
