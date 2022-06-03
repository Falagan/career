import { LocalRepository } from '../../repositories/local-repository';

export default function Contact() {
  const contacts = LocalRepository.getContacts();
  return (
    <div>
      Contact!
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.i18n} - {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
