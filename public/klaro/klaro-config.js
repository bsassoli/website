// Klaro! consent manager configuration
// Docs: https://klaro.org/docs/getting-started/configuration
var klaroConfig = {
  version: 1,
  elementID: "klaro",
  styling: {
    theme: ["light", "bottom", "wide"],
  },
  noAutoLoad: false,
  htmlTexts: true,
  embedded: false,
  groupByPurpose: true,
  storageMethod: "cookie",
  cookieName: "klaro",
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  noticeAsModal: false,
  disablePoweredBy: false,
  lang: "it",

  translations: {
    zz: {
      privacyPolicyUrl: "/privacy-policy/",
    },
    it: {
      privacyPolicyUrl: "/privacy-policy/",
      consentModal: {
        title: "Preferenze cookie",
        description:
          "Qui puoi rivedere e modificare le tue preferenze sui cookie e servizi di terze parti utilizzati su questo sito. I cookie essenziali non sono listati perché sono sempre necessari al funzionamento.",
      },
      consentNotice: {
        title: "Informativa sui cookie",
        changeDescription:
          "Abbiamo aggiornato i nostri servizi dall'ultima tua visita. Rinnova il consenso prima di continuare.",
        description:
          "Questo sito utilizza Google Analytics per capire come viene utilizzato. Nessun dato viene raccolto senza il tuo consenso esplicito. Puoi rivedere la tua scelta in qualsiasi momento. Per maggiori informazioni consulta la {privacyPolicy} e la cookie policy.",
        learnMore: "Scegli",
      },
      ok: "Accetta",
      decline: "Rifiuta",
      save: "Salva",
      close: "Chiudi",
      acceptAll: "Accetta tutto",
      acceptSelected: "Accetta i selezionati",
      service: {
        disableAll: {
          title: "Abilita o disabilita tutti i servizi",
          description:
            "Usa questo interruttore per abilitare o disabilitare tutti i servizi.",
        },
        optOut: {
          title: "(opt-out)",
          description:
            "Questo servizio è caricato automaticamente. Puoi disattivarlo in qualsiasi momento.",
        },
        required: {
          title: "(sempre richiesto)",
          description:
            "Questo servizio è sempre necessario al funzionamento del sito.",
        },
        purposes: "Scopi",
        purpose: "Scopo",
      },
      purposes: {
        analytics: {
          title: "Analisi",
          description:
            "Strumenti per raccogliere statistiche aggregate sull'utilizzo del sito.",
        },
      },
      privacyPolicy: {
        name: "informativa sulla privacy",
        text: "Per saperne di più, leggi la nostra {privacyPolicy}.",
      },
      poweredBy: "Consensi gestiti con Klaro!",
    },
  },

  services: [
    {
      name: "google-analytics",
      title: "Google Analytics 4",
      purposes: ["analytics"],
      cookies: [
        [/^_ga/i, "/", ".sassoli.io"],
        [/^_gid/i, "/", ".sassoli.io"],
        [/^_gat/i, "/", ".sassoli.io"],
      ],
      required: false,
      default: false,
      optOut: false,
      onlyOnce: true,
      callback: function (consent) {
        if (typeof gtag === "function") {
          gtag("consent", "update", {
            ad_storage: consent ? "granted" : "denied",
            analytics_storage: consent ? "granted" : "denied",
            ad_user_data: consent ? "granted" : "denied",
            ad_personalization: consent ? "granted" : "denied",
          });
        }
      },
      translations: {
        it: {
          title: "Google Analytics 4",
          description:
            "Servizio di analisi del traffico web fornito da Google Ireland Ltd. Imposta cookie come _ga e _gid per identificare in modo pseudonimo i visitatori unici.",
        },
      },
    },
  ],
};
