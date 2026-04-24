document.querySelectorAll('.link').forEach(link => {
  link.addEventListener('click', () => {
    if (navigator.vibrate) navigator.vibrate(8);
  });
});
