import"./assets/modulepreload-polyfill-3cfb730f.js";const n=document.querySelector(".feedback-form"),o=document.getElementById("email"),r=document.getElementById("message"),l=`
    .feedback-form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        padding: 0;
        margin: 0px 200px;
    }

    .form-label {
        font-weight: bold;
        margin-bottom: 4px;
    }

    #email, #message {
        width: 360px;
        height: 40px;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    #message {
        height: 80px;
        resize: none;
    }

    #submitBtn {
        width: 95px;
        height: 40px;
        border-radius: 8px;
        padding: 8px 16px; 
        background-color: #4E75FF;
        color: #FFFFFF;
        align-self: start; 
        cursor: pointer; 
        border: none;
        font-size: 14px;
    }
`,m=document.createElement("style");m.textContent=l;document.head.appendChild(m);const s=localStorage.getItem("feedback-form-state");if(s){const e=JSON.parse(s);o.value=e.email||"",r.value=e.message||""}const i=()=>{const e=o.value.trim(),t=r.value.trim(),a={email:e,message:t};localStorage.setItem("feedback-form-state",JSON.stringify(a))};o.addEventListener("input",i);r.addEventListener("input",i);n.addEventListener("submit",function(e){e.preventDefault();const t=o.value.trim(),a=r.value.trim();if(!t||!a){alert("Proszę wypełnić wszystkie pola formularza.");return}console.log({email:t,message:a}),localStorage.removeItem("feedback-form-state"),n.reset()});
//# sourceMappingURL=commonHelpers2.js.map
