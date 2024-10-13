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
        // Simulação de um envio bem-sucedido
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
        // mensagem de erro
        document.getElementById('confirmationMessage').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
});


/*Carrosel*/
let currentIndex = 0;

function moveSlide(direction) {
    const services = document.querySelectorAll('.service');
    const totalSlides = services.length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const serviceWidth = services[0].clientWidth;
    const offset = -currentIndex * serviceWidth;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}px)`;
}

