---
title: Dealer's Den
status: LIVE
open: 
  friday: "12PM-6PM"
  saturday: "11AM-6PM"
  sunday: "11AM-5PM"
setup:
  thursday: "1PM-8PM"
  friday: "10AM-7PM"
  saturday: "10AM-7PM"
  sunday: "10AM-8PM"
price:
  standard: "100"
  booth: "200"
  electricity: "60"
  blackmarket: "20"
  extrapermit: "20"
  extratable:  "80"
  extrabooth:  "30"
  taxrate: "7.75"
approvaldate: "November 30th"
layout: fullwidth
---

<div class="one-full bg-one">
<div class="page-wrapper">

## Sale Hours & Location

Dealers den is located in the <a href="/map/">Silver State Pavilion on the Spa Level</a> next to the Spa.

During operating hours, the Dealer's Den hosts a central community hang-out fun zone and is very inviting for business.

- {:.one_third } **Friday** - {{ page.open.friday }}
- {:.one_third } **Saturday** - {{ page.open.saturday }}
- {:.one_third } **Sunday** - {{ page.open.sunday }}

## Map of Dealers Den
<a href="../assets/img/DealersDen_Website.jpg" target="_blank" rel="noopener noreferrer"><img class="aligncenter" src="../assets/img/DealersDen_Website_small.jpg"></a>
</div>
</div>




<div class="one-full bg-two">
<div class="page-wrapper">


## List of Dealers

<div id="dealer-list" class="accordion-list">

{% for item in site.data.dealers %}

<dt>
  {{ item.name }}
</dt>
<dd>
  {{ item.description }}
  <!--<a href="{{ item.website }}" target="_blank">[ Website ]</a>-->
</dd>

{% endfor %}

</div>


</div>
</div>





<div class="one-full bg-three">
<div class="page-wrapper">

## Vendor Information
Information about booth/table prices, application process, vendor FAQ is available <a href="/vendors/">here</a>.

[View Information for Vendors][vendorlink]

</div>
</div>


[vendorlink]: /vendors/
[reglink]: https://reg.goblfc.org/
{:title="Sign up as a dealer!" target="_blank" rel="noopener noreferrer" class="button"}
