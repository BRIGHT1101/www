reg.addEventListener('click', function (e) {
	e.preventDefault();
	if (!document.member_form.id.value) {
		alert('아이디를 입력하세요');
		document.member_form.id.focus();
		return;
	}

	if (!document.member_form.pass.value) {
		alert('비밀번호를 입력하세요');
		document.member_form.pass.focus();
		return;
	}

	if (!document.member_form.pass_confirm.value) {
		alert('비밀번호확인을 입력하세요');
		document.member_form.pass_confirm.focus();
		return;
	}

	if (!document.member_form.name.value) {
		alert('이름을 입력하세요');
		document.member_form.name.focus();
		return;
	}

	if (!document.member_form.nick.value) {
		alert('닉네임을 입력하세요');
		document.member_form.nick.focus();
		return;
	}

	if (!document.member_form.hp.value) {
		alert('휴대폰 번호를 입력하세요');
		document.member_form.nick.focus();
		return;
	}

	if (
		document.member_form.pass.value != document.member_form.pass_confirm.value
	) {
		alert('비밀번호가 일치하지 않습니다.\n다시 입력해주세요.');
		document.member_form.pass.focus();
		document.member_form.pass.select();
		return;
	}

	document.member_form.submit();
});
