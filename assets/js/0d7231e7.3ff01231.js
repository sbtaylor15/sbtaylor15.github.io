(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5722],{42537:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=(a(8209),["components"]),s={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/gke-setup.md"},o="Google GKE Setup",p={unversionedId:"SRE/gke-setup",id:"SRE/gke-setup",title:"Google GKE Setup",description:"1. Generate Access keys for CLI, SDK, & API access",source:"@site/docs/SRE/gke-setup.md",sourceDirName:"SRE",slug:"/SRE/gke-setup",permalink:"/docs/SRE/gke-setup",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/gke-setup.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/gke-setup.md"},sidebar:"tutorialSidebar",previous:{title:"AWS EKS Setup",permalink:"/docs/SRE/eks-setup"},next:{title:"Managing Pyrsia on Kubernetes",permalink:"/docs/SRE/kubernetes-helm"}},u={},c=[],m={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"google-gke-setup"},"Google GKE Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate Access keys for CLI, SDK, & API access"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install-sdk"},"Install gcloud"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set your gcloud config"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-toml"},"[compute]\nzone = us-central1-c\n[container]\ncluster = pyrsia-cluster-1\n[core]\ndisable_usage_reporting = False\nproject = pyrsia-sandbox\n"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the Cluster"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcloud container clusters create pyrsia-staging --logging=SYSTEM,API_SERVER --num-nodes=3 --enable-autoupgrade --machine-type=e2-standard-2 --region=us-central1 --preemptible --service-account=prysia-k8s@pyrsia-sandbox.iam.gserviceaccount.com")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Set kubectl config access"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcloud container clusters get-credentials pyrsia-staging --zone=us-central1-c")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create Kubernetes Namespaces"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create namespace pyrsia-node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kubectl create namespace external-dns")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create DNS Zone"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcloud dns managed-zones create pyrsia-link --project pyrsia-sandbox --description pyrsia.link --dns-name=pyrsia.link. --visibility=public")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Print list of name servers"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcloud dns record-sets list --project pyrsia-sandbox --zone pyrsia-link --name \"pyrsia.link.\" --type NS --format \"value(rrdatas)\" | tr ';' '\\n'")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create round robin DNS name"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'gcloud dns --project=pyrsia-sandbox record-sets create boot.staging.pyrsia.link. --zone="pyrsia-link" --type="CNAME" --ttl="300" --routing-policy-type="WRR" --routing-policy-data="50.0=pyrsia-node-0.staging.pyrsia.link."')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add DNS Admin to Service Account\n",(0,i.kt)("inlineCode",{parentName:"p"},"gcloud projects add-iam-policy-binding pyrsia-sandbox --member serviceAccount:prysia-k8s@pyrsia-sandbox.iam.gserviceaccount.com --role roles/dns.admin"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Generate Pyrsia Keys using openssl v3"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"/usr/local/Cellar/openssl@3/3.0.7/bin/openssl genpkey -algorithm Ed25519 -out ed25519.pem\n/usr/local/Cellar/openssl@3/3.0.7/bin/openssl pkey -in ed25519.pem -pubout -outform DER | tail -c +13 > id_ed25519.pub\n/usr/local/Cellar/openssl@3/3.0.7/bin/openssl pkey -in ed25519.pem -out - -outform DER | tail -c +17 > id_ed25519.pri\ncat id_ed25519.pri id_ed25519.pub > ed25519.ser\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Deploy Pyrsia via Helm"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"helm repo update pyrsia-nightly"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'helm upgrade node1 --install -n pyrsia-node pyrsia-nightly/pyrsia-node --set k8s_provider=gke --set "dnsname=staging.pyrsia.link" --set bootdns=boot.staging.pyrsia.link --set keys.p2p=$(cat ed25519.ser | base64) --set keys.blockchain=$(cat ed25519.ser | base64) --version "0.2.4+2856')),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note: The above helm command does not setup the Pyrsia Node to use a Build Node.  ",(0,i.kt)("inlineCode",{parentName:"p"},'--set "buildnode=http://35.193.148.20:8080"')," parameter is needed for build node configuraion.")))))))}d.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);