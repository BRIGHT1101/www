$(function () {
	$('#date').attr('min', new Date().toISOString().substring(0, 10));
	$(
		'#contactForm input,#contactForm textarea,#contactForm select'
	).jqBootstrapValidation({
		preventSubmit: true,
		submitError: function ($form, event, errors) {},
		submitSuccess: function ($form, event) {
			$('#btnSubmit').attr('disabled', true);
			event.preventDefault();
			var name = $('input#name').val();
			var email = $('input#email').val();
			var phone = $('input#phone').val();
			var message = $('textarea#message').val();
			var education = $('select#education').val();
			var edudate = $('input#date').val();
			var firstName = name;
			if (firstName.indexOf(' ') >= 0) {
				firstName = name.split(' ').slice(0, -1).join(' ');
			}
			$.ajax({
				url: 'js/contact_me.php',
				type: 'POST',
				data: {
					name: name,
					phone: phone,
					email: email,
					message: message,
					education: education,
					edudate: edudate,
				},
				cache: false,
				success: function () {
					$('#btnSubmit').attr('disabled', false);
					$('#success').fadeIn('fast');
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success')
						.html(
							"<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
						)
						.append('</button>');
					$('#success > .alert-success').append(
						'<strong>신청이 완료되었습니다! </strong>'
					);
					$('#success > .alert-success').append('</div>');
					setTimeout(() => {
						$('#success').fadeOut();
					}, 3000);
					$('#contactForm').trigger('reset');
				},
				error: function () {
					$('#success').fadeIn('fast');
					$('#success').html("<div class='alert alert-danger'>");
					$('#success > .alert-danger')
						.html(
							"<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
						)
						.append('</button>');
					$('#success > .alert-danger').append(
						'<strong>죄송합니다 ' +
							firstName +
							'님, 일시적인 오류로 인해 신청되지 않았습니다. 다시 시도해주세요.'
					);
					$('#success > .alert-danger').append('</div>');
					$('#contactForm').trigger('reset');
					setTimeout(() => {
						$('#success').fadeOut();
					}, 3000);
				},
			});
		},
		filter: function () {
			return $(this).is(':visible');
		},
	});

	$('a[data-toggle="tab"]').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	});
});

$('#name').focus(function () {
	$('#success').html('');
});
