---

title: OWASP Example Event
layout: event
permalink: /event-example
registration_url: https://www2.owasp.org
training: January 1, 2, 3
conference: January 4, 5
location: OWASP Foundation Event Center, Montpelier, VT
background: example-event.jpg
pitch: "Global AppSec - Example is coming January 1-5, 2055 to the OWASP Foundation Convention Center in Montpelier. Designed for private and public sector infosec professionals,         the OWASP three day training and two day conference equips developers, defenders, and advocates to build a more secure web.
        <br/><br/>
        Join us for a celebration of leading application security technologies, speakers, prospects, and community, in a unique event that will build on everything you already know to expect from an OWASP Global Conference."

---

# {{ page.title }}  
## Training Dates: {{ page.training }}<br>Conference Dates: {{ page.conference }}

**{{ page.location }}**

{{ page.pitch }}

### Conference Pricing

<ul>
{% for price in site.data.evntpricing %}
<li class='evnt-price-title'>{{ price.title }}</li><li class='evnt-price'>{{ price.price }}</li>
{% for subitem in price.items %}
{% if forloop.first %}<ul>{% endif %}
<li class='evnt-price-title'>{{ subitem.title }}</li><li class='evnt-price'>{{ subitem.price }}</li>
{% if forloop.last %}</ul>{% endif %}
{% endfor %}
{% endfor %}
</ul>
