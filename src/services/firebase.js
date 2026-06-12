/**
 * Ponto único de integração futura com Firebase.
 * As funções permanecem inativas até as credenciais do projeto serem definidas.
 */
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const isFirebaseConfigured = () =>
  Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

async function initializePortalFirebase() {
  if (!isFirebaseConfigured()) return null;

  // As importações do SDK serão adicionadas aqui ao conectar o projeto real.
  return {
    auth: null,
    database: null,
    storage: null
  };
}

window.portalFirebase = {
  firebaseConfig,
  isFirebaseConfigured,
  initializePortalFirebase
};
