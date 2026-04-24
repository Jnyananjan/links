// Mobile tap feedback vibration (optional cool touch)

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(10);
  });
});
