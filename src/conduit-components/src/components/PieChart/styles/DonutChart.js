export const styles = `.results-circle {
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-animation: draw 1s ease-in forwards;
  animation: draw 1s ease-in forwards;
}

.rounded {
  stroke-linecap: round;
}

.bg-circle {
  stroke-dashoffset: unset;
  stroke-dasharray: unset;
}

text {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0;
  -webkit-transform: translateY(20%);
  transform: translateY(20%);
  text-anchor: middle;
  dominant-baseline: middle;
  -webkit-animation: rise 0.9s ease-in forwards 0.2s;
  animation: rise 0.9s ease-in forwards 0.2s;
}

@-webkit-keyframes rise {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes rise {
  to {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}`;