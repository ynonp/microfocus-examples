const cls = ['state-0', 'state-1', 'state-2'];
let idx = 0;

function nextClass() {
  idx = (idx + 1) % cls.length;
  const res = cls[idx];
  return res;
}

const slider = document.querySelector('.image-slider');
slider.addEventListener('click', function () {
  slider.classList.remove(cls[idx]);
  slider.classList.add(nextClass());
});
