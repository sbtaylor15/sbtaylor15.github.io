"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[3757],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23908:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md"},u="Documentation Contribution Workflow",s={unversionedId:"community/get_involved/doc_workflow",id:"community/get_involved/doc_workflow",title:"Documentation Contribution Workflow",description:"To contribute to the documentation (including blogs), you can follow the following guidelines for making documentation contributions.",source:"@site/docs/community/get_involved/doc_workflow.md",sourceDirName:"community/get_involved",slug:"/community/get_involved/doc_workflow",permalink:"/docs/community/get_involved/doc_workflow",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/community/get_involved/doc_workflow.md"},sidebar:"tutorialSidebar",previous:{title:"Contributing code to Pyrsia",permalink:"/docs/community/get_involved/contributing"},next:{title:"Good Pull Requests",permalink:"/docs/community/get_involved/good_pr"}},p={},c=[{value:"Structure Guidelines",id:"structure-guidelines",level:2},{value:"<code>docs</code>",id:"docs",level:3},{value:"<code>blog</code>",id:"blog",level:3},{value:"Previewing Changes",id:"previewing-changes",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"documentation-contribution-workflow"},"Documentation Contribution Workflow"),(0,i.kt)("p",null,"To contribute to the documentation (including blogs), you can follow the following guidelines for making documentation contributions."),(0,i.kt)("p",null,"All documents relevant to the project are written in the Markdown format. You can see the documentation\nfor the GitHub Flavor ",(0,i.kt)("a",{parentName:"p",href:"https://github.github.com/gfm/"},"here")," or you can use this\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"},"quick guide"),"."),(0,i.kt)("p",null,"All the documentation is visible on GitHub and ",(0,i.kt)("a",{parentName:"p",href:"https://pyrsia.io"},"https://pyrsia.io")," website, so it's important to keep in mind\nthere are some limitations and extra features that might be available. You might want to refer to the\n",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features#standard-features"},"website's standard features")," if you are unsure."),(0,i.kt)("h2",{id:"structure-guidelines"},"Structure Guidelines"),(0,i.kt)("p",null,"All the documentation for Pyrsia should live in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia"},"pyrsia/pyrsia")," repository\nin the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/blob/main/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"docs"))," folder. Blogs belong in the same repository but should be\nplaced in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/blob/main/blog"},(0,i.kt)("inlineCode",{parentName:"a"},"blog"))," folder."),(0,i.kt)("h3",{id:"docs"},(0,i.kt)("inlineCode",{parentName:"h3"},"docs")),(0,i.kt)("p",null,"All sub-folders should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"readme.md")," with a good title, as a level one header, and the\n",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#sidebar_position"},"front matter for position"),"\nthe folder on the website. Make sure to pay attention to the other folder numbers."),(0,i.kt)("p",null,"All documents should have a ",(0,i.kt)("inlineCode",{parentName:"p"},".md")," file extension. If you need more customization you can use ",(0,i.kt)("inlineCode",{parentName:"p"},".mdx"),", see\n",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"here")," for more information. All files need a level one heading to provide the\npage with a good title."),(0,i.kt)("h3",{id:"blog"},(0,i.kt)("inlineCode",{parentName:"h3"},"blog")),(0,i.kt)("p",null,"All blogs should be placed in the root of the ",(0,i.kt)("inlineCode",{parentName:"p"},"blog")," folder. Each one should be named ",(0,i.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd-<slug>.md"),", where slug should be a unique\nname for the blog (e.g. a short hand of the title); this is described ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog"},"here"),"."),(0,i.kt)("p",null,"Some front matter is required at the top of the Markdown:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"title"),(0,i.kt)("li",{parentName:"ul"},"authors: ","[","name, title, image_url]"),(0,i.kt)("li",{parentName:"ul"},"tags")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyrsia/pyrsia/pull/720"},"#720")," for an example."),(0,i.kt)("p",null,"In addition the ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog#draft"},(0,i.kt)("inlineCode",{parentName:"a"},"draft")," front matter")," may be added\nso the blog can be reviewed by the community before being made public on the website."),(0,i.kt)("p",null,"Blogs should not have use a level one heading, after the fron matter the opening paragraph or abstract should be next.\nSection heading should begin with a level two heading."),(0,i.kt)("p",null,"All media assests should be external links since they will not be copied to the website when deployed from this repository."),(0,i.kt)("h2",{id:"previewing-changes"},"Previewing Changes"),(0,i.kt)("p",null,"Currently it is only possible to preview your changes locally, you should be following the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/community/get_involved/contributing"},"contributing guidelines")," and have forked the repository.\nTo preview the changes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io"},"website's repository")," and clone your fork."),(0,i.kt)("li",{parentName:"ol"},"Modify ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io/blob/main/package.json#L6"},"this line"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Change ",(0,i.kt)("inlineCode",{parentName:"li"},"pyrsia/pyrsia")," to your fork, (e.g ",(0,i.kt)("inlineCode",{parentName:"li"},"octocat/pyrsia"),")"),(0,i.kt)("li",{parentName:"ul"},"Optionally, you can change the branch by replacing ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"your-branch-name")),(0,i.kt)("li",{parentName:"ul"},"You can ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io/pull/66/commits/c317f9dab8f6bcde5f8588ca75858db72241930d"},"check this example")))),(0,i.kt)("li",{parentName:"ol"},"Follow instructions described ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia.github.io#website"},"here"),' for "local development"')),(0,i.kt)("p",null,"If you make changes to your fork of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pyrsia/pyrsia")," repository, you can restart the local server to update the documentation.\nYou can make changes locally and the local serve will automatically update; do not forget to change them to your fork afterwards."))}m.isMDXComponent=!0}}]);