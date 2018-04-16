$('#vtext').css({left:($('#visual').width()-$('#vtext').width())/2,top:($('#visual').height()-$('#vtext').height())/2});
$(window).resize(function () {
  $('#vtext').css({left:($('#visual').width()-$('#vtext').width())/2,top:($('#visual').height()-$('#vtext').height())/2});
});

var cnt=0;
var img=$("#visual>img");
setInterval(function () {
  next();
},5000);
function next(){
  if($("#visual>img").is(":animated"))return false;
  img.eq(cnt).siblings('img').css({'left':'100%','opacity':0});
  img.eq(cnt).animate({left:'-100%',opacity:'0'},500,function () {
    $(this).css({'left':'100%'});
  });
  cnt++;
  if(cnt>=img.length)
  cnt=0;
  img.eq(cnt).animate({left:0,opacity:'1'},500);
}
function prev(){
  if($("#visual>img").is(":animated"))return false;
  img.siblings().css({'left':'-100%'});
  img.eq(cnt).animate({left:'100%'},function () {
    $(this).css({'left':'-100%'});
  });
  cnt++;
  if(cnt<=0)
  cnt=img.length;
  img.eq(cnt).animate({left:0});
}
