document.addEventListener("DOMContentLoaded", function() {
    // Menu mobile
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_servicos");

    mobileBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active"); // Alterna a classe 'active' no menu
    });

    // Função para scroll suave com ajuste para cabeçalho fixo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Pega o id da seção
            const targetElement = document.getElementById(targetId);

            // Calcula a posição do alvo com o offset do cabeçalho fixo
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        });
    });

    // Função para o formulário de agendamento
    document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio real do formulário

        // Captura os valores
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const servico = document.getElementById('servico').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;

        // Verifica se todos os campos foram preenchidos
        if (nome && email && servico && data && horario) {
            const confirmationMessage = `
                <h3>Agendamento Confirmado!</h3>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Serviço:</strong> ${document.querySelector('#servico option:checked').textContent}</p>
                <p><strong>Data:</strong> ${data}</p>
                <p><strong>Horário:</strong> ${horario}</p>
                <p>Um e-mail de confirmação foi enviado para você.</p>
            `;
            document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

            // Reseta o formulário
            document.getElementById('agendamentoForm').reset();
        } else {
            document.getElementById('confirmationMessage').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
        }
    });
});
