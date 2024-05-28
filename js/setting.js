function selectionClick(selectMenu, select_btn, option, btnText){
    const optionMenu = document.querySelector(selectMenu),
        selectBtn = optionMenu.querySelector(select_btn),
        options = optionMenu.querySelectorAll(option),
        sBtn_text = optionMenu.querySelector(btnText);

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

    options.forEach(option =>{option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
        });
    });
}

function switchClick(switchI, text) {
    const switchInput = document.getElementById(switchI);
    const switchText = document.getElementById(text);

switchInput.addEventListener('change', function() {
  if (this.checked) {
    switchText.textContent = 'Bật';
  } else {
    switchText.textContent = 'Tắt';
  }
});
}

switchClick('switch1', 'switchText1');

switchClick('switch2', 'switchText2');

switchClick('switch3', 'switchText3');

selectionClick(".select-menu1", ".select-btn", ".option", ".sBtn-text");

selectionClick(".select-menu2", ".select-btn", ".option", ".sBtn-text");

selectionClick(".select-menu3", ".select-btn", ".option", ".sBtn-text");

const slider = document.querySelector('.slider');
const numberInput = document.querySelector('input[type="number"]');
const spinnerUp = document.querySelector('.spinner-up');
const spinnerDown = document.querySelector('.spinner-down');

// Đồng bộ hóa giá trị slider và ô input
slider.addEventListener('input', function() {
  numberInput.value = this.value;
});

numberInput.addEventListener('input', function() {
  slider.value = this.value;
});

// Tăng giảm giá trị khi bấm nút tăng hoặc giảm
spinnerUp.addEventListener('click', function() {
  slider.stepUp();
  numberInput.value = slider.value;
});

spinnerDown.addEventListener('click', function() {
  slider.stepDown();
  numberInput.value = slider.value;
});

const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({
        top: elmRef.current.offsetTop, behavior: "smooth" 
    })
}