function hideHeader(){header.classList.remove("active_1"),header.classList.remove("active_2"),unitTableDiv.classList.remove("active"),mainTable.classList.remove("active"),overlayTitleM.classList.remove("active"),overlayTitleL.classList.remove("active"),arrowLine.style.opacity="1",textP_Title.classList.remove("active")}var question=document.querySelector(".question"),exampleAnswerHide=document.querySelector(".img_example"),el=question;el&&el.addEventListener("click",function(e){""!==e.target.textContent&&"Replay"!==e.target.textContent&&(exampleAnswerHide.classList.toggle("active"),console.log(e.target))});var questionAudio=document.getElementById("question-audio"),body=document.getElementById(body),buttons=document.getElementsByClassName("circle"),buttonsFirst=document.getElementsByClassName("circle"),mainCircle=document.getElementsByClassName("mainCircle"),overlay=document.getElementsByClassName("overlay"),p_AppButton=document.getElementsByClassName("p_app_button"),gridPad=document.getElementsByClassName("grid-pad"),circlePositioner=document.getElementsByClassName("circlePositioner"),appendixes=document.getElementsByClassName("appendixes"),buttonsClass=document.querySelector(".buttons"),buttonAllClose=document.querySelector(".header-close"),bodyCard=document.querySelector(".card"),circlePositionerTitle=document.querySelector(".circlePositioner_title"),arrowLine=document.querySelector(".arrow_06B13_line"),overlayTitleM=document.querySelector("#overlay_title"),overlayTitleL=document.querySelector(".mainCircle_title"),header=document.querySelector(".header"),hamburgerMain=document.querySelector(".hamburger--arrowalt-r"),textP_Title=document.getElementById("p_button");document.querySelector(".arrow_06B13_line_back")&&(arrowLine=document.querySelector(".arrow_06B13_line_back"),window.scrollTo(0,0)),document.querySelector(".circlePositioner_title_back")&&(circlePositionerTitle=document.querySelector(".circlePositioner_title_back")),document.querySelector(".hamburger--arrowalt")&&(hamburgerMain=document.querySelector(".hamburger--arrowalt")),bodyCard.style.position=null;var appendixesHideAll=function(){for(var e=0;e<appendixes.length;e++)appendixes[e].classList.remove("active")},buttonsColorDefault=function(){for(var e=0;e<overlay.length;e++)overlay[e].classList.remove("active");for(var t=0;t<mainCircle.length;t++)mainCircle[t].classList.remove("active");for(var l=0;l<p_AppButton.length;l++)p_AppButton[l].classList.remove("active")},unitTableDiv=document.querySelector(".unit_table"),mainTable=document.querySelector(".main_table");circlePositionerTitle.addEventListener("click",function(){"500px"===header.style.maxHeight?(buttonsColorDefault(),hideHeader(),textP_Title.textContent="A",bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),buttonAllClose.classList.remove("active"))});var i_app=-1,y_app=0;(function e(t,l,o,i,a,s,r){function n(){function e(){buttonsFirst[0].style.paddingBottom="0"}function n(){buttonsFirst[0].style.paddingBottom="2em"}var c=function(e){for(var t=0;t<appendixes.length;t++)appendixes[t].classList.remove("active"),e.classList.add("active")},d=function(e,t,l){for(var o=0;o<overlay.length;o++)overlay[o].classList.remove("active"),e.classList.add("active");for(var i=0;i<mainCircle.length;i++)mainCircle[i].classList.remove("active"),t.classList.add("active");for(var a=0;a<p_AppButton.length;a++)p_AppButton[a].classList.remove("active"),l.classList.add("active")};if("appendixes active"===t.className)t.classList.toggle("active"),i.classList.toggle("active"),a.classList.toggle("active"),s.classList.toggle("active"),header.classList.remove("active_2"),buttonAllClose.classList.remove("active"),bodyCard.style.position=null,arrowLine.style.opacity="1",e(),buttonsColorDefault(),r.style.width=null,circlePositionerTitle.classList.remove("active"),buttonsClass.insertBefore(l,o),l===buttons[13]&&buttonsClass.appendChild(l);else{t.scrollTop=0;for(var u=0;u<gridPad.length;u++)gridPad[u].scrollTop=0;buttonsClass.insertBefore(l,buttonsClass.firstChild),r.style.width="94%",header.classList.add("active_2"),bodyCard.style.position="fixed",unitTableDiv.classList.remove("active"),c(t),d(i,a,s),buttonAllClose.classList.add("active"),circlePositionerTitle.classList.add("active"),n(),arrowLine.style.opacity="0"}buttonAllClose.onclick=function(){e(),buttonsClass.insertBefore(l,o),l===buttons[13]&&buttonsClass.appendChild(l),r.style.width=null,appendixesHideAll(),buttonsColorDefault(),hideHeader(),circlePositionerTitle.classList.remove("active"),bodyCard.style.position=null,buttonAllClose.classList.remove("active")}}if(l&&l.addEventListener("click",n),i_app<=20&&y_app<=20)return i_app++,y_app++,e(appendixes[i_app],buttons[i_app],buttons[y_app],overlay[i_app],mainCircle[i_app],p_AppButton[i_app],circlePositioner[i_app])}).call(this);var modalButton=document.querySelector(".myButt"),modalWrap=document.querySelector(".modal__wrap"),materialIcons=document.querySelector(".material-icons"),modalOverlay=document.querySelector(".modal__overlay");modalButton.addEventListener("click",function(){"header base active_1"===header.className&&hamburgerMain.classList.toggle("is-active"),modalOverlay.style.display="block",modalOverlay.style.zIndex="800",setTimeout(function(){modalOverlay.classList.toggle("active"),hideHeader(),bodyCard.style.position="fixed",modalOverlay.scrollTop=0,modalWrap.scrollTop=0,modalWrap.scrollLeft=0},300),setTimeout(function(){materialIcons.style.display="block"},550)}),materialIcons.addEventListener("click",function(){modalOverlay.classList.toggle("active"),bodyCard.style.position=null,setTimeout(function(){modalOverlay.style.display=null,modalOverlay.style.zIndex=null},1e3),setTimeout(function(){materialIcons.style.display="none"},100)});var buttonGambur=document.querySelector(".gamb-wrap");document.querySelector(".gamb-wrap-back")&&(buttonGambur=document.querySelector(".gamb-wrap-back"),console.log("YEAH")),buttonGambur.addEventListener("click",function(){"500px"===header.style.maxHeight?(hideHeader(),bodyCard.style.position=null):(header.classList.toggle("active_1"),"header base active_1"===header.className?unitTableDiv.classList.toggle("active"):unitTableDiv.classList.remove("active"),mainTable.classList.toggle("active"),overlayTitleM.classList.toggle("active"),overlayTitleL.classList.toggle("active"),textP_Title.classList.toggle("active"),circlePositionerTitle.classList.remove("active"))});var addWordsBox2=document.querySelector("div.add_words2"),unitNumber=document.querySelector(".th_1"),layerButton=document.querySelector(".layer"),highlight=document.querySelector("div.highlight"),hr=document.getElementsByTagName("hr"),box1None=!0,box2None=!0;if(document.querySelector("div.add_words1")){var addWordsBox1=document.querySelector("div.add_words1");""===addWordsBox1.textContent&&(box1None=!1,addWordsBox1.style.display="none"),""===addWordsBox2.textContent&&(box2None=!1,addWordsBox2.style.display="none"),!0===box1None&&!0===box2None&&(addWordsBox1.style.width="47%",addWordsBox2.style.width="47%")}document.getElementById("question-audio")&&""===questionAudio.innerHTML&&(questionAudio.style.display="none"),""===modalWrap.innerHTML&&(modalButton.style.display="none",hr[0].style.marginTop="50px"),""===exampleAnswerHide.innerHTML&&(exampleAnswerHide.style.display="none"),""===highlight.innerHTML?highlight.style.display="none":modalButton.style.display="block",""===unitNumber.innerHTML&&(unitNumber.innerHTML="»»»» ♨"),""===layerButton.innerHTML&&(layerButton.innerHTML="YEAH");var hint=document.querySelectorAll(".hint");if(hint.length>0){hint[0].innerHTML="Hint";for(var id=hint[1].getAttribute("id"),choices=hint[1].innerHTML,boxes=choices.split(" | "),list="",j=0;j<boxes.length;j++){var arr=boxes[j].split(";");0!==j&&(list+='<p class="choices-box-delimiter"></p>'),list+="<ul>";for(var i=0;i<arr.length;i++)list=list+"<li>"+arr[i]+"</li>";list+="</ul>"}document.getElementById(id).innerHTML=list,document.getElementById("choices").className="choices_words",document.querySelector("a.hint").style.display="none",document.querySelector("div.hint").style.display="block"}var cloze=document.querySelectorAll(".cloze");if(document.querySelector(".arrow_06B13_line_back"))for(var z=0;z<cloze.length;z++)cloze[z].textContent=cloze[z].textContent.replace(/^([^|]*).*$/,"$1"),cloze[z].textContent=cloze[z].textContent.replace(/^([^\/]*).*$/,"$1");