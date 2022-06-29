const inputPassWord = document.querySelector(".input_password");
const inputConfirmPassWord = document.querySelector(".input_confirm_password");
const iconPass = document.querySelector(".icon_pass");
const iconConfirmPass = document.querySelector(".icon_confirm_pass");


const btn0 = document.querySelector(".slide0");
const btn1 = document.querySelector(".slide1");
const btn2 = document.querySelector(".slide2");
const btn3 = document.querySelector(".slide3");
const slideCol1 = document.querySelector(".slide-col1");
const slideCol2 = document.querySelector(".slide-col2");
const slideCol3 = document.querySelector(".slide-col3");
const slideRow = document.getElementById("slide");


  

// text slide script


btn0.onclick = function(){
	slideRow.style.transform = "translateX(0)";
	btn0.classList.add("active");
	btn1.classList.remove("active");
	btn2.classList.remove("active");
	slideCol1.classList.add("active-col");
	slideCol2.classList.remove("active-col");
	slideCol3.classList.remove("active-col");
}

btn1.onclick = function(){
	slideRow.style.transform = "translateX(-470px)";
	btn0.classList.remove("active");
	btn1.classList.add("active");
	btn2.classList.remove("active");
	slideCol1.classList.remove("active-col");
	slideCol2.classList.add("active-col");
	slideCol3.classList.remove("active-col");
}

btn2.onclick = function(){
	slideRow.style.transform = "translateX(-950px)";
	btn0.classList.remove("active");
	btn1.classList.remove("active");
	btn2.classList.add("active");
	slideCol1.classList.remove("active-col");
	slideCol2.classList.remove("active-col");
	slideCol3.classList.add("active-col");
}



// password view script
iconPass.onclick = function(){
	
	if(inputPassWord.type == "password"){
		inputPassWord.type = "text";
		iconPass.classList.remove("fa-eye-slash");
		iconPass.classList.add("fa-eye");
	}else{
		inputPassWord.type= "password";
		iconPass.classList.remove("fa-eye");
		iconPass.classList.add("fa-eye-slash");
	}
}

iconConfirmPass.onclick = function(){
	
	if(inputConfirmPassWord.type == "password"){
		inputConfirmPassWord.type = "text";
		iconConfirmPass.classList.remove("fa-eye-slash");
		iconConfirmPass.classList.add("fa-eye");
	}else{
		inputConfirmPassWord.type= "password";
		iconConfirmPass.classList.remove("fa-eye");
		iconConfirmPass.classList.add("fa-eye-slash");
	}
};