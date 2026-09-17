/** URLs publiques neden.fr — une seule source de vérité (OAuth Branding). */

export const SITE_ORIGIN = 'https://neden.fr';

/** Page d'accueil OAuth / Branding. Jamais app.neden.fr. */
export const HOME_URL = 'https://neden.fr/';

/**
 * Politique de confidentialité — forme canonique (200).
 * Cloudflare Workers Static Assets sert `confidentialite/index.html` à
 * `/confidentialite/` ; `/confidentialite` (sans slash) redirige 307 vers
 * cette URL. Tous les liens OAuth-critiques doivent pointer ici.
 */
export const PRIVACY_URL = 'https://neden.fr/confidentialite/';

/** CGU — même convention slash que la privacy (forme 200). */
export const CGU_URL = 'https://neden.fr/cgu/';

/** Écran de connexion / espace privé. Ce n'est PAS la homepage OAuth. */
export const APP_LOGIN_URL = 'https://app.neden.fr';

export const CONTACT_EMAIL = 'sebchvl@gmail.com';

export const GOOGLE_USER_DATA_POLICY_URL =
  'https://developers.google.com/terms/api-services-user-data-policy';

export const GOOGLE_PERMISSIONS_URL = 'https://myaccount.google.com/permissions';

/** Libellé anglais exigé par Google pour les scopes restreints (Limited Use). */
export const LIMITED_USE_EN =
  "NEDEN's use and transfer to any other app of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements.";

export const HOME_TITLE = 'NEDEN — orchestrateur personnel de recherche d’emploi';

export const HOME_DESCRIPTION =
  'NEDEN est l’orchestrateur personnel de Sébastien Cheval : candidatures, emails Gmail, agenda Google Calendar et documents Google Drive, pour un unique utilisateur. Application privée — pas un service public. Politique de confidentialité : https://neden.fr/confidentialite/';
