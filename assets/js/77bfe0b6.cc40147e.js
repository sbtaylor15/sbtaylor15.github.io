(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5156],{89487:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=a(87462),i=(a(67294),a(3905));a(8209);const l={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/release_process.md",sidebar_position:21},n="Creating a Release for Pyrsia",r={unversionedId:"developers/release_process",id:"developers/release_process",title:"Creating a Release for Pyrsia",description:"Once the team decides to tag a release please use the following steps to ensure all parts of the service are updated.",source:"@site/docs/developers/release_process.md",sourceDirName:"developers",slug:"/developers/release_process",permalink:"/docs/developers/release_process",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/release_process.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/developers/release_process.md",sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"Pre-release checks",permalink:"/docs/developers/prerelease_manual_tests"},next:{title:"Post-release manual tests",permalink:"/docs/developers/postrelease_manual_tests"}},o={},c=[{value:"Before tagging the release in github",id:"before-tagging-the-release-in-github",level:2},{value:"Tagging the release",id:"tagging-the-release",level:2},{value:"Release to Nightly Cluster &amp; Testing",id:"release-to-nightly-cluster--testing",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Post-release",id:"post-release",level:2},{value:"Outreach",id:"outreach",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-release-for-pyrsia"},"Creating a Release for Pyrsia"),(0,i.kt)("p",null,"Once the team decides to tag a release please use the following steps to ensure all parts of the service are updated."),(0,i.kt)("p",null,"To track this release, create a new issue titled with ",(0,i.kt)("inlineCode",{parentName:"p"},"Release vx.x.x"),". Copy and paste the below sections as the issue\ndescription. Next, follow and check the boxes in the issue as you move forward with the release activity."),(0,i.kt)("h2",{id:"before-tagging-the-release-in-github"},"Before tagging the release in github"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check and make sure the version in Cargo.toml of the main branch (or the commit) is correct and in tandem with\nrelease version."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Run the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia-integration-tests/actions"},"integration tests"),". Go to last instance of\nsuccessful run and click ",(0,i.kt)("strong",{parentName:"li"},"Re-run all jobs")," button to run integration test on the main branch. Record the run instance\nlink in the comments of the release issue. Ensure there are no failures - also ensure there is no flakiness\nobserved."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Run ",(0,i.kt)("a",{parentName:"li",href:"/docs/developers/prerelease_manual_tests"},"manual confidence tests")," using a local build from the main branch",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","macOS (Scope: Authorize Node, Agent Node, Build Node)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Windows (Scope: Agent Node i.e. end user testing only)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Linux (Scope: Authorize Node, Agent Node, Build Node)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Docker (Scope: Agent Node i.e. end user testing only)")))),(0,i.kt)("h2",{id:"tagging-the-release"},"Tagging the release"),(0,i.kt)("p",null,"Once all the above steps are completed and verified to be success, start the release procedure:"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Go the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/releases"},"GitHub releases")," and ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/releases/new"},"Draft a new release")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Select target branch ",(0,i.kt)("inlineCode",{parentName:"li"},"main")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Click Choose a tag and type the tag name starting with a ",(0,i.kt)("inlineCode",{parentName:"li"},"v")," e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.2.2"),' - select "Create new tag on publish"'),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Name the release: start with the tag, but make sure the title already includes a quick summary of the most important change(s)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Click generate release notes. This will generate the technical release notes of all changes."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Summarize the changes in a more readable list above the technical release notes - see ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/releases/tag/v0.2.1"},"0.2.1 as an example")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the box for 'Set as pre-release' (for now)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure 'Set as latest release' is NOT checked (for now)"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Hit "Publish release" and wait for the workflow to finish')),(0,i.kt)("h2",{id:"release-to-nightly-cluster--testing"},"Release to Nightly Cluster & Testing"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Deploy to nightly cluster - Refer ",(0,i.kt)("a",{parentName:"p",href:"https://pyrsia.io/docs/sre/kubernetes-helm/"},"Managing Pyrsia on Kubernetes"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Run installers + manual confidence tests connecting to nightly"),(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","macOS (Scope: Authorize Node, Agent Node, Build Node)")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Windows (Scope: Agent Node i.e. end user testing only)")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Linux (Scope: Authorize Node, Agent Node, Build Node) - install the latest stable release till #1509 is not closed using the following workaround"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# workaround\nsudo apt-get update\nsudo apt-get install -y wget gnupg\nsudo wget -q -O - https://repo.pyrsia.io/repos/Release.key |  gpg --dearmor  > pyrsia.gpg\nsudo install -o root -g root -m 644 pyrsia.gpg /etc/apt/trusted.gpg.d/\nrm pyrsia.gpg\nsudo su\necho \"deb https://repo.pyrsia.io/repos/stable focal main\" >> /etc/apt/sources.list\nexit\nsudo apt-get update\nsudo apt-get install -y pyrsia\n\n# Some edits need to make to connect to nightly cluster.\n# Edits to set bootstrap-url nightly-cluster\nsudo sed -i '/ExecStart=/ s/$/ --bootstrap-url http:\\/\\/boot.nightly.pyrsia.link\\/status/' $(sudo find /etc -name pyrsia.service)\n\n# reload & restart\nsystemctl daemon-reload\nservice pyrsia restart\n"))),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Docker (Scope: Agent Node i.e. end user testing only)"))))),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure ",(0,i.kt)("a",{parentName:"li",href:"https://repo.pyrsia.io/repos/nightly/pool/main/p/pyrsia/"},"apt repo")," and\n",(0,i.kt)("a",{parentName:"li",href:"https://brewrepo.pyrsia.io/stable/x86_64/"},"brew repo")," contain the correct latest release"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Upload Windows MSI to GitHub release. Find the Windows installers from Artifacts section of GitHub action runs for\nthe release."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploy the production authorized nodes with this release. Refer ",(0,i.kt)("a",{parentName:"li",href:"https://pyrsia.io/docs/sre/kubernetes-helm/"},"Managing Pyrsia on Kubernetes")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Run installers + ",(0,i.kt)("a",{parentName:"li",href:"/docs/developers/postrelease_manual_tests"},"manual confidence tests")," connecting to production",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Linux"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","MacOS"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Windows"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Docker")))),(0,i.kt)("h2",{id:"post-release"},"Post-release"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Edit the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/releases"},"GitHub release")," and uncheck 'Set as pre-release' and check 'Set as latest release'."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update documentation to point to the latest released version"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update the version number to prepare for the next release",(0,i.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure you update the version in ",(0,i.kt)("inlineCode",{parentName:"li"},"Cargo.toml")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update github actions with the new version number eg. ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pyrsia/pyrsia/pull/1349/files"},"https://github.com/pyrsia/pyrsia/pull/1349/files")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a PR with the version change and run it through the github actions to ensure nothing fails."),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Verify that the rust toolchain version is set to the version we would like to release this version. Since 0.2.2 this is captured in one place - at the top of ",(0,i.kt)("inlineCode",{parentName:"li"},"Cargo.toml")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Merge the PR to the main branch")))),(0,i.kt)("h2",{id:"outreach"},"Outreach"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add a blog to promote this release - like ",(0,i.kt)("a",{parentName:"li",href:"https://pyrsia.io/blog/2022/11/30/pyrsia-0.2.1-released/"},"https://pyrsia.io/blog/2022/11/30/pyrsia-0.2.1-released/")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Record a demo video for the release while showcasing most feature or with any significant learning to share.")))}d.isMDXComponent=!0},11748:(e,t,a)=>{var s={"./locale":89234,"./locale.js":89234};function i(e){var t=l(e);return a(t)}function l(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=l,e.exports=i,i.id=11748}}]);