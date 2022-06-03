import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { GitHubRepository } from '../../repositories/github-repository';

export default function Projects() {
  const { isLoading, isError, data, error } = useQuery('gitHubRepositories', GitHubRepository.getRepositories);
  const { t } = useTranslation();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      Projects!
      <h2>{t('welcome')}</h2>
      <ul>
        {data.map((repo) => (
          <li key={repo.name}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
}
