const username = 'RcCola2112'

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1800')

  try {
    const repositoriesResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      headers: { Accept: 'application/vnd.github+json' }
    })

    if (!repositoriesResponse.ok) {
      throw new Error('GitHub repositories request failed')
    }

    const repositories = await repositoriesResponse.json()
    const languageResults = await Promise.all(repositories.map(async repository => {
      const response = await fetch(repository.languages_url, {
        headers: { Accept: 'application/vnd.github+json' }
      })
      return response.ok ? response.json() : {}
    }))

    const totals = languageResults.reduce((allLanguages, languages) => {
      Object.entries(languages).forEach(([language, bytes]) => {
        allLanguages[language] = (allLanguages[language] || 0) + bytes
      })
      return allLanguages
    }, {})

    const totalBytes = Object.values(totals).reduce((sum, bytes) => sum + bytes, 0)
    const languages = Object.entries(totals)
      .sort(([, firstBytes], [, secondBytes]) => secondBytes - firstBytes)
      .slice(0, 6)
      .map(([name, bytes]) => ({
        name,
        percentage: totalBytes ? Math.round((bytes / totalBytes) * 100) : 0
      }))

    res.status(200).json({ repositoryCount: repositories.length, languages })
  } catch (error) {
    res.status(200).json({
      repositoryCount: null,
      fallback: true,
      languages: [
        { name: 'JavaScript', percentage: 32 },
        { name: 'PHP', percentage: 25 },
        { name: 'HTML', percentage: 18 },
        { name: 'CSS', percentage: 12 },
        { name: 'TypeScript', percentage: 8 },
        { name: 'SQL', percentage: 5 }
      ]
    })
  }
}
