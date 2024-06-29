# YouTube Video Playlist

Este projeto é uma página web que exibe uma playlist de vídeos do YouTube com um vídeo de fundo em loop. A lista de vídeos permite ao usuário selecionar qual vídeo deseja assistir, e o vídeo correspondente é carregado no player principal. A página é responsiva, adaptando-se a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript

## Funcionalidades

- Exibição de um vídeo de fundo em loop.
- Lista de vídeos do YouTube para seleção.
- Player de vídeo embutido que carrega o vídeo selecionado.
- Destaque do item ativo na lista de vídeos.
- Responsividade para diferentes tamanhos de tela.

## Estrutura do Projeto

```
.
├── index.html
├── styles.css
└── script.js
```

- `index.html`: Estrutura HTML da página.
- `styles.css`: Estilos CSS para a página.
- `script.js`: Script JavaScript para a funcionalidade da playlist.

## Como Usar

1. Clone este repositório:

    ```bash
    git clone https://github.com/frankjungblut/playlist-videos-for-vlog.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd playlist-videos-for-vlog
    ```

3. Abra o arquivo `index.html` em seu navegador preferido.

## Detalhes de Implementação

### HTML

O arquivo `index.html` contém a estrutura básica da página, incluindo o vídeo de fundo, o container principal, o player de vídeo e a lista de vídeos.

### CSS

O arquivo `styles.css` contém os estilos para a página, incluindo a responsividade com media queries. A classe `.active` é usada para destacar o item ativo na lista de vídeos.

### JavaScript

O arquivo `script.js` contém a lógica para atualizar o player de vídeo quando um item da lista é clicado e para adicionar a classe `.active` ao item da lista correspondente.

## Estilização

Os estilos principais e responsivos são aplicados no `styles.css`. Alguns dos pontos chave incluem:

- Utilização de Flexbox para o layout.
- Media queries para responsividade.
- Classe `.active` para destacar o item ativo na lista de vídeos.

## Responsividade

A página foi projetada para ser responsiva e se adaptar a diferentes tamanhos de tela. As media queries ajustam o layout para telas menores, alterando a disposição dos elementos e ajustando seus tamanhos.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações:

    ```bash
    git checkout -b minha-nova-funcionalidade
    ```

3. Commit suas alterações:

    ```bash
    git commit -m "Adiciona minha nova funcionalidade"
    ```

4. Push para a branch:

    ```bash
    git push origin minha-nova-funcionalidade
    ```

5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
