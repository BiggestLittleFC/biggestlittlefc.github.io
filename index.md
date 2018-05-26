---
title: "Biggest Little Fur Con | Reno, NV"
layout: fullwidth
page_class: home
status: LIVE
---
{::options parse_block_html="true" /}

<div id="home-btn-bar" class="textcenter">

<a class="button" href="/theme/story-thursday">Theme Story & Music</a>
<a class="button" href="/schedule.html" target="_blank">Schedule</a>
<a class="button" href="/conbook.pdf" target="_blank">Con Book</a>
<a class="button" href="/program.pdf" target="_blank">Program</a>
<a class="button" href="/theme/credits/">Credits</a>
<a class="button" href="https://www.youtube.com/c/BiggestlittlefurconOrg/live" target="_blank">Live Stream</a>
<a class="button" href="https://drive.google.com/drive/folders/1BiGb9lShhiYPba-wQQGoKuudl0RwqMj_" target="_blank">Photos</a>

</div>

<div id="home-curtain-top"></div>
<div id="home-curtain-left"></div>
<div id="home-curtain-right"></div>
<div id="home-curtain-main"><div id="home-curtain-end"></div></div>
<div id="home-scroll-notice">{% include graphic-scrollnotice.svg %}</div>
 
<div id="home-stage" class="big-chunk textcenter">
<div id="home-stage-content">

<img src="/assets/theme/BLFC2018-logo-s.png" alt="BLFC: A Musical Tail">

<h1>Welcome back to BLFC 2018</h1>

<p>Thank you for attending! It was a very <em>Good Con</em>.</p>

</div>
</div>

<script>
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var wHeight = $(window).height();
  // scroll notice fade out
  if ( wScroll > 10 ) {
    $('#home-scroll-notice').css({ 'opacity' : '0' });
  }
  if ( wScroll > wHeight - 1 ) {
    $('#page-content').addClass('home-scroll');
    //console.log('Dooooowwnn');
  }
  if ( wScroll < wHeight + 1 ) {
    $('#page-content').removeClass('home-scroll');
    //console.log('and uuup');
  }
});
</script>
 
<style>
#home-btn-bar {
  padding: 30px 0 10px;
  margin-top: 20px;
  position: relative;
  background: #080008;
  z-index: 40;
  box-shadow: 0 12px 12px rgba(0,0,0,0.8);
}
/*
#curtain-wrap {
  position: relative;
}
#home-curtain-left, #home-curtain-right, #home-curtain-top {
  position: absolute;
}
#home-stage-content img {
  height: auto;
}
#home-curtain-top {
  top: -10px;
}
#home-curtain-left, #home-curtain-right {
  top: 50px;
  width: 23vw;
  height: 80vh;
}
*/
#home-stage-content {
  min-height: 200vh;
}
a.button {
  margin: 4px;
}
</style>
