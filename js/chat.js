async function generateMetaDescription() {
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SUA_CHAVE_OPENAI",
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt:
        "Crie uma meta-descrição otimizada para SEO para meu portfólio como Tech Lead & Full Stack Developer.",
      max_tokens: 50,
    }),
  });

  const data = await response.json();
  document
    .querySelector("meta[name='description']")
    .setAttribute("content", data.choices[0].text);
}

async function generateSummary(type) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SUA_CHAVE_OPENAI",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "user",
          content: `Escreva um resumo sobre minha carreira com foco em ${type}.`,
        },
      ],
    }),
  });

  const data = await response.json();
  console.log(data);
  document.getElementById("summary-result").innerText =
    data.choices[0].message.content;
}

async function sendMessage() {
  const userInput = document.getElementById("user-input").value;
  const chatBox = document.getElementById("chat-box");

  chatBox.innerHTML += `<p><strong>Você:</strong> ${userInput}</p>`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SUA_CHAVE_OPENAI",
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [{ role: "user", content: userInput }],
    }),
  });

  const data = await response.json();
  const aiResponse = data.choices[0].message.content;
  chatBox.innerHTML += `<p><strong>IA:</strong> ${aiResponse}</p>`;
}
