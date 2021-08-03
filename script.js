// document.addEventListener('contextmenu',function(e){
//     e.preventDefault();
// })
const translation_result=document.querySelector("#translation > p");
const Message=document.querySelector("#message > p");
var copy_code_sms = document.getElementById("code_sms");
var copy_translated_sms = document.getElementById("translated_sms");
morse_dict={
    "._":"A",
    "_...":"B",
    "_._.":"C",
    "_..":"D",
    ".":"E",
    ".._.":"F",
    "__.":"G",
    "....":"H",
    "..":"I",
    ".___":"J",
    "_._":"K",
    "._..":"L",
    "__":"M",
    "_.":"N",
    "___":"O",
    ".__.":"P",
    "__._":"Q",
    "._.":"R",
    "...":"S",
    "_":"T",
    ".._":"U",
    "..._":"V",
    ".__":"W",
    "_.._":"X",
    "_.__":"Y",
    "__..":"Z",

    ".____":"1",
    "..___":"2",
    "...__":"3",
    "...._":"4",
    ".....":"5",
    "_....":"6",
    "__...":"7",
    "___..":"8",
    "____.":"9",
    "_____":"0",
}

function dot_move(){
    if(Message.innerHTML==="Morse Code"){
        Message.innerHTML="."

    }else{
        Message.innerHTML+="."
    }
    document.getElementById('dot_point').classList.add("button_pressed");
    setTimeout(()=>document.getElementById('dot_point').classList.remove("button_pressed"),400)
}
function dash_move(){
    if(Message.innerHTML==="Morse Code"){
        Message.innerHTML="_"

    }else{
        Message.innerHTML+="_"
    }
    document.getElementById('dash_point').classList.add("button_pressed");
    setTimeout(()=>document.getElementById('dash_point').classList.remove("button_pressed"),400)
}
function space_move(){
    if(Message.innerHTML!=="Morse Code"){
        Message.innerHTML+=" "

    }
    message_parsing(Message.innerHTML)
    document.getElementById('space_point').classList.add("button_pressed");
    setTimeout(()=>document.getElementById('space_point').classList.remove("button_pressed"),400)
}
function message_parsing(sms){
    let j=sms.lastIndexOf(' ')
    let i=sms.substring(0,sms.length-1).lastIndexOf(' ')
    if(i==-2)i=0
    let str=sms.substring(i,j).trim()
    if(translation_result.innerHTML==="Translated Message"){
        translation_result.innerHTML=morse_dict[str]

    }else{
        translation_result.innerHTML+=morse_dict[str]
    }
}
function copy_code_sms_from_clipboard(){
    text=Message.innerHTML

    // Copy text to clipboard

    // if (window.clipboardData) { // Internet Explorer
    //     window.clipboardData.setData("Text", text);
    // } else {
    //     unsafeWindow.netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
    //     const clipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
    //     clipboardHelper.copyString(text);
    // }
}