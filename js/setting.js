const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    if (optionMenu.classList.contains("active")) {
        // Nếu select-menu được kích hoạt, đặt vị trí của options
        const rect = selectBtn.getBoundingClientRect();
        options.style.top = rect.bottom + "px";
        options.style.left = rect.left + "px";
      }
    }
);       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});
