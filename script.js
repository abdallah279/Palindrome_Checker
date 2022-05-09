const txtInput = document.querySelector(".inputs input"),
btn = document.querySelector(".inputs button"),
infoTxt = document.querySelector('.text');
let filterInput;

btn.addEventListener("click", ()=>{
    let convertInput = filterInput.split('').reverse().join('');
    infoTxt.style.display = "block";
    if(filterInput != convertInput){
        infoTxt.innerHTML = `no, <span>'${txtInput.value}'</span> isn't a palindrome!`;
    }else{
        infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`
    }
});

txtInput.addEventListener('keyup', ()=>{
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return btn.classList.add("active");
    }
    btn.classList.remove("active");
    infoTxt.style.display = "none";
});