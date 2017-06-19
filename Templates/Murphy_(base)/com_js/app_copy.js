/* eslint-env browser */
/*jslint devel: true */
/* jshint browser: true */
/* global document */
/* eslint-disable no-console */
/*--------------------Hide example question-------------------------*/
var question = document.querySelector('.question');
var exampleAnswerHide = document.querySelector('.img_example');
var el = question;
if (el) {
	el.addEventListener('click', function (event) {
		if (event.target.textContent !== '') {
			exampleAnswerHide.classList.toggle('active');
			console.log(event.target);
		}
	});
}
var questionAudio = document.getElementById('question-audio');
/*--------------------variables-------------------------*/
var body = document.getElementById(body);
//var hamburgers = document.querySelectorAll(".hamburger");
var buttons = document.getElementsByClassName('circle'),
		buttonsFirst = document.getElementsByClassName('circle'),
		mainCircle = document.getElementsByClassName('mainCircle'),
		overlay = document.getElementsByClassName('overlay'),
		p_AppButton = document.getElementsByClassName('p_app_button'),
		gridPad = document.getElementsByClassName('grid-pad'),
		appendixes = document.getElementsByClassName('appendixes');
//	headingTable = document.getElementsByClassName('heading');
//	spinningContainer = document.getElementsByClassName('spinningContainer');
var buttonsClass = document.querySelector('.buttons'),
		buttonAllClose = document.querySelector('.header-close'),
		bodyCard = document.querySelector('.card'),
		circlePositionerTitle = document.querySelector('.circlePositioner_title'), // change for back side add "_back"
	arrowLine = document.querySelector('.arrow_06B13_line'), // change for back side add "_back"
	overlayTitleM = document.querySelector('#overlay_title'),
		overlayTitleL = document.querySelector('.mainCircle_title'),
		header = document.querySelector('.header'),
		hamburgerMain = document.querySelector('.hamburger--arrowalt-r');
var textP_Title = document.getElementById('p_button');
if (document.querySelector('.arrow_06B13_line_back')) {
	arrowLine = document.querySelector('.arrow_06B13_line_back');
	window.scrollTo(0, 0);
}
if (document.querySelector('.circlePositioner_title_back')) {
	circlePositionerTitle = document.querySelector('.circlePositioner_title_back');
}
if (document.querySelector('.hamburger--arrowalt')) {
	hamburgerMain = document.querySelector('.hamburger--arrowalt');
}
/*--------------------Common Reset to Default-------------------------*/
bodyCard.style.position = null;
var appendixesHideAll = function () {
	for (var i = 0; i < appendixes.length; i++) {
		appendixes[i].classList.remove('active');
	}
};
var buttonsColorDefault = function () {
	for (var i = 0; i < overlay.length; i++) {
		overlay[i].classList.remove('active');
	}
	for (var z = 0; z < mainCircle.length; z++) {
		mainCircle[z].classList.remove('active');
	}
	for (var y = 0; y < p_AppButton.length; y++) {
		p_AppButton[y].classList.remove('active');
	}
	//	for (var f = 0; f < spinningContainer.length; f++) {
	//		spinningContainer[f].classList.remove('active');
	//	}
};
/*--------------------Hide Header-------------------------*/
var unitTableDiv = document.querySelector('.unit_table');
var mainTable = document.querySelector('.main_table');

function hideHeader() {
	header.classList.remove('active_1');
	header.classList.remove('active_2');
	unitTableDiv.classList.remove('active');
	mainTable.classList.remove('active');
	overlayTitleM.classList.remove('active');
	overlayTitleL.classList.remove('active');
	arrowLine.style.opacity = '1';
	textP_Title.classList.remove('active');
}
circlePositionerTitle.addEventListener('click', function () {
	if (header.style.maxHeight === '500px') {
		buttonsColorDefault();
		hideHeader();
		textP_Title.textContent = 'A';
		bodyCard.style.position = null;
		//		unitTableDiv.classList.remove('active');
	}
	else {
		header.classList.toggle('active_1');
		if (header.className === 'header base active_1') {
			unitTableDiv.classList.toggle('active');
		}
		else {
			unitTableDiv.classList.remove('active');
		}
		mainTable.classList.toggle('active');
		overlayTitleM.classList.toggle('active');
		overlayTitleL.classList.toggle('active');
		textP_Title.classList.toggle('active');
		buttonAllClose.classList.remove('active');
	}
});
/*--------------------show Appendix-------------------------*/
	var i_app = 0, y_app = 1;
(function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP) { // spinning
	/*--------------------Conditions for Responsive drop down appendixes-------------------------*/
	function app() {
		function responsiveCirclePosition(targetCircle) {
			if (window.innerWidth < 769) {
				buttonsClass.insertBefore(targetCircle, buttonsClass.firstChild);
			}
		}

		function responsiveCirclePositionRef(targetCircle, beforeEl) {
			if (window.innerWidth < 769) {
				buttonsClass.insertBefore(targetCircle, beforeEl);
			}
		}

		function responsiveCirclePositionLast(targetCircle) {
			if (window.innerWidth < 769) {
				buttonsClass.appendChild(targetCircle);
			}
		}

		function circlePaddingNone() {
			if (window.innerWidth < 769) {
				buttonsFirst[0].style.paddingBottom = "0";
			}
		}

		function circlePaddingDone() {
			if (window.innerWidth < 769) {
				buttonsFirst[0].style.paddingBottom = "2em";
			}
		}
		/*--------------------Reset with Exceptions-------------------------*/
		var appendixesHide = function (except) {
			for (var i = 0; i < appendixes.length; i++) {
				appendixes[i].classList.remove('active');
				except.classList.add('active');
			}
		};
		var buttonsColorHide = function (exceptOverlay, exceptMainCircle, exceptP) { //  ,exceptC
			for (var i = 0; i < overlay.length; i++) {
				overlay[i].classList.remove('active');
				exceptOverlay.classList.add('active');
			}
			for (var z = 0; z < mainCircle.length; z++) {
				mainCircle[z].classList.remove('active');
				exceptMainCircle.classList.add('active');
			}
			for (var y = 0; y < p_AppButton.length; y++) {
				p_AppButton[y].classList.remove('active');
				exceptP.classList.add('active');
			}
			//			for (var f = 0; f < spinningContainer.length; f++) {
			//				spinningContainer[f].classList.remove('active');
			//				exceptC.classList.add('active');
			//			}
		};
		/*--------------------Conditions-------------------------*/
		if (appendix.className === 'appendixes active') {
			appendix.classList.toggle('active');
			targetM.classList.toggle('active');
			targetL.classList.toggle('active');
			targetP.classList.toggle('active');
			//			spinning.classList.toggle('active');
			header.classList.remove('active_2');
			buttonAllClose.classList.remove('active');
			bodyCard.style.position = null;
			arrowLine.style.opacity = '1';
			circlePaddingNone();
			circlePositionerTitle.classList.remove('active');
			responsiveCirclePositionRef(circle, beforeEl);
			if (circle === buttons[6]) {
				responsiveCirclePositionLast(circle);
			}
		}
		else {
			appendix.scrollTop = 0;
			for (var i = 0; i < gridPad.length; i++) {
				gridPad[i].scrollTop = 0;
			}
			responsiveCirclePosition(circle, beforeEl);
			header.classList.add('active_2');
			bodyCard.style.position = 'fixed';
			unitTableDiv.classList.remove('active');
			appendixesHide(appendix);
			buttonsColorHide(targetM, targetL, targetP); // spinning
			buttonAllClose.classList.add('active');
			circlePaddingDone();
			circlePositionerTitle.classList.add('active');
			arrowLine.style.opacity = '0';
		}
		/*--------------------Reset button-------------------------*/
		buttonAllClose.onclick = function () {
			circlePaddingNone();
			responsiveCirclePositionRef(circle, beforeEl);
			if (circle === buttons[6]) {
				responsiveCirclePositionLast(circle);
			}
			appendixesHideAll();
			buttonsColorDefault();
			hideHeader();
			//			if (window.innerWidth > 768) {
			circlePositionerTitle.classList.remove('active');
			//			}
			bodyCard.style.position = null;
			buttonAllClose.classList.remove('active');
		};
	} // End of function app()
	if (circle === undefined){
		circle = buttons[0];
	}
	circle.addEventListener('click', app);

	if (i_app <= 20 && y_app <= 20) {
		i_app++; y_app++;
	return showAppendix(appendixes[i_app], buttons[i_app], buttons[y_app], overlay[i_app], mainCircle[i_app], p_AppButton[i_app]);
	}
}).call(this); // End of function showAppendix(appendix, circle, beforeEl, targetM, targetL, targetP)

/*--------------------Modal Window-------------------------*/
var modalButton = document.querySelector('.myButt');
var modalWrap = document.querySelector('.modal__wrap');
var materialIcons = document.querySelector('.material-icons');
var modalOverlay = document.querySelector('.modal__overlay');
modalButton.addEventListener('click', function () {
	if (header.className === 'header base active_1') {
		hamburgerMain.classList.toggle("is-active");
	}
	modalOverlay.style.display = "block";
	modalOverlay.style.zIndex  = "800";
	setTimeout(function () {
		modalOverlay.classList.toggle('active');
		hideHeader();
		bodyCard.style.position = 'fixed';
		modalOverlay.scrollTop = 0;
		modalWrap.scrollTop = 0;
		modalWrap.scrollLeft = 0;
	}, 300);
	setTimeout(function () {
		materialIcons.style.display = 'block';
	}, 550);
});
materialIcons.addEventListener('click', function () {
	modalOverlay.classList.toggle('active');
	bodyCard.style.position = null;
		setTimeout(function () {
			modalOverlay.style.display = null;
			modalOverlay.style.zIndex  = null;
		}, 1000);
	setTimeout(function () {
		materialIcons.style.display = 'none';
	}, 100);
});
/*--------------------hamburgers-------------------------*/
var buttonGambur = document.querySelector('.gamb-wrap'); // change for back side add "_back"
if (document.querySelector('.gamb-wrap-back')) {
	buttonGambur = document.querySelector('.gamb-wrap-back');
	console.log('YEAH');
}
buttonGambur.addEventListener('click', function () {
	if (header.style.maxHeight === '500px') {
		hideHeader();
		bodyCard.style.position = null;
	}
	else {
		header.classList.toggle('active_1');
		if (header.className === 'header base active_1') {
			unitTableDiv.classList.toggle('active');
		}
		else {
			unitTableDiv.classList.remove('active');
		}
		mainTable.classList.toggle('active');
		overlayTitleM.classList.toggle('active');
		overlayTitleL.classList.toggle('active');
		textP_Title.classList.toggle('active');
		circlePositionerTitle.classList.remove('active');
		//		bodyCard.style.position = 'fixed';
	}
});
/*--------------------Hide Fields-------------------------*/
var addWordsBox2 = document.querySelector('div.add_words2');
var unitNumber = document.querySelector('.th_1');
var layerButton = document.querySelector('.layer');
var highlight = document.querySelector('div.highlight');
var hr = document.getElementsByTagName('hr');
var box1None = true,
		box2None = true;
if (document.querySelector('div.add_words1')) {
	var addWordsBox1 = document.querySelector('div.add_words1');
	if (addWordsBox1.textContent === '') {
		box1None = false;
		addWordsBox1.style.display = 'none';
	}
	if (addWordsBox2.textContent === '') {
		box2None = false;
		addWordsBox2.style.display = 'none';
	}
	if (box1None === true && box2None === true) {
		addWordsBox1.style.width = '47%';
		addWordsBox2.style.width = '47%';
	}
}
if (document.getElementById('question-audio') && questionAudio.innerHTML === '') {
	questionAudio.style.display = 'none';
}
if (modalWrap.innerHTML === '') {
	modalButton.style.display = 'none';
	hr[0].style.marginTop = '50px';
}
if (exampleAnswerHide.innerHTML === '') {
	exampleAnswerHide.style.display = 'none';
}
if (highlight.innerHTML === '') {
	highlight.style.display = 'none';
}
else {
	modalButton.style.display = 'block';
}
if (unitNumber.innerHTML === '') {
	unitNumber.innerHTML = '»»»» ♨';
}
if (layerButton.innerHTML === '') {
	layerButton.innerHTML = 'YEAH';
}
/*--------------------choices words field-------------------------*/
var hint = document.querySelectorAll(".hint");
if (hint.length > 0) {
	hint[0].innerHTML = "Hint";
	var id = hint[1].getAttribute("id");
	var choices = hint[1].innerHTML;
	var boxes = choices.split(" | ");
	var list = "";
	for (var j = 0; j < boxes.length; j++) {
		var arr = boxes[j].split(";");
		if (j !== 0) {
			list = list + '<p class="choices-box-delimiter"></p>';
		}
		list = list + "<ul>";
		for (var i = 0; i < arr.length; i++) {
			list = list + "<li>" + arr[i] + "</li>";
		}
		list = list + "</ul>";
	}
	document.getElementById(id).innerHTML = list;
	//  if (arr.length < 5 && boxes.length === 1) {
	//    document.getElementById("choices").className = "choices_variants";
	//  } else {
	document.getElementById("choices").className = "choices_words";
	//  }
	// При показе карточки показывать hint раскрытым
	document.querySelector("a.hint").style.display = 'none';
	document.querySelector("div.hint").style.display = 'block';
}
// Если cloze содержит несколько вариантов ответа, то оставляем только один вариант для лучшей читаемости, остальные и так будут показаны при сравнении введенного на клавиатуре ответа.
var cloze = document.querySelectorAll(".cloze");
if (document.querySelector('.arrow_06B13_line_back')) {
	for (var z = 0; z < cloze.length; z++) {
		cloze[z].textContent = cloze[z].textContent.replace(/^([^|]*).*$/, "$1");
		cloze[z].textContent = cloze[z].textContent.replace(/^([^/]*).*$/, "$1");
	}
}