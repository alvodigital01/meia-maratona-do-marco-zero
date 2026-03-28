const actionButton = document.getElementById("actionButton");
const statusMessage = document.getElementById("statusMessage");

if (actionButton && statusMessage) {
  actionButton.addEventListener("click", () => {
    statusMessage.textContent = "Base padrão ativa com JavaScript funcionando.";
  });
}
