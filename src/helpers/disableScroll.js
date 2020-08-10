export default function () {
  console.log('disabling');
  // Get the current page scroll position
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop,
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted, set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
