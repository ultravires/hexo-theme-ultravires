# ultravires

A theme for [Hexo].

- [Preview](https://ultravires.github.io/)

## Installation

### Install

``` bash
$ git clone https://github.com/ultravires/hexo-theme-ultravires.git
```

**ultravires requires Hexo 2.4 and above.** If you would like to enable the RSS, the [hexo-generate-feed] plugin is also required.

### Enable

Modify `theme` setting in `_config.yml` to `ultravires`.

### Update

``` bash
cd themes/ultravires
git pull
```

## Configuration

``` yml
# Navigator
# navigator: aside

# Logo
# logo: http://assets.sanphantom.com/avatar.jpg
# logo_only: false

# Header
menu:
  Home:
    link: /
    icon: zm-home
  Security:
    link: /security
    icon: zm-anquan
  DeepLearning:
    link: /deeplearning
    icon: zm-shenduxuexi
  Algorithm:
    link: /algorithm
    icon: zm-zhinengsuanfa
  Web:
    link: /web
    icon: zm-wordpress
  Life:
    link: /life
    icon: zm-cup_lemon
  CatchTheBug:
    link: /bug
    icon: zm-bug
  Archives:
    link: /archives
    icon: zm-book
  About:
    link: /about
    icon: zm-about
rss: /atom.xml

# Content
excerpt: false # 是否通过自定义 helper 去掉摘要的样式。
excerpt_link: 阅读全文
fancybox: true
remove_ad: true # 是否移除已知浏览器插件带来的广告

# Sidebar
sidebar: right
widgets:
- recent_posts
- category
# - tag
- tagcloud
- archive

# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
- category
- tagcloud
- archive

# widget behavior
archive_type: 'monthly'
show_count: false

# animate
animate: true

# Miscellaneous
google_analytics:
gauges_analytics:
favicon: /favicon.png
twitter:
google_plus:
fb_admins:
fb_app_id:
```

- **navigator** - Navigation layout
- **logo** - Logo setting, need `url`
- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

## Features

### Fancybox

Landscape uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.

Landscape provides 5 built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

## Development

### Requirements

- [Grunt] 0.4+
- Hexo 2.4+

### Grunt tasks

- **default** - Download [Fancybox] and [Font Awesome].
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Hexo]: https://hexo.io/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/
[hexo-generate-feed]: https://github.com/hexojs/hexo-generator-feed
