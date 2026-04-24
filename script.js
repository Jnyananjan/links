// Subtle hover glow effect (optional enhancement)

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    card.style.boxShadow = `0 10px 30px rgba(0,219,233,0.2)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "none";
  });
});
