const clearHandlers = (e: Event): void => {
  e.preventDefault();
};

export const createFragment = (element: HTMLElement): DocumentFragment => {
  const fragment = document.createDocumentFragment();

  element.childNodes.forEach((node) => {
    fragment.appendChild(node);
  });

  return fragment;
};

export const clearAllHandlers = (element: HTMLDivElement): void => {
  element.querySelectorAll('form').forEach((nodeElement) => {
    nodeElement.removeEventListener('submit', clearHandlers);
  });

  element.querySelectorAll('button[type="submit"]').forEach((nodeElement) => {
    nodeElement.removeEventListener('click', clearHandlers);
  });

  element.querySelectorAll('a').forEach((nodeElement) => {
    nodeElement.removeEventListener('click', clearHandlers);
  });
};

export const setAllHandlers = (fragment: DocumentFragment): DocumentFragment => {
  fragment.querySelectorAll('form').forEach((nodeElement) => {
    nodeElement.addEventListener('submit', clearHandlers);
  });

  fragment.querySelectorAll('button[type="submit"]').forEach((nodeElement) => {
    nodeElement.addEventListener('click', clearHandlers);
  });

  fragment.querySelectorAll('a').forEach((nodeElement) => {
    nodeElement.addEventListener('click', clearHandlers);
  });

  return fragment;
};
