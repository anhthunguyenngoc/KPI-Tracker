color_mode_1_button = "#2a7378";
color_mode_1_footer = "#3aafa9";
color_mode_1_frame_background = "#def2f1";
color_mode_1_element2 = "#9CD6D3";
color_mode_1_button_hover = "#439BA1";
color_mode_1_background = "#fff";
color_mode_1_element_background = "#fff";

color_mode_2_button = "#254E58";
color_mode_2_footer = "#458797";
color_mode_2_frame_background = "#def2f1";
color_mode_2_element2 = "#9CD6D3";
color_mode_2_button_hover = "#439BA1";
color_mode_2_background = "#FFFFF7";
color_mode_2_element_background = "#fff";

color_mode_3_button = "#1C3334";
color_mode_3_footer = "#1C3334";
color_mode_3_frame_background = "#def2f1";
color_mode_3_element2 = "#9CD6D3";
color_mode_3_button_hover = "#439BA1";
color_mode_3_background = "#376E6F";
color_mode_3_element_background = "#fff";

color_mode_4_button = "#254E58";
color_mode_4_footer = "#45A29E";
color_mode_4_frame_background = "#1F2833";
color_mode_4_element2 = "#88BDBC";
color_mode_4_button_hover = "#439BA1";
color_mode_4_background = "#080808";
color_mode_4_element_background = "#88BDBC";

color_black_text = "#000";
color_white_text = "#fff";
color_text = color_black_text;

function theme1Click() {
        // Lưu trữ giá trị của các biến vào Local Storage
    localStorage.setItem('--color-button', color_mode_1_button);
    localStorage.setItem('--color-footer', color_mode_1_footer);
    localStorage.setItem('--color-frame-background', color_mode_1_frame_background);
    localStorage.setItem('--color-element2', color_mode_1_element2);
    localStorage.setItem('--color-button-hover', color_mode_1_button_hover);
    localStorage.setItem('--color-background', color_mode_1_background);
    localStorage.setItem('--color-element-background', color_mode_1_element_background);
    localStorage.setItem('--color-text', color_black_text);
    localStorage.setItem('--color-header-dark', color_mode_1_button);
    localStorage.setItem('--color-header-light', color_mode_1_element2);
    loadTheme();
  }
  
  function theme2Click() {
    localStorage.setItem('--color-button', color_mode_2_button);
    localStorage.setItem('--color-footer', color_mode_2_footer);
    localStorage.setItem('--color-frame-background', color_mode_2_frame_background);
    localStorage.setItem('--color-element2', color_mode_2_element2);
    localStorage.setItem('--color-button-hover', color_mode_2_button_hover);
    localStorage.setItem('--color-background', color_mode_2_background);
    localStorage.setItem('--color-element-background', color_mode_2_element_background);
    localStorage.setItem('--color-text', color_black_text);
    localStorage.setItem('--color-header-dark', color_mode_2_button);
    localStorage.setItem('--color-header-light', color_mode_2_element2);
    loadTheme();
  }
  
  function theme3Click() {
    localStorage.setItem('--color-button', color_mode_3_button);
    localStorage.setItem('--color-footer', color_mode_3_footer);
    localStorage.setItem('--color-frame-background', color_mode_3_frame_background);
    localStorage.setItem('--color-element2', color_mode_3_element2);
    localStorage.setItem('--color-button-hover', color_mode_3_button_hover);
    localStorage.setItem('--color-background', color_mode_3_background);
    localStorage.setItem('--color-element-background', color_mode_3_element_background);
    localStorage.setItem('--color-text', color_white_text);
    localStorage.setItem('--color-header-dark', color_mode_3_element2);
    localStorage.setItem('--color-header-light', color_mode_3_button);
    loadTheme();
  }

  function theme4Click() {
    localStorage.setItem('--color-button', color_mode_4_button);
    localStorage.setItem('--color-footer', color_mode_4_footer);
    localStorage.setItem('--color-frame-background', color_mode_4_frame_background);
    localStorage.setItem('--color-element2', color_mode_4_element2);
    localStorage.setItem('--color-button-hover', color_mode_4_button_hover);
    localStorage.setItem('--color-background', color_mode_4_background);
    localStorage.setItem('--color-element-background', color_mode_4_element_background);
    localStorage.setItem('--color-text', color_white_text);
    localStorage.setItem('--color-header-dark', color_mode_4_element2);
    localStorage.setItem('--color-header-light', color_mode_4_button);
    loadTheme();
  }

  function loadTheme() {
    document.documentElement.style.setProperty('--color-button', localStorage.getItem('--color-button'));
    document.documentElement.style.setProperty('--color-footer', localStorage.getItem('--color-footer'));
    document.documentElement.style.setProperty('--color-frame-background', localStorage.getItem('--color-frame-background'));
    document.documentElement.style.setProperty('--color-element2', localStorage.getItem('--color-element2'));
    document.documentElement.style.setProperty('--color-button-hover', localStorage.getItem('--color-button-hover'));
    document.documentElement.style.setProperty('--color-background', localStorage.getItem('--color-background'));
    document.documentElement.style.setProperty('--color-element-background', localStorage.getItem('--color-element-background'));
    document.documentElement.style.setProperty('--color-text', localStorage.getItem('--color-text'));
    document.documentElement.style.setProperty('--color-header-dark', localStorage.getItem('--color-header-dark'));
    document.documentElement.style.setProperty('--color-header-light', localStorage.getItem('--color-header-light'));
  }

  let font_size_min = getComputedStyle(document.documentElement).getPropertyValue('--body-size-min').trim();
  font_size_min = parseFloat(font_size_min);
  let heading1_min = getComputedStyle(document.documentElement).getPropertyValue('--heading1-min').trim();
  heading1_min = parseFloat(heading1_min);
function changeFontSize(value){
  localStorage.setItem('--body-size', value);
  localStorage.setItem('--heading1', value - font_size_min + heading1_min);
}

function changeFont(value){
  localStorage.setItem('--body-font', value);
}

function loadFontSize(){
  if((localStorage.getItem('--body-size')+'px')=="nullpx"){
    localStorage.setItem('--body-size', 18);
  localStorage.setItem('--heading1', 22);
    changeFont("Roboto Flex");
  }

  document.documentElement.style.setProperty('--body-size', localStorage.getItem('--body-size')+'px');
  document.documentElement.style.setProperty('--heading1', localStorage.getItem('--heading1')+'px');
}

function loadFont(){
  document.documentElement.style.setProperty('--body-font', localStorage.getItem('--body-font'));
}

  loadTheme();
  loadFontSize();
  loadFont();