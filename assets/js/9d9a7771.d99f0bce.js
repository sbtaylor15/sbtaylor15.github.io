(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[4405],{91929:function(e,a,t){"use strict";t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(8209),s=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/docker.md",sidebar_position:2},c="Configure Docker to use Pyrsia",d={unversionedId:"tutorials/docker",id:"tutorials/docker",title:"Configure Docker to use Pyrsia",description:"Once you've completed the installation,",source:"@site/docs/tutorials/docker.md",sourceDirName:"tutorials",slug:"/tutorials/docker",permalink:"/docs/tutorials/docker",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/docker.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/tutorials/docker.md",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"What is Pyrsia",permalink:"/docs/tutorials/what_is_pyrsia"},next:{title:"Configure Maven to use Pyrsia (*)",permalink:"/docs/tutorials/maven"}},u={},p=[{value:"Installation",id:"installation",level:2},{value:"Configure Docker",id:"configure-docker",level:2},{value:"Pull a docker image",id:"pull-a-docker-image",level:2},{value:"Local cache",id:"local-cache",level:2},{value:"Inspect the Pyrsia transparency log",id:"inspect-the-pyrsia-transparency-log",level:2},{value:"Requesting a build",id:"requesting-a-build",level:2},{value:"Use API",id:"use-api",level:2}],h={toc:p};function k(e){var a=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-docker-to-use-pyrsia"},"Configure Docker to use Pyrsia"),(0,o.kt)("p",null,"Once you've completed the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"installation"),",\nit's time to configure your build tools to make use of Pyrsia."),(0,o.kt)("p",null,"In this tutorial we will show how you can easily modify your Docker setup to use\nPyrsia to download official Docker images."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"First, make sure to complete the steps in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"installation tutorial"),"."),(0,o.kt)("h2",{id:"configure-docker"},"Configure Docker"),(0,o.kt)("p",null,"Next, configure your Docker installation to use Pyrsia as a registry mirror."),(0,o.kt)("p",null,"On Windows or macOS, open your Docker Desktop -> Settings ->\nDocker Engine where Docker allows you to set registry-mirrors. Configure your node\nas a registry mirror by adding/editing the following in the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsonc"},' "registry-mirrors": [\n   "http://0.0.0.0:7888"\n ]\n')),(0,o.kt)("p",null,"On Linux, you'll find this configuration in the file ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json"),".\nIf you've run the apt installation, this step was already automatically\nperformed for you."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Why 0.0.0.0?")," \\\nIn general you would specify ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:7888")," as the registry mirror but on MacOS\nand Windows this won't work because Docker Engine is running in a VM, which is\nnot the same as the local host your Pyrsia is running on. Using ",(0,o.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," works\naround this issue. In case you're having issues, try specifying your host IP address\nas the registry-mirror and bind your local Pyrsia node to that IP (using ",(0,o.kt)("inlineCode",{parentName:"p"},"-H"),"\nwith an explicit IP address or using ",(0,o.kt)("inlineCode",{parentName:"p"},"-H 0.0.0.0"),")")),(0,o.kt)("p",null,"You will need to restart Docker Desktop. Once restarted you should be able to\npull Docker images through Pyrsia."),(0,o.kt)("h2",{id:"pull-a-docker-image"},"Pull a docker image"),(0,o.kt)("p",null,"We'll use ",(0,o.kt)("inlineCode",{parentName:"p"},"alpine:3.16.2")," as an example. Your Docker installation is now configured\nto use your local Pyrsia node to retrieve artifacts. When you start Pyrsia, it will\nmake sure it has the most recent copy of the blockchain, which contains all the\npublication logs, also known as transparency logs."),(0,o.kt)("p",null,"When your Docker client pulls an image, it will make the request to your local\nPyrsia node (because you configured it as a registry mirror) and it will fetch\nthe artifact from a peer node in the Pyrsia network, verify it based on the\ntransparency logs and return it to the Docker client."),(0,o.kt)(r.G,{chart:"graph LR\ndocker[Docker<br>client]\npyrsianode[Your local<br>Pyrsia node]\npyrsianetwork((Pyrsia peer nodes<br>in the network))\npyrsianode -- keep blockchain<br>in sync --\x3e pyrsianetwork\ndocker -- pull image --\x3e pyrsianode\npyrsianode -- fetch artifact<br>when requested --\x3e pyrsianetwork\npyrsianode -- verify artifact --- pyrsianode",mdxType:"Mermaid"}),(0,o.kt)("p",null,"Let's try this, but first make sure Alpine is not yet in your local Docker cache:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker rmi alpine:3.16.2\n")),(0,o.kt)("p",null,"Then pull the image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull alpine:3.16.2\n")),(0,o.kt)("p",null,"Congratulations! The alpine Docker image was now retrieved from the Pyrsia network.\nYou can verify this in the Pyrsia logs. On Linux you will find the logs in ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/syslog"),".\nOn Windows you can see the logs in the command prompt you used to run the Pyrsia node."),(0,o.kt)("p",null,"You will see something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"DEBUG pyrsia::docker::v2::handlers::manifests > Fetching manifest for alpine with tag: 3.16\nINFO  pyrsia::artifact_service::storage       > An artifact is being pulled from the artifact manager b0ed9f25-f322-47ef-8dac-03154209cfcf\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: On macOS or Windows, you can also see the Pyrsia logs, but it depends on\nyour specific installation where to find them. (See ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"Installation tutorial"),")")),(0,o.kt)("h2",{id:"local-cache"},"Local cache"),(0,o.kt)("p",null,"If you would repeat these steps, your local Pyrsia node will already have a copy\nof the requested artifact, so it won't be retrieved again:"),(0,o.kt)(r.G,{chart:"graph LR\ndocker[Docker<br>client]\npyrsianode[Your local<br>Pyrsia node]\ndocker -- pull image --\x3e pyrsianode\npyrsianode -- verify artifact --- pyrsianode",mdxType:"Mermaid"}),(0,o.kt)("p",null,"This local cache is also used by your Pyrsia node to participate in the artifact\ndistribution to other nodes."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"TODO"),": document how a user can configure the Pyrsia node to limit the bandwidth\nused or to disable its participation in content distribution altogether.")),(0,o.kt)("h2",{id:"inspect-the-pyrsia-transparency-log"},"Inspect the Pyrsia transparency log"),(0,o.kt)("p",null,"Now, let's take a look at the transparency logs."),(0,o.kt)("p",null,"If you ran through all the steps of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/quick-installation"},"installation tutorial"),", the Pyrsia CLI tool will be available."),(0,o.kt)("p",null,"You can use this CLI tool to configure your local Pyrsia node, but also to inspect\nthe transparency logs for a given artifact."),(0,o.kt)("p",null,"If you have started your Pyrsia node with default settings, you can skip this step.\nOtherwise configure the CLI tool with your required settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," pyrsia config -e\n")),(0,o.kt)("p",null,"And enter the correct values or accept the default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Enter host: [localhost]\n\nEnter port: [7888]\n\nEnter disk space to be allocated to pyrsia(Please enter with units ex: 10 GB): [10 GB]\n\nNode configuration Saved !!\n")),(0,o.kt)("p",null,"Next, let's take the ",(0,o.kt)("inlineCode",{parentName:"p"},"alpine:3.16.2")," example again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pyrsia inspect-log docker --image alpine:3.16.2\n")),(0,o.kt)("p",null,"This CLI command returns the transparency logs for all the Pyrsia artifacts that\nmake up the Docker image ",(0,o.kt)("inlineCode",{parentName:"p"},"alpine:3.16.2"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'[\n  {\n    "id": "cc3dec20-8604-4d0a-8c18-ccb746769696",\n    "package_type": "Docker",\n    "package_specific_id": "alpine:3.16.2",\n    "num_artifacts": 4,\n    "package_specific_artifact_id": "alpine:3.16.2",\n    "artifact_hash": "1304f174557314a7ed9eddb4eab12fed12cb0cd9809e4c28f29af86979a3c870",\n    "source_hash": "",\n    "artifact_id": "75c7bd83-1dd4-4666-a35f-e8c59b695e21",\n    "source_id": "7ec06216-b2dc-4e5a-a90d-7875fb77b846",\n    "timestamp": 1660906467,\n    "operation": "AddArtifact",\n    "node_id": "64765410-136b-4332-a837-226bd062ba37",\n    "node_public_key": "558b0373-a29d-40c9-8125-019fb74dda31"\n  },\n  {\n    "id": "d88982b1-261b-4e3d-9eb2-dd549c40ac05",\n    "package_type": "Docker",\n    "package_specific_id": "alpine:3.16.2",\n    "num_artifacts": 4,\n    "package_specific_artifact_id": "alpine@sha256:1304f174557314a7ed9eddb4eab12fed12cb0cd9809e4c28f29af86979a3c870",\n    "artifact_hash": "1304f174557314a7ed9eddb4eab12fed12cb0cd9809e4c28f29af86979a3c870",\n    "source_hash": "",\n    "artifact_id": "f2648155-b665-4567-9e3c-27af7cc3b9bb",\n    "source_id": "0ca693f9-7c50-4448-9cd6-0d7a145fba14",\n    "timestamp": 1660906529,\n    "operation": "AddArtifact",\n    "node_id": "60b7d9ae-d5ba-4440-ab83-6c5638a18a45",\n    "node_public_key": "4a873a2a-0e04-4540-b1bd-bccc0d721ed2"\n  },\n  {\n    "id": "f53f9cc6-6998-470a-8094-cae3fbc82412",\n    "package_type": "Docker",\n    "package_specific_id": "alpine:3.16.2",\n    "num_artifacts": 4,\n    "package_specific_artifact_id": "alpine@sha256:213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49",\n    "artifact_hash": "213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49",\n    "source_hash": "",\n    "artifact_id": "dac2e42c-fd48-4487-b48c-34f5eac1f674",\n    "source_id": "eed938e9-9cf8-4e1b-995f-6a6d1da6ef26",\n    "timestamp": 1660906589,\n    "operation": "AddArtifact",\n    "node_id": "1e3244e3-1fc5-429b-8cc6-43dbbebaccb2",\n    "node_public_key": "7d7d96c0-1b8b-4028-bb20-df9a45eeaa7f"\n  },\n  {\n    "id": "cae2f5a7-22ec-4d22-86af-59e1f0239056",\n    "package_type": "Docker",\n    "package_specific_id": "alpine:3.16.2",\n    "num_artifacts": 4,\n    "package_specific_artifact_id": "alpine@sha256:9c6f0724472873bb50a2ae67a9e7adcb57673a183cea8b06eb778dca859181b5",\n    "artifact_hash": "9c6f0724472873bb50a2ae67a9e7adcb57673a183cea8b06eb778dca859181b5",\n    "source_hash": "",\n    "artifact_id": "3fc0ac72-8f5e-41fe-8ab6-94c565ebc52c",\n    "source_id": "4cb49c33-af4c-4c3a-8053-b771007a6720",\n    "timestamp": 1660906649,\n    "operation": "AddArtifact",\n    "node_id": "64d30c8e-d356-420c-ab87-e27687ca6f1d",\n    "node_public_key": "57130e5d-d0dc-450b-b80d-966cb71210ef"\n  }\n]\n')),(0,o.kt)("h2",{id:"requesting-a-build"},"Requesting a build"),(0,o.kt)("p",null,"While it's Pyrsia intention to build and publish all official Docker images, there\nis a possibility that a Docker image is not yet built/available."),(0,o.kt)("p",null,"When you pull an image that is unknown, your local Pyrsia node will send a build\nrequest to one of the authorized build nodes, which schedules a build for the given\nDocker image."),(0,o.kt)(r.G,{chart:"graph LR\ndocker[Docker<br>client]\npyrsianode[Your local<br>Pyrsia node]\nbuildnode[Pyrsia Build node]\ndocker -- pull image --\x3e pyrsianode\npyrsianode -- request build<br>if not yet available --\x3e buildnode\npyrsianode -- return error --\x3e docker",mdxType:"Mermaid"}),(0,o.kt)("p",null,"Your Docker client will receive an error from Pyrsia at that point (your local\nDocker client might fall back to Docker Hub), but when the build is finished\nand the other build nodes inside the Pyrsia network reached consensus, your node\nwill receive updated transparency logs via the blockchain and you will be able to\npull the image from the Pyrsia network."),(0,o.kt)("p",null,"To find out if an image is available, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"inspect-log")," described above."),(0,o.kt)("p",null,"Alternatively, you can also explicitly request the build of a new Docker image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"pyrsia build docker --image alpine:3.16.3\n")),(0,o.kt)("p",null,"This will send the build request to one of the authorized build nodes, which will\nstart a build. When consensus about that build is reached, it will be available\nin the transparency logs and can be retrieved by all nodes in the network."),(0,o.kt)("h2",{id:"use-api"},"Use API"),(0,o.kt)("p",null,"Pyrsia supports a subset of the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/registry/spec/api/"},"Docker Registry API"),". A more detailed API document specific to Pyrsia, will be coming soon."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -sS http://localhost:7888/v2/library/alpine/manifests/3.16.2\n{\n   "schemaVersion": 2,\n   "mediaType": "application/vnd.docker.distribution.manifest.v2+json",\n   "config": {\n      "mediaType": "application/vnd.docker.container.image.v1+json",\n      "size": 1470,\n      "digest": "sha256:9c6f0724472873bb50a2ae67a9e7adcb57673a183cea8b06eb778dca859181b5"\n   },\n   "layers": [\n      {\n         "mediaType": "application/vnd.docker.image.rootfs.diff.tar.gzip",\n         "size": 2806054,\n         "digest": "sha256:213ec9aee27d8be045c6a92b7eac22c9a64b44558193775a1a7f626352392b49"\n      }\n   ]\n}%\n')))}k.isMDXComponent=!0},11748:function(e,a,t){var n={"./locale":89234,"./locale.js":89234};function i(e){var a=o(e);return t(a)}function o(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=11748}}]);