## 🏆NIVEL (Básico)
## Desafio

Você foi contratado para desenvolver um sistema que armazena informações dos pedidos de comida online realizados por um cliente. O sistema deve permitir ao cliente inserir novos pedidos, escolher um cupom de desconto (10% ou 20%) e exibir o valor total de todos os pedidos realizados até o momento, com o desconto aplicado.

Entrada

## #Entrada

A entrada deverá receber o valor total do pedido em uma variável numérica:

    valorPedido: o valor do pedido.

## #Saída

Deverá retornar uma mensagem (string) que informa se o usuário ganhou uma sobremesa ou não:

    Se valorPedido >= 50, a mensagem deve ser:
    Parabens, você ganhou uma sobremesa gratis!

    Caso contrário, a mensagem deve ser:
    Que pena, você nao ganhou nenhum brinde especial.

Desafio Bônus: Utilize interpolação de strings para formatar sua saída ao invés da concatenação de strings tradicional.

## #Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

| Entrada | Saída|
| ---|--- |
| 60 | Parabens, você ganhou uma sobremesa gratis! |
| 30 | Que pena, você nao ganhou nenhum brinde especial. |
| 90 | Parabens, você ganhou uma sobremesa gratis! |
