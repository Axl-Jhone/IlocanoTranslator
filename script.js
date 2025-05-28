const phrases = [
  // Greetings
  {
    category: "greetings",
    english: "Good morning",
    tagalog: "Magandang umaga",
    ilocano: "Naimbag nga bigat",
    audio: "Naimbag_nag_bigat.mp3",
  },
  {
    category: "greetings",
    english: "Good evening",
    tagalog: "Magandang gabi",
    ilocano: "Naimbag ngarabii",
    audio: "Naimbag_ngarabii.mp3",
  },
  {
    category: "greetings",
    english: "How are you?",
    tagalog: "Kamusta ka?",
    ilocano: "Kumusta kan?",
    audio: "Kumusta_kan.mp3",
  },
  {
    category: "greetings",
    english: "Good afternoon",
    tagalog: "Magandang hapon",
    ilocano: "Naimbag nga malem",
    audio: "Naimbag_nga_malem.mp3",
  },
  {
    category: "greetings",
    english: "Nice to meet you",
    tagalog: "Ikinagagalak kitang makilala",
    ilocano: "Naragsakak nga makilala ka",
    audio: "Naragsakak_nga_makilala_ka.mp3",
  },
  {
    category: "greetings",
    english: "See you later",
    tagalog: "Kita tayo mamaya",
    ilocano: "Agkikita tayo manen madamdama",
    audio: "Agkikita_tayo_manen_madamdama.mp3",
  },

  // For Transport
  {
    category: "transport",
    english: "Where is the bus station?",
    tagalog: "Nasaan ang istasyon ng bus?",
    ilocano: "Ayanna ti istasyon ti bus?",
    audio: "Ayanna_it_istasyon_ti_bus.mp3",
  },
  {
    category: "transport",
    english: "Can you take me there?",
    tagalog: "Maaari mo ba akong ihatid doon?",
    ilocano: "Mabalin mo kadinga idalanak idiay?",
    audio: "Mabalin_mo_nga_idalanak_idiay.mp3",
  },
  {
    category: "transport",
    english: "How long is the trip?",
    tagalog: "Gaano katagal ang biyahe?",
    ilocano: "Kaano katagal ti biyahe?",
    audio: "Kaano_katagal_ti_biyahe.mp3",
  },
  {
    category: "transport",
    english: "Where is the jeep terminal?",
    tagalog: "Nasaan ang terminal ng jeep?",
    ilocano: "Ayanna ti terminal ti jeep?",
    audio: "Ayanna_ti_terminal_ti_jeep.mp3",
  },
  {
    category: "transport",
    english: "I want to go to Baguio",
    tagalog: "Gusto kong pumunta sa Baguio",
    ilocano: "Kayatko nga mapan idiay Baguio",
    audio: "Kayatko_mapan_idiay_Baguio.mp3",
  },
  {
    category: "transport",
    english: "How much is the fare?",
    tagalog: "Magkano ang pamasahe?",
    ilocano: "Mano ti plete?",
    audio: "Mano_ti_plete.mp3",
  },

  // Honorifics
  {
    category: "honorifics",
    english: "Someone younger",
    tagalog: "Mas bata",
    ilocano: "Ading",
    audio: "Ading.mp3",
  },
  {
    category: "honorifics",
    english: "Older Brother/Uncle",
    tagalog: "Kuya/Tiyo",
    ilocano: "Manong",
    audio: "Manong.mp3",
  },
  {
    category: "honorifics",
    english: "Older Sister/Aunt",
    tagalog: "Ate/Tiya",
    ilocano: "Manang",
    audio: "Manang.mp3",
  },
  {
    category: "honorifics",
    english: "Sir/Mister",
    tagalog: "Ginoo",
    ilocano: "Apo lalaki",
    audio: "Apo_lalaki.mp3",
  },
  {
    category: "honorifics",
    english: "Ma'am/Miss",
    tagalog: "Ginang/Binibini",
    ilocano: "Apo babai",
    audio: "Apo_babai.mp3",
  },

  // Numbers (0-9)
  {
    category: "numbers",
    english: "Zero",
    tagalog: "Zero",
    ilocano: "Awan",
    audio: "Awan.mp3",
  },
  {
    category: "numbers",
    english: "One",
    tagalog: "Isa",
    ilocano: "Maysa",
    audio: "Maysa.mp3",
  },
  {
    category: "numbers",
    english: "Two",
    tagalog: "Dalawa",
    ilocano: "Duwa",
    audio: "Duwa.mp3",
  },
  {
    category: "numbers",
    english: "Three",
    tagalog: "Tatlo",
    ilocano: "Tallo",
    audio: "Tallo.mp3",
  },
  {
    category: "numbers",
    english: "Four",
    tagalog: "Apat",
    ilocano: "Uppat",
    audio: "Uppat.mp3",
  },
  {
    category: "numbers",
    english: "Five",
    tagalog: "Lima",
    ilocano: "Lima",
    audio: "Lima.mp3",
  },
  {
    category: "numbers",
    english: "Six",
    tagalog: "Anim",
    ilocano: "Innem",
    audio: "Innem.mp3",
  },
  {
    category: "numbers",
    english: "Seven",
    tagalog: "Pito",
    ilocano: "Pito",
    audio: "Pito.mp3",
  },
  {
    category: "numbers",
    english: "Eight",
    tagalog: "Walo",
    ilocano: "Walo",
    audio: "Walo.mp3",
  },
  {
    category: "numbers",
    english: "Nine",
    tagalog: "Siyam",
    ilocano: "Siam",
    audio: "Siam.mp3",
  },

  // Expressions
  {
    category: "expressions",
    english: "Thank you",
    tagalog: "Salamat",
    ilocano: "Agyamanak",
    audio: "Agyamanak.mp3",
  },
  {
    category: "expressions",
    english: "Please",
    tagalog: "Pakiusap",
    ilocano: "Mabalin kadi",
    audio: "Mabalin_kadi.mp3",
  },
  {
    category: "expressions",
    english: "Sorry",
    tagalog: "Paumanhin",
    ilocano: "Pakawanak",
    audio: "Pakawanak.mp3",
  },
  {
    category: "expressions",
    english: "I love you",
    tagalog: "Mahal kita",
    ilocano: "Ay-ayaten ka",
    audio: "Ay_ayaten_ka.mp3",
  },
  {
    category: "expressions",
    english: "You're welcome",
    tagalog: "Walang anuman",
    ilocano: "Awan ti ania man",
    audio: "Awan_ti_ania_man.mp3",
  },
  {
    category: "expressions",
    english: "Good luck",
    tagalog: "Sana magtagumpay ka",
    ilocano: "Naimbag nga panagbiag",
    audio: "Naimbag_nga_panagbiag.mp3",
  },
];

function playAudio(filename) {
  const audio = new Audio(`audio/${filename}`);
  audio.play();
}

function renderCards(category) {
  const container = document.getElementById("flashcardContainer");
  container.innerHTML = "";

  phrases
    .filter((p) => p.category === category)
    .forEach((phrase) => {
      const card = document.createElement("div");
      card.className = "flashcard";
      card.innerHTML = `
        <div class="phrase"><strong>English:</strong> ${phrase.english}</div>
        <div class="phrase"><strong>Tagalog:</strong> ${phrase.tagalog}</div>
        <div class="phrase ilocano-line">
          <strong>Ilocano:</strong> <span>${phrase.ilocano}</span>
          <button onclick="playAudio('${phrase.audio}')">🔊</button>
        </div>
      `;
      container.appendChild(card);
    });
}

function filterCategory(category) {
  document
    .querySelectorAll(".tab")
    .forEach((tab) => tab.classList.remove("active"));
  document
    .querySelector(`.tab[onclick*="${category}"]`)
    .classList.add("active");
  renderCards(category);
}

window.onload = () => renderCards("greetings");
