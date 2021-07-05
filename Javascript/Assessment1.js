$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

$(document).ready(function () {

  
	$("#IntermediateParts").hide();
  
	$("#BegineerButton").click(function () {
	
	  $("#IntermediateParts").show();
	});
	
  });

  $(document).ready(function()
  {
      $("#Lesson").removeClass('hover2').addClass('hover1');

  }); 