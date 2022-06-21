(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[510],{45867:function(e,t,o){"use strict";o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return h},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=o(87462),n=o(63366),i=(o(67294),o(3905)),s=o(93456),r=["components"],l={custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/blog/2022-01-28-blockchain-consensus.md",title:"Blockchain Consensus",authors:[{name:"Christopher McArthur",title:"Pyrsia Contributor",image_url:"https://github.com/prince-chrismc.png"}],tags:["blockchain","consensus","bitcoin","ethereum","proof-of-work","proof-of-stake"]},h=void 0,c={permalink:"/blog/2022/01/28/blockchain-consensus",editUrl:"https://github.com/pyrsia/pyrsia/edit/main/blog/2022-01-28-blockchain-consensus.md",source:"@site/blog/2022-01-28-blockchain-consensus.md",title:"Blockchain Consensus",description:"Blockchain technologies are trending. There\u2019s a lot of information about what they do and how they work but often these are abstract high level overviews. Looking beneath the surface, these overviews skip some of the most fascinating parts of the implementations that bring these technologies to life.",date:"2022-01-28T00:00:00.000Z",formattedDate:"January 28, 2022",tags:[{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"consensus",permalink:"/blog/tags/consensus"},{label:"bitcoin",permalink:"/blog/tags/bitcoin"},{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"proof-of-work",permalink:"/blog/tags/proof-of-work"},{label:"proof-of-stake",permalink:"/blog/tags/proof-of-stake"}],readingTime:6.55,truncated:!1,authors:[{name:"Christopher McArthur",title:"Pyrsia Contributor",image_url:"https://github.com/prince-chrismc.png",imageURL:"https://github.com/prince-chrismc.png"}],frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/edit/main/blog/2022-01-28-blockchain-consensus.md",title:"Blockchain Consensus",authors:[{name:"Christopher McArthur",title:"Pyrsia Contributor",image_url:"https://github.com/prince-chrismc.png",imageURL:"https://github.com/prince-chrismc.png"}],tags:["blockchain","consensus","bitcoin","ethereum","proof-of-work","proof-of-stake"]},prevItem:{title:"Peer Metrics in the Pyrsia Network",permalink:"/blog/2022/06/03/peer-metrics"}},p={authorsImageUrls:[void 0]},u=[{value:"What is a Blockchain",id:"what-is-a-blockchain",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Proof of Work",id:"proof-of-work",level:3},{value:"Proof of Stake",id:"proof-of-stake",level:3},{value:"Stale and Orphan Blocks",id:"stale-and-orphan-blocks",level:3},{value:"Which branch should we follow",id:"which-branch-should-we-follow",level:4},{value:"Dynamic Validator Sets",id:"dynamic-validator-sets",level:3},{value:"References",id:"references",level:2}],k={toc:u};function m(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Blockchain technologies are trending. There\u2019s a lot of information about what they do and how they work but often these are abstract high level overviews. Looking beneath the surface, these overviews skip some of the most fascinating parts of the implementations that bring these technologies to life."),(0,i.kt)("h2",{id:"what-is-a-blockchain"},"What is a Blockchain"),(0,i.kt)("p",null,"IBM has one of my ",(0,i.kt)("a",{parentName:"p",href:"https://www.ibm.com/topics/what-is-blockchain"},"favorite definitions"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\xa0Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets ","[","... on] a network.\nAn asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually\nanything of value can be tracked ","[","... ] on a blockchain network, reducing risk ","[","...] for all involved.")),(0,i.kt)("p",null,"There\u2019s a few key items to highlight from this definition are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A shared, immutable ledger"),(0,i.kt)("li",{parentName:"ul"},"Recording and tracking assets")),(0,i.kt)("p",null,"Simply put, a Blockchain is a list of changes to assets, called transactions, which are grouped in blocks that are recognized by all participants in the network."),(0,i.kt)("p",null,"Unfortunately, it leaves out one major element. How do blockchain networks reduce risk? How do blockchain networks agree on the shared ledger?"),(0,i.kt)("h2",{id:"consensus"},"Consensus"),(0,i.kt)("p",null,"In the world of blockchain, consensus is the agreement of which block is next. Collectively all the participants in the blockchain\u2019s network\nshould come to the same conclusion."),(0,i.kt)("p",null,"You\u2019ve probably heard of \u201cProof of Work\u201d, usually called mining, and \u201cProof of Stake\u201d, these two are the most popular in terms of market share\nin the crypto markets."),(0,i.kt)("p",null,"These consensus algorithms were some of the first to be popularized by projects like Bitcoin and Ethereum. These are far from the only ones, Proof of Authority, Proof of Burn, Proof of Capacity and Proof of History are just from others mentioned on ",(0,i.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/c/consensus-mechanism-cryptocurrency.asp"},"Investopedia's Website"),"."),(0,i.kt)("p",null,"Let\u2019s dive deeper into the two popular algorithms to see how they obtain consensus."),(0,i.kt)("h3",{id:"proof-of-work"},"Proof of Work"),(0,i.kt)("p",null,"Proof of Work is based on a mathematical expression which is very costly to compute a magic number, called a nonce, but easily verified. Each participant, typically referred to as a miner, begins the calculation with the transitions it\u2019s heard on the network since the last published block. Participants race each other to find the right answer and the winner traditionally gets a reward. It\u2019s difficult to cheat and very rewarding to operate in good faith."),(0,i.kt)("p",null,"At the time of writing, January 28th 2022, the reward is 6.25 BTC which is worth 236,755 USD. It\u2019s easy to draw parallels to the 1849 Gold Rush."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/lbGxZlJRF5GlNLNmbQlnS7Rdk0CHU9w2QjyfghfFLKWOa-bz7ZaEq83AWwVwEd4oJXZgUhyBQxzZ_-_6ytuISeQXU1er77nfwYpdoPgaE_8bvQqKFdsLmUVRbuc9NrePRDTtcZ7YbkqgTq5RMg",alt:"BitCoin Value"})),(0,i.kt)("p",null,"When miners hear of a new block, they immediately stop their calculation and begin listening for more transactions. This is approximately a 10 minute window for Bitcoin."),(0,i.kt)("p",null,"With a small number of competitors it\u2019s pretty straightforward but when tens of thousands of nodes are involved, what happens if two miners finish at the same time. Who wins?"),(0,i.kt)("h3",{id:"proof-of-stake"},"Proof of Stake"),(0,i.kt)("p",null,"Proof of Stake is an investment strategy where committing more capital means you\u2019re more likely to get the reward. ",(0,i.kt)("a",{parentName:"p",href:"https://www.peercoin.net/whitepapers/peercoin-paper.pdf"},"Peercoin"),", a very early PoS implementation, kept the mining of PoW but required less computational complexity the more ",(0,i.kt)("em",{parentName:"p"},"coinage")," was staked. If two participants offer the same investment in the next block, which one is rewarded?"),(0,i.kt)("p",null,"If someone is able to offer more capital for their block to be accepted, are they able to always win? Yes, this is a special type of security exploit called a 51% attack. If the confirmation of the next block is tied to a resource, then an entity which holds a majority stake can take control of the blockchain. Proof of Work is also susceptible to this type of attack."),(0,i.kt)("h3",{id:"stale-and-orphan-blocks"},"Stale and Orphan Blocks"),(0,i.kt)("p",null,"Most blockchain\u2019s are actually trees, not linked lists which is what probably comes to mind for young data scientists. This probably comes as a shock but it\u2019s the secret ingredient to solving our racing condition when two participants propose the next block in PoW."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If two nodes broadcast different versions of the next block simultaneously, some\nnodes may receive one or the other first. In that case, they work on the first one they received,\nbut save the other branch in case it becomes longer.\nThe tie will be broken when the next proof-of-work is found and one branch becomes longer.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://bitcoin.org/bitcoin.pdf"},(0,i.kt)("em",{parentName:"a"},"Bitcoin: A Peer-to-Peer Electronic Cash System Section 5"))),(0,i.kt)("p",null,"Chains are made of links that connect to others. This data structure is referred to as a linked list, when a link\npoints to both it\u2019s parent and child is a doubly linked list. Three sequential blocks being published would make the following chain:"),(0,i.kt)(s.Mermaid,{config:{},chart:"stateDiagram-v2\n    [*] --\x3e Block_1\n    Block_1 --\x3e Block_2 : Parent\n    Block_2 --\x3e Block_3 : Child\n    Block_3 --\x3e [*]",mdxType:"Mermaid"}),(0,i.kt)("p",null,"If block 4 was published at the same time as our block 3 a node would have the following tree:"),(0,i.kt)(s.Mermaid,{chart:"stateDiagram-v2\n    [*] --\x3e Block_1\n    Block_1 --\x3e Block_2 : Parent\n    Block_2 --\x3e Block_3 : Child\n    state Block_2 <<fork>>\n        Block_2 --\x3e Block_4 : Nephew\n        Block_3 --\x3e Block_5\n    Block_5 --\x3e [*]",mdxType:"Mermaid"}),(0,i.kt)("p",null,"Since it\u2019s extremely unlikely that a second pair of blocks would also be published at the same time, the tie is broken when the next sequential block is published. This is block 5 in the diagram above."),(0,i.kt)("h4",{id:"which-branch-should-we-follow"},"Which branch should we follow"),(0,i.kt)("p",null,"Well, intuitively the \u201cstrongest\u201d branch of our tree is the one we should stick with. The strength comes from the amount of work that has gone into making the branch. More work means it\u2019s less likely that someone has cheated or lied."),(0,i.kt)("h3",{id:"dynamic-validator-sets"},"Dynamic Validator Sets"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/upgrades/merge"},"Ethereum\u2019s new PoS system named ",(0,i.kt)("em",{parentName:"a"},"Consensus Layer")),", ",(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2022/01/24/the-great-eth2-renaming/"},"formally Ethereum 2.0"),", is still in development but it\u2019s leading implementation is ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1710.09437.pdf"},"Casper FFG"),"\xa0",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1011"},(0,i.kt)("sup",null,"[","2","]"))," (there\u2019s also ",(0,i.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2018/12/05/cbc_casper.html"},"this")," alternative) which uses a Byzantine Fault Tolerance consensus."),(0,i.kt)("p",null,"In Proof of Stake, the participants are called validators who\u2019s role is similar to miners in Proof of Work. The validator is staking money on the block that it thinks should be added to the chain. If the block gets appended, then they get a reward that is proportional to the bet that they placed on the block. ",(0,i.kt)("a",{parentName:"p",href:"https://www.chubbydeveloper.com/ethereum-proof-of-stake-casper-ffg-vs-casper-cbc/"},(0,i.kt)("sup",null,"[","1","]")),(0,i.kt)("sup",null," "),"Validators are responsible for following the forking rules when staking checkpoints. Validators decide which block is the best by following a set of rules."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1710.09437.pdf"},"https://arxiv.org/pdf/1710.09437.pdf")),(0,i.kt)("p",null,"The proposal set the stake deposit at 32 ETH to be eligible to act as a validator. At the time of writing that has a value of 81,374.81 USD even after a recent drop in value."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/yqYvnvnQNbf46dzgQQcndXR8eFjm_LYe-6ND4GslxLlyxtZamkv5q6deQjMVayYz9cHNvzh8UbOwcl4Q897KJEJp_mtCHi0x3WvMWN8b9cG-1zDiLnuQ-lQiBaC2H6D66O-8x2umwhzTkWLbJA",alt:"ETH Value"})),(0,i.kt)("p",null,"There\u2019s a few key concepts employed in Casper FFG, many are outlined in the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1011#glossary"},"EIPS 1011\u2019s Glossary")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Checkpoint is the block in the finalization stage"),(0,i.kt)("li",{parentName:"ul"},"Epoch is the range of blocks between checkpoints. This grow by one block for each new epoch"),(0,i.kt)("li",{parentName:"ul"},"Dynasty refers to the number of finalized checkpoints in the chain. (Note: checkpoints do not reach finality unless a super-majority of votes are obtained in favor)")),(0,i.kt)("p",null,"The validators are ",(0,i.kt)("em",{parentName:"p"},"randomly")," selected (this is not detailed in the proposals but details are available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/casper/blob/4adeffce5709fcf2d36f4bc6ac27bbd62747d032/VALIDATOR_GUIDE.md"},"here"),") based on who has deposited the correct funds. Participants must deposit the correct sum 2 dynasties in advance to join a validator set. In order to leave they must send a withdrawal request 2 dynasties in advance, however the funds are not returned for approximately 4 months since the withdrawal was requested."),(0,i.kt)("p",null,"Consensus, or finality, is not reached unless \u2154, a super-majority of votes have been gathered stating the checkpoint meets the forking rules \u201cfollow the chain containing the justified ","[","block] of the greatest height\u201d."),(0,i.kt)("p",null,"When a checkpoint is finalized all the blocks in it\u2019s epoch are implicitly finalized as well. This also marks the start of a new dynasty, casting the previous on to history it can no longer be modified and reaches immutability. This is also when validators can enter or exit the staking on checkpoints."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.bitcoin.org/devguide/p2p_network.html?highlight=stale%20orphan#orphan-blocks"},"https://developer.bitcoin.org/devguide/p2p_network.html?highlight=stale%20orphan#orphan-blocks")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.bitcoin.org/devguide/block_chain.html?highlight=stale#block-height-and-forking"},"https://developer.bitcoin.org/devguide/block_chain.html?highlight=stale#block-height-and-forking")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"},"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vitalik.ca/general/2017/12/31/pos_faq.html"},"https://vitalik.ca/general/2017/12/31/pos_faq.html")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/unitychain/intro-to-casper-ffg-9ed944d98b2d"},"https://medium.com/unitychain/intro-to-casper-ffg-9ed944d98b2d")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@ppio/consensus-byzantine-fault-tolerance-402258ec7a60"},"https://medium.com/@ppio/consensus-byzantine-fault-tolerance-402258ec7a60")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/casper-ffg-with-one-message-type-and-simpler-fork-choice-rule/103/31"},"https://ethresear.ch/t/casper-ffg-with-one-message-type-and-simpler-fork-choice-rule/103/31")))}m.isMDXComponent=!0},11748:function(e,t,o){var a={"./locale":89234,"./locale.js":89234};function n(e){var t=i(e);return o(t)}function i(e){if(!o.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=11748}}]);