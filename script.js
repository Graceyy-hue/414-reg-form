const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"), 
        allInput = form.querySelectorALL(".first input");

nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
            alert("input is empty")
        }
    })
})
let popup = document.getElementById("popup");

            function openPopup(){
                popup.classList.add("open-popup");
            }

            function closePopup(){
                popup.classList.remove("open-popup");
            }

