<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/localdist/css/base.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.url }}">{{ item.title }}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>