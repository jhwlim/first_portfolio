// About-Skills 가 viewport에 들어왔을 때 확인하기
function elementInViewPort(el) {
    var top = el.offsetTop

    while(el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
    }
    console.log(top);
    return top >= window.pageYOffset;
}
function updateSkillBarText(labelFor) {
    var textArr = skillBarTexts[labelFor];
    var skillBarText = document.getElementById('skillBarText'); 
    skillBarText.innerHTML = "";
    for (i in textArr) {
        var listItem = document.createElement('li');
        listItem.innerText = textArr[i];
        skillBarText.appendChild(listItem);
    }
}