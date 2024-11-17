const responseContainer = document.querySelector(".chatbot");
const inputValue = document.querySelector(".inputValue");
const sendButton = document.querySelector(".sendButton");

const buttonOption1 = document.querySelector(".op1");
const buttonOption2 = document.querySelector(".op2");
const buttonOption3 = document.querySelector(".op3");

const clearPreviousResponses = () => {
  responseContainer.innerHTML = "";
};

const hideButtons = () => {
  buttonOption1.style.display = "none";
  buttonOption2.style.display = "none";
  buttonOption3.style.display = "none";
};

const showResponse = (responseText) => {
  const chatResponse = document.createElement("div");
  chatResponse.classList.add("chat-response");

  const chatbotImage = document.createElement("img");
  chatbotImage.src = "/public/images/chatbot.png";
  chatbotImage.alt = "Chatbot";

  const responseContent = document.createElement("div");
  responseContent.classList.add("response-content");

  const adviceList = document.createElement("ul");
  const advice = responseText;

  advice.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    adviceList.appendChild(listItem);
  });

  responseContent.appendChild(adviceList);
  chatResponse.appendChild(chatbotImage);
  chatResponse.appendChild(responseContent);

  responseContainer.appendChild(chatResponse);
};

buttonOption1.addEventListener("click", () => {
  clearPreviousResponses();
  hideButtons();
  const meditationAdvice = [
    "Practica la meditación mindfulness para reducir el estrés.",
    "Realiza meditaciones guiadas para mejorar el enfoque.",
    "Incorpora la meditación en tu rutina diaria.",
    "Intenta meditar antes de dormir para mejorar el descanso.",
    "Respira profundamente durante las meditaciones para calmar tu mente.",
  ];
  showResponse(meditationAdvice);
});

buttonOption2.addEventListener("click", () => {
  clearPreviousResponses();
  hideButtons();
  const sportsAdvice = [
    "Haz ejercicio aeróbico como correr o nadar.",
    "Practica yoga o pilates para reducir la tensión muscular.",
    "Realiza actividades al aire libre como caminar o andar en bicicleta.",
    "Participa en deportes de equipo para mejorar tu bienestar emocional.",
    "Haz estiramientos diarios para mejorar la flexibilidad y reducir el estrés.",
  ];
  showResponse(sportsAdvice);
});

buttonOption3.addEventListener("click", () => {
  clearPreviousResponses();
  hideButtons();
  const socialGroupsAdvice = [
    "Únete a grupos de apoyo o actividades comunitarias.",
    "Participa en eventos sociales para hacer nuevos amigos.",
    "Habla con otros que estén pasando por situaciones similares.",
    "Busca espacios donde puedas compartir tus experiencias sin juicio.",
    "Fomenta las relaciones positivas y de apoyo en tu vida.",
  ];
  showResponse(socialGroupsAdvice);
});

sendButton.addEventListener("click", () => {
  const userText = inputValue.value.trim();

  if (userText === "Dame 5 consejos para combatir la ansiedad") {
    hideButtons();
    const anxietyAdvice = [
      "Practica la respiración profunda.",
      "Haz ejercicio regularmente.",
      "Dedica tiempo a actividades relajantes como yoga o meditación.",
      "Habla con amigos o familiares sobre tus sentimientos.",
      "Establece una rutina diaria y evita la sobrecarga de actividades.",
    ];
    showResponse(anxietyAdvice);
  } else if (userText === "Dame 5 consejos para combatir la depresion") {
    hideButtons();
    const depressionAdvice = [
      "Habla con un profesional sobre cómo te sientes.",
      "Haz ejercicio para mejorar tu estado de ánimo.",
      "Establece pequeñas metas diarias para sentirte más realizado.",
      "Pasa tiempo con personas que te apoyen y te escuchen.",
      "Practica la gratitud escribiendo cosas por las que estás agradecido cada día.",
    ];
    showResponse(depressionAdvice);
  }

  inputValue.value = "";
});