$( document ).ready(function(){
$(".button-collapse").sideNav();
$('.modal').modal();

$('.table-design').on('click',function(){
var countpeople = $(this).find('p').html();
$('#count-people').html(countpeople);
});

$('#click-modules').on('click',function(){
	$('.open-modules').click();
});
});