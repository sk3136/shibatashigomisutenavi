var moenaiCalendar_e_7 = ['0414', '0519', '0616', '0714','0818','0915','1020','1117','1215','1312','1409','1515'];
var akikanCalendar_e_7 = ['0407', '0421', '0512', '0526','0609','0623','0707', '0721', '0804', '0825','0908','0922','1013','1027','1110','1124','1208','1222','1305','1319','1402','1416','1508','1522'];
var happouCalendar_e_7 = ['0407','0512','0609','0707','0804','0908','1013', '1110', '1208','1305','1402','1508'];
var furununoCalendar_e_7 = ['0421', '0526', '0623', '0721','0825','0922','1027','1124','1222','1319','1416','1522'];
var sinbunCalendar_e_7 = ['0412', '0427', '0517', '0529','0614','0629','0712', '0727', '0821', '0830','0913','0928','1016','1026','1115','1129','1213','1227','1317','1329','1414','1428','1513','1528'];
var akibinCalendar_e_7 = ['0428', '0530', '0630', '0728','0831','0929','1027','1130','1228','1330','1429','1529'];

function moeru_e_7() {
    var now = new Date();
    var month = now.getMonth() + 1;
    var date = now.getDate();
    var dayOfWeek = now.getDay();
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
    } else if (month == 3 && date == 30 || month == 3 && date == 31){
        document.getElementById('moeru').textContent = '次の収集日は市のホームページで確認してください。';
    } else if (dayOfWeek == 1 || dayOfWeek == 3 || dayOfWeek == 5) {
        now.setDate(date + 1);
        month = now.getMonth() + 1;
        date = now.getDate();
        dayOfWeek = now.getDay();
        var weekKanji = ['日', '月', '火', '水', '木', '金', '土'];
        document.getElementById('moeru').textContent = month + '/' + date + '(' + weekKanji[dayOfWeek] + ')';
    } else if (dayOfWeek == 0 || dayOfWeek == 2 || dayOfWeek == 4) {
        now.setDate(date + 2);
        month = now.getMonth() + 1;
        date = now.getDate();
        dayOfWeek = now.getDay();
        var weekKanji = ['日', '月', '火', '水', '木', '金', '土'];
        document.getElementById('moeru').textContent = month + '/' + date + '(' + weekKanji[dayOfWeek] + ')';
    } else {
        now.setDate(date + 3);
        month = now.getMonth() + 1;
        date = now.getDate();
        document.getElementById('moeru').textContent = month + '/' + date + '(火)';
    }
}