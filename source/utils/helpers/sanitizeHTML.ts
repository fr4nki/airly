export const sanitizeHTML = (htmlLikeString: string): string => {
  const { body } = new DOMParser().parseFromString(htmlLikeString, 'text/html');

  body.querySelectorAll('script').forEach((item) => {
    item.remove();
  });

  body.querySelectorAll('form').forEach((item) => {
    if (item.action) {
      item.removeAttribute('action');
    }
  });

  return body.innerHTML;
};
