document.addEventListener("DOMContentLoaded", function() {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_servicos");

    mobileBtn.addEventListener("click", function() {
        mobileMenu.classList.toggle("active"); // Alterna a classe 'active' no menu
    });

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
