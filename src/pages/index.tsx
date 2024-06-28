// pages/index.tsx
import Quiz from '../components/Quiz';

const questions = [
  // Étape 1
  {
    question: "Quelle est la principale cause du réchauffement climatique ?",
    answers: [
      { text: "Les émissions de gaz à effet de serre", isCorrect: true },
      { text: "La déforestation", isCorrect: false },
      { text: "La pollution des océans", isCorrect: false },
    ],
  },
  {
    question: "Quel gaz est le principal responsable de l'effet de serre ?",
    answers: [
      { text: "Le dioxyde de carbone (CO2)", isCorrect: true },
      { text: "Le méthane (CH4)", isCorrect: false },
      { text: "L'azote (N2)", isCorrect: false },
    ],
  },
  {
    question: "Quel est le pourcentage de l'eau douce sur Terre ?",
    answers: [
      { text: "2.5%", isCorrect: true },
      { text: "10%", isCorrect: false },
      { text: "50%", isCorrect: false },
    ],
  },
  // Étape 2
  {
    question: "Quel est le principal contributeur à la pollution plastique dans les océans ?",
    answers: [
      { text: "Les bouteilles en plastique", isCorrect: false },
      { text: "Les sacs en plastique", isCorrect: true },
      { text: "Les filets de pêche", isCorrect: false },
    ],
  },
  {
    question: "Quelle espèce est la plus menacée par le changement climatique ?",
    answers: [
      { text: "Les ours polaires", isCorrect: true },
      { text: "Les tigres", isCorrect: false },
      { text: "Les éléphants", isCorrect: false },
    ],
  },
  {
    question: "Quelle activité humaine contribue le plus à la déforestation ?",
    answers: [
      { text: "L'agriculture", isCorrect: true },
      { text: "La construction", isCorrect: false },
      { text: "L'industrie textile", isCorrect: false },
    ],
  },
  // Étape 3
  {
    question: "Quel pourcentage de l'énergie mondiale provient des énergies renouvelables ?",
    answers: [
      { text: "26%", isCorrect: true },
      { text: "50%", isCorrect: false },
      { text: "75%", isCorrect: false },
    ],
  },
  {
    question: "Quelle est la durée de vie moyenne d'un sac plastique dans l'environnement ?",
    answers: [
      { text: "500 ans", isCorrect: true },
      { text: "10 ans", isCorrect: false },
      { text: "100 ans", isCorrect: false },
    ],
  },
  {
    question: "Quel est le pays le plus gros émetteur de CO2 ?",
    answers: [
      { text: "Chine", isCorrect: true },
      { text: "États-Unis", isCorrect: false },
      { text: "Inde", isCorrect: false },
    ],
  },
  // Étape 4
  {
    question: "Quelle est la principale source d'énergie renouvelable utilisée dans le monde ?",
    answers: [
      { text: "L'énergie solaire", isCorrect: false },
      { text: "L'énergie éolienne", isCorrect: false },
      { text: "L'hydroélectricité", isCorrect: true },
    ],
  },
  {
    question: "Quel est le plus grand récif corallien au monde ?",
    answers: [
      { text: "La Grande Barrière de corail", isCorrect: true },
      { text: "Le récif corallien de Belize", isCorrect: false },
      { text: "Le récif de Palancar", isCorrect: false },
    ],
  },
  {
    question: "Quel est le pourcentage de la surface terrestre couverte par les forêts ?",
    answers: [
      { text: "31%", isCorrect: true },
      { text: "15%", isCorrect: false },
      { text: "50%", isCorrect: false },
    ],
  },
  // Étape 5
  {
    question: "Quel est le plus grand producteur mondial de déchets électroniques ?",
    answers: [
      { text: "États-Unis", isCorrect: false },
      { text: "Chine", isCorrect: true },
      { text: "Inde", isCorrect: false },
    ],
  },
  {
    question: "Quelle est la principale cause de la disparition des abeilles ?",
    answers: [
      { text: "Les pesticides", isCorrect: true },
      { text: "Le changement climatique", isCorrect: false },
      { text: "La pollution", isCorrect: false },
    ],
  },
  {
    question: "Quelle énergie fossile est la plus utilisée dans le monde ?",
    answers: [
      { text: "Le pétrole", isCorrect: true },
      { text: "Le charbon", isCorrect: false },
      { text: "Le gaz naturel", isCorrect: false },
    ],
  },
];

const Home: React.FC = () => {
  return (
    <div>
      <Quiz questions={questions} />
    </div>
  );
};

export default Home;
