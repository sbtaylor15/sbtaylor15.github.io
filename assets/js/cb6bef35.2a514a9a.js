(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[954],{91565:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),p=(a(8209),["components"]),o={title:"Openssl and Rust libp2p ED25519 Key Pairs",authors:[{name:"Steve Taylor",title:"Pyrsia Contributor",image_url:"https://github.com/sbtaylor15.png"}],tags:["rust","openssl","ed25519","keypair"]},l=void 0,s={permalink:"/blog/2023/02/01/rust-ed25519-key-pairs",source:"@site/blog/2023-02-01-rust-ed25519-key-pairs.md",title:"Openssl and Rust libp2p ED25519 Key Pairs",description:"The ED25519 crate (libp2p::identity) can generate and load key pairs.  These key pairs are 64 bytes long.",date:"2023-02-01T00:00:00.000Z",formattedDate:"February 1, 2023",tags:[{label:"rust",permalink:"/blog/tags/rust"},{label:"openssl",permalink:"/blog/tags/openssl"},{label:"ed25519",permalink:"/blog/tags/ed-25519"},{label:"keypair",permalink:"/blog/tags/keypair"}],readingTime:2.815,hasTruncateMarker:!1,authors:[{name:"Steve Taylor",title:"Pyrsia Contributor",image_url:"https://github.com/sbtaylor15.png",imageURL:"https://github.com/sbtaylor15.png"}],frontMatter:{title:"Openssl and Rust libp2p ED25519 Key Pairs",authors:[{name:"Steve Taylor",title:"Pyrsia Contributor",image_url:"https://github.com/sbtaylor15.png",imageURL:"https://github.com/sbtaylor15.png"}],tags:["rust","openssl","ed25519","keypair"]},nextItem:{title:"Pyrsia Anniversary Recap",permalink:"/blog/2022/12/30/pyrsia-anniversary-recap"}},u={authorsImageUrls:[void 0]},d=[{value:"Generate a Key Pair using Rust libp2p",id:"generate-a-key-pair-using-rust-libp2p",level:2},{value:"Using openssl to generate a key pair that Rust <code>identity::ed25519::Keypair::decode()</code> can understand",id:"using-openssl-to-generate-a-key-pair-that-rust-identityed25519keypairdecode-can-understand",level:2},{value:"TL;DR - PEM to Rust ED25519 Key Pair",id:"tldr---pem-to-rust-ed25519-key-pair",level:3},{value:"Loading Rust libp2p Key Pair into a Rust Object",id:"loading-rust-libp2p-key-pair-into-a-rust-object",level:2},{value:"Converting a Rust ED25519 key pair to PEM",id:"converting-a-rust-ed25519-key-pair-to-pem",level:2},{value:"TL;DR - Rust ED25519 Key Pair to PEM",id:"tldr---rust-ed25519-key-pair-to-pem",level:3}],k={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ED25519 crate (libp2p::identity) can generate and load key pairs.  These key pairs are 64 bytes long.\nFirst 32 bytes are the private key and last 32 bytes the public key."),(0,i.kt)("p",null,"Openssl generates the ED25519 key pairs with a header in front of the public and private keys."),(0,i.kt)("p",null,"As a result, the Openssl keys pairs and Rust key pairs are not interchangeable. Therefore, if you want to use\na key pair generated by openssl with Rust then it must be converted.  Conversion is also needed to go from\nRust to openssl."),(0,i.kt)("p",null,"Below are the steps needed to convert key pairs from one format to another."),(0,i.kt)("h2",{id:"generate-a-key-pair-using-rust-libp2p"},"Generate a Key Pair using Rust libp2p"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let keypair = identity::ed25519::Keypair::generate();\n")),(0,i.kt)("h2",{id:"using-openssl-to-generate-a-key-pair-that-rust-identityed25519keypairdecode-can-understand"},"Using openssl to generate a key pair that Rust ",(0,i.kt)("inlineCode",{parentName:"h2"},"identity::ed25519::Keypair::decode()")," can understand"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: openssl 3.X is required")),(0,i.kt)("h3",{id:"tldr---pem-to-rust-ed25519-key-pair"},"TL;DR - PEM to Rust ED25519 Key Pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#/usr/bin/env bash\n\nKEYNAME=$1\n\nPATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl genpkey -algorithm Ed25519 -out ${KEYNAME}.pem\nopenssl pkey -in ${KEYNAME}.pem -out - -outform DER | tail -c +17 > ${KEYNAME}.ser\nopenssl pkey -in ${KEYNAME}.pem -pubout -outform DER | tail -c +13 >> ${KEYNAME}.ser\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a PEM file ED25519 format\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl genpkey -algorithm Ed25519 -out ed25519.pem"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate the private key part skipping over the header\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl pkey -in ed25519.pem -out - -outform DER | tail -c +17 > ed25519.pri")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: The resulting file should be 32 bytes"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate the public key part skipping over the header\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl pkey -in ed25519.pem -pubout -outform DER | tail -c +13 > ed25519.pub")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: The resulting file should be 32 bytes"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Combine the private and public parts to create the key pair that Rust ED25519 can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"cat ed25519.pri ed25519.pub > ed25519.ser")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: The resulting file should be 64 bytes")))),(0,i.kt)("h2",{id:"loading-rust-libp2p-key-pair-into-a-rust-object"},"Loading Rust libp2p Key Pair into a Rust Object"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'let mut keypair_file = fs::File::open("ed25519.ser")?;\nlet mut buffer = vec![0; 64];  // buffer containing the key pair from disk\nkeypair_file.read_exact(&mut buffer)?; // read the file into the buffer\nlet keypair = identity::ed25519::Keypair::decode(&mut buffer); // decode the buffer into a Keypair object\n')),(0,i.kt)("h2",{id:"converting-a-rust-ed25519-key-pair-to-pem"},"Converting a Rust ED25519 key pair to PEM"),(0,i.kt)("h3",{id:"tldr---rust-ed25519-key-pair-to-pem"},"TL;DR - Rust ED25519 Key Pair to PEM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"#/usr/bin/env bash\n\nKEYNAME=$1\n\nexport PATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl genpkey -algorithm Ed25519 -out working.pem\nopenssl pkey -in working.pem -out - -outform DER | head -c 16 > header.pri\ncat ${KEYNAME}.ser | head -c 32 > ${KEYNAME}.pri\ncat header.pri ${KEYNAME}.pri > ${KEYNAME}_with_header.pri\n\nopenssl pkey -in ${KEYNAME}_with_header.pri -out ${KEYNAME}.pem\nopenssl pkey -in ${KEYNAME}.pem -pubout -text\nrm working.pem\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate a temporary PEM file to get the ED25519 header from\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl genpkey -algorithm Ed25519 -out working.pem"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get the ED25519 header. Note: All ED25519 headers are the same length since the key is fixed length\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl pkey -in working.pem -out - -outform DER | head -c 16 > header.pri"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Split the Rust ED25519 key pair and grab the private key (first 32 bytes)\n",(0,i.kt)("inlineCode",{parentName:"p"},"cat ed25519.ser | head -c 32 > ed25519.pri"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Concatenate the header to the private key to create an openssl formatted private key that openssl can work with.\n",(0,i.kt)("inlineCode",{parentName:"p"},"cat header.pri ed25519.pri > ed25519_with_header.pri"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Convert the openssl formatted private key to PEM\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl pkey -in ed25519_with_header.pri -out ed25519.pem"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Verify the new PEM file\n",(0,i.kt)("inlineCode",{parentName:"p"},"openssl pkey -in ed25519.pem -pubout -text")),(0,i.kt)("p",{parentName:"li"},'Expected Output"'),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-text"},"-----BEGIN PUBLIC KEY-----\nMCowBQYDK2VwAyEARicanp19ZUl5nANQL7bOFh5emlXo6s2U3MElkMwLYM4=\n-----END PUBLIC KEY-----\nED25519 Public-Key:\npub:\n    46:27:1a:9e:9d:7d:65:49:79:9c:03:50:2f:b6:ce:\n    16:1e:5e:9a:55:e8:ea:cd:94:dc:c1:25:90:cc:0b:\n    60:ce\n")))))}m.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);