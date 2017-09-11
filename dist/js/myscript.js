$( document ).ready(function(){





$('.table-allocate-inner').on('click',function(){

});

// Allocation and Deallocation of Tables

$('.table-allocate-inner').on('click',function(){

 if ($(this).hasClass("allocated")){
    $('#deallocate-table').click();
} else {
    // Do something if class does not exist
    $('#allocate-table').click();
	var countpeople = $(this).find('.table-badge').html();
	$('#addpeople').html(countpeople);
}
});


});