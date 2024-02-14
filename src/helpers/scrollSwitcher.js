export function scrollSwitcher(bool) {
  bool
    ? (document.body.style.position = 'fixed')
    : (document.body.style.position = 'relative');
};