---
title: "Biggest Little Fur Con | Reno, NV"
layout: fullwidth
page_class: home
status: LIVE
---
{::options parse_block_html="true" /}

<div id="home-curtain-top"></div>
<div id="home-curtain-left"></div>
<div id="home-curtain-right"></div>
<div id="home-curtain-main"><div id="home-curtain-end"></div></div>

<div id="home-scroll-notice">{% include graphic-scrollnotice.svg %}</div>
<div id="home-stage" class="big-chunk textcenter">
<div id="home-stage-content">
<img src="/assets/theme/home-logo.png" alt="BLFC the Musical | Coming May 2018">

<a class="home-button" href="https://reg.goblfc.org/" target="_blank">Join us &amp; register today</a>
</div>
</div>

<script>
$(window).scroll(function(){

var wScroll = $(this).scrollTop();
var wHeight = $(window).height();

// scroll notice fade out
if ( wScroll > 10 ) {
$('#home-scroll-notice').css({
'opacity' : '0'
});
}

// after curtain raised, make elements scroll with page
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


<div id="home-content" class="textcenter">
<h2>Is this your first time to a Furry Convention?</h2>
<p>We know it can be a bit overwhelming at first, so here is a quick how-to.</p>
<ol class="nobull">
<li class="one_fourth">
<h3>1. Get a room</h3>
<p>BLFC takes place at the Grand Sierra Resort and has a good selection of rooms for the duration of your stay.</p>
<a class="button" href="/hotel/">Book a room</a>
</li>
<li class="one_fourth">
<h3>2. Register</h3>
<p>First step is to get registered online. Register <em>before the early fur deadline</em> to receive this year's SWAG.</p>
<a class="button" href="/register/">Register Now</a>
</li>
<li class="one_fourth">
<h3>3. Get here</h3>
<p>We are located in the lovely Reno, Nevada. You can get here from any direction on wide open roads.</p>
<a class="button" href="/travel/">Travel Directions</a>
</li>
<li class="one_fourth">
<h3>4. Enjoy</h3>
<p>There is a ton to do at BLFC. So whether you wanna buy, learn, dance, or play, there's something for you.</p>
<a class="button" href="/events/">Program</a>
</li>
</ol>
<div class="clear"></div>
<p>We hope you have fun!</p>
</div>
