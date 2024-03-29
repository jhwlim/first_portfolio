const skillBarTexts = {
    skillSpring : [
        '했던 밤이 너무나 계십니다. ', 
        '하나 나는 이제 그리워 노루, 이웃 별 차 버리었습니다.'
    ],
    skillHtml : [
        '흙으로 하나의 덮어 계절이 부끄러운 나는 멀리 있습니다.', 
        '프랑시스 노새, 겨울이 새겨지는 멀리 있습니다.',
        '별이 어머니 나는 벌써 봅니다.'
    ],
    skillCss : [
        '위에도 내 헤일 다하지 듯합니다.', 
        '위에 책상을 너무나 나는 버리었습니다.', 
        '나의 토끼, 라이너 거외다. 이름과, 가을로 어머니 별들을 언덕 많은 강아지, 있습니다.'
    ],
    skillJs : [
        '다 했던 북간도에 듯합니다.', 
        '하나에 하나에 북간도에 언덕 봅니다.', 
        '별을 토끼, 별 봅니다. 겨울이 벌레는 노루, 봅니다.'
    ],
    skillJQuery : [
        '이름과 나는 별 다하지 북간도에 쓸쓸함과 것은 봅니다.', 
        '아름다운 별 멀듯이, 봅니다. 딴은 봄이 하나에 까닭입니다.', 
        '무덤 아침이 옥 속의 남은 많은 이웃 계십니다.'
    ],
    skillGit : [
        '까닭이요, 아침이 지나고 어머님, 있습니다. 가슴속에 멀리 것은 별을 피어나듯이 가득 아름다운 아직 동경과 버리었습니다.', 
        '별빛이 별 것은 청춘이 아침이 흙으로 까닭이요, 내린 있습니다.'
    ],
};    
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