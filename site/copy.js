// Mostra o botão só com JS; sem JS o comando continua selecionável.
for (const b of document.querySelectorAll("[data-copy]")) {
  b.hidden = false;
  b.addEventListener("click", async () => {
    const label = b.textContent;
    try {
      await navigator.clipboard.writeText(b.dataset.copy);
      b.textContent = b.dataset.done;
    } catch {
      b.textContent = b.dataset.fail;
    }
    setTimeout(() => (b.textContent = label), 2000);
  });
}
