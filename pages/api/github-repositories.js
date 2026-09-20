const username = 'RcCola2112'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800')

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json' }
    })

    if (!response.ok) {
      throw new Error('GitHub repositories request failed')
    }

    const repositories = await response.json()
    const publicRepositories = repositories
      .filter(repository => !repository.private)
      .map(repository => ({
        id: repository.id,
        title: repository.name,
        description: repository.description || 'Public repository on GitHub.',
        language: repository.language,
        topics: repository.topics || [],
        url: repository.html_url,
        updatedAt: repository.updated_at,
        stars: repository.stargazers_count,
        forks: repository.forks_count
      }))

    res.status(200).json({ repositories: publicRepositories })
  } catch (error) {
    res.status(200).json({ repositories: [], error: 'Repositories are temporarily unavailable.' })
  }
}
