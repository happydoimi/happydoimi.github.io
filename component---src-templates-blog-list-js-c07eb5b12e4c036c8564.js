"use strict";(self.webpackChunkflexible_gatsby=self.webpackChunkflexible_gatsby||[]).push([[544],{5769:function(e,t,a){a.r(t);var l=a(1721),n=a(7294),r=a(1082),s=a(3723),m=a(3062),c=a(9357),i=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges,l=this.props.pageContext,i=l.currentPage,o=l.numPages,p=1===i,g=i===o,u=i-1==1?"/":"../"+(i-1),d="../"+(i+1),E=new Date,f=new Date("2023-01-08");return n.createElement(m.Z,null,n.createElement(c.Z,{title:t,keywords:["blog","gatsby","javascript","react"]}),n.createElement("div",{className:"content-box clearfix"},E>=f?a.map((function(e){var t=e.node;return n.createElement("article",{className:"post",key:t.fields.slug},t.frontmatter.img&&t.frontmatter.img.childImageSharp&&t.frontmatter.img.childImageSharp.gatsbyImageData&&n.createElement(r.Link,{to:t.fields.slug,className:"post-thumbnail"},n.createElement(s.G,{image:t.frontmatter.img.childImageSharp.gatsbyImageData,className:"page-image",key:t.frontmatter.img.childImageSharp.gatsbyImageData.src,alt:""})),n.createElement("div",{className:"post-content"},n.createElement("h2",{className:"post-title"},n.createElement(r.Link,{to:t.fields.slug},t.frontmatter.title)),n.createElement("p",null,t.excerpt),n.createElement("span",{className:"post-date"},t.frontmatter.date,"  — "),n.createElement("span",{className:"post-words"},t.timeToRead," minute read")))})):n.createElement("div",null,n.createElement("h3",null,"생일이 시작되어야만 편지를 볼 수 있어요"),n.createElement("h4",null,"조금만 기다려 주실래여?")),n.createElement("div",{className:"container"},n.createElement("nav",{className:"pagination",role:"navigation"},n.createElement("ul",null,!p&&n.createElement("p",null,n.createElement(r.Link,{to:u,rel:"prev",className:"newer-posts"},"← Previous Page")),n.createElement("p",null,n.createElement("span",{className:"page-number"},"Page ",i," of ",o)),!g&&n.createElement("p",null,n.createElement(r.Link,{to:d,rel:"next",className:"older-posts"},"Next Page →")))))))},t}(n.Component);t.default=i}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-c07eb5b12e4c036c8564.js.map