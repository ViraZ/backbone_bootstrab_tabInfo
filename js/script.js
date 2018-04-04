$(document).ready(function(e){
	$('form').validate ({
		rules:{
			name:{
			require: true
		},
		email: {
			require: true,
			email: true
		},
		img: {
			url: true
		},

		success: function(label){
			label.text('OK').addClass('valid')
		}
		}	
	});
 $('#btnSubmit').click(function(){ 
	 var email = $('#exampleInputEmail').val();
	 var reg = '[a-zA-Z_\\.-]+@((?!outlook.com)|(gmail))\\.[a-z]{2,4}';
	  if (email.match(reg)){
		 return false;
		 }
		 else{
	 alert('Please Enter Business Email Address');
 	return true;
 }
 });

  	$('.sbox-show').click(function() {
		$(this).next().add(this).toggleClass('hidden');
		$('<img src="' + $(this).attr('href') + '">').insertAfter(this);
		return false;
	});
	$('.sbox-hide').click(function() {
		$(this).prev().remove(); // the image
		$(this).prev().add(this).toggleClass('hidden');
		return false;
	});
	
});
