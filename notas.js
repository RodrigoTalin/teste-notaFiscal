function calcularImpostos(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}

function gerarNotaFiscal() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value);
    const itens = document.getElementById('itens').value.split(',').map(item => item.trim());
    const irpf = parseFloat(document.getElementById('irpf').value);
    const pis = parseFloat(document.getElementById('pis').value);
    const cofins = parseFloat(document.getElementById('cofins').value);
    const inss = parseFloat(document.getElementById('inss').value);
    const issqn = parseFloat(document.getElementById('issqn').value);

    if (isNaN(valorVenda) || valorVenda <= 0) {
        alert('Por favor, insira um valor de venda válido.');
        return;
    }

    const impostoIrpf = calcularImpostos(valorVenda, irpf);
    const impostoPis = calcularImpostos(valorVenda, pis);
    const impostoCofins = calcularImpostos(valorVenda, cofins);
    const impostoInss = calcularImpostos(valorVenda, inss);
    const impostoIssqn = calcularImpostos(valorVenda, issqn);

    const totalImpostos = impostoIrpf + impostoPis + impostoCofins + impostoInss + impostoIssqn;
    const valorLiquido = valorVenda - totalImpostos;

    const queryString = `?valorVenda=${valorVenda}&itens=${encodeURIComponent(itens.join(', '))}` +
        `&irpf=${irpf}&pis=${pis}&cofins=${cofins}&inss=${inss}&issqn=${issqn}` +
        `&impostoIrpf=${impostoIrpf}&impostoPis=${impostoPis}&impostoCofins=${impostoCofins}` +
        `&impostoInss=${impostoInss}&impostoIssqn=${impostoIssqn}&totalImpostos=${totalImpostos}` +
        `&valorLiquido=${valorLiquido}`;


    window.location.href = `emissao.html${queryString}`;
}

