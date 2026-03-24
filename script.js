let date = [0];

function save() {
    const inputElement = document.getElementById('valores');
    const inputValue = inputElement.value.trim();

    if (inputValue !== '' && !isNaN(inputValue)) {
        date.push(Number(inputValue));
        console.log(date);
        inputElement.value = ''; // limpa o campo
        inputElement.focus();
    } else {
        alert('Por favor, insira um número válido.');
    }
}

function Resultado() {
    let finalvalue = 0;

    function calcular(price, discount) {
        return (price * discount) / 100;
    }

    function pegarValor() {
        const apartir = Number(document.getElementById('abacate').value);
        const porcentagem = Number(document.getElementById('desconto').value);

        date.forEach(value => {
            if (value > apartir) {
                const discount = calcular(value, porcentagem);
                finalvalue += (value - discount);
            } else {
                finalvalue += value;
            }
        });
    }

    pegarValor();

    alert(finalvalue);
}