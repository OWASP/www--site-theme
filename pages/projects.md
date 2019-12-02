---

layout: col-sidebar
title: Project Example Title
permalink: /projects
id: main
basepath: /pages/projects/
tags: projects owasp main

---

The OWASP Zed Attack Proxy (ZAP) is one of the world’s most popular free security tools and is actively maintained by hundreds of international volunteers*. It can help you automatically find security vulnerabilities in your web applications while you are developing and testing your applications. Its also a great tool for experienced pentesters to use for manual security testing. 
For more videos see the links on the wiki videos page.

<div class="video-container">
  <iframe src="//www.youtube.com/embed/ztfgip-UhWw?" allowfullscreen="true" width="640" height="360" frameborder="0"></iframe>
</div>

Interested in a ZAP talk or training event? See the talks tab. Not one near you? Contact a Zap Evangelist to arrange one! 


{% capture tab_include %}{% include_relative /test.md %}{% endcapture %}
{% assign lines = tab_include | newline_to_br | split: "<br />" %}
{% assign newContent = "" %}
{% assign end_of_front_matter = 0 %}
{% for l in lines %}
    {% if l contains '---' %}
      {% assign end_of_front_matter = end_of_front_matter | plus: 1 %}
    {% endif %}
    {% if end_of_front_matter >= 2 %}
        {% assign newContent  = newContent | append: l %}
    {% endif %}
{% endfor %}
{{ newContent | markdownify }}