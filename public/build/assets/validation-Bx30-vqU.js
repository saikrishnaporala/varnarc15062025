import{Z as F,j as B,r as s,c as w,o as P,w as a,a as e,g as o,f as i}from"./app-BEcxhe1F.js";import{L as U}from"./main-CwPkRMAI.js";import{P as S}from"./page-header-CyCrLvcG.js";import{C as D}from"./card-header-Bnt1DXbb.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./helpers-BAXWLZRz.js";import"./simplebar-vue.esm-BqoehdNS.js";import"./logo-sm-Du8Of0Sj.js";import"./logo-dark-Dh5pZxEJ.js";import"./logo-light-DJkTuO8P.js";import"./avatar-2-86M8S3El.js";import"./avatar-3-C_5WlMir.js";import"./avatar-5-DXW8GA-H.js";import"./russia-DqU8AKV7.js";import"./avatar-8-DqJ4kEa5.js";import"./avatar-6-Bb_p0Nhs.js";import"./bell-Dwr83Hdp.js";import"./prism-DEqZvgma.js";const N={data(){return{firstName:"Mark",lastName:"Otto",username:"",city:"",state:null,zip:"",agreedToTerms:!1,onSubmit:!1,customValidation:!1}},methods:{submitTooltipForm(){this.onSubmit=!0},submitCustomForm(){this.customValidation=!0}},components:{Layout:U,PageHeader:S,CardHeader:D,Link:B,Head:F}},O={class:"live-preview"},I={class:"row g-3"},z={class:"input-group"},G={class:"form-check d-flex"},H={class:"live-preview"},E={class:"live-preview"};function M(Z,l,A,J,t,y){const q=s("Head"),T=s("PageHeader"),m=s("CardHeader"),r=s("BFormInput"),n=s("BCol"),b=s("BFormSelect"),_=s("BFormCheckbox"),k=s("BButton"),v=s("BCardBody"),p=s("BCard"),f=s("BRow"),u=s("BFormInvalidFeedback"),c=s("BFormValidFeedback"),x=s("BInputGroupPrepend"),C=s("BInputGroup"),g=s("BForm"),V=s("Layout");return P(),w(V,null,{default:a(()=>[e(q,{title:"Form Validation"}),e(T,{title:"Form Validation",pageTitle:"Forms"}),e(f,null,{default:a(()=>[e(n,{lg:"12"},{default:a(()=>[e(p,{"no-body":""},{default:a(()=>[e(m,{title:"Browser defaults"}),e(v,null,{default:a(()=>[l[23]||(l[23]=o("p",{class:"text-muted"},"Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.",-1)),o("div",O,[o("form",I,[e(n,{md:"4"},{default:a(()=>[l[13]||(l[13]=o("label",{for:"validationDefault01",class:"form-label"},"First name",-1)),e(r,{type:"text",class:"form-control",id:"validationDefault01",value:"Mark",required:""})]),_:1,__:[13]}),e(n,{md:"4"},{default:a(()=>[l[14]||(l[14]=o("label",{for:"validationDefault02",class:"form-label"},"Last name",-1)),e(r,{type:"text",class:"form-control",id:"validationDefault02",value:"Otto",required:""})]),_:1,__:[14]}),e(n,{md:"4"},{default:a(()=>[l[16]||(l[16]=o("label",{for:"validationDefaultUsername",class:"form-label"},"Username",-1)),o("div",z,[l[15]||(l[15]=o("span",{class:"input-group-text",id:"inputGroupPrepend2"},"@",-1)),e(r,{type:"text",class:"form-control",id:"validationDefaultUsername","aria-describedby":"inputGroupPrepend2",required:""})])]),_:1,__:[16]}),e(n,{md:"6"},{default:a(()=>[l[17]||(l[17]=o("label",{for:"validationDefault03",class:"form-label"},"City",-1)),e(r,{type:"text",class:"form-control",id:"validationDefault03",required:""})]),_:1,__:[17]}),e(n,{md:"3"},{default:a(()=>[l[19]||(l[19]=o("label",{for:"validationDefault04",class:"form-label"},"State",-1)),e(b,{class:"form-select",id:"validationDefault04",required:""},{default:a(()=>l[18]||(l[18]=[o("option",{selected:"",disabled:"",value:""},"Choose...",-1),o("option",null,"...",-1)])),_:1,__:[18]})]),_:1,__:[19]}),e(n,{md:"3"},{default:a(()=>[l[20]||(l[20]=o("label",{for:"validationDefault05",class:"form-label"},"Zip",-1)),e(r,{type:"text",class:"form-control",id:"validationDefault05",required:""})]),_:1,__:[20]}),e(n,{cols:"12"},{default:a(()=>[o("div",G,[e(_,{class:"form-check-input",type:"checkbox",value:"",id:"invalidCheck2",required:""}),l[21]||(l[21]=o("label",{class:"form-check-label",for:"invalidCheck2"}," Agree to terms and conditions ",-1))])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(k,{variant:"primary",type:"submit"},{default:a(()=>l[22]||(l[22]=[i("Submit form")])),_:1,__:[22]})]),_:1})])]),l[24]||(l[24]=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup",style:{height:"352px"}},[i(""),o("code",null,`<form class="row g-3">
<div class="col-md-4">
<label for="validationDefault01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationDefault01" value="Mark" required />
</div>
<div class="col-md-4">
<label for="validationDefault02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationDefault02" value="Otto" required />
</div>
<div class="col-md-4">
<label for="validationDefaultUsername" class="form-label">Username</label>
<div class="input-group">
<span class="input-group-text" id="inputGroupPrepend2">@</span>
<input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
required />
</div>
</div>
<div class="col-md-6">
<label for="validationDefault03" class="form-label">City</label>
<input type="text" class="form-control" id="validationDefault03" required />
</div>
<div class="col-md-3">
<label for="validationDefault04" class="form-label">State</label>
<select class="form-select" id="validationDefault04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
</div>
<div class="col-md-3">
<label for="validationDefault05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationDefault05" required />
</div>
<div class="col-12">
<div class="form-check">
<BFormCheckbox class="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
<label class="form-check-label" for="invalidCheck2">
Agree to terms and conditions
</label>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1))]),_:1,__:[23,24]})]),_:1})]),_:1})]),_:1}),e(f,null,{default:a(()=>[e(n,{lg:"12"},{default:a(()=>[e(p,{"no-body":""},{default:a(()=>[e(m,{title:"Custom Styles"}),e(v,null,{default:a(()=>[l[44]||(l[44]=o("p",{class:"text-muted"},[i("For custom Bootstrap form validation messages, you’ll need to add the "),o("code",null,"novalidate"),i(" boolean attribute to your "),o("code",null,"<form>"),i(". This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you. When attempting to submit, you’ll see the "),o("code",null,":invalid"),i(" and "),o("code",null,":valid"),i(" styles applied to your form controls. ")],-1)),o("div",H,[e(g,{onSubmit:y.submitCustomForm,class:"row g-3",validated:t.customValidation,novalidate:!0},{default:a(()=>[e(n,{md:"4"},{default:a(()=>[l[27]||(l[27]=o("label",{for:"validationCustom01",class:"form-label"},"First name",-1)),e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[0]||(l[0]=d=>t.firstName=d),id:"validationCustom01",required:""},null,8,["modelValue"]),e(u,null,{default:a(()=>l[25]||(l[25]=[i("Please provide a valid first name.")])),_:1,__:[25]}),e(c,null,{default:a(()=>l[26]||(l[26]=[i("Looks good!")])),_:1,__:[26]})]),_:1,__:[27]}),e(n,{md:"4"},{default:a(()=>[l[30]||(l[30]=o("label",{for:"validationCustom02",class:"form-label"},"Last name",-1)),e(r,{modelValue:t.lastName,"onUpdate:modelValue":l[1]||(l[1]=d=>t.lastName=d),id:"validationCustom02",required:""},null,8,["modelValue"]),e(u,null,{default:a(()=>l[28]||(l[28]=[i("Please provide a valid last name.")])),_:1,__:[28]}),e(c,null,{default:a(()=>l[29]||(l[29]=[i("Looks good!")])),_:1,__:[29]})]),_:1,__:[30]}),e(n,{md:"4"},{default:a(()=>[l[33]||(l[33]=o("label",{for:"validationCustomUsername",class:"form-label"},"Username",-1)),e(C,null,{default:a(()=>[e(x,{"is-text":""},{default:a(()=>l[31]||(l[31]=[i("@")])),_:1,__:[31]}),e(r,{modelValue:t.username,"onUpdate:modelValue":l[2]||(l[2]=d=>t.username=d),id:"validationCustomUsername",required:""},null,8,["modelValue"]),e(u,null,{default:a(()=>l[32]||(l[32]=[i("Please choose a username.")])),_:1,__:[32]})]),_:1})]),_:1,__:[33]}),e(n,{md:"6"},{default:a(()=>[l[35]||(l[35]=o("label",{for:"validationCustom03",class:"form-label"},"City",-1)),e(r,{modelValue:t.city,"onUpdate:modelValue":l[3]||(l[3]=d=>t.city=d),id:"validationCustom03",required:""},null,8,["modelValue"]),e(u,null,{default:a(()=>l[34]||(l[34]=[i("Please provide a valid city.")])),_:1,__:[34]})]),_:1,__:[35]}),e(n,{md:"3"},{default:a(()=>[l[38]||(l[38]=o("label",{for:"validationCustom04",class:"form-label"},"State",-1)),e(b,{modelValue:t.state,"onUpdate:modelValue":l[4]||(l[4]=d=>t.state=d),id:"validationCustom04",required:""},{default:a(()=>l[36]||(l[36]=[o("option",{disabled:"",value:""},"Choose...",-1),o("option",null,"...",-1)])),_:1,__:[36]},8,["modelValue"]),e(u,null,{default:a(()=>l[37]||(l[37]=[i("Please select a valid state.")])),_:1,__:[37]})]),_:1,__:[38]}),e(n,{md:"3"},{default:a(()=>[l[40]||(l[40]=o("label",{for:"validationCustom05",class:"form-label"},"Zip",-1)),e(r,{modelValue:t.zip,"onUpdate:modelValue":l[5]||(l[5]=d=>t.zip=d),id:"validationCustom05",required:""},null,8,["modelValue"]),e(u,null,{default:a(()=>l[39]||(l[39]=[i("Please provide a valid zip.")])),_:1,__:[39]})]),_:1,__:[40]}),e(n,{cols:"12"},{default:a(()=>[e(_,{modelValue:t.agreedToTerms,"onUpdate:modelValue":l[6]||(l[6]=d=>t.agreedToTerms=d),id:"invalidCheck",required:""},{default:a(()=>l[41]||(l[41]=[i(" Agree to terms and conditions ")])),_:1,__:[41]},8,["modelValue"]),e(u,null,{default:a(()=>l[42]||(l[42]=[i("You must agree before submitting.")])),_:1,__:[42]})]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(k,{type:"submit",variant:"primary"},{default:a(()=>l[43]||(l[43]=[i("Submit form")])),_:1,__:[43]})]),_:1})]),_:1},8,["onSubmit","validated"])]),l[45]||(l[45]=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup"},[i(""),o("code",null,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4">
<label for="validationCustom01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationCustom01" value="Mark" required />
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustom02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationCustom02" value="Otto" required />
<div class="valid-feedback">
Looks good!
</div>
</div>
<div class="col-md-4">
<label for="validationCustomUsername" class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="inputGroupPrepend">@</span>
<input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
required />
<div class="invalid-feedback">
Please choose a username.
</div>
</div>
</div>
<div class="col-md-6">
<label for="validationCustom03" class="form-label">City</label>
<input type="text" class="form-control" id="validationCustom03" required />
<div class="invalid-feedback">
Please provide a valid city.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom04" class="form-label">State</label>
<select class="form-select" id="validationCustom04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-feedback">
Please select a valid state.
</div>
</div>
<div class="col-md-3">
<label for="validationCustom05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationCustom05" required />
<div class="invalid-feedback">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<div class="form-check">
<BFormCheckbox class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
<label class="form-check-label" for="invalidCheck">
Agree to terms and conditions
</label>
<div class="invalid-feedback">
You must agree before submitting.
</div>
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1))]),_:1,__:[44,45]})]),_:1})]),_:1}),e(f,null,{default:a(()=>[e(n,{lg:"12"},{default:a(()=>[e(p,{"no-body":""},{default:a(()=>[e(m,{title:"Supported Elements"}),e(v,null,{default:a(()=>l[46]||(l[46]=[o("p",{class:"text-muted"},[i("Block-level or inline-level form text can be created using "),o("code",null,".form-text"),i(". ")],-1),o("div",{class:"live-preview"},[o("form",{class:"was-validated"},[o("div",{class:"mb-3"},[o("label",{for:"validationTextarea",class:"form-label"},"Textarea"),o("textarea",{class:"form-control",id:"validationTextarea",placeholder:"Required example textarea",required:""}),o("div",{class:"invalid-feedback"}," Please enter a message in the textarea. ")]),o("div",{class:"form-check mb-3"},[o("input",{type:"checkbox",class:"form-check-input",id:"validationFormCheck1",required:""}),o("label",{class:"form-check-label",for:"validationFormCheck1"},"Check this checkbox"),o("div",{class:"invalid-feedback"},"Example invalid feedback text")]),o("div",{class:"form-check"},[o("input",{type:"radio",class:"form-check-input",id:"validationFormCheck2",name:"radio-stacked",required:""}),o("label",{class:"form-check-label",for:"validationFormCheck2"},"Toggle this radio")]),o("div",{class:"form-check mb-3"},[o("input",{type:"radio",class:"form-check-input",id:"validationFormCheck3",name:"radio-stacked",required:""}),o("label",{class:"form-check-label",for:"validationFormCheck3"},"Or toggle this other radio"),o("div",{class:"invalid-feedback"},"More example invalid feedback text")]),o("div",{class:"mb-3"},[o("select",{class:"form-select",required:"","aria-label":"select example"},[o("option",{value:""},"Open this select menu"),o("option",{value:"1"},"One"),o("option",{value:"2"},"Two"),o("option",{value:"3"},"Three")]),o("div",{class:"invalid-feedback"},"Example invalid select feedback")]),o("div",{class:"mb-3"},[o("input",{type:"file",class:"form-control","aria-label":"file example",required:""}),o("div",{class:"invalid-feedback"},"Example invalid form file feedback")]),o("div",{class:"mb-0"},[o("button",{class:"btn btn-primary",type:"submit",disabled:""},"Submit form")])])],-1),o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup",style:{height:"352px"}},[i(""),o("code",null,`<form class="was-validated">
<div class="mb-3">
<label for="validationTextarea" class="form-label">Textarea</label>
<textarea class="form-control" id="validationTextarea" placeholder="Required / example textarea"
required /></textarea>
<div class="invalid-feedback">
Please enter a message in the textarea.
</div>
</div>

<div class="form-check mb-3">
<input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
<label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
<div class="invalid-feedback">Example invalid feedback text</div>
</div>

<div class="form-check">
<input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
<label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
</div>
<div class="form-check mb-3">
<input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
<label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
<div class="invalid-feedback">More example invalid feedback text</div>
</div>

<div class="mb-3">
<select class="form-select" required / aria-label="select example">
<option value="">Open this select menu</option>
<option value="1">One</option>
<option value="2">Two</option>
<option value="3">Three</option>
</select>
<div class="invalid-feedback">Example invalid select feedback</div>
</div>

<div class="mb-3">
<input type="file" class="form-control" aria-label="file example" required />
<div class="invalid-feedback">Example invalid form file feedback</div>
</div>

<div class="mb-3">
<button class="btn btn-primary" type="submit" disabled>Submit form</button>
</div>
</form>`)])],-1)])),_:1,__:[46]})]),_:1})]),_:1})]),_:1}),e(f,null,{default:a(()=>[e(n,{lg:"12"},{default:a(()=>[e(p,{"no-body":""},{default:a(()=>[e(m,{title:"Tooltips"}),e(v,null,{default:a(()=>[l[62]||(l[62]=o("p",{class:"text-muted"},[i("If your form layout allows it, you can swap the "),o("code",null,".{valid|invalid}-feedback"),i(" classes for "),o("code",null,".{valid|invalid}-tooltip"),i(" classes to display validation feedback in a styled tooltip. Be sure to have a parent with "),o("code",null,"position: relative"),i(" on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup. ")],-1)),o("div",E,[e(g,{onSubmit:y.submitTooltipForm,class:"row g-3",validated:t.onSubmit,novalidate:!0},{default:a(()=>[e(n,{md:"4",class:"position-relative"},{default:a(()=>[l[48]||(l[48]=o("label",{for:"validationTooltip01",class:"form-label"},"First name",-1)),e(r,{modelValue:t.firstName,"onUpdate:modelValue":l[7]||(l[7]=d=>t.firstName=d),id:"validationTooltip01",required:""},null,8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>l[47]||(l[47]=[i("Looks good!")])),_:1,__:[47]})]),_:1,__:[48]}),e(n,{md:"4",class:"position-relative"},{default:a(()=>[l[50]||(l[50]=o("label",{for:"validationTooltip02",class:"form-label"},"Last name",-1)),e(r,{modelValue:t.lastName,"onUpdate:modelValue":l[8]||(l[8]=d=>t.lastName=d),id:"validationTooltip02",required:""},null,8,["modelValue"]),e(c,{tooltip:!0},{default:a(()=>l[49]||(l[49]=[i("Looks good!")])),_:1,__:[49]})]),_:1,__:[50]}),e(n,{md:"4",class:"position-relative"},{default:a(()=>[l[53]||(l[53]=o("label",{for:"validationTooltipUsername",class:"form-label"},"Username",-1)),e(C,null,{default:a(()=>[e(x,{"is-text":""},{default:a(()=>l[51]||(l[51]=[i("@")])),_:1,__:[51]}),e(r,{modelValue:t.username,"onUpdate:modelValue":l[9]||(l[9]=d=>t.username=d),id:"validationTooltipUsername",required:""},null,8,["modelValue"]),e(u,{tooltip:!0},{default:a(()=>l[52]||(l[52]=[i("Please choose a unique and valid username.")])),_:1,__:[52]})]),_:1})]),_:1,__:[53]}),e(n,{md:"6",class:"position-relative"},{default:a(()=>[l[55]||(l[55]=o("label",{for:"validationTooltip03",class:"form-label"},"City",-1)),e(r,{modelValue:t.city,"onUpdate:modelValue":l[10]||(l[10]=d=>t.city=d),id:"validationTooltip03",required:""},null,8,["modelValue"]),e(u,{tooltip:!0},{default:a(()=>l[54]||(l[54]=[i("Please provide a valid city.")])),_:1,__:[54]})]),_:1,__:[55]}),e(n,{md:"3",class:"position-relative"},{default:a(()=>[l[58]||(l[58]=o("label",{for:"validationTooltip04",class:"form-label"},"State",-1)),e(b,{modelValue:t.state,"onUpdate:modelValue":l[11]||(l[11]=d=>t.state=d),id:"validationTooltip04",required:""},{default:a(()=>l[56]||(l[56]=[o("option",{disabled:"",value:""},"Choose...",-1),o("option",null,"...",-1)])),_:1,__:[56]},8,["modelValue"]),e(u,{tooltip:!0},{default:a(()=>l[57]||(l[57]=[i("Please select a valid state.")])),_:1,__:[57]})]),_:1,__:[58]}),e(n,{md:"3",class:"position-relative"},{default:a(()=>[l[60]||(l[60]=o("label",{for:"validationTooltip05",class:"form-label"},"Zip",-1)),e(r,{modelValue:t.zip,"onUpdate:modelValue":l[12]||(l[12]=d=>t.zip=d),id:"validationTooltip05",required:""},null,8,["modelValue"]),e(u,{tooltip:!0},{default:a(()=>l[59]||(l[59]=[i("Please provide a valid zip.")])),_:1,__:[59]})]),_:1,__:[60]}),e(n,{cols:"12"},{default:a(()=>[e(k,{type:"submit",variant:"primary"},{default:a(()=>l[61]||(l[61]=[i("Submit form")])),_:1,__:[61]})]),_:1})]),_:1},8,["onSubmit","validated"])]),l[63]||(l[63]=o("div",{class:"d-none code-view"},[o("pre",{class:"language-markup"},[i(""),o("code",null,`<form class="row g-3 needs-validation" novalidate>
<div class="col-md-4 position-relative">
<label for="validationTooltip01" class="form-label">First name</label>
<input type="text" class="form-control" id="validationTooltip01" value="Mark" required />
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltip02" class="form-label">Last name</label>
<input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
<div class="valid-tooltip">
Looks good!
</div>
</div>
<div class="col-md-4 position-relative">
<label for="validationTooltipUsername" class="form-label">Username</label>
<div class="input-group has-validation">
<span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
<input type="text" class="form-control" id="validationTooltipUsername"
aria-describedby="validationTooltipUsernamePrepend" required />
<div class="invalid-tooltip">
Please choose a unique and valid username.
</div>
</div>
</div>
<div class="col-md-6 position-relative">
<label for="validationTooltip03" class="form-label">City</label>
<input type="text" class="form-control" id="validationTooltip03" required />
<div class="invalid-tooltip">
Please provide a valid city.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip04" class="form-label">State</label>
<select class="form-select" id="validationTooltip04" required />
<option selected disabled value="">Choose...</option>
<option>...</option>
</select>
<div class="invalid-tooltip">
Please select a valid state.
</div>
</div>
<div class="col-md-3 position-relative">
<label for="validationTooltip05" class="form-label">Zip</label>
<input type="text" class="form-control" id="validationTooltip05" required />
<div class="invalid-tooltip">
Please provide a valid zip.
</div>
</div>
<div class="col-12">
<button class="btn btn-primary" type="submit">Submit form</button>
</div>
</form>`)])],-1))]),_:1,__:[62,63]})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const rl=L(N,[["render",M]]);export{rl as default};
