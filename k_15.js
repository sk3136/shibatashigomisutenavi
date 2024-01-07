var Calendar_k_15 = [
    // moenai
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // akikan
    ['04','04','05','05','06','06','07','07','08','08','09','09','10','10','11','11','12','12','13','13','14','14','15','15'],
    // happou
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // furununo
    ['04','05','06','07','08','09','10','11','12','13','14','15'],
    // sinbun
    ['04','04','05','05','06','06','07','07','08','08','09','09','10','10','11','11','12','12','13','13','14','14','15','15'],
    // akibin
    ['04','05','06','07','08','09','10','11','12','13','14','15']
];

function moeru_k_15() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var dayOfWeek = now.getDay();
    var weekKanji = ['日', '月', '火', '水', '木', '金', '土'];
    
    if (month == 4 && date == 27 || month == 4 && date == 28) {
        document.getElementById('moeru').textContent = '5/2(火)';
    } else if (month == 5 && date == 2 || month == 5 && date == 3) {
        document.getElementById('moeru').textContent = '5/6(土)';
    } else if (month == 9 && date == 21 || month == 9 && date == 22){
        document.getElementById('moeru').textContent = '9/26(火)';
    } else if (month == 11 && date == 21 || month == 11 && date == 22){
        document.getElementById('moeru').textContent = '11/25(土)';
    } else if (month == 12 && date == 30 || month == 12 && date == 31 || month == 1 && date == 1){
        document.getElementById('moeru').textContent = '1/4(木)';
    } else if (month == 3 && date == 31){
        document.getElementById('moeru').textContent = '次の収集日は市役所のホームページで確認してください。';
    } else if (dayOfWeek == 0 || dayOfWeek == 2 || dayOfWeek == 4) {
        now.setDate(date + 1);
        month = now.getMonth() + 1;
        date = now.getDate();
        dayOfWeek = now.getDay();
        document.getElementById('moeru').textContent = month + '/' + date + '(' + weekKanji[dayOfWeek] + ')';
    } else if (dayOfWeek == 1 || dayOfWeek == 3 || dayOfWeek == 6) {
        now.setDate(date + 2);
        month = now.getMonth() + 1;
        date = now.getDate();
        dayOfWeek = now.getDay();
        document.getElementById('moeru').textContent = month + '/' + date + '(' + weekKanji[dayOfWeek] + ')';
    } else {
        now.setDate(date + 3);
        month = now.getMonth() + 1;
        date = now.getDate();
        document.getElementById('moeru').textContent = month + '/' + date + '(月)';
    }
}