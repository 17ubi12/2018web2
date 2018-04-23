$('#vtext').css({left:($('#visual').width()-$('#vtext').width())/2,top:($('#visual').height()-$('#vtext').height())/2});
$(window).resize(function () {
  $('#vtext').css({left:($('#visual').width()-$('#vtext').width())/2,top:($('#visual').height()-$('#vtext').height())/2});
});

var cnt=0;
setInterval(function () {
  next();
},4000);
function next(){
  $("#visual>ul>li").eq(cnt).siblings().css({'left':'100%','opacity':0});
  $("#visual>ul>li").eq(cnt).animate({left:'-100%',opacity:'0'},800,function () {
    $(this).css({'left':'100%'});
  });
  cnt++;
  if(cnt>=$("#visual>ul>li").length)
  cnt=0;
  $("#visual>ul>li").eq(cnt).animate({left:0,opacity:'1'},800);
}
// function prev(){
//   if($("#visual>img").is(":animated"))return false;
//   img.siblings().css({'left':'-100%'});
//   img.eq(cnt).animate({left:'100%'},function () {
//     $(this).css({'left':'-100%'});
//   });
//   cnt++;
//   if(cnt<=0)
//   cnt=img.length;
//   img.eq(cnt).animate({left:0});
// }
function log(val) {
  console.log(val);
}
var scnt=0;
$('#subnav>li').eq(scnt).css({background:'rgb(8, 36, 138)'});
$('#subnav>li').on('click',function () {
  if($("#subnav>li").is(":animated"))return false;
  scnt=$(this).index();
  $('#subbox').animate({left:-$("#subbox").children('li').width()*scnt});
  $('#subnav>li').eq(scnt).css({background:"rgb(8, 36, 138)"}).siblings().css({'background':'#aaa'});
});
setInterval(function () {
  scnt++;
  if(scnt>=$('#subnav>li').length)
  scnt=0;
  $('#subbox').animate({left:-$("#subbox").children('li').width()*scnt});
  $('#subnav>li').eq(scnt).css({background:"rgb(8, 36, 138)"}).siblings().css({'background':'#aaa'});
},7000);

let d=new Date();
let year=d.getFullYear();
let month=d.getMonth()+1;
let day=d.getDate();
var b=['월','화','수','목','금','토','일'];
var b_num=d.getDay()-1;
let date=b[d.getDay()-1];
var m=month,da=day;
if(month<10)
  m='0'+month;
else
  m=month;
if(day<10)
  da='0'+day;
else
  da=day;
$('#fullyear').text(`${year}-${m}-${da} (${date})`);

$('#s_show>div').eq(0).text(day-1);
$('#s_show>div').eq(1).text(day);
$('#s_show>div').eq(2).text(day+1);

$(document).on('click','#s_show>div:nth-child(3)',function () {
  if($('#s_show>div').eq(0).css('opacity')!=1)return false;
  // 날짜구함
  day++;
  if(day>new Date(year,month,0).getDate())
  {
    month++;
    if(month>12){
      year++;
      month=1;
    }
    day=1;
  }
  b_num++;
  if(b_num>6){
    b_num=0;
  }
  date=b[b_num];
  // 날짜구함
  // animation
  $('#s_show>div').eq(0).css({'opacity':'0'});
  $('#s_show').append(`<div>${day}</div>`);
  setTimeout(function () {
    $('#s_show>div').eq(0).remove();
    if(day==1){
      $('#s_show>div').eq(0).text(new Date(year,month-1,0).getDate());
    }else{
      $('#s_show>div').eq(0).text(day-1);
    }
    $('#s_show>div').eq(1).text(day);
    if(day==new Date(year,month,0).getDate()){
      $('#s_show>div').eq(2).text(1);
    }else{
      $('#s_show>div').eq(2).text(day+1);
    }
    if(month<10)
      m='0'+month;
    else
      m=month;
    if(day<10)
      da='0'+day;
    else
      da=day;
    $('#fullyear').text(`${year}-${m}-${da} (${date})`);
  },200);
  // animation
});

$(document).on('click','#s_show>div:nth-child(1)',function () {
  if($('#s_show>div').eq(2).css('opacity')!=1)return false;
  // 날짜구함
  day--;
  if(day<=0){
    month--;
    if(month<0){
      year--;
      month=12;
    }
    day=new Date(year,month,0).getDate();
  }
  b_num--;
  if(b_num<0){
    b_num=b.length-1;
  }
  date=b[b_num];
  // 날짜구함
  // animation
  $('#s_show>div').eq(2).css({'opacity':'0'});
  setTimeout(function () {
    $('#s_show>div').eq(2).remove();
    $('#s_show').prepend(`<div
       class="first"
       >
       ${day}</div>
       `);
     $('#s_show>div').eq(0).siblings().removeClass('first');
     $('.first').animate({'opacity':'1'},100);
    if(day==1){
      $('#s_show>div').eq(0).text(new Date(year,month-1,0).getDate());
    }else{
      $('#s_show>div').eq(0).text(day-1);
    }
    $('#s_show>div').eq(1).text(day);
    if(day==new Date(year,month,0).getDate()){
      $('#s_show>div').eq(2).text(1);
    }else{
      $('#s_show>div').eq(2).text(day+1);
    }
    if(month<10)
      m='0'+month;
    else
      m=month;
    if(day<10)
      da='0'+day;
    else
      da=day;
    $('#fullyear').text(`${year}-${m}-${da} (${date})`);
  },200);
  // animation
});
