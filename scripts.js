$(document).ready(function(){
    $('#mobile_btn').on('click', function (){
        $('#mobile_servicos').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });
});
document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Captura os valores dos inputs
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const servico = document.getElementById('servico').value;
    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;

    // Verifica se todos os campos foram preenchidos (já são obrigatórios no HTML)
    if (nome && email && servico && data && horario) {
        // Simulação de um envio bem-sucedido
        const confirmationMessage = `
            <h3>Agendamento Confirmado!</h3>
            <p>Nome: ${nome}</p>
            <p>Email: ${email}</p>
            <p>Serviço: ${servico}</p>
            <p>Data: ${data}</p>
            <p>Horário: ${horario}</p>
            <p>Um e-mail de confirmação foi enviado para você.</p>
        `;

        document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

        // Reseta o formulário
        document.getElementById('agendamentoForm').reset();
    } else {
        // Mostra uma mensagem de erro caso algo esteja errado
        document.getElementById('confirmationMessage').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
});
// Função para validar e processar o formulário de agendamento
document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
event.preventDefault(); // Impede o envio real do formulário para simular no frontend

// Captura os valores dos campos do formulário
const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const servico = document.getElementById('servico').value;
const data = document.getElementById('data').value;
const horario = document.getElementById('horario').value;

// Verifica se todos os campos estão preenchidos
if (nome && email && servico && data && horario) {
    // Simula uma mensagem de confirmação na tela
    const confirmationMessage = `
        <h3>Agendamento Confirmado!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${document.querySelector('#servico option:checked').textContent}</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <p>Um e-mail de confirmação foi enviado para você.</p>
    `;

    // Exibe a mensagem de confirmação
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

    // Opcional: você pode limpar o formulário após o envio
    document.getElementById('agendamentoForm').reset();
} else {
    // Se algum campo não foi preenchido, exibe um alerta
    alert("Por favor, preencha todos os campos para continuar com o agendamento.");
}
});
