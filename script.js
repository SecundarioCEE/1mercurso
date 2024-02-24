// Função para adicionar mensagem ao mural
function addMessage(message) {
  const messageList = document.getElementById('message-list')
  const newMessage = document.createElement('p')
  newMessage.textContent = message
  messageList.appendChild(newMessage)
}

// Evento de envio do formulário
const messageForm = document.getElementById('message-form')
messageForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const messageInput = document.getElementById('message-input')
  const messageText = messageInput.value
  addMessage(messageText)
  messageInput.value = '' // Limpa o campo de entrada
})