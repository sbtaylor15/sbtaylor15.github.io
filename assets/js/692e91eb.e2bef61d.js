"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[9752],{5401:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(8209),["components"]),s={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/maven_and_pyrsia.md",sidebar_position:6},d="Maven user scenarios",l={unversionedId:"developers/maven_and_pyrsia",id:"developers/maven_and_pyrsia",title:"Maven user scenarios",description:"This assumes that Pyrsia network has a set of well known java binaries (jars) that have been built from source and are available on the cloud node. Adding new java binaries to the Pyrsia network is not in scope for this use case.",source:"@site/docs/developers/maven_and_pyrsia.md",sourceDirName:"developers",slug:"/developers/maven_and_pyrsia",permalink:"/docs/developers/maven_and_pyrsia",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/maven_and_pyrsia.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/docs/developers/maven_and_pyrsia.md",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Pyrsia and Docker",permalink:"/docs/developers/pyrsia-with-docker"},next:{title:"How to start and debug Pyrsia Node using IDE",permalink:"/docs/developers/setting_up_ide"}},p={},u=[],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maven-user-scenarios"},"Maven user scenarios"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This assumes that Pyrsia network has a set of well known java binaries (jars) that have been built from source and are available on the cloud node. Adding new java binaries to the Pyrsia network is not in scope for this use case.")),(0,o.kt)("p",null,"Please refer to ","[mvn scenarios]","(",(0,o.kt)("a",{parentName:"p",href:"https://lucid.app/lucidchart/d5254e8f-69c5-49d9-acae-91aff72382e2/edit?viewport_loc=42%2C69%2C1912%2C1107%2C0_0&invitationId=inv_a3c2b95f-f098-4758-8a6d-016f569b572c"},"https://lucid.app/lucidchart/d5254e8f-69c5-49d9-acae-91aff72382e2/edit?viewport_loc=42%2C69%2C1912%2C1107%2C0_0&invitationId=inv_a3c2b95f-f098-4758-8a6d-016f569b572c"),"#)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As a user I can use a Java build tool like Maven to download Maven artifacts from the Pyrsia network.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As a user of maven, I should be able to run maven commands and receive the dependencies for my java project from the Pyrsia network instead of the Maven Central Repository."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"( For instance you could use ",(0,o.kt)("inlineCode",{parentName:"li"},"mvn -U dependency:resolve")," to test this feature. This command will look for the dependencies on the network and should go to Pyrsia before looking for them in Maven Central)\nThe user needs to configure their repository-order as follows:"),(0,o.kt)("li",{parentName:"ul"},"A Maven project can contain a number of remote repositories (via pom.xml, super pom, or local/global settings.xml). By default the local repository at ~/.m2 and Maven Central are always included. The precedence of repositories is defined here: ",(0,o.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/mini/guide-multiple-repositories.html#repository-order"},"https://maven.apache.org/guides/mini/guide-multiple-repositories.html#repository-order"),".")))),(0,o.kt)("p",null,"Adding the Pyrsia repository to the pom/settings will allow downloading from Pyrsia first (if the artifact is not already downloaded into ~/.m2, that is), and if not present, then from Maven Central.)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In case the dependencies are not yet available on the Pyrsia network, Maven should fallback to retrieving those dependencies from Maven Central.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the dependencies are available on the Pyrsia network, they should then be downloaded to the peer node and any future requests for the dependency should fetch them from the peer node. Future requests for the same version of the dependency should not cause network traffic if they are available on the peer node.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"As a user of pyrsia - I should be able to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"inspect-log")," pyrsia cli command to look at the transparency log for the jar I am interested in."))))}m.isMDXComponent=!0}}]);