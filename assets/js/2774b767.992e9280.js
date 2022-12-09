"use strict";(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[2005],{12332:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=(a(8209),["components"]),l={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/local_dev_setup.md"},s="Setup your development environment",p={unversionedId:"community/get_involved/local_dev_setup",id:"community/get_involved/local_dev_setup",title:"Setup your development environment",description:"Pyrsia uses Rust programming language and will require you to setup Rust and it's dependencies.",source:"@site/docs/community/get_involved/local_dev_setup.md",sourceDirName:"community/get_involved",slug:"/community/get_involved/local_dev_setup",permalink:"/docs/community/get_involved/local_dev_setup",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/local_dev_setup.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/community/get_involved/local_dev_setup.md"},sidebar:"tutorialSidebar",previous:{title:"Good Pull Requests",permalink:"/docs/community/get_involved/good_pr"},next:{title:"New to Pyrsia",permalink:"/docs/community/get_involved/onboarding"}},u={},d=[{value:"Download the Source Code",id:"download-the-source-code",level:2},{value:"Install Rust",id:"install-rust",level:2},{value:"Install System Dependencies",id:"install-system-dependencies",level:3},{value:"Build code and run tests",id:"build-code-and-run-tests",level:2},{value:"Pyrsia node docker image",id:"pyrsia-node-docker-image",level:2},{value:"Build the Pyrsia node docker image",id:"build-the-pyrsia-node-docker-image",level:3},{value:"Build the Pyrsia node docker image (if not present) and start the node",id:"build-the-pyrsia-node-docker-image-if-not-present-and-start-the-node",level:3},{value:"Simulate a network",id:"simulate-a-network",level:2},{value:"Interact using the CLI",id:"interact-using-the-cli",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-your-development-environment"},"Setup your development environment"),(0,o.kt)("p",null,"Pyrsia uses ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust programming language")," and will require you to setup Rust and it's dependencies."),(0,o.kt)("h2",{id:"download-the-source-code"},"Download the Source Code"),(0,o.kt)("p",null,"Clone the project repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/pyrsia/pyrsia.git\n")),(0,o.kt)("p",null,"We will call this directory ",(0,o.kt)("inlineCode",{parentName:"p"},"$PYRSIA_HOME")),(0,o.kt)("h2",{id:"install-rust"},"Install Rust"),(0,o.kt)("p",null,"Setup rust on your local machine as described in ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"Rust's getting started guide"),".\nYou may also follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.forrestthewoods.com/blog/how-to-debug-rust-with-visual-studio-code/"},"How to Debug Rust with Visual Studio Code"),"\nif you are looking to make code changes."),(0,o.kt)("h3",{id:"install-system-dependencies"},"Install System Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install Clang and OpenSSL"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"macOS: use ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"homebrew")," to install OpenSSL"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"brew install openssl@1.1\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Linux (ubuntu): use ",(0,o.kt)("inlineCode",{parentName:"p"},"apt")," to install Clang, OpenSSL and CMake and pkg-config"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"apt install clang libssl-dev cmake pkg-config\n"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install protoc"),(0,o.kt)("p",{parentName:"li"},"Pyrsia has a dependency on the ",(0,o.kt)("inlineCode",{parentName:"p"},"libp2p")," crate which requires ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc")," to be installed. For installation instructions,\nplease read the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/protocolbuffers/protobuf#protocol-compiler-installation"},"protobuf installation guide"),"."))),(0,o.kt)("h2",{id:"build-code-and-run-tests"},"Build code and run tests"),(0,o.kt)("p",null,"The base line is making sure all the code compiles and every test passes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ncargo build --all-targets\ncargo test --workspace\n")),(0,o.kt)("p",null,"These commands should run successfully. If you have issues with these please reach out to the team on slack and report an issue/submit a PR."),(0,o.kt)("h2",{id:"pyrsia-node-docker-image"},"Pyrsia node docker image"),(0,o.kt)("p",null,"Make sure ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker engine")," is installed (18.09 or higher) and running."),(0,o.kt)("h3",{id:"build-the-pyrsia-node-docker-image"},"Build the Pyrsia node docker image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\nDOCKER_BUILDKIT=1 docker build -t=pyrsia/node .\n")),(0,o.kt)("p",null,'If everything works as expected, after a while, a new image "pyrsia/node" should appear in the docker images list.'),(0,o.kt)("h3",{id:"build-the-pyrsia-node-docker-image-if-not-present-and-start-the-node"},"Build the Pyrsia node docker image (if not present) and start the node"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd $PYRSIA_HOME\ndocker compose up\n")),(0,o.kt)("p",null,'If everything works as expected, a new docker container should be started using the "node/pyrsia" image.'),(0,o.kt)("h2",{id:"simulate-a-network"},"Simulate a network"),(0,o.kt)("p",null,"Once you have compiled the Pyrsia code you are ready to build a Pyrsia network for testing. Pyrsia nodes are run on a peer to peer network and will require port separation if you would like to run multiple nodes on the same computer."),(0,o.kt)("p",null,"Follow the instructions below to setup a test network."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 1:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"RUST_LOG=info,pyrsia=debug DEV_MODE=on cargo run --package pyrsia_node -- --listen-only -p 7888 --init-blockchain\n")),(0,o.kt)("p",{parentName:"li"}," Test the pyrsia_node status using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," (notice the port number for Node 1)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request GET 'http://localhost:7888/status'\n")),(0,o.kt)("p",{parentName:"li"}," Download or clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tiainen/pyrsia_build_pipeline_prototype"},"prototype repo"),"\nand run as follows (",(0,o.kt)("inlineCode",{parentName:"p"},"jq")," must be installed locally before):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd pyrsia_build_pipeline_prototype\nRUST_LOG=debug cargo run\n")))),(0,o.kt)("p",null,"In a real life deployment these nodes will be spread over the network and will all run on their own 7888 port."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Node 2:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"RUST_LOG=info,pyrsia=debug DEV_MODE=on PYRSIA_BLOCKCHAIN_PATH=pyrsia_node_2/blockchain PYRSIA_ARTIFACT_PATH=pyrsia_node_2 PYRSIA_KEYPAIR=pyrsia_node_2/p2p_keypair.ser cargo run --package pyrsia_node -- -p 7889 --bootstrap-url http://localhost:7888/status\n")),(0,o.kt)("p",{parentName:"li"}," We have to set explicit values for ",(0,o.kt)("inlineCode",{parentName:"p"},"PYRSIA_BLOCKCHAIN_PATH"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"PYRSIA_ARTIFACT_PATH")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"PYRSIA_KEYPAIR")," to prevent\ncollisions with the files already created by Node 1. Another way of dealing with this, is to copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"pyrsia_node"),"\nbinary to a separate location and start the second node there. The default values use a relative path against the current directory."),(0,o.kt)("p",{parentName:"li"}," Test the pyrsia_node status using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," (notice the port number for Node 2)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"curl --location --request GET 'http://localhost:7889/status'\n")))),(0,o.kt)("p",null,"Now you have confirmed that the individual nodes are running."),(0,o.kt)("h2",{id:"interact-using-the-cli"},"Interact using the CLI"),(0,o.kt)("p",null,"You can use the Pyrsia CLI to ensure that the peers are connected."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Build the CLI tool"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ../pyrsia_cli\ncargo build\ncd ../target/debug\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Configure the CLI tool for your node using interactive subcommand "config"'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," ./pyrsia config -e\n")),(0,o.kt)("p",{parentName:"li"},"You can find the config file in these OS specific locations:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mac:  $HOME/Library/Preferences/rs.pyrsia-cli/pyrsia-cli.toml"),(0,o.kt)("li",{parentName:"ul"},"Linux: $HOME/.config/rs.pyrsia-cli/pyrsia-cli.toml or $XDG_CONFIG_HOME/rs.pyrsia-cli/pyrsia-cli.toml"),(0,o.kt)("li",{parentName:"ul"},"Windows: %APPDATA%","\\","Roaming","\\","pyrsia-cli","\\","config","\\","pyrsia-cli.toml")),(0,o.kt)("p",{parentName:"li"},"You can easily switch the CLI to use one of your two nodes by using one of these commands:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node 1:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," ./pyrsia config -e --port 7888\n")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Node 2:")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," ./pyrsia config -e --port 7889\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Ping the Pyrsia node and list the status"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./pyrsia ping\nConnection Successfull !! {}\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ ./pyrsia -s\nConnected Peers Count:       1\n")))),(0,o.kt)("p",null,"If you see a status message similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Error: error sending request for url (http://localhost:7888/v2): error trying to connect: tcp connect error: Connection refused (os error 111)\n")),(0,o.kt)("p",null,"then your node is likely not running. Go back to step 3 to make sure the Pyrsia Node can be started."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Authorize Node 1 as your build node"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia config -e --port 7888\nNODE1_PEER_ID=`curl -s http://localhost:7888/status | jq -r .peer_id`\necho Authorizing peer id $NODE1_PEER_ID\n./pyrsia authorize --peer $NODE1_PEER_ID\n")),(0,o.kt)("p",{parentName:"li"},"This will output something like this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Authorizing peer id 12D3KooWFiC9Xdx77HJSLv6B1muauoxTvjWrVNcUgE4d8YRsRWkT\nAuthorize request successfully handled.\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Trigger a build from source"),(0,o.kt)("p",{parentName:"li"},"Configure your pyrsia CLI to use either Node 1 (port 7888) or Node 2 (port 7889) and then run this:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia build docker --image alpine:3.16.0\n")),(0,o.kt)("p",{parentName:"li"},"When triggering the build from Node 1, it will use the build pipeline. When triggering the build from Node 2,\nit will send a build request to Node 1, that will use the build pipeline.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Inspect logs"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./pyrsia inspect-log docker --image alpine:3.16.0\n")),(0,o.kt)("p",{parentName:"li"},"This will print the transparency logs for alpine:3.16.0 in JSON format."))),(0,o.kt)("p",null,"Congratulations! You have now setup your developer environment and are ready to write code and submit a PR to Pyrsia. Head over to ",(0,o.kt)("a",{parentName:"p",href:"/docs/community/get_involved/contributing/"},"contributing guidelines")," to start contributing to the project."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Word of caution: Running the peers for a few hours does generate network traffic and hence can drain your computer power. Ensure you are plugged into power if you are running multiple peers for a long time`")))}m.isMDXComponent=!0}}]);