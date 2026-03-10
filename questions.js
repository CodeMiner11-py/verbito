// ═══════════════════════════════════════════════════════════════════
// VERBITO QUIZ CURRICULUM
// Import this file in quiz.html via <script src="quiz_data.js"></script>
// ═══════════════════════════════════════════════════════════════════

// ── DIFFICULTY LEVELS ────────────────────────────────────────────────
// 1 = beginner, 2 = elementary, 3 = intermediate, 4 = advanced, 5 = fluent

// ── QUESTION BANK ────────────────────────────────────────────────────
// Each question: { id, category, difficulty, question, options, answer, explanation }
// Categories: "conjugation", "vocab", "grammar"

const QUESTION_BANK = [

  // ══════════════════════════════════════
  // CONJUGATION — DIFFICULTY 1
  // ══════════════════════════════════════
  {
    id: "c1_1",
    category: "conjugation",
    difficulty: 1,
    question: "What is the correct conjugation of 'hablar' (to speak) for 'yo' in the present tense?",
    options: ["hablas", "hablo", "habla", "hablamos"],
    answer: "hablo",
    explanation: "In the present tense, -ar verbs take the ending -o for 'yo'. hablar → hablo."
  },
  {
    id: "c1_2",
    category: "conjugation",
    difficulty: 1,
    question: "Fill in the blank: 'Tú _____ en casa.' (You eat at home.) — comer",
    options: ["como", "come", "comes", "comen"],
    answer: "comes",
    explanation: "-er verbs take -es for tú in the present tense. comer → comes."
  },
  {
    id: "c1_3",
    category: "conjugation",
    difficulty: 1,
    question: "What is 'vivir' (to live) conjugated for 'nosotros' in the present tense?",
    options: ["viven", "vivís", "vivimos", "vivo"],
    answer: "vivimos",
    explanation: "-ir verbs take -imos for nosotros in the present tense."
  },
  {
    id: "c1_4",
    category: "conjugation",
    difficulty: 1,
    question: "'Ellos _____ mucho.' (They work a lot.) — trabajar",
    options: ["trabaja", "trabajo", "trabajas", "trabajan"],
    answer: "trabajan",
    explanation: "-ar verbs take -an for ellos/ellas in the present tense."
  },
  {
    id: "c1_5",
    category: "conjugation",
    difficulty: 1,
    question: "What is 'ser' (to be) for 'yo' in the present tense?",
    options: ["eres", "es", "soy", "somos"],
    answer: "soy",
    explanation: "ser is irregular. yo → soy."
  },
  {
    id: "c1_6",
    category: "conjugation",
    difficulty: 1,
    question: "'Ella _____ estudiante.' (She is a student.) — ser",
    options: ["soy", "somos", "eres", "es"],
    answer: "es",
    explanation: "ser conjugated for él/ella is 'es'."
  },
  {
    id: "c1_7",
    category: "conjugation",
    difficulty: 1,
    question: "What is 'estar' (to be) for 'yo' in the present tense?",
    options: ["estoy", "está", "estás", "estamos"],
    answer: "estoy",
    explanation: "estar is irregular. yo → estoy."
  },
  {
    id: "c1_8",
    category: "conjugation",
    difficulty: 1,
    question: "'Vosotros _____ la verdad.' (You all speak the truth.) — hablar",
    options: ["habláis", "hablan", "hablas", "hablamos"],
    answer: "habláis",
    explanation: "-ar verbs take -áis for vosotros in the present tense."
  },

  // ══════════════════════════════════════
  // CONJUGATION — DIFFICULTY 2
  // ══════════════════════════════════════
  {
    id: "c2_1",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'tener' (to have) for 'yo' in the present tense?",
    options: ["tienes", "tiene", "tengo", "tenemos"],
    answer: "tengo",
    explanation: "tener is irregular. yo → tengo (the 'go' irregular)."
  },
  {
    id: "c2_2",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'ir' (to go) for 'tú' in the present tense?",
    options: ["voy", "va", "vas", "van"],
    answer: "vas",
    explanation: "ir is fully irregular in the present. tú → vas."
  },
  {
    id: "c2_3",
    category: "conjugation",
    difficulty: 2,
    question: "'Yo _____ la tarea.' (I do the homework.) — hacer",
    options: ["haces", "hace", "hacemos", "hago"],
    answer: "hago",
    explanation: "hacer is irregular. yo → hago."
  },
  {
    id: "c2_4",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'poder' (to be able to) for 'tú' in the present tense?",
    options: ["puedo", "podemos", "puede", "puedes"],
    answer: "puedes",
    explanation: "poder is a stem-changing verb (o→ue). tú → puedes."
  },
  {
    id: "c2_5",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'hablar' for 'yo' in the preterite (past) tense?",
    options: ["hablaba", "hablé", "habló", "hablaste"],
    answer: "hablé",
    explanation: "-ar verbs take -é for yo in the preterite tense."
  },
  {
    id: "c2_6",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'comer' for 'él' in the preterite tense?",
    options: ["comió", "comía", "come", "comiste"],
    answer: "comió",
    explanation: "-er verbs take -ió for él/ella in the preterite tense."
  },
  {
    id: "c2_7",
    category: "conjugation",
    difficulty: 2,
    question: "'Nosotros _____ al parque.' (We went to the park.) — ir, preterite",
    options: ["fuimos", "íbamos", "vamos", "fui"],
    answer: "fuimos",
    explanation: "ir/ser share the same preterite forms. nosotros → fuimos."
  },
  {
    id: "c2_8",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'querer' (to want) for 'ella' in the present tense?",
    options: ["queremos", "quiero", "quieres", "quiere"],
    answer: "quiere",
    explanation: "querer is stem-changing (e→ie). ella → quiere."
  },
  {
    id: "c2_9",
    category: "conjugation",
    difficulty: 2,
    question: "What is 'vivir' for 'tú' in the preterite tense?",
    options: ["vivía", "viviste", "viví", "vivió"],
    answer: "viviste",
    explanation: "-ir verbs take -iste for tú in the preterite tense."
  },
  {
    id: "c2_10",
    category: "conjugation",
    difficulty: 2,
    question: "'Yo _____ en Madrid.' (I used to live in Madrid.) — vivir, imperfect",
    options: ["viví", "vivía", "vivo", "viviré"],
    answer: "vivía",
    explanation: "-ir verbs take -ía for yo in the imperfect tense."
  },

  // ══════════════════════════════════════
  // CONJUGATION — DIFFICULTY 3
  // ══════════════════════════════════════
  {
    id: "c3_1",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'ser' for 'ellos' in the imperfect tense?",
    options: ["fueron", "son", "eran", "sean"],
    answer: "eran",
    explanation: "ser is irregular in the imperfect. ellos → eran."
  },
  {
    id: "c3_2",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'tener' for 'nosotros' in the preterite tense?",
    options: ["teníamos", "tenemos", "tuvimos", "tuvieron"],
    answer: "tuvimos",
    explanation: "tener has an irregular preterite stem 'tuv-'. nosotros → tuvimos."
  },
  {
    id: "c3_3",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'hablar' for 'yo' in the future tense?",
    options: ["hablaré", "hablaría", "hablo", "hablaré"],
    answer: "hablaré",
    explanation: "Regular future: keep the infinitive, add -é for yo. hablar → hablaré."
  },
  {
    id: "c3_4",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'hacer' for 'tú' in the future tense?",
    options: ["hacerás", "harás", "haces", "habrás"],
    answer: "harás",
    explanation: "hacer has an irregular future stem 'har-'. tú → harás."
  },
  {
    id: "c3_5",
    category: "conjugation",
    difficulty: 3,
    question: "'Ella _____ si pudiera.' (She would go if she could.) — ir, conditional",
    options: ["irá", "fue", "iría", "va"],
    answer: "iría",
    explanation: "The conditional of ir is regular: ir + -ía. ella → iría."
  },
  {
    id: "c3_6",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'pedir' (to ask for) for 'ellos' in the preterite tense?",
    options: ["pidieron", "pedieron", "pedían", "piden"],
    answer: "pidieron",
    explanation: "pedir is an e→i stem-changer. In the preterite, 3rd person stems change: ellos → pidieron."
  },
  {
    id: "c3_7",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'venir' for 'yo' in the preterite tense?",
    options: ["venía", "vine", "vengo", "vino"],
    answer: "vine",
    explanation: "venir has an irregular preterite stem 'vin-'. yo → vine."
  },
  {
    id: "c3_8",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'saber' for 'yo' in the preterite tense?",
    options: ["sabía", "supe", "sé", "sabré"],
    answer: "supe",
    explanation: "saber has an irregular preterite stem 'sup-'. yo → supe."
  },
  {
    id: "c3_9",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'tener' for 'tú' in the future tense?",
    options: ["tienes", "tendrás", "tenías", "tendrás"],
    answer: "tendrás",
    explanation: "tener has an irregular future stem 'tendr-'. tú → tendrás."
  },
  {
    id: "c3_10",
    category: "conjugation",
    difficulty: 3,
    question: "What is 'dormir' (to sleep) for 'él' in the preterite tense?",
    options: ["dormió", "durmió", "dormía", "duerme"],
    answer: "durmió",
    explanation: "dormir is o→ue stem-changing. In the preterite, 3rd person changes: él → durmió."
  },

  // ══════════════════════════════════════
  // CONJUGATION — DIFFICULTY 4
  // ══════════════════════════════════════
  {
    id: "c4_1",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'hablar' for 'tú' in the present subjunctive?",
    options: ["hablas", "hables", "hablés", "hable"],
    answer: "hables",
    explanation: "For -ar verbs in the subjunctive, use -e endings. tú → hables."
  },
  {
    id: "c4_2",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'ser' for 'nosotros' in the present subjunctive?",
    options: ["somos", "seamos", "éramos", "seámos"],
    answer: "seamos",
    explanation: "ser is irregular in the subjunctive. nosotros → seamos."
  },
  {
    id: "c4_3",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'poder' for 'yo' in the present subjunctive?",
    options: ["pueda", "puedo", "podría", "puede"],
    answer: "pueda",
    explanation: "poder stem-changes (o→ue) in the subjunctive too. yo → pueda."
  },
  {
    id: "c4_4",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'ir' for 'ellos' in the present subjunctive?",
    options: ["van", "vayan", "fueran", "irían"],
    answer: "vayan",
    explanation: "ir is irregular in the subjunctive. ellos → vayan."
  },
  {
    id: "c4_5",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'decir' for 'yo' in the conditional tense?",
    options: ["diré", "dije", "diría", "digo"],
    answer: "diría",
    explanation: "decir has irregular conditional stem 'dir-'. yo → diría."
  },
  {
    id: "c4_6",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'conducir' (to drive) for 'yo' in the present tense?",
    options: ["conduzco", "conduzo", "conduco", "conducisco"],
    answer: "conduzco",
    explanation: "Verbs ending in -ducir have -zco for yo in the present: conduzco."
  },
  {
    id: "c4_7",
    category: "conjugation",
    difficulty: 4,
    question: "What is 'haber' for 'ellos' in the future tense?",
    options: ["habrán", "haberán", "habían", "han"],
    answer: "habrán",
    explanation: "haber has the irregular future stem 'habr-'. ellos → habrán."
  },

  // ══════════════════════════════════════
  // CONJUGATION — DIFFICULTY 5
  // ══════════════════════════════════════
  {
    id: "c5_1",
    category: "conjugation",
    difficulty: 5,
    question: "What is 'caber' (to fit) for 'yo' in the present tense?",
    options: ["cabo", "capo", "quepo", "cabe"],
    answer: "quepo",
    explanation: "caber is irregular. yo → quepo (unique irregular form)."
  },
  {
    id: "c5_2",
    category: "conjugation",
    difficulty: 5,
    question: "What is 'traer' for 'ellos' in the preterite tense?",
    options: ["trajeron", "trujeron", "traieron", "traieron"],
    answer: "trajeron",
    explanation: "traer has irregular preterite stem 'traj-'. ellos → trajeron."
  },
  {
    id: "c5_3",
    category: "conjugation",
    difficulty: 5,
    question: "What is 'oír' (to hear) for 'él' in the preterite tense?",
    options: ["oió", "oyó", "oió", "oí"],
    answer: "oyó",
    explanation: "oír changes i→y in preterite 3rd person. él → oyó."
  },

  // ══════════════════════════════════════
  // VOCAB — DIFFICULTY 1
  // ══════════════════════════════════════
  {
    id: "v1_1",
    category: "vocab",
    difficulty: 1,
    question: "What does 'casa' mean in English?",
    options: ["Car", "Street", "House", "School"],
    answer: "House",
    explanation: "'Casa' means house or home."
  },
  {
    id: "v1_2",
    category: "vocab",
    difficulty: 1,
    question: "What does 'perro' mean?",
    options: ["Cat", "Dog", "Bird", "Fish"],
    answer: "Dog",
    explanation: "'Perro' means dog. 'Gato' is cat."
  },
  {
    id: "v1_3",
    category: "vocab",
    difficulty: 1,
    question: "How do you say 'Thank you' in Spanish?",
    options: ["Por favor", "De nada", "Gracias", "Hola"],
    answer: "Gracias",
    explanation: "'Gracias' means thank you. 'De nada' means you're welcome."
  },
  {
    id: "v1_4",
    category: "vocab",
    difficulty: 1,
    question: "What does 'agua' mean?",
    options: ["Fire", "Air", "Earth", "Water"],
    answer: "Water",
    explanation: "'Agua' means water."
  },
  {
    id: "v1_5",
    category: "vocab",
    difficulty: 1,
    question: "What does 'grande' mean?",
    options: ["Small", "Big", "Old", "New"],
    answer: "Big",
    explanation: "'Grande' means big or large. 'Pequeño' means small."
  },
  {
    id: "v1_6",
    category: "vocab",
    difficulty: 1,
    question: "What does 'amigo' mean?",
    options: ["Enemy", "Teacher", "Friend", "Family"],
    answer: "Friend",
    explanation: "'Amigo' means friend (male). 'Amiga' is the female form."
  },
  {
    id: "v1_7",
    category: "vocab",
    difficulty: 1,
    question: "What does 'libro' mean?",
    options: ["Pen", "Book", "Table", "Chair"],
    answer: "Book",
    explanation: "'Libro' means book."
  },
  {
    id: "v1_8",
    category: "vocab",
    difficulty: 1,
    question: "How do you say 'Good morning' in Spanish?",
    options: ["Buenas noches", "Buenas tardes", "Buenos días", "Hasta luego"],
    answer: "Buenos días",
    explanation: "'Buenos días' means good morning. 'Buenas tardes' is good afternoon."
  },

  // ══════════════════════════════════════
  // VOCAB — DIFFICULTY 2
  // ══════════════════════════════════════
  {
    id: "v2_1",
    category: "vocab",
    difficulty: 2,
    question: "What does 'siempre' mean?",
    options: ["Never", "Sometimes", "Always", "Often"],
    answer: "Always",
    explanation: "'Siempre' means always. 'Nunca' means never."
  },
  {
    id: "v2_2",
    category: "vocab",
    difficulty: 2,
    question: "What does 'mientras' mean?",
    options: ["Because", "Although", "While", "Before"],
    answer: "While",
    explanation: "'Mientras' means while or as long as."
  },
  {
    id: "v2_3",
    category: "vocab",
    difficulty: 2,
    question: "What does 'ayer' mean?",
    options: ["Tomorrow", "Today", "Yesterday", "Later"],
    answer: "Yesterday",
    explanation: "'Ayer' means yesterday. 'Mañana' means tomorrow or morning."
  },
  {
    id: "v2_4",
    category: "vocab",
    difficulty: 2,
    question: "What does 'cada' mean?",
    options: ["Some", "Each / Every", "Many", "Few"],
    answer: "Each / Every",
    explanation: "'Cada' means each or every. e.g. 'cada día' = every day."
  },
  {
    id: "v2_5",
    category: "vocab",
    difficulty: 2,
    question: "What does 'buscar' mean?",
    options: ["To find", "To buy", "To look for", "To bring"],
    answer: "To look for",
    explanation: "'Buscar' means to look for or search."
  },
  {
    id: "v2_6",
    category: "vocab",
    difficulty: 2,
    question: "What does 'llegar' mean?",
    options: ["To leave", "To call", "To arrive", "To carry"],
    answer: "To arrive",
    explanation: "'Llegar' means to arrive."
  },
  {
    id: "v2_7",
    category: "vocab",
    difficulty: 2,
    question: "What does 'empezar' mean?",
    options: ["To finish", "To start", "To wait", "To stop"],
    answer: "To start",
    explanation: "'Empezar' means to start or begin. Note it's a stem-changer (e→ie)."
  },
  {
    id: "v2_8",
    category: "vocab",
    difficulty: 2,
    question: "What does 'conocer' mean?",
    options: ["To know a fact", "To meet / know a person", "To understand", "To remember"],
    answer: "To meet / know a person",
    explanation: "'Conocer' means to know a person or place. 'Saber' means to know a fact."
  },

  // ══════════════════════════════════════
  // VOCAB — DIFFICULTY 3
  // ══════════════════════════════════════
  {
    id: "v3_1",
    category: "vocab",
    difficulty: 3,
    question: "What is the difference between 'por' and 'para'?",
    options: [
      "They are interchangeable",
      "'Por' = because of / through, 'para' = in order to / for a purpose",
      "'Por' = in order to, 'para' = because of",
      "Both mean 'for' with no difference"
    ],
    answer: "'Por' = because of / through, 'para' = in order to / for a purpose",
    explanation: "'Por' refers to cause, duration, exchange. 'Para' refers to purpose, destination, deadline."
  },
  {
    id: "v3_2",
    category: "vocab",
    difficulty: 3,
    question: "What does 'sin embargo' mean?",
    options: ["Therefore", "In addition", "Nevertheless / However", "On the other hand"],
    answer: "Nevertheless / However",
    explanation: "'Sin embargo' is a transition phrase meaning nevertheless or however."
  },
  {
    id: "v3_3",
    category: "vocab",
    difficulty: 3,
    question: "What does 'lograr' mean?",
    options: ["To try", "To fail", "To achieve / manage to", "To want"],
    answer: "To achieve / manage to",
    explanation: "'Lograr' means to achieve or to manage to do something."
  },
  {
    id: "v3_4",
    category: "vocab",
    difficulty: 3,
    question: "What does 'aunque' mean?",
    options: ["Because", "Although / Even if", "However", "Unless"],
    answer: "Although / Even if",
    explanation: "'Aunque' means although or even if. Can trigger subjunctive depending on context."
  },
  {
    id: "v3_5",
    category: "vocab",
    difficulty: 3,
    question: "What does 'a menos que' mean?",
    options: ["As long as", "So that", "Unless", "Before"],
    answer: "Unless",
    explanation: "'A menos que' means unless and always triggers the subjunctive."
  },

  // ══════════════════════════════════════
  // VOCAB — DIFFICULTY 4
  // ══════════════════════════════════════
  {
    id: "v4_1",
    category: "vocab",
    difficulty: 4,
    question: "What does 'imprescindible' mean?",
    options: ["Impossible", "Indispensable / Essential", "Incredible", "Impractical"],
    answer: "Indispensable / Essential",
    explanation: "'Imprescindible' means indispensable or absolutely necessary."
  },
  {
    id: "v4_2",
    category: "vocab",
    difficulty: 4,
    question: "What does 'madrugada' mean?",
    options: ["Noon", "Sunrise", "Early morning (2–5am)", "Dusk"],
    answer: "Early morning (2–5am)",
    explanation: "'Madrugada' refers specifically to the early hours of the morning, roughly 2–5am."
  },
  {
    id: "v4_3",
    category: "vocab",
    difficulty: 4,
    question: "What does 'añorar' mean?",
    options: ["To hate", "To ignore", "To yearn / miss deeply", "To age"],
    answer: "To yearn / miss deeply",
    explanation: "'Añorar' means to long for or deeply miss something from the past."
  },

  // ══════════════════════════════════════
  // GRAMMAR — DIFFICULTY 1
  // ══════════════════════════════════════
  {
    id: "g1_1",
    category: "grammar",
    difficulty: 1,
    question: "In Spanish, nouns have gender. What gender is 'la mesa' (the table)?",
    options: ["Masculine", "Feminine", "Neutral", "It depends"],
    answer: "Feminine",
    explanation: "'La' is the feminine definite article. Words with 'la' are feminine."
  },
  {
    id: "g1_2",
    category: "grammar",
    difficulty: 1,
    question: "Which article means 'the' for a masculine noun?",
    options: ["la", "una", "el", "un"],
    answer: "el",
    explanation: "'El' is the masculine definite article. 'La' is feminine."
  },
  {
    id: "g1_3",
    category: "grammar",
    difficulty: 1,
    question: "How do you make most Spanish nouns plural?",
    options: ["Add -es", "Add -s", "Add -s or -es depending on the ending", "Change the article only"],
    answer: "Add -s or -es depending on the ending",
    explanation: "Words ending in a vowel add -s (mesa → mesas). Words ending in a consonant add -es (ciudad → ciudades)."
  },
  {
    id: "g1_4",
    category: "grammar",
    difficulty: 1,
    question: "Adjectives in Spanish must agree with the noun in _____.",
    options: ["Tense and mood", "Gender and number", "Person and number", "Case and gender"],
    answer: "Gender and number",
    explanation: "Spanish adjectives match the noun they describe in gender (masculine/feminine) and number (singular/plural)."
  },
  {
    id: "g1_5",
    category: "grammar",
    difficulty: 1,
    question: "Which sentence is correct?",
    options: ["El chica alta", "La chica alta", "La chica alto", "El chica alto"],
    answer: "La chica alta",
    explanation: "'Chica' is feminine, so the article is 'la' and the adjective takes the feminine form 'alta'."
  },

  // ══════════════════════════════════════
  // GRAMMAR — DIFFICULTY 2
  // ══════════════════════════════════════
  {
    id: "g2_1",
    category: "grammar",
    difficulty: 2,
    question: "When do you use 'ser' vs 'estar'? Which is correct for a permanent characteristic?",
    options: ["Estar", "Ser", "Either works", "Neither — use tener"],
    answer: "Ser",
    explanation: "'Ser' is for permanent or inherent traits (origin, identity, material). 'Estar' is for states and conditions."
  },
  {
    id: "g2_2",
    category: "grammar",
    difficulty: 2,
    question: "'Estoy _____ (tired).' Which form is correct?",
    options: ["cansada/cansado", "cansado only", "cansar", "cansamiento"],
    answer: "cansada/cansado",
    explanation: "With estar, adjectives still agree with the subject's gender. cansado (masc) / cansada (fem)."
  },
  {
    id: "g2_3",
    category: "grammar",
    difficulty: 2,
    question: "What does the personal 'a' do in Spanish?",
    options: [
      "Marks the indirect object",
      "Marks a direct object that is a person",
      "Shows possession",
      "Connects two clauses"
    ],
    answer: "Marks a direct object that is a person",
    explanation: "The personal 'a' is placed before a direct object when it is a specific person. e.g. 'Veo a María.'"
  },
  {
    id: "g2_4",
    category: "grammar",
    difficulty: 2,
    question: "Which is correct: 'Tengo _____ años.' (I am 20 years old.)",
    options: ["soy 20", "estoy 20", "veinte", "tengo 20 — veinte"],
    answer: "tengo 20 — veinte",
    explanation: "In Spanish you 'have' years, not 'are' years. 'Tengo veinte años.'"
  },
  {
    id: "g2_5",
    category: "grammar",
    difficulty: 2,
    question: "How do you form a negative sentence in Spanish?",
    options: [
      "Put 'no' after the verb",
      "Put 'no' before the verb",
      "Add 'not' before the subject",
      "Change the verb ending"
    ],
    answer: "Put 'no' before the verb",
    explanation: "To negate in Spanish, place 'no' directly before the conjugated verb. 'No hablo inglés.'"
  },

  // ══════════════════════════════════════
  // GRAMMAR — DIFFICULTY 3
  // ══════════════════════════════════════
  {
    id: "g3_1",
    category: "grammar",
    difficulty: 3,
    question: "When do you use the preterite vs the imperfect?",
    options: [
      "Preterite = completed actions, imperfect = ongoing/habitual past",
      "Preterite = ongoing past, imperfect = completed actions",
      "They are interchangeable",
      "Preterite = past, imperfect = future"
    ],
    answer: "Preterite = completed actions, imperfect = ongoing/habitual past",
    explanation: "Preterite is for specific completed events. Imperfect is for repeated, habitual, or ongoing past actions."
  },
  {
    id: "g3_2",
    category: "grammar",
    difficulty: 3,
    question: "Which triggers the subjunctive mood?",
    options: [
      "Statements of fact",
      "Expressions of doubt, will, emotion, or unreality",
      "Questions",
      "Future tense sentences"
    ],
    answer: "Expressions of doubt, will, emotion, or unreality",
    explanation: "The subjunctive follows WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, Ojalá."
  },
  {
    id: "g3_3",
    category: "grammar",
    difficulty: 3,
    question: "Which sentence correctly uses the subjunctive?",
    options: [
      "Espero que ella viene.",
      "Espero que ella venga.",
      "Espero que ella vendrá.",
      "Espero que ella vino."
    ],
    answer: "Espero que ella venga.",
    explanation: "'Esperar que' (to hope that) triggers the subjunctive. venga is the subjunctive form of venir."
  },
  {
    id: "g3_4",
    category: "grammar",
    difficulty: 3,
    question: "What is the difference between 'saber' and 'conocer'?",
    options: [
      "No difference",
      "'Saber' = to know facts/how to, 'conocer' = to know people/places",
      "'Saber' = to know people, 'conocer' = to know facts",
      "Both mean to meet someone"
    ],
    answer: "'Saber' = to know facts/how to, 'conocer' = to know people/places",
    explanation: "'Sé hablar español' (I know how to speak Spanish). 'Conozco a María' (I know María)."
  },
  {
    id: "g3_5",
    category: "grammar",
    difficulty: 3,
    question: "What are reflexive verbs used for?",
    options: [
      "When the subject acts on itself",
      "When two people act on each other",
      "Both of the above",
      "For passive constructions only"
    ],
    answer: "Both of the above",
    explanation: "Reflexive verbs (me, te, se, nos, os, se) express either self-directed action (lavarse) or reciprocal action (verse)."
  },

  // ══════════════════════════════════════
  // GRAMMAR — DIFFICULTY 4
  // ══════════════════════════════════════
  {
    id: "g4_1",
    category: "grammar",
    difficulty: 4,
    question: "Which sentence uses 'por' correctly?",
    options: [
      "Estudio para aprender.",
      "Te llamo por la mañana.",
      "Voy para Madrid.",
      "Lo hice por terminar rápido."
    ],
    answer: "Te llamo por la mañana.",
    explanation: "'Por' is used for time periods (por la mañana = in the morning). 'Para' is used for destinations and purposes."
  },
  {
    id: "g4_2",
    category: "grammar",
    difficulty: 4,
    question: "What does the 'se' in 'Se habla español aquí' indicate?",
    options: [
      "Reflexive action",
      "Passive/impersonal construction",
      "Reciprocal action",
      "Indirect object"
    ],
    answer: "Passive/impersonal construction",
    explanation: "'Se habla español' is the passive se — it means 'Spanish is spoken here' without naming a subject."
  },
  {
    id: "g4_3",
    category: "grammar",
    difficulty: 4,
    question: "In 'Había comido antes de llegar', what tense is 'había comido'?",
    options: ["Preterite", "Imperfect", "Past perfect (pluperfect)", "Conditional perfect"],
    answer: "Past perfect (pluperfect)",
    explanation: "Había + past participle = past perfect. It means 'had eaten' — an action completed before another past action."
  },
  {
    id: "g4_4",
    category: "grammar",
    difficulty: 4,
    question: "Which is an example of the 'a' personal used correctly?",
    options: [
      "Veo a la montaña.",
      "Busco a un buen médico.",
      "Compré a un libro.",
      "Tengo a mucho trabajo."
    ],
    answer: "Busco a un buen médico.",
    explanation: "The personal 'a' is used with specific people as direct objects. A mountain is not a person, so it doesn't take the personal 'a'."
  },

  // ══════════════════════════════════════
  // GRAMMAR — DIFFICULTY 5
  // ══════════════════════════════════════
  {
    id: "g5_1",
    category: "grammar",
    difficulty: 5,
    question: "In 'Si tuviera dinero, viajaría', what tense is 'tuviera'?",
    options: ["Preterite", "Present subjunctive", "Imperfect subjunctive", "Conditional"],
    answer: "Imperfect subjunctive",
    explanation: "This is a hypothetical 'if' clause (si + imperfect subjunctive + conditional). 'Tuviera' is imperfect subjunctive of tener."
  },
  {
    id: "g5_2",
    category: "grammar",
    difficulty: 5,
    question: "What is the difference between 'lo que' and 'el que'?",
    options: [
      "No difference",
      "'Lo que' refers to abstract ideas/things; 'el que' refers to specific nouns",
      "'El que' is always feminine",
      "'Lo que' is only used in questions"
    ],
    answer: "'Lo que' refers to abstract ideas/things; 'el que' refers to specific nouns",
    explanation: "'Lo que dices es cierto' (What you say is true — abstract). 'El que llegó primero ganó' (The one who arrived first won — specific person)."
  },
];

// ── FIRESTORE SAVE FUNCTION ──────────────────────────────────────────
// Call this after the quiz ends with the user's uid and results
// results = { score, total, categories: { conjugation, vocab, grammar }, answers: [...] }
async function saveQuizResult(db, uid, results) {
  const { doc, setDoc, serverTimestamp } = await import("https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js");

  const userRef = doc(db, "users", uid);
  await setDoc(userRef, {
    quizScore:      results.score,
    quizTotal:      results.total,
    quizCategories: results.categories,
    quizTakenAt:    serverTimestamp(),
    quizAnswers:    results.answers,
    hasCompletedQuiz: true,
  }, { merge: true }); // merge: true so we don't overwrite other user data
}

// ── ADAPTIVE QUIZ ENGINE ─────────────────────────────────────────────
// Manages question selection based on difficulty

class AdaptiveQuiz {
  constructor(totalQuestions = 20) {
    this.totalQuestions  = totalQuestions;
    this.currentDiff     = 2;        // start at difficulty 2
    this.asked           = new Set();
    this.answers         = [];
    this.score           = 0;
    this.questionIndex   = 0;
    this.streakCorrect   = 0;
    this.streakWrong     = 0;
  }

  // Shuffle array in place
  _shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Get next question
  nextQuestion() {
    if (this.questionIndex >= this.totalQuestions) return null;

    // Spread across categories
    const categories = ["conjugation", "vocab", "grammar"];
    const targetCat  = categories[this.questionIndex % 3];

    // Find candidates at current difficulty, matching category, not yet asked
    let candidates = QUESTION_BANK.filter(q =>
      q.category === targetCat &&
      q.difficulty === this.currentDiff &&
      !this.asked.has(q.id)
    );

    // If none available, relax category constraint
    if (candidates.length === 0) {
      candidates = QUESTION_BANK.filter(q =>
        q.difficulty === this.currentDiff &&
        !this.asked.has(q.id)
      );
    }

    // If still none, expand difficulty by ±1
    if (candidates.length === 0) {
      candidates = QUESTION_BANK.filter(q =>
        Math.abs(q.difficulty - this.currentDiff) <= 1 &&
        !this.asked.has(q.id)
      );
    }

    // Last resort: any unasked question
    if (candidates.length === 0) {
      candidates = QUESTION_BANK.filter(q => !this.asked.has(q.id));
    }

    if (candidates.length === 0) return null;

    this._shuffle(candidates);
    const question = candidates[0];
    this.asked.add(question.id);
    this.questionIndex++;

    // Shuffle the options so the answer isn't always in the same position
    const shuffledOptions = this._shuffle([...question.options]);
    return { ...question, options: shuffledOptions };
  }

  // Record answer and adjust difficulty
  recordAnswer(question, selectedAnswer) {
    const correct = selectedAnswer === question.answer;

    if (correct) {
      this.score++;
      this.streakCorrect++;
      this.streakWrong = 0;
      if (this.streakCorrect >= 2 && this.currentDiff < 5) {
        this.currentDiff++;
        this.streakCorrect = 0;
      }
    } else {
      this.streakWrong++;
      this.streakCorrect = 0;
      if (this.streakWrong >= 2 && this.currentDiff > 1) {
        this.currentDiff--;
        this.streakWrong = 0;
      }
    }

    this.answers.push({
      questionId: question.id,
      category:   question.category,
      difficulty: question.difficulty,
      correct,
      selected:   selectedAnswer,
      answer:     question.answer,
    });
  }

  // Get final results (call after quiz ends)
  getResults() {
    const cats = { conjugation: { correct: 0, total: 0 }, vocab: { correct: 0, total: 0 }, grammar: { correct: 0, total: 0 } };
    for (const a of this.answers) {
      cats[a.category].total++;
      if (a.correct) cats[a.category].correct++;
    }

    // Score out of 20: raw correct + difficulty bonus
    const difficultyBonus = this.answers.reduce((sum, a) => sum + (a.correct ? (a.difficulty - 1) * 0.15 : 0), 0);
    const rawScore = (this.score / this.totalQuestions) * 20;
    const finalScore = Math.min(20, Math.round((rawScore + difficultyBonus) * 10) / 10);

    return {
      score:      finalScore,
      total:      this.totalQuestions,
      raw:        this.score,
      categories: cats,
      answers:    this.answers,
    };
  }
}