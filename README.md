# Nubi.live

Nubi.live é meu primeiro site, criado com o intuito de me aprofundar nas tecnologias de web development. É construído com **Next.js** e **React**.

## Projetos dinâmicos via GitHub GraphQL

A seção de projetos não é hardcoded: ela busca automaticamente os repositórios fixados (pinned) no meu perfil GitHub através da **api.github.com/graphql**, em build time (`getStaticProps` com ISR).

Cada projeto pode trazer sua própria metadata — título, descrição, ícone e link de "visitar" — através de um arquivo `.github/portfolio.json` dentro do próprio repositório do projeto, em vez de depender do README:

```json
{
  "title": "Nome do projeto",
  "description": "Breve descrição do projeto.",
  "icon": "https://raw.githubusercontent.com/usuario/repo/main/caminho/do/icone.svg",
  "visitLink": "https://link-do-projeto.com"
}
```

Fixar um repositório no GitHub já o torna elegível a aparecer no portfólio; sem o `.github/portfolio.json`, ele é considerado ainda não pronto e é ignorado da lista.
