
$(document).ready(function () {


	$('.contact').on('submit', function (e) {
		e.preventDefault();

		// Code for validating the form
		$('form input, form textarea, fieldset input').each(function() {
			// Cache $(this) to optimize code a bit.
			var $currentField = $(this);
      $currentField.removeClass('error');
			var fieldType = $(this).attr('type');

			if ( $currentField.val() === '' ) {
				$currentField.addClass('error');
				$currentField.siblings('.error-message').fadeIn();
				// After adding error styles, move on to the next field and skip the next steps for that input/textarea
				return;
			}

			if (fieldType === 'email') {
				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				var isValidEmailAddress = re.test($currentField.val());
				if (!isValidEmailAddress) {
			    $currentField.addClass('error');
					$currentField.siblings('.error-message').text('Please enter a valid email address.').fadeIn();
					// After adding error styles, move on to the next field and skip the next steps for that input/textarea
					return;
			  }

			}

			// Since we used return above, the below code will only run if the field has input and, if it is an email field, has a valid email address.
			$currentField.removeClass('error');
			$currentField.siblings('.error-message').hide();

		});
	});

	// Smooth scroll
  //smooth scroll across different document requires this:
  // https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
// var $root = $('html, body');
//
// $('a[href^="#"]').click(function() {
//     var href = $.attr(this, 'href');
//
//     $root.animate({
//         scrollTop: $(href).offset().top
//     }, 500, function () {
//         window.location.hash = href;
//     });
//
//     return false;
// }); //end smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

});
