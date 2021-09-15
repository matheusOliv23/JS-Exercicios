// Ordenando Números Pares e Ímpares

/* Crie um programa onde você receberá valores inteiros não negativos como
entrada.
Ordene estes valores de acordo com o seguinte critério:
- Primeiro os Pares
- Depois os Ímpares
- Você deve exibir os pares em ordem crescente e na sequência os ímpares em
ordem decrescente.
- Entrada
A primeira linha de entrada contém um único inteiro positivo N (1 < N < 10000)
Este é o número de linhas de entrada que vem logo a seguir. As próximas N
linhas terão, cada uma delas, um valor inteiro não negativo.
- Saída
Exiba todos os valores lidos na entrada segundo a ordem apresentada acima.
*/

const linhas = null
let entrada = [10, 4, 32, 34, 543, 654, 87, 88, 92, 43]

for (let i = 0; i < linhas; i++) {
  entrada = [...entrada] //copiando o array
}

entrada = entrada.sort((a, b) => a - b) //organiza em ordem crescente
const pares = entrada.filter(n => n % 2 === 0) //retornando os valores pares
const impares = entrada.filter(n => n % 2 === 1).reverse() // ordem decrescente
const saida = [...pares, ...impares].map(n => console.log(n))
