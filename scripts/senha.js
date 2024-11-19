document.addEventListener("DOMContentLoaded", () => {
    const secTeste = document.getElementById("sec-teste");
    const senhaInput = document.getElementById("senha-input");
    const barraProgresso = document.getElementById("barra-progresso");



    
    senhaInput.addEventListener("input", () => {
        const senha = senhaInput.value;
        const forca = avaliarForcaSenha(senha);
        atualizarBarraProgresso(forca);
    });

    // Lógica para avaliar força da senha
    function avaliarForcaSenha(senha) {
        const possuiNumero = /\d/.test(senha);
        const possuiLetra = /[a-zA-Z]/.test(senha);
        const possuiMaiuscula = /[A-Z]/.test(senha);
        const possuiEspecial = /[!@#$%&*()\-_+.:;?\/]/.test(senha);

        
        if (senha.length < 4) {
            return "Fraca";
        }

            
        const criteriosAtendidos = [possuiNumero, possuiLetra, possuiMaiuscula, possuiEspecial].filter(Boolean).length;

            
        if (criteriosAtendidos === 4 && senha.length >= 8) {
            return "Forte";
        }

            
        if (criteriosAtendidos >= 3 && senha.length >= 5) {
            return "Média";
        }

        return "Fraca"; 
        }

    
    function atualizarBarraProgresso(forca) {

        barraProgresso.style.display = "flex";
        barraProgresso.style.alignItems = "center";
        barraProgresso.style.justifyContent = "center";
        barraProgresso.style.color = "white";
        barraProgresso.style.fontWeight = "bold";
        barraProgresso.style.fontSize = "10px"

        switch (forca) {
            case "Fraca":
                barraProgresso.style.width = "10%";
                barraProgresso.style.backgroundColor = "red";
                barraProgresso.innerHTML = "10%";
                break;
            case "Média":
                barraProgresso.style.width = "50%";
                barraProgresso.style.backgroundColor = "orange";
                barraProgresso.innerHTML = "50%";
                break;
            case "Forte":
                barraProgresso.style.width = "100%";
                barraProgresso.style.backgroundColor = "green";
                barraProgresso.innerHTML = "100%";
                break;
        }
    }
});

//Espiar senha
const passwordInput = document.getElementById('senha-input');
const togglePassword = document.getElementById('togglePassword');

// Alterna o tipo do input entre 'password' e 'text'
togglePassword.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
  togglePassword.style.opacity = isPassword ? "100%" : "30%";
});