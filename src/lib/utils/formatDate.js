const formatDate = function(){
	return new Date().toLocaleDateString('ko-KR', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	});
}

export default formatDate;