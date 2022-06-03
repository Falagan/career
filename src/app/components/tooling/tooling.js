import { LocalRepository } from '../../repositories/local-repository';

export default function Tooling() {
  const tooling = LocalRepository.getTools();
  return (
    <div>
      Tooling!
      <ul>
        {tooling.map((tool) => (
          <li key={tool.value}>
            {tool.value} - {tool.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
