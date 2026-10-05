<img width="1376" height="768" alt="image" src="https://github.com/user-attachments/assets/c9bbcedb-bcd2-4bd4-8551-70aa4b89b0a8" /># 🏆 Desafio Prático: Dashboard Interativo de Usuários & Suporte

Este desafio foi planejado para integrar **HTML Semântico**, **CSS Moderno (com fundamentos de Tabelas)** e **todos os 13 conceitos de jQuery** listados nos seus estudos.

---

## 🎨 Mockup do Projeto

O visual final da sua aplicação deve seguir a referência visual abaixo:

<img width="1376" height="768" alt="layout_desafio" src="https://github.com/user-attachments/assets/32d5e17b-8d1a-4478-b6ee-fab51d99339b" />


---

## 📁 Estrutura de Arquivos Sugerida

Crie uma pasta para o projeto contendo:

```text
desafio-jquery/
├── index.html
├── style.css
├── script.js
└── img/ (ou utilize imagens via Unsplash/URLs públicas)
```

---

## 🎯 Seções da Página

1. **Header / Barra de Navegação Superior**:
   - Logotipo (ex: `Flux UI` ou seu nome/marca).
   - Links de navegação (`Dashboard`, `Usuários`, `Relatórios`, `FAQ`).
   - Avatar ou perfil do usuário.
2. **Hero / Carrossel de Destaques (Slide Show)**:
   - 3 banners rotativos contendo imagem de fundo, título, subtítulo e paginação (botões `<` e `>` e indicadores em bolinhas).
3. **Seção de Dados (Tabela de Usuários)**:
   - **Barra de Ferramentas**:
     - Campo de busca rápida com ícone de lupa.
     - Filtro por status (`Todos`, `Ativo`, `Inativo`).
     - Botão "+ Adicionar Usuário" e botão "Alternar Tabela".
   - **Tabela HTML Completa**:
     - Colunas: **Foto**, **Nome**, **Cargo**, **E-mail**, **Status** (badge colorido), **Último Acesso** e **Ações** (botão de excluir).
4. **Modal / Formulário de Cadastro** (oculto por padrão):
   - Campos para inserir Nome, Cargo, E-mail e Status.
5. **Seção de Dúvidas Frequentes (FAQ - Efeito Sanfona)**:
   - Lista de perguntas expansíveis com ícones de `+` / `-`.
6. **Toast de Notificação** (canto inferior ou superior):
   - Caixa de mensagem temporária para feedback de ações.

---

## 📋 Requisitos Técnicos

### 1. HTML & Fundamentos de Tabela
- Utilize tags semânticas estruturais: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Para a tabela, use a estrutura correta:
  - `<table>`
  - `<thead>` com linhas `<tr>` e células de cabeçalho `<th>`.
  - `<tbody>` com linhas `<tr>` e células de dados `<td>`.
  - Atributos acessíveis e classes organizadas.

### 2. CSS & Estilização
- **Tabela**:
  - `border-collapse: collapse;`
  - Espaçamento interno confortável (`padding: 12px 16px;`).
  - Bordas inferiores sutis entre as linhas (`border-bottom: 1px solid #e2e8f0`).
  - Badges de status arredondados com cores suaves (verde para ativo, cinza/vermelho para inativo).
- **Menu Fixo**:
  - Classe `.menu-fixo` com `position: fixed; top: 0; width: 100%; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 1000;`.
- **Sanfona**:
  - Estilize o cabeçalho clicável e esconda o painel de resposta inicialmente com `display: none;`.

---

## 🧩 Checklist dos 13 Comandos/Conceitos de jQuery

Aqui está a correspondência exata de cada item da sua imagem de estudos:

| # | Tópico da Imagem | Onde e Como Usar no Projeto |
|---|---|---|
| **1** | **Apresentação e Instalação** | Importar o jQuery 3.x via CDN no `<head>` ou antes do fim do `<body>`. |
| **2** | **Carregamento e Inicialização** | Envolver todo o código JS em `$(document).ready(function() { ... });` ou `$(function() { ... });`. |
| **3** | **Lógica de Desenvolvimento** | Utilizar a sintaxe fluente e encadeamento padrão do jQuery: `$(seletor).metodo()`. |
| **4** | **Seletores Hierárquicos** | Zebrar a tabela ou estilizar elementos usando hierarquia: `$("tbody > tr:even")`, ou buscar a linha pai via `$(this).closest("tr")`. |
| **5** | **Eventos de Navegador** | `$(window).scroll(...)` para monitorar a rolagem da página e aplicar o menu fixo; `$(window).resize(...)` para exibir dimensões ou ajustar o layout. |
| **6** | **Eventos de Mouse** | `click` nos botões de slide, botões da tabela e títulos do FAQ; `mouseenter` e `mouseleave` (ou `hover`) para realçar a linha da tabela sob o cursor. |
| **7** | **Eventos de Teclado** | `keyup` no input de busca para filtrar instantaneamente as linhas da tabela pelo nome/email digitado. |
| **8** | **Eventos de Formulários** | `submit` no form de novo usuário (`e.preventDefault()`), `focus` e `blur` para destacar os inputs ativos, e `change` no `<select>` de filtro de status. |
| **9** | **Efeitos Básicos (Hide, Show, Toggle)** | Botão "Alternar Visualização da Tabela" usando `.toggle()`; usar `.hide()` e `.show()` nas linhas que não correspondem à busca. |
| **10** | **Efeitos de Desvanecimento** | Exibir notificação de sucesso com `.fadeIn(300)` e ocultar com `.fadeOut(400)` após 2 segundos; transição suave entre banners do carrossel. |
| **11** | **Menu Fixo (AddClass e RemoveClass)** | No evento de scroll: se `$(window).scrollTop() > 60`, executar `$("header").addClass("menu-fixo")`, caso contrário `removeClass("menu-fixo")`. |
| **12** | **Slide Show / Carrossel de Imagens** | Criar a rotação dos 3 slides ao clicar nas setas `prev` e `next` ou pelos indicadores em bolinhas. |
| **13** | **Efeito Sanfona (Accordion)** | No FAQ: ao clicar no título de uma pergunta, executar `$(this).next(".faq-conteudo").slideToggle(300)` e fechar os outros com `.slideUp(300)`. |

---

## 💡 Dicas de Implementação do jQuery

### Filtro de Busca ao Vivo (Itens 7 e 9)
```javascript
$("#input-busca").on("keyup", function() {
    let valor = $(this).val().toLowerCase();
    $("tbody tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
    });
});
```

### Menu Fixo ao Rolar a Página (Itens 5 e 11)
```javascript
$(window).on("scroll", function() {
    if ($(this).scrollTop() > 60) {
        $("#header-principal").addClass("menu-fixo");
    } else {
        $("#header-principal").removeClass("menu-fixo");
    }
});
```

### Efeito Sanfona / Accordion (Item 13)
```javascript
$(".faq-titulo").on("click", function() {
    // Fecha as outras respostas abertas
    $(".faq-resposta").not($(this).next()).slideUp(300);
    // Alterna a resposta da pergunta clicada
    $(this).next(".faq-resposta").slideToggle(300);
});
```
