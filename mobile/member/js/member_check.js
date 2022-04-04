$(document).ready(function () {
	$('.check_agree').on('click', check_agree);

	function check_agree(e) {
		var checkboxLength = $('input[type="checkbox"]').length;
		var checkedLength = $('input[type="checkbox"]:checked').length;
		if (checkboxLength != checkedLength) {
			alert('수집하는 개인정보 항목에 동의해야 가입하실 수 있습니다.');
			e.preventDefault();
		} else {
			location.href = 'member_form.php';
		}
	}

	$('.allcheck').on('click', function (e) {
		if ($(this).attr('checked') == 'checked') {
			$('.check input[type="checkbox"]').attr('checked', 'checked');
		} else {
			$('.check input[type="checkbox"]').attr('checked', false);
		}
	});
});

function join_cancel() {
	history.go(-1);
}
