import { CertificationsList } from '../static/certifications-list';
import { ContactList } from '../static/contact-list';
import { LanguagesList } from '../static/languages-list';
import { ProgrammingLanguagesList } from '../static/programming-languages-list';
import { ToolsList } from '../static/tools-list';

export const LocalRepository = {
  getTools: () => ToolsList,
  getCertifications: () => CertificationsList,
  getContacts: () => ContactList,
  getProgrammingLanguages: () => ProgrammingLanguagesList,
  getLanguages: () => LanguagesList
};
