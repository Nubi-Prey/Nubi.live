const GITHUB_LOGIN = 'Nubi-Prey'
const PORTFOLIO_METADATA_PATH = '.github/portfolio.json'

const PINNED_PROJECTS_QUERY = `
  query PinnedProjects($login: String!, $metadataExpression: String!) {
    repositoryOwner(login: $login) {
      ... on User {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          nodes {
            ... on Repository {
              name
              url
              object(expression: $metadataExpression) {
                ... on Blob {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

export async function getPinnedProjects(){
    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            body: JSON.stringify({
                query: PINNED_PROJECTS_QUERY,
                variables: {
                    login: GITHUB_LOGIN,
                    metadataExpression: `HEAD:${PORTFOLIO_METADATA_PATH}`,
                },
            }),
        })

        if (!response.ok) {
            throw new Error(`GitHub GraphQL respondeu ${response.status}`)
        }

        const { data, errors } = await response.json()

        if (errors) {
            throw new Error(errors.map((error) => error.message).join('; '))
        }

        const nodes = data?.repositoryOwner?.pinnedItems?.nodes ?? []

        return nodes.reduce((projects, repo) => {
            if (!repo.object?.text) return projects

            try {
                const metadata = JSON.parse(repo.object.text)
                projects.push({
                    title: metadata.title ?? repo.name,
                    description: metadata.description,
                    icon: metadata.icon,
                    visitLink: metadata.visitLink ?? repo.url,
                    githubLink: repo.url,
                })
            } catch (error) {
                console.error(`portfolio.json inválido em ${repo.name}:`, error)
            }

            return projects
        }, [])
    } catch (error) {
        console.error('Falha ao buscar projetos fixados no GitHub:', error)
        return []
    }
}
