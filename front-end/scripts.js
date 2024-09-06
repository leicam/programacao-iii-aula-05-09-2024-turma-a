function post(){
	let xhttp = new XMLHttpRequest();
	
	xhttp.open("POST", "http://localhost:8091/cliente", true);
	xhttp.setRequestHeader("Accept", "application/json");
	xhttp.setRequestHeader("Content-Type", "application/json");
	
	let cliente = {
		nome: document.getElementById("nome").value,
		sobrenome: document.getElementById("sobrenome").value,
		documento: document.getElementById("documento").value
	};
	
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == "200"){
			alert("Cliente cadastrado com sucesso!");
		} else {
			alert(xhttp.responseText);
		}		
	}
	
	xhttp.send(JSON.stringify(cliente));
}

function get(){
	let xhttp = new XMLHttpRequest();

	xhttp.open("GET", "http://localhost:8091/cliente", true);
	xhttp.setRequestHeader("Content-Type", "application/json");

	xhttp.onload = function () {
		if (xhttp.readyState == 4 && xhttp.status == "200"){
			let lista = JSON.parse(xhttp.responseText);
			let tabela = document.getElementById("clientes");

			for (let i = 0; i < lista.length; i++){
				let cliente = lista[i];
				let linha = document.createElement("tr");

				let celulaId = document.createElement("td");
				celulaId.textContent = cliente.id;

				let celulaDocumento = document.createElement("td");
				celulaDocumento.textContent = cliente.documento;

				let celulaNome = document.createElement("td");
				celulaNome.textContent = cliente.nome;

				let celulaSobrenome = document.createElement("td");
				celulaSobrenome.textContent = cliente.sobrenome;

				linha.appendChild(celulaId);
				linha.appendChild(celulaDocumento);
				linha.appendChild(celulaNome);
				linha.appendChild(celulaSobrenome);

				tabela.appendChild(linha);
			}
		}
	};

	xhttp.send();
}






