(self.webpackChunkpyrsia=self.webpackChunkpyrsia||[]).push([[5830],{56610:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));a(8209);const l={custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/kubernetes-helm.md"},i="Managing Pyrsia on Kubernetes",s={unversionedId:"SRE/kubernetes-helm",id:"SRE/kubernetes-helm",title:"Managing Pyrsia on Kubernetes",description:"Prerequisites",source:"@site/docs/SRE/kubernetes-helm.md",sourceDirName:"SRE",slug:"/SRE/kubernetes-helm",permalink:"/docs/SRE/kubernetes-helm",draft:!1,editUrl:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/kubernetes-helm.md",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/pyrsia/pyrsia/blob/main/docs/SRE/kubernetes-helm.md"},sidebar:"tutorialSidebar",previous:{title:"Google GKE Setup",permalink:"/docs/SRE/gke-setup"}},p={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"GKE - Google",id:"gke---google",level:3},{value:"EKS - Amazon",id:"eks---amazon",level:3},{value:"Interacting with the clusters",id:"interacting-with-the-clusters",level:2},{value:"Using helm to deploy for first time to a cluster",id:"using-helm-to-deploy-for-first-time-to-a-cluster",level:2},{value:"Using helm to deploy updates",id:"using-helm-to-deploy-updates",level:2},{value:"Other helm commands",id:"other-helm-commands",level:2},{value:"Cheatsheets",id:"cheatsheets",level:2}],m={toc:o};function N(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managing-pyrsia-on-kubernetes"},"Managing Pyrsia on Kubernetes"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"gke---google"},"GKE - Google"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/install-sdk"},"Install gcloud"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set your gcloud config"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-toml"},"[compute]\nzone = us-central1-c\n[container]\ncluster = pyrsia-cluster-1\n[core]\ndisable_usage_reporting = False\nproject = pyrsia-sandbox\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_kubectl"},"Install kubectl"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl#install_plugin"},"Intall GKE Auth Plugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/gcloud/reference/container/clusters/get-credentials"},"Configure Access to Cluster")," - pyrsia-nighty (has spelling mistake) or pyrsia-cluster-1"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud container clusters get-credentials <CLUSTER_NAME> -z <ZONE>\n# e.g.\ngcloud container clusters get-credentials pyrsia-nighty -z us-central1-c\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm")))),(0,r.kt)("h3",{id:"eks---amazon"},"EKS - Amazon"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions"},"Install aws-cli"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/"},"Install kubectl"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/reference/eks/update-kubeconfig.html"},"Configure Access to Cluster")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws eks update-kubeconfig --name <CLUSTER_NAME>\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/install/"},"Install Helm")))),(0,r.kt)("h2",{id:"interacting-with-the-clusters"},"Interacting with the clusters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Command"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List current cluster connection"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl config view --minify -o jsonpath='{.clusters[].name}'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List current contexts"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl config get-contexts"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Switch to another cluster"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl config use-context <context name>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List running pods"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl get pods -n pyrsia-node"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"List public ip assigned to pods"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl get svc -n pyrsia-node"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get logs for pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl logs -n pyrsia-node pyrsia-node-0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"ssh" to pod'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl exec -it -n pyrsia-node pyrsia-node-0 -- bash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"reboot" a pod'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl delete pod -n pyrsia-node pyrsia-node-0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get image tag for a pod"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl describe pod -n pyrsia-node pyrsia-node-0"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Get ingress details"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"kubectl describe svc -n pyrsia-node pyrsia-node-0"))))),(0,r.kt)("h2",{id:"using-helm-to-deploy-for-first-time-to-a-cluster"},"Using helm to deploy for first time to a cluster"),(0,r.kt)("p",null,"The helm charts are automatically published by the Github Actions to the ",(0,r.kt)("a",{parentName:"p",href:"http://helmrepo.pyrsia.io"},"http://helmrepo.pyrsia.io")," site. ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io"},"ArtifactHub")," pulls in chart updates every half hour."),(0,r.kt)("p",null,"Details about the Chart Values and Installation steps are documented in the chart's ReadMe.  ArtifactHub renders the ReadMe on the ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/pyrsia-nightly/pyrsia-node"},"Prysia Package")," site."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the remote repo location to helm\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo add pyrsia-nightly https://helmrepo.pyrsia.io/repos/nightly/"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fetch the latest charts\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo update"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set you cluster connection\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config use-context <context name>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain the Key Pairs from Last Pass"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"staging_gke_ed25519.pem"),(0,r.kt)("li",{parentName:"ul"},"staging_eks_ed25519.pem"),(0,r.kt)("li",{parentName:"ul"},"prod_gke_ed25519.pem"),(0,r.kt)("li",{parentName:"ul"},"prod_eks_ed25519.pem"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deployment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for GKE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1_pyrsia-staging\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nPYRSIA_KEYPAIR=staging_gke_ed25519\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for EKS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-staging.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia-aws.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nPYRSIA_KEYPAIR=staging_eks_ed25519.ser\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node  --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for GKE from branch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1_pyrsia-staging\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nPYRSIA_KEYPAIR=staging_gke_ed25519\nIMAGE_REPO=mydockerrepo/pyrsia\nIMAGE_TAG=1.0\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy\nFrom the root of your Pyrsia repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker login\ndocker build --tag ${IMAGE_REPO}:${IMAGE_TAG}\ndocker push ${IMAGE_REPO}:${IMAGE_TAG}\n\nPATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}" --set "image.repository=${IMAGE_REPO}" --set "image.tag=${IMAGE_TAG}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for EKS from branch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-staging.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nPYRSIA_KEYPAIR=staging_eks_ed25519\nIMAGE_REPO=mydockerrepo/pyrsia\nIMAGE_TAG=1.0\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("p",{parentName:"li"},"  From the root of your Pyrsia repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker login\ndocker build --tag ${IMAGE_REPO}:${IMAGE_TAG}\ndocker push ${IMAGE_REPO}:${IMAGE_TAG}\n\nPATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}" --set "image.repository=${IMAGE_REPO}" --set "image.tag=${IMAGE_TAG}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Production for GKE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1-c_pyrsia-cluster-1\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_KEYPAIR=prod_gke_ed25519\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm upgrade --install node1 -n ${PYRSIA_NAMESPACE} pyrsia-nightly/pyrsia-node --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Production for EKS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-prod.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_KEYPAIR=prod_eks_ed25519\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'PATH=/usr/local/Cellar/openssl@3/3.0.7/bin:$PATH\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -out - -outform DER | tail -c +17 > ${PYRSIA_KEYPAIR}.ser\nopenssl pkey -in ${PYRSIA_KEYPAIR}.pem -pubout -outform DER | tail -c +13 >> ${PYRSIA_KEYPAIR}.ser\n\nhelm upgrade --install node1 -n ${PYRSIA_NAMESPACE} pyrsia-nightly/pyrsia-node --set keys.p2p=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --set keys.blockchain=$(cat ${PYRSIA_KEYPAIR}.ser | base64) --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --version "${BUILD_CHART_VERSION}"\n')))))))),(0,r.kt)("h2",{id:"using-helm-to-deploy-updates"},"Using helm to deploy updates"),(0,r.kt)("p",null,"The helm charts are automatically published by the Github Actions to the ",(0,r.kt)("a",{parentName:"p",href:"http://helmrepo.pyrsia.io"},"http://helmrepo.pyrsia.io")," site. ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io"},"ArtifactHub")," pulls in chart updates every half hour."),(0,r.kt)("p",null,"Details about the Chart Values and Installation steps are documented in the chart's ReadMe.  ArtifactHub renders the ReadMe on the ",(0,r.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/pyrsia-nightly/pyrsia-node"},"Prysia Package")," site."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the remote repo location to helm\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo add pyrsia-nightly https://helmrepo.pyrsia.io/repos/nightly/"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fetch the latest charts\n",(0,r.kt)("inlineCode",{parentName:"p"},"helm repo update"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set you cluster connection\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl config use-context <context name>"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deployment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for GKE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1_pyrsia-staging\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for EKS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-staging.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia-aws.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node  --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for GKE from branch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1_pyrsia-staging\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nIMAGE_REPO=mydockerrepo/pyrsia\nIMAGE_TAG=1.0\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("p",{parentName:"li"},"  From the root of your Pyrsia repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker login\ndocker build --tag ${IMAGE_REPO}:${IMAGE_TAG}\ndocker push ${IMAGE_REPO}:${IMAGE_TAG}\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --version "${CHART_VERSION}" --set "image.repository=${IMAGE_REPO}" --set "image.tag=${IMAGE_TAG}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Staging for EKS from branch"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-staging.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\nPYRSIA_BASE_DOMAIN=pyrsia.link\nPYRSIA_DOMAIN=staging.${PYRSIA_BASE_DOMAIN}\nPYRSIA_BOOTDNS=boot.${PYRSIA_DOMAIN}\nIMAGE_REPO=mydockerrepo/pyrsia\nIMAGE_TAG=1.0\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("p",{parentName:"li"},"  From the root of your Pyrsia repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'docker login\ndocker build --tag ${IMAGE_REPO}:${IMAGE_TAG}\ndocker push ${IMAGE_REPO}:${IMAGE_TAG}\n\nhelm config use-context ${CLUSTER_CONFIG}\nhelm upgrade --install node1 -n "${PYRSIA_NAMESPACE}" pyrsia-nightly/pyrsia-node --set "domain=${PYRSIA_DOMAIN}" --set "bootdns=${PYRSIA_BOOTDNS}" --version "${CHART_VERSION}" --set "image.repository=${IMAGE_REPO}" --set "image.tag=${IMAGE_TAG}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --set "bootdns=${PYRSIA_BOOTDNS}" --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Production for GKE"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=gke_pyrsia-sandbox_us-central1-c_pyrsia-cluster-1\nPYRSIA_NAMESPACE=pyrsia-node\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade --install node1 -n ${PYRSIA_NAMESPACE} pyrsia-nightly/pyrsia-node --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --version "${BUILD_CHART_VERSION}"\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Production for EKS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Setup Environment Variables"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"CHART_VERSION=0.2.4+2856\nBUILD_CHART_VERSION=0.1.0+7\nCLUSTER_CONFIG=sbtaylor@pyrsia-prod.us-east-1.eksctl.io\nPYRSIA_NAMESPACE=pyrsia-node\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Deploy"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'helm upgrade --install node1 -n ${PYRSIA_NAMESPACE} pyrsia-nightly/pyrsia-node --version "${CHART_VERSION}"\nhelm upgrade build1 --install -n pyrsia-node pyrsia-nightly/pyrsia-build-service --version "${BUILD_CHART_VERSION}"\n')))))))),(0,r.kt)("p",null,"Verify the deployments using ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," commands."),(0,r.kt)("h2",{id:"other-helm-commands"},"Other helm commands"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"List Deployments"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"helm list"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete Deployment"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("inlineCode",{parentName:"p"},"helm delete -n pyrsia-node node1")))),(0,r.kt)("h2",{id:"cheatsheets"},"Cheatsheets"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/reference/kubectl/cheatsheet/#viewing-finding-resources"},"kubectl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://phoenixnap.com/kb/helm-commands-cheat-sheet"},"helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/cheatsheet"},"gcloud"))))}N.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=11748}}]);