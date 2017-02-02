'use strict'

class Link {
  constructor(title, url, ...tags) {
    this.title = title;
    this.url = url;
    this.tags = tags;
  }
}

class TagInfo {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}

class LinkCollection {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
}

const Languages = {
  En: new TagInfo("En", "This material is in English"),
  Ru: new TagInfo("Ru", "This material is in Russian") 
}

const Categories = {
  Docs: new TagInfo("Docs", "This is a documentation for specific technology, framework or library."),
  GitHub: new TagInfo("GitHub", "This material is hosted on GitHub."),
  Medium: new TagInfo("Medium", "This is a post on Medium."),
  Landing: new TagInfo("Landing", "This is a one-page site."),
  Blog: new TagInfo("Blog", "This is a blog post on a website."),
  WebApp: new TagInfo("Web app", "This is a web application.")
}

const onlineBooks = [
  new Link("You Don't Know JS (book series)", "https://github.com/getify/You-Dont-Know-JS", Categories.GitHub)
];

const articles = [
  new Link("How to Become a Great Front-End Engineer", "https://philipwalton.com/articles/how-to-become-a-great-front-end-engineer/", Categories.Blog),
  new Link("Front-end engineer differs from front-end developer", "https://medium.com/@amitmojumder/front-end-engineer-differs-from-front-end-developer-68efe13fce7b#.lbj5aa60x", Categories.Medium),
  new Link("Growing as Software Engineer","http://www.metadevelopment.io/growing-as-software-engineer/", Categories.Blog),
  new Link("Understanding Flexbox: Everything you need to know","https://medium.freecodecamp.com/understanding-flexbox-everything-you-need-to-know-b4013d4dc9af#.br8l8plbk", Categories.Medium),
  new Link("Everything I know about Responsive Web Typography","https://zellwk.com/blog/responsive-typography/", Categories.Blog),
  new Link("Callback Hell", "http://callbackhell.com/", Categories.Landing)
];

const docs = [
  new Link("ES6 Cheatsheet", "https://github.com/DrkSephy/es6-cheatsheet", Categories.GitHub),
  new Link("LESS Features", "http://lesscss.org/features/", Categories.Docs),
  new Link("SASS Reference", "http://sass-lang.com/documentation/file.SASS_REFERENCE.html", Categories.Docs),
  new Link("BEM Methodology","https://en.bem.info/methodology/quick-start/", Categories.Docs)
];

const tips = [
  new Link("A Fresh Approach to Responsive HTML5 Tables", "http://thenewcode.com/852/A-Fresh-Approach-to-Responsive-HTML5-Tables", Categories.Blog)
];

const apps = [
  new Link("Can I use…","http://caniuse.com/#home", Categories.WebApp),
  new Link("Keycode Info","http://keycode.info/", Categories.WebApp),
  new Link("Accessible color combinations", "https://toolness.github.io/accessible-color-matrix/", Categories.WebApp)
];

const linkGroups = [
  new LinkCollection("Online Books", onlineBooks),
  new LinkCollection("Articles", articles),
  new LinkCollection("Tips`n`Tricks", tips),
  new LinkCollection("Documentation", docs),
  new LinkCollection("Applications", apps)  
];

let app = new Vue({
  el: "#app",
  data: {
    linkGroups
  },
  methods: {
    tagClick: (tag) => alert(tag.description)
  }
})