export const GitHubRepository = {
  getRepositories: async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_GITHUB_URL}${process.env.REACT_APP_API_GITHUB_USER}/repos`,
      {
        method: 'GET',
        headers: {
          Authorization: `token ${process.env.REACT_APP_API_GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      }
    );
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    return response.json();
  }
};
