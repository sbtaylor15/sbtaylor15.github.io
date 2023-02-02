(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[6699],{55518:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(8209);const s={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/eks-setup.md"},i="AWS EKS Setup",l={unversionedId:"SRE/eks-setup",id:"SRE/eks-setup",title:"AWS EKS Setup",description:"1. Generate Access keys for CLI, SDK, & API access",source:"@site/docs/SRE/eks-setup.md",sourceDirName:"SRE",slug:"/SRE/eks-setup",permalink:"/docs/SRE/eks-setup",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/eks-setup.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/eks-setup.md"},sidebar:"tutorialSidebar",previous:{title:"Template",permalink:"/docs/community/rfc/sample_rfc"},next:{title:"Google GKE Setup",permalink:"/docs/SRE/gke-setup"}},o={},p=[],m={toc:p};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"aws-eks-setup"},"AWS EKS Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate Access keys for CLI, SDK, & API access"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/security_credentials"},"Create Access Key"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws configure"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS Access Key ID")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"AWS Secret Access Key")),(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("inlineCode",{parentName:"li"},"Default region name")))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html"},"Install eksctl"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nCLUSTER_NAME=pyrsia-staging\nEXTERNALDNS_NAMESPACE=external-dns\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia-aws.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nPYRSIA_NODE_ZERO=pyrsia-node-0.${PYRSIA_DOMAIN}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the Cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF | eksctl create cluster -f -\n---\napiVersion: eksctl.io/v1alpha5\nkind: ClusterConfig\nmetadata:\nname: ${CLUSTER_NAME}\nregion: us-east-1\ncloudWatch:\nclusterLogging:\n   enableTypes:\n      - audit\n      - authenticator\nmanagedNodeGroups:\n- name: ng-1\n   amiFamily: AmazonLinux2\n   instanceSelector:\n      cpuArchitecture: x86_64\n      memory: 2GiB\n      vCPUs: 2\n   instanceTypes:\n      - t3.small\n      - t3a.small\niam:\nwithOIDC: true\naddons:\n- name: aws-ebs-csi-driver\n   version: v1.13.0-eksbuild.3\n   attachPolicyARNs:\n      - arn:aws:iam::aws:policy/service-role/AmazonEBSCSIDriverPolicy\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Kubernetes Namespaces"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create namespace ${PYRSIA_NAMESPACE}")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kubectl create namespace ${EXTERNALDNS_NAMESPACE}")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create Route 53 Policy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{target:"_blank",href:a(50647).Z},"route53-policy.json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'aws iam create-policy --policy-name "AllowExternalDNSUpdates" --policy-document file://route53-policy.json')))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Attach Route 53 Policy"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws iam attach-role-policy --role-name $(aws eks describe-nodegroup --cluster-name ${CLUSTER_NAME} --nodegroup-name ng-1 --query nodegroup.nodeRole --out text | awk -F/ '{print $2}') --policy-arn $(aws iam list-policies --query 'Policies[?PolicyName=="),"AllowExternalDNSUpdates",(0,r.kt)("inlineCode",{parentName:"li"},"].Arn' --output text)")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setup Route 53 Domain"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'aws route53 create-hosted-zone --name "${PYRSIA_BASE_DOMAIN}." --caller-reference "external-dns-$(date +%s)"')))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get DNS Server List"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"aws route53 list-resource-record-sets --output text --hosted-zone-id $(aws route53 list-hosted-zones-by-name --output json --dns-name \"${PYRSIA_BASE_DOMAIN}.\" | jq -r \".HostedZones[0].Id\") --query \"ResourceRecordSets[?Type == 'NS'].ResourceRecords[*].Value | []\" | tr '\\t' '\\n'")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate Pyrsia Keys using openssl v3"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genpkey -algorithm Ed25519 -out ed25519.pem\nopenssl pkey -in ed25519.pem -pubout -outform DER | tail -c +13 > id_ed25519.pub\nopenssl pkey -in ed25519.pem -out - -outform DER | tail -c +17 > id_ed25519.pri\ncat id_ed25519.pri id_ed25519.pub > ed25519.ser\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create DNS Alias"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\naws route53 change-resource-record-sets \\\n--hosted-zone-id $(aws route53 list-hosted-zones-by-name --output json --dns-name "${PYRSIA_BASE_DOMAIN}." | jq -r ".HostedZones[0].Id" | cut -d/ -f3) \\\n--change-batch \'\n{\n   "Comment": "Creating Alias resource for \'${PYRSIA_BOOTDNS}\'",\n   "Changes": [\n      {\n         "Action": "CREATE",\n         "ResourceRecordSet": {\n         "Name": "\'${PYRSIA_BOOTDNS}\'",\n         "Type": "A",\n         "AliasTarget": {\n            "DNSName": "\'${PYRSIA_NODE_ZERO}\'",\n            "EvaluateTargetHealth": false,\n            "HostedZoneId": "\'$(aws route53 list-hosted-zones-by-name --output json --dns-name "${PYRSIA_BASE_DOMAIN}}." | jq -r ".HostedZones[0].Id" | cut -d/ -f3 )\'"\n         }\n         }\n      }\n   ]\n}\'\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy Pyrsia via Helm"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"helm repo update pyrsia-nightly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'helm upgrade node1 --install -n pyrsia-node pyrsia-staging/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set bootdns=${PYRSIA_BOOTDNS} --set keys.p2p=$(cat ed25519.ser | base64) --set keys.blockchain=$(cat ed25519.ser | base64)  --version "${CHART_VERSION}"')),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Note: The above helm command does not setup the Pyrsia Node to use a Build Node.  ",(0,r.kt)("inlineCode",{parentName:"p"},'--set "buildnode=http://35.193.148.20:8080"')," parameter is needed for build node configuration.")))))}u.isMDXComponent=!0},50647:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/files/route53-policy-166c51b2aaa00a54953285bca3785684.json"},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=11748}}]);