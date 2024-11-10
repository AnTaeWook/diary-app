const formatDate = function(dateString) {
	const date = new Date(dateString);  // 문자열을 Date 객체로 변환
	return date.toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	});
}

const currentDate = function(){
	return new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	});
}

export { formatDate, currentDate };
