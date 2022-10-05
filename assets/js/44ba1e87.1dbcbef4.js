"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[2560],{83475:function(n,t,e){e.r(t),e.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=e(87462),a=e(63366),o=(e(67294),e(3905)),r=e(8209),s=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/what_is_pyrsia.md",sidebar_position:1},d="What is Pyrsia",u={unversionedId:"tutorials/what_is_pyrsia",id:"tutorials/what_is_pyrsia",title:"What is Pyrsia",description:"Pyrsia is a network of two types of interconnected nodes:",source:"@site/docs/tutorials/what_is_pyrsia.md",sourceDirName:"tutorials",slug:"/tutorials/what_is_pyrsia",permalink:"/docs/tutorials/what_is_pyrsia",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/what_is_pyrsia.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/tutorials/what_is_pyrsia.md",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick Installation",permalink:"/docs/tutorials/quick-installation"},next:{title:"Configure Docker to use Pyrsia",permalink:"/docs/tutorials/docker"}},p={},c=[{value:"Why do I need Pyrsia?",id:"why-do-i-need-pyrsia",level:2},{value:"How does Pyrsia work?",id:"how-does-pyrsia-work",level:2},{value:"FAQ",id:"faq",level:2},{value:"Can I run a Pyrsia node?",id:"can-i-run-a-pyrsia-node",level:3},{value:"Do I have to participate in artifact distribution?",id:"do-i-have-to-participate-in-artifact-distribution",level:3}],h={toc:c};function y(n){var t=n.components,e=(0,a.Z)(n,s);return(0,o.kt)("wrapper",(0,i.Z)({},h,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-pyrsia"},"What is Pyrsia"),(0,o.kt)("p",null,"Pyrsia is a network of two types of ",(0,o.kt)("strong",{parentName:"p"},"interconnected nodes"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build nodes that build open source libraries from source"),(0,o.kt)("li",{parentName:"ul"},"Regular nodes that form the entry point to the network for build tools")),(0,o.kt)("p",null,"On top of this, both type of nodes participate in the peer-to-peer distribution\nof artifacts."),(0,o.kt)(r.G,{chart:"graph TD;\nnA[Build node A]\nnB[Build node B]\nnC[Build node C]\nstyle nA fill:#e3a04d\nstyle nB fill:#e3a04d\nstyle nC fill:#e3a04d\nn1[Node 1]\nn2[Node 2]\nn3[Node 3]\nn4[Node 4]\nn5[Node 5]\nn6[Node 6]\nn7[Node 7]\nn8[Node 8]\n\nnA --- nB\nnA --- nC\nnB --- nC\n\nn1 --- nA\nn1 --- nC\n\nn2 --- nA\nn2 --- nB\n\nn3 --- nA\nn3 --- nC\n\nn4 --- nA\nn4 --- nC\n\nnA --- n5\nnB --- n5\n\nnB --- n6\nnC --- n6\n\nnA --- n7\nnC --- n7\n\nnB --- n8\nnC --- n8\n\nn1 --- n8\nn2 --- n7\nn3 --- n6\nn4 --- n5",mdxType:"Mermaid"}),(0,o.kt)("p",null,"The result is a high-available peer-to-peer network of trusted open source build\nartifacts that no single entity can control."),(0,o.kt)("h2",{id:"why-do-i-need-pyrsia"},"Why do I need Pyrsia?"),(0,o.kt)("p",null,"As a developer relying on open source libraries, you greatly depend on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the entity performing a build of the open source library"),(0,o.kt)("li",{parentName:"ul"},"a central repository of build artifacts")),(0,o.kt)("p",null,"This poses several risks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"There is no way for you to verify the binary artifact is in fact the result of\nthe given source so one malicious entity with publication access to a central\nrepository can publish anything it wants."),(0,o.kt)("li",{parentName:"ul"},"A central repository is controlled by a single entity, which could take\ndecisions you do not agree with.")),(0,o.kt)("p",null,"There is a solution to this problem: build all the open source libraries you\ndepend on yourself and publish them in a private local repository."),(0,o.kt)("p",null,"But why not use Pyrsia and work together instead?"),(0,o.kt)("h2",{id:"how-does-pyrsia-work"},"How does Pyrsia work?"),(0,o.kt)("p",null,"Pyrsia works by designating a number of ",(0,o.kt)("strong",{parentName:"p"},"independent build nodes"),"."),(0,o.kt)(r.G,{chart:"graph LR\nnA[Build node A]\nnB[Build node B]\nnC[Build node C]\nstyle nA fill:#e3a04d\nstyle nB fill:#e3a04d\nstyle nC fill:#e3a04d\nnA --- nB\nnA --- nC\nnB --- nC",mdxType:"Mermaid"}),(0,o.kt)("p",null,"Those build nodes perform builds for all kinds of open source libraries (at this\nstage, Pyrsia is building support for Docker images and Maven artifacts, but more package types will\nbe added soon). The trust in the built artifacts is reached because no single build\nnode can publish an artifact on its own. It needs to ask all the other build nodes\nto verify the build (i.e. perform the same build and compare the result) and only\nwhen an absolute majority verified the build (also known as 'consensus' is reached),\nthe artifact is published."),(0,o.kt)("p",null,"Pyrsia keeps a transparency log of those publications and distributes those in a\nblockchain."),(0,o.kt)("p",null,"Any other node in the network can access these logs and use them to verify binary\nartifacts that are downloaded from other nodes in the network. Whenever a node\ndownloads an artifact, it can choose to participate in the content distribution\nand provide this artifact to other nodes itself."),(0,o.kt)(r.G,{chart:"graph LR\nn1[Node 1] --- nA\nn1 --- n2[Node 2]\nnA[Build node A]\nnB[Build node B]\nnC[Build node C]\nstyle nA fill:#e3a04d\nstyle nB fill:#e3a04d\nstyle nC fill:#e3a04d\nnA --- nB\nnA --- nC\nnB --- nC",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"can-i-run-a-pyrsia-node"},"Can I run a Pyrsia node?"),(0,o.kt)("p",null,"Yes, have a look at ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"Quick Installation"),"\nand one of the package specific tutorials on ",(0,o.kt)("a",{parentName:"p",href:"docker"},"Docker")," or ",(0,o.kt)("a",{parentName:"p",href:"maven"},"Maven"),"."),(0,o.kt)("h3",{id:"do-i-have-to-participate-in-artifact-distribution"},"Do I have to participate in artifact distribution?"),(0,o.kt)("p",null,"The more nodes participate in artifact distribution, the better of course. But if\nyou only want to run a Pyrsia node to consume artifacts, that works as well."))}y.isMDXComponent=!0}}]);