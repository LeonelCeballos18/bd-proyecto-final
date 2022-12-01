let btnId = document.getElementById("btnId");
let btnName = document.getElementById("btnName");

btnId.addEventListener('click', ()=>{
    if(btnId.classList.contains('selected')){
        btnId.classList.remove('selected');
    }else{
        btnId.classList.toggle('selected');
        btnName.classList.remove('selected');
    }
})

btnName.addEventListener('click', ()=>{
    if(btnName.classList.contains('selected')){
        btnName.classList.remove('selected');
    }else{
        btnName.classList.toggle('selected');
        btnId.classList.remove('selected');
    }
})