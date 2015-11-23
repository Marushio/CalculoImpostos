function calcInss (salario){	
    var inss = 0;
	if(salario <= 1399.12){
		inss = salario*0.08;		
		document.getElementById("refInss").innerHTML="8,00%";	
	}else if (salario >= 1399.13 && salario <= 2331.88){
		inss = salario*(0.09);
		document.getElementById("refInss").innerHTML="9,00%";	
	}else if (salario >= 2331.89 && salario <= 4663.75){
		inss = salario*0.11;
		document.getElementById("refInss").innerHTML="11,00%";	
	}else if(salario > 4663.75){
		inss = 513.01;
		document.getElementById("refInss").innerHTML="Teto";	
	}
	return inss;
}
function calcImpostoRenda (salario) {
	var ir=0;
	if (salario <= 1903.98){
		ir = 0;
		document.getElementById("refIr").innerHTML="Isento";
	}else if (salario >= 1903.99 && salario <= 2826.65){
		ir = ((salario*0.075) - 142.80 );
		document.getElementById("refIr").innerHTML="7,5%";	
	}else if (salario >= 2826.66 && salario <= 3751.05){
		ir = ((salario*0.15) - 354.80);
		document.getElementById("refIr").innerHTML="15%";
	}else if (salario >= 3751.06 && salario <= 4664.68){
		ir = ((salario*0.225) - 636.13);
		document.getElementById("refIr").innerHTML="22,5%";	
	}else{
		ir = ((salario*0.275) - 869.36);
		document.getElementById("refIr").innerHTML="27,5%";
	}
	
    return ir;		
}	
