/***
 * 格式化时间戳
 * @param now  时间戳
 * @returns {string}   返回字符串
 */

function formatDate(now) {
    now = new Date(now);
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var date=now.getDate();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    return year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
}
console.log('formatDate',formatDate(1546592254*1000));


