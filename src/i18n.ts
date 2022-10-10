// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          bio: "In the summer of 1945, Ralph Ellison, an Oklahoma-born, Harlem-based writer, wrote those words in Waitsfield, Vermont. World War II was ending, and Ellison was on sick leave from his duties as a merchant mariner. He originally came to Vermont to write a war novel with a racial twist involving white and Black Americans in a German POW camp. But, from his own account, those words about invisibility traveled from the innermost region of his mind to paper. Seven years later, in 1952, those words formed the opening sentences of the prologue of Invisible Man, Ellison’s first and only novel. Ellison’s work is a bildungsroman that chronicles the absurd, nightmarish, surreal, and, at times, hilarious journey of a nameless narrator. He lives in an underground dwelling illuminated by 1,369 lightbulbs stolen from Monopolated Light and Power, with Louis Armstrong’s “(What Did I Do To Be So) Black And Blue” sometimes blasting on the record player. He tells his story: Twenty years earlier, Dr. Bledsoe, the president of his Black college, expelled him from school for showing a poor Black family to a white trustee, and sent him to New York City, with fake promises of employment that left him stranded.",
        },
      },
      fr: {
        translation: {
          bio: "À l'été 1945, Ralph Ellison, un écrivain né dans l'Oklahoma et basé à Harlem, a écrit ces mots à Waitsfield, dans le Vermont. La Seconde Guerre mondiale se terminait et Ellison était en congé de maladie de ses fonctions de marin marchand. Il est venu à l'origine dans le Vermont pour écrire un roman de guerre avec une touche raciale impliquant des Américains blancs et noirs dans un camp de prisonniers de guerre allemand. Mais, d'après son propre récit, ces mots sur l'invisibilité sont passés de la région la plus intime de son esprit au papier. Sept ans plus tard, en 1952, ces mots formaient les premières phrases du prologue de Invisible Man, le premier et unique roman d'Ellison. Le travail d'Ellison est un bildungsroman qui raconte le voyage absurde, cauchemardesque, surréaliste et, parfois, hilarant d'un narrateur sans nom. Il vit dans une habitation souterraine éclairée par 1 369 ampoules volées à Monopolated Light and Power, avec «(What Did I Do To Be So) Black And Blue» de Louis Armstrong qui explose parfois sur le tourne-disque. Il raconte son histoire : Vingt ans plus tôt, le Dr Bledsoe, le président de son collège noir, l'a expulsé de l'école pour avoir montré une famille noire pauvre à un administrateur blanc, et l'a envoyé à New York, avec de fausses promesses d'emploi qui ont laissé lui échoué.",
        },
      },
    },
  });
export default i18n;
