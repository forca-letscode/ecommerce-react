# E-commerce

- A ideia aqui é consolidar o conteúdo da disciplina e ter uma sensação real de desenvolvimento para uma empresa. Então façam o que conseguirem fazer de acordo com o tempo que vocês tem;

- Utilização de um framework de estilização é obrigatória

	- Recomendo o Bootstrap

- A complexidade vai ser adicionada aos poucos. Então façam o simples a cada iteração.

- Mantenham o foco em um tópico abaixo por vez, ou seja, quando finalizarem o cadastramento do produto, façam a listagem e assim por diante, não é obrigatório me entregarem todos.

### Tela de edição e cadastro de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/tela_de_edicao.png)

A tela deve ser composta de:

- [X] Cabeçalho (padrão toda aplicação);
- [X] Rodapé (padrão toda aplicação);
- [ ] Deve conter os seguintes campos:
	- [X] Título (campo de texto curto)
	- [X] Preço (campo numérico com a máscara padrão da moeda brasileira)
	- [X] Informações / Descrições (campo de texto longo)
	- [X] Peso (campo numérico)
	- [ ] Campo para upload de imagens `(se conseguir fazer)`
- [X] Botão Salvar
	- [X] Realiza o salvamento e redireciona o usuário para a tela de listagem de produtos
- [X] Botão Cancelar
	- [X] Cancela a edição e retorna o usuário para a listagem de produtos

### Tela de listagem de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/lista_de_produtos.png)

A tela deve ser composta de:

 - [X] Cabeçalho (padrão toda aplicação);
 - [X] Rodapé (padrão toda aplicação);
 - [X] Botão de Cadastrar Produto;
	 - [X] Leva a tela de cadastro de produto (mesma de edição)
- [X] Campo de busca (campo de texto curto)
	- [ ] Realiza a filtragem dos produtos;
	- [ ] Realiza a pesquisa pelo título do produto.
- [X]  Terá uma listagem de produtos.
	- [X] Botão de excluir
		- [ ] Remove o produto
	- [X] Botão de editar
		- [ ] Abre a tela de edição do produto
	- [X] Título do produto
	- [X] Ao clicar no produto será aberta uma tela de visualização

### Tela de visualização de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/detalhes_do_produto.png)

A tela deve ser composta de:

 - [X] Cabeçalho (padrão toda aplicação);
 - [X] Rodapé (padrão toda aplicação);
 - [ ] Nela serão exibidas as informações:
	 - [X] Título
	 - [ ] Foto
	 - [X] Preço
	 - [X] Informações/Descrição
	 - [X] Peso
