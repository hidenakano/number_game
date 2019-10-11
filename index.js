var correct_answer = Math.floor( Math.random() * 3 ) ) + 1;

function checkAnswer(x) {
	var correct_answer = Math.floor( Math.random() * 3 ) ) + 1;
	if x == correct_answer {
		document.getElementById('comment_area').value = "当たり!!";
	}else{
		document.getElementById('comment_area').value = "はずれ";
	}
}
