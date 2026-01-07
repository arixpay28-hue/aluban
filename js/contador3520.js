if(document.getElementById('cronometroBlack')) {
    function atualizarContador() {
        // Defina a data alvo (24 de novembro de 2023 às 23:59 no fuso horário UTC)
        const dataAlvo = new Date('2023-11-24T23:59:59-03:00');

        // Obtenha a data e a hora atuais
        const agora = new Date();

        // Calcule a diferença em milissegundos entre as duas datas
        const diferenca = dataAlvo - agora;

        // Verifique se a data alvo foi atingida
        if(diferenca <= 0) {
            document.getElementById("contador").innerHTML = "O tempo expirou!";
        } else {
            // Calcule horas, minutos e segundos
            const horas = Math.floor(diferenca / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            // Exiba o resultado no elemento com id "contador"
            document.getElementById("cronometroBlack").innerHTML = `
            ${formatarNumero(horas)}:${formatarNumero(minutos)}:${formatarNumero(segundos)}
            `;
            // Atualize a cada segundo
            setTimeout(atualizarContador, 1000);
        }
    }

    function formatarNumero(numero) {
        return numero < 10 ? `0${numero}` : numero;
    }

    // Chame a função inicialmente
    atualizarContador();
}