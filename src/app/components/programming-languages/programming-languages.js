import { LocalRepository } from '../../repositories/local-repository';

export default function ProgrammingLanguages() {
  const programmingLanguages = LocalRepository.getProgrammingLanguages();
  return (
    <div>
      Programming Languages!
      <ul>
        {programmingLanguages.map((language) => (
          <li key={language.value}>
            {language.value} - {language.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
