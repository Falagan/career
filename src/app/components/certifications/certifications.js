import { LocalRepository } from '../../repositories/local-repository';

export default function Certifications() {
  const certifications = LocalRepository.getCertifications();
  return (
    <div>
      Languages!
      <ul>
        {certifications.map((cert) => (
          <li key={cert.id}>
            {cert.i18n} - {cert.org} - {cert.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
