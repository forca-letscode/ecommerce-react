# E-commerce

- A ideia aqui é consolidar o conteúdo da disciplina e ter uma sensação real de desenvolvimento para uma empresa. Então façam o que conseguirem fazer de acordo com o tempo que vocês tem;

- Utilização de um framework de estilização é obrigatória

	- Recomendo o Bootstrap

- A complexidade vai ser adicionada aos poucos. Então façam o simples a cada iteração.

- Mantenham o foco em um tópico abaixo por vez, ou seja, quando finalizarem o cadastramento do produto, façam a listagem e assim por diante, não é obrigatório me entregarem todos.

### Tela de edição e cadastro de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/tela_de_edicao.png)

A tela deve ser composta de:

- [ ] Cabeçalho (padrão toda aplicação);
- [ ] Rodapé (padrão toda aplicação);
- [ ] Deve conter os seguintes campos:
	- [ ] Título (campo de texto curto)
	- [ ] Preço (campo numérico com a máscara padrão da moeda brasileira)
	- [ ] Informações / Descrições (campo de texto longo)
	- [ ] Peso (campo numérico)
	- [ ] Campo para upload de imagens `(se conseguir fazer)`
- [ ] Botão Salvar
	- [ ] Realiza o salvamento e redireciona o usuário para a tela de listagem de produtos
- [ ] Botão Cancelar
	- [ ] Cancela a edição e retorna o usuário para a listagem de produtos

### Tela de listagem de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/lista_de_produtos.png)

A tela deve ser composta de:

 - [ ] Cabeçalho (padrão toda aplicação);
 - [ ] Rodapé (padrão toda aplicação);
 - [ ] Botão de Cadastrar Produto;
	 - [ ] Leva a tela de cadastro de produto (mesma de edição)
- [ ] Campo de busca (campo de texto curto)
	- [ ] Realiza a filtragem dos produtos;
	- [ ] Realiza a pesquisa pelo título do produto.
- [ ]  Terá uma listagem de produtos.
	- [ ] Botão de excluir
		- [ ] Remove o produto
	- [ ] Botão de editar
		- [ ] Abre a tela de edição do produto
	- [ ] Título do produto
	- [ ] Ao clicar no produto será aberta uma tela de visualização

### Tela de visualização de produto

![](https://raw.githubusercontent.com/forca-letscode/ecommerce-react/assets/detalhes_do_produto.png)

A tela deve ser composta de:

 - [ ] Cabeçalho (padrão toda aplicação);
 - [ ] Rodapé (padrão toda aplicação);
 - [ ] Nela serão exibidas as informações:
	 - [ ] Título
	 - [ ] Foto
	 - [ ] Preço
	 - [ ] Informações/Descrição
	 - [ ] Peso
