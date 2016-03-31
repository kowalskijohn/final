var box = document.getElementById("demos");
ha = 410060 * 2.5;


function red(){
	var predict = document.getElementById("numbers").value;
	var future = predict * (ha * 626.9001);
	
	box.innerHTML="-" + future + " ha";
};
