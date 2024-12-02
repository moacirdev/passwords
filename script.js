document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gerarSenha').addEventListener('click', function() {
        let nomeCliente = document.getElementById('nome').value.trim();
        const caractereEspecial = document.getElementById('caractere').value.trim();

        if (nomeCliente && caractereEspecial) {
            
            nomeCliente = nomeCliente.charAt(0).toUpperCase() + nomeCliente.slice(1).toLowerCase();
            chave = nomeCliente + caractereEspecial;
            
            
            // Gera hash SHA-256 usando um método alternativo de simulação no navegador
            const hash = CryptoJS.SHA256(chave).toString();
            const sequenciaAlfanumerica = hash.slice(0, 10);
            const senha = `${nomeCliente}${caractereEspecial}${sequenciaAlfanumerica}`;
            
            document.getElementById('senhaGerada').textContent = `Senha gerada: ${senha}`;
            document.getElementById('copiarSenha').disabled = false;
        } else {
            document.getElementById('senhaGerada').textContent = "Por favor, preencha ambos os campos!";
            document.getElementById('copiarSenha').disabled = true;
        }
    });

    document.getElementById('copiarSenha').addEventListener('click', function() {
        const senha = document.getElementById('senhaGerada').textContent.replace("Senha gerada: ", "");
        navigator.clipboard.writeText(senha).then(() => {
            alert("Senha copiada para a área de transferência!");
        }).catch(err => {
            console.error("Erro ao copiar a senha:", err);
        });
    });
});
