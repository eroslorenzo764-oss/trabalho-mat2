# trabalho-mat2

## Modelagem Matemática e Programação

### O Uso de Algoritmos na Inovação Tecnológica

## 1. Introdução

A matemática e a programação estão presentes
em diversas tecnologias atuais.

Conceitos como estatística, progressões
e cálculos matemáticos podem ser utilizados
para representar situações do mundo real.

Neste projeto, utilizamos JavaScript
para criar uma simulação de reação em cadeia.

A proposta é mostrar como um algoritmo
pode representar um sistema que cresce
ao longo de várias gerações.

O usuário pode alterar os valores iniciais
e observar como pequenas mudanças
podem influenciar o resultado da simulação.

---

## 2. Como o Site Foi Desenvolvido

O projeto foi desenvolvido utilizando
três tecnologias principais:

* HTML5
* CSS3
* JavaScript

Cada tecnologia possui uma função
diferente dentro do projeto.

### HTML

O `index.html` é responsável
pela estrutura da página.

Ele contém os textos, títulos,
campos de entrada, botão
e área onde os resultados aparecem.

### CSS

O `style.css` controla
a aparência do site.

Ele define cores, espaçamentos,
tamanhos, fontes, bordas
e a organização dos elementos.

Também possui regras para
adaptar a página a diferentes
tamanhos de tela.

### JavaScript

O `script.js` contém
toda a parte lógica da simulação.

Ele recebe os valores informados
pelo usuário e realiza os cálculos
a cada geração.

---

## 3. Funcionamento da Simulação

A simulação começa com uma quantidade
de núcleos definida pelo usuário.

Também é escolhida uma taxa média
de reação e o número de gerações.

A cada geração, o programa calcula
quantos novos elementos serão ativados.

Para isso, é utilizada a ideia de
crescimento multiplicativo:

**Novos Ativos = Ativos Atuais × Taxa × Fator Aleatório**

O fator aleatório é gerado pelo
`Math.random()`.

Isso faz com que cada simulação
possa apresentar resultados diferentes.

---

## 4. Algoritmo

O programa utiliza um laço `for`
para percorrer cada geração.

Em cada repetição:

1. É gerado um fator aleatório.
2. Os novos elementos são calculados.
3. O total de elementos é atualizado.
4. O resultado da geração é exibido.
5. O programa verifica se o limite
   máximo foi ultrapassado.

Caso a quantidade ultrapasse
1 milhão de elementos,
a simulação é interrompida
e um alerta é exibido.

Caso contrário, o programa continua
até completar todas as gerações.

---

## 5. Resultado

Depois da execução, o site apresenta
o resultado de cada geração.

É possível visualizar:

* Estado inicial
* Novos elementos ativados
* Total acumulado
* Geração atual
* Situação final da simulação

Assim, o projeto demonstra de forma
interativa como conceitos matemáticos
podem ser aplicados através
da programação.
