import{i as _,Z as h,r as c,c as f,w as a,o as b,a as s,f as e,h as r}from"./app-3cfb9ddb.js";import{L as B}from"./main-fd3f050e.js";import{P as x}from"./page-header-c76b7ffd.js";import{C as P}from"./card-header-cc01c0c6.js";import{_ as w}from"./_plugin-vue_export-helper-c27b6911.js";import"./simplebar-vue.esm-3378fd5d.js";import"./logo-sm-eae269a3.js";import"./logo-dark-24ab6998.js";import"./logo-light-01b48412.js";import"./avatar-2-4823f2b4.js";import"./avatar-3-cd4bfcf0.js";import"./avatar-5-577750b4.js";import"./russia-3c30e48e.js";import"./avatar-8-a9f045da.js";import"./avatar-6-c2396ad9.js";import"./prism-a4be18ec.js";const y={components:{Layout:B,PageHeader:x,CardHeader:P,Link:_,Head:h}},k=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"BProgress"),r(" tag to show default progress. ")],-1),C={class:"live-preview"},U=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[r(""),e("code",null,`<!-- Base Examples -->
    <BProgress :value="0" class="mb-4"></BProgress>

    <BProgress :value="25" class="mb-4"></BProgress>

    <BProgress :value="50" class="mb-4"></BProgress>

    <BProgress :value="75" class="mb-4"></BProgress>
    
    <BProgress :value="100">
`)])],-1),S=e("p",{class:"text-muted"},[r(" Use "),e("code",null,'variant=""'),r(" in progress bar class with the below-mentioned color variation to set the background color progress bar. ")],-1),H={class:"live-preview"},L=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[r(""),e("code",null,`<!-- Backgrounds -->
    <BProgress :value="15" variant="primary" class="mb-4"></BProgress>

    <BProgress :value="25" variant="success" class="mb-4"></BProgress>

    <BProgress :value="50" variant="info" class="mb-4"></BProgress>

    <BProgress :value="75" variant="warning" class="mb-4"></BProgress>

    <BProgress :value="100" variant="danger" class="mb-4"></BProgress>

    `)])],-1),z=e("p",{class:"text-muted"}," Add labels to your progress bars by placing text within the progress-bar. ",-1),A={class:"live-preview"},E=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`<!-- Labels Example -->
    <BProgress :value="25" variant="primary" class="mb-4" show-value ></BProgress>
`)])],-1),$=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"bg-"),r(" class to progress bar class with the below-mentioned color to change the appearance of individual progress bars. ")],-1),N={class:"live-preview"},V=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`<!-- Multiple Bars -->
<BProgress>
    <BProgress-bar :value="15" variant="primary" />
    <BProgress-bar :value="30" variant="success" />
    <BProgress-bar :value="20" variant="info" />
</BProgress>`)])],-1),D=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"progress-sm"),r(", "),e("code",null,"progress-lg"),r(", or "),e("code",null,"progress-xl"),r(" class to set the different heights of progress. ")],-1),M={class:"live-preview"},R={class:"mb-4"},T=e("h5",{class:"fs-13"},"Small Progress",-1),G={class:"mb-4"},I=e("h5",{class:"fs-13"},"Default Progress",-1),Z={class:"mb-4"},j=e("h5",{class:"fs-13"},"Large Progress",-1),q=e("h5",{class:"fs-13"},"Extra Large Progress",-1),F=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[r(""),e("code",null,`<!-- Prgress sm -->
    <BProgress :value="25" class="progress-sm" variant="primary"></BProgress>

    <BProgress :value="40" variant="success"></BProgress>

    <BProgress :value="50" class="progress-lg" variant="warning"></BProgress>

    <BProgress :value="70" class="progress-xl" variant="danger"></BProgress>
`)])],-1),J=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"progress-bar-striped"),r(" class to add strip to the progress. ")],-1),K={class:"live-preview"},O=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`<!-- Striped Prgress -->
    <BProgress striped :value="25" variant="primary"></BProgress>

    <BProgress striped :value="40" variant="success"></BProgress>
`)])],-1),Q=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"progress-bar-striped progress-bar-animated"),r(" class to add strip with animation to the progress. ")],-1),W={class:"live-preview"},X=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,'<BProgress striped animated :value="75" variant="primary"></BProgress>')])],-1),Y=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"bg-gradient"),r(" class to show gradient progress bar. ")],-1),ss={class:"live-preview"},es=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`
<BProgress :value="15"  class="bg-gradient" variant="primary"></BProgress>

<BProgress :value="25"  class="bg-gradient" variant="success"></BProgress>

<BProgress :value="50"  class="bg-gradient" variant="info"></BProgress>

<BProgress :value="75"  class="bg-gradient" variant="warning"></BProgress>

<BProgress :value="100" class="bg-gradient"  variant="danger"></BProgress>
    `)])],-1),as=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"animated-progess"),r(" class to show progress with animation. ")],-1),rs={class:"live-preview"},ts=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`
<BProgress animated :value="15" variant="primary"></BProgress>

<BProgress animated :value="25" variant="success"></BProgress>

<BProgress animated :value="50" variant="info"></BProgress>

<BProgress animated :value="75" variant="warning"></BProgress>

<BProgress animated :value="100" variant="danger"></BProgress>
`)])],-1),ls=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"animated-progess custom-progess"),r(" class to show custom progress with animation. ")],-1),os={class:"live-preview"},ns=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`
<BProgress animated :value="15" class="custom-progress mb-4" variant="primary"></BProgress>

<BProgress animated :value="25" class="custom-progress mb-4" variant="success"></BProgress>

<BProgress animated :value="50" class="custom-progress mb-4" variant="info"></BProgress>

<BProgress animated :value="75" class="custom-progress mb-4" variant="warning"></BProgress>

<BProgress animated :value="100" class="custom-progress" variant="danger"></BProgress>
`)])],-1),is=e("p",{class:"text-muted"},[r(" Use "),e("code",null,"animated-progess custom-progess progress-label"),r(" class to show custom progress with animation and label. ")],-1),ds={class:"live-preview"},cs={class:"d-flex align-items-center pb-2 mt-4"},us=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-facebook"})])])],-1),gs={class:"flex-grow-1"},vs=e("div",{class:"label"},"15%",-1),ps={class:"d-flex align-items-center py-2"},ms=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-twitter"})])])],-1),_s={class:"flex-grow-1"},hs=e("div",{class:"label"},"25%",-1),fs={class:"d-flex align-items-center py-2"},bs=e("div",{class:"flex-shrink-0 me-3"},[e("div",{class:"avatar-xs"},[e("div",{class:"avatar-title bg-light rounded-circle text-muted fs-16"},[e("i",{class:"mdi mdi-github"})])])],-1),Bs={class:"flex-grow-1"},xs=e("div",{class:"label"},"30%",-1),Ps=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[r(""),e("code",null,`<div class="d-flex align-items-center pb-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-facebook"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="15" class="custom-progress progress-label" variant="primary">15%</BProgress>
    </div>
</div>`),r(`

`),e("code",null,`<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-twitter"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="25" class="custom-progress progress-label" variant="success">25%</BProgress>
    </div>
</div>`),r(`

`),e("code",null,`<div class="d-flex align-items-center py-2">
    <div class="flex-shrink-0 me-3">
        <div class="avatar-xs">
            <div class="avatar-title bg-light rounded-circle text-muted fs-16">
                <i class="mdi mdi-github"></i>
            </div>
        </div>
    </div>
    <div class="flex-grow-1">
<BProgress animated :value="50" class="custom-progress progress-label" variant="info">50%</BProgress>
    </div>
</div>`)])],-1),ws=e("p",{class:"text-muted pb-2"}," Example of progress with content wrapped in progress. ",-1),ys={class:"live-preview"},ks=e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-secondary"},"30%"),r(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"1 min left")])],-1),Cs=e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-success"},"60%"),r(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"45s left")])],-1),Us=e("div",{class:"d-flex"},[e("div",{class:"flex-grow-1"},[e("h6",{class:"mb-0"},[e("b",{class:"text-danger"},"82%"),r(" Update in progress... ")])]),e("div",{class:"flex-shrink-0"},[e("h6",{class:"mb-0"},"25s left")])],-1),Ss=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup",style:{"max-height":"275px"}},[r(""),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-secondary">30%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">1 min left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="30" class="custom-progress bg-secondary-subtle rounded-0" variant="secondary"></BProgress>
</BCard>`),r(`

`),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-success">60%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">45s left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="60" class="custom-progress bg-success-subtle rounded-0" variant="success"></BProgress>
</BCard>`),r(`

`),e("code",null,`<BCard class="bg-light overflow-hidden">
    <BCard no-body>
        <div class="d-flex">
            <div class="flex-grow-1">
                <h6 class="mb-0"><b class="text-danger">82%</b> Update in progress...</h6>
            </div>
            <div class="flex-shrink-0">
                <h6 class="mb-0">25s left</h6>
            </div>
        </div>
    </BCard>
<BProgress :value="82" class="custom-progress bg-danger-subtle rounded-0" variant="danger"></BProgress>
</BCard>`)])],-1),Hs=e("p",{class:"text-muted pb-2"}," Here is the example of progress which is represented by steps completion. ",-1),Ls={class:"live-preview"},zs={class:"position-relative m-4"},As=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`<div class="position-relative m-4">
    <div class="progress" style="height: 1px;">
        <div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <BButton size="sm" variant="primary" class="position-absolute top-0 start-0 translate-middle rounded-pill" style="width: 2rem; height:2rem;">1</BButton>
    <BButton size="sm" variant="primary" class="position-absolute top-0 start-50 translate-middle rounded-pill" style="width: 2rem; height:2rem;">2</BButton>
    <BButton size="sm" variant="light" class="position-absolute top-0 start-100 translate-middlerounded-pill" style="width: 2rem; height:2rem;">3</BButton>
</div>`)])],-1),Es=e("p",{class:"text-muted pb-2"},[r(" Use "),e("code",null,"progress-step-arrow"),r(" class to create step progress with an arrow. ")],-1),$s={class:"live-preview"},Ns=e("div",{class:"d-none code-view"},[e("pre",{class:"language-markup"},[r(""),e("code",null,`
<BProgress class="progress-step-arrow progress-info">
    <BProgress :value="33" variant="primary" >Step 1 <BProgress >
    <BProgress :value="33" variant="primary" >Step 2 <BProgress >
    <BProgress :value="33" variant="light" >Step 3 <BProgress >
</BProgress>
    `)])],-1);function Vs(Ds,Ms,Rs,Ts,Gs,Is){const v=c("Head"),p=c("PageHeader"),i=c("CardHeader"),t=c("BProgress"),o=c("BCardBody"),n=c("BCard"),d=c("BCol"),u=c("BRow"),l=c("BProgress-bar"),g=c("BButton"),m=c("Layout");return b(),f(m,null,{default:a(()=>[s(v,{title:"Progress"}),s(p,{title:"Progress",pageTitle:"Base UI"}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Default Progress"}),s(o,null,{default:a(()=>[k,e("div",C,[s(t,{variant:"primary",class:"mb-4",value:0}),s(t,{variant:"primary",class:"mb-4",value:25}),s(t,{variant:"primary",class:"mb-4",value:50}),s(t,{variant:"primary",class:"mb-4",value:75}),s(t,{variant:"primary",value:100})]),U]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:" Progress with background color "}),s(o,null,{default:a(()=>[S,e("div",H,[s(t,{value:15,variant:"primary",class:"mb-4"}),s(t,{value:25,variant:"success",class:"mb-4"}),s(t,{value:50,variant:"info",class:"mb-4"}),s(t,{value:75,variant:"warning",class:"mb-4"}),s(t,{value:100,variant:"danger"})]),L]),_:1})]),_:1})]),_:1})]),_:1}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Progress with Label"}),s(o,null,{default:a(()=>[z,e("div",A,[s(t,{value:25,variant:"primary",class:"mb-4","show-value":""})]),E]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Multiple Bars"}),s(o,null,{default:a(()=>[$,e("div",N,[s(t,null,{default:a(()=>[s(l,{value:15,variant:"primary"}),s(l,{value:30,variant:"success"}),s(l,{value:20,variant:"info"})]),_:1})]),V]),_:1})]),_:1})]),_:1})]),_:1}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Height"}),s(o,null,{default:a(()=>[D,e("div",M,[e("div",R,[T,s(t,{value:25,class:"progress-sm",variant:"primary"})]),e("div",G,[I,s(t,{value:40,variant:"success"})]),e("div",Z,[j,s(t,{value:50,class:"progress-lg",variant:"warning"})]),e("div",null,[q,s(t,{value:70,class:"progress-xl",variant:"danger"})])]),F]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Striped Progress"}),s(o,null,{default:a(()=>[J,e("div",K,[s(t,{striped:"",value:25,class:"mb-4",variant:"primary"}),s(t,{striped:"",value:40,variant:"success"})]),O]),_:1})]),_:1}),s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Animated Striped Progress"}),s(o,null,{default:a(()=>[Q,e("div",W,[s(t,{striped:"",animated:"",value:75,variant:"primary"})]),X]),_:1})]),_:1})]),_:1})]),_:1}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Gradient Progress"}),s(o,null,{default:a(()=>[Y,e("div",ss,[s(t,{class:"mb-4"},{default:a(()=>[s(l,{value:15,variant:"primary",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:a(()=>[s(l,{value:25,variant:"success",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:a(()=>[s(l,{value:50,variant:"info",class:"bg-gradient"})]),_:1}),s(t,{class:"mb-4"},{default:a(()=>[s(l,{value:75,variant:"warning",class:"bg-gradient"})]),_:1}),s(t,null,{default:a(()=>[s(l,{value:100,variant:"danger",class:"bg-gradient"})]),_:1})]),es]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Animated Progress"}),s(o,null,{default:a(()=>[as,e("div",rs,[s(t,{class:"animated-progress mb-4"},{default:a(()=>[s(l,{value:15,variant:"primary"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:a(()=>[s(l,{value:25,variant:"success"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:a(()=>[s(l,{value:50,variant:"info"})]),_:1}),s(t,{class:"animated-progress mb-4"},{default:a(()=>[s(l,{value:75,variant:"warning"})]),_:1}),s(t,{class:"animated-progress"},{default:a(()=>[s(l,{value:100,variant:"danger"})]),_:1})]),ts]),_:1})]),_:1})]),_:1})]),_:1}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Custom Progress"}),s(o,null,{default:a(()=>[ls,e("div",os,[s(t,{class:"animated-progress custom-progress mb-4"},{default:a(()=>[s(l,{value:15,variant:"primary"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:a(()=>[s(l,{value:25,variant:"success"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:a(()=>[s(l,{value:50,variant:"info"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:a(()=>[s(l,{value:75,variant:"warning"})]),_:1}),s(t,{class:"animated-progress custom-progress mb-4"},{default:a(()=>[s(l,{value:100,variant:"danger"})]),_:1})]),ns]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Custom Progress with Label"}),s(o,null,{default:a(()=>[is,e("div",ds,[e("div",cs,[us,e("div",gs,[s(t,{class:"animated-progress custom-progress progress-label"},{default:a(()=>[s(l,{value:15,variant:"primary"},{default:a(()=>[vs]),_:1})]),_:1})])]),e("div",ps,[ms,e("div",_s,[s(t,{class:"animated-progress custom-progress progress-label"},{default:a(()=>[s(l,{value:25,variant:"success"},{default:a(()=>[hs]),_:1})]),_:1})])]),e("div",fs,[bs,e("div",Bs,[s(t,{class:"animated-progress custom-progress progress-label"},{default:a(()=>[s(l,{value:30,variant:"info"},{default:a(()=>[xs]),_:1})]),_:1})])])]),Ps]),_:1})]),_:1})]),_:1})]),_:1}),s(u,null,{default:a(()=>[s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Content Progress"}),s(o,null,{default:a(()=>[ws,e("div",ys,[s(n,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:a(()=>[s(o,null,{default:a(()=>[ks]),_:1}),s(t,{class:"bg-secondary-subtle rounded-0"},{default:a(()=>[s(l,{value:30,variant:"secondary"})]),_:1})]),_:1}),s(n,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:a(()=>[s(o,null,{default:a(()=>[Cs]),_:1}),s(t,{class:"bg-success-subtle rounded-0"},{default:a(()=>[s(l,{value:60,variant:"success"})]),_:1})]),_:1}),s(n,{"no-body":"",class:"bg-light overflow-hidden shadow-none"},{default:a(()=>[s(o,null,{default:a(()=>[Us]),_:1}),s(t,{class:"bg-danger-subtle rounded-0"},{default:a(()=>[s(l,{value:82,variant:"danger"})]),_:1})]),_:1})]),Ss]),_:1})]),_:1})]),_:1}),s(d,{xxl:"6"},{default:a(()=>[s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Progress with Steps"}),s(o,null,{default:a(()=>[Hs,e("div",Ls,[e("div",zs,[s(t,{style:{"max-height":"1px"}},{default:a(()=>[s(l,{value:50,variant:"primary"})]),_:1}),s(g,{pill:"",variant:"primary",size:"sm",type:"button",class:"position-absolute top-0 start-0 translate-middle",style:{width:"2rem",height:"2rem"}},{default:a(()=>[r(" 1 ")]),_:1}),s(g,{pill:"",variant:"primary",size:"sm",type:"button",class:"position-absolute top-0 start-50 translate-middle",style:{width:"2rem",height:"2rem"}},{default:a(()=>[r(" 2 ")]),_:1}),s(g,{pill:"",variant:"light",size:"sm",type:"button",class:"position-absolute top-0 start-100 translate-middle",style:{width:"2rem",height:"2rem"}},{default:a(()=>[r(" 3 ")]),_:1})])]),As]),_:1})]),_:1}),s(n,{"no-body":""},{default:a(()=>[s(i,{title:"Step Progress with Arrow"}),s(o,null,{default:a(()=>[Es,e("div",$s,[s(t,{class:"progress-step-arrow progress-info"},{default:a(()=>[s(l,{value:100},{default:a(()=>[r(" Step 1 ")]),_:1}),s(l,{value:100},{default:a(()=>[r(" Step 2 ")]),_:1}),s(l,{value:100,variant:"light",class:"text-body"},{default:a(()=>[r(" Step 3 ")]),_:1})]),_:1})]),Ns]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const le=w(y,[["render",Vs]]);export{le as default};
