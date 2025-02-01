/**
    Elabore um algoritmo que calcule o que deve ser pago por um produto, consigerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista Dinheiro ou Pix, recebe 15% de desconto;
    - Em 2x, preço normal de etiqueta sem juros;
    - Acima de 3x, preço normal de etiqueta mais 10% de juros.
 */

    const precoProduto = 100;
    const formaDePagamento = 5;
    
    const condicaoPagamento = {
        debito: 1,
        dinheiro: 2,
        pix: 3,
        '2x': 4,
        '3x': 5
    };

    // contruindo a estrutura condicional com switch/CASE    
    switch (formaDePagamento) {
        case condicaoPagamento.debito:
            console.log(`O valor a ser pago é de R$ ${(precoProduto * 0.90).toFixed(2)}`);
            break;
        case condicaoPagamento.dinheiro:
        case condicaoPagamento.pix:
            console.log(`O valor a ser pago é de R$ ${(precoProduto * 0.85).toFixed(2)}`);
            break;
        case condicaoPagamento['2x']:
            console.log(`O valor a ser pago é de R$ ${precoProduto.toFixed(2)}`);
            break;
        default:
            console.log(`O valor a ser pago é de R$ ${(precoProduto * 1.10).toFixed(2)}`);
            break;
    }

    // contruindo a estrutura condicional com if/else
    if (formaDePagamento === 1) {
        console.log(`O valor a ser pago é de R$ ${(precoProduto * 0.90).toFixed(2)}`);
    } else if (formaDePagamento === 2 || formaDePagamento === 3) {
        console.log(`O valor a ser pago é de R$ ${(precoProduto * 0.85).toFixed(2)}`);
    } else if (formaDePagamento === 4) {
        console.log(`O valor a ser pago é de R$ ${precoProduto.toFixed(2)}`);
    } else {
        console.log(`O valor a ser pago é de R$ ${(precoProduto * 1.10).toFixed(2)}`);
    }