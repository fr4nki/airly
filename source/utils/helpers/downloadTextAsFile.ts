export const downloadTextAsFile = (content: string, filename: string): void => {
  const element = document.createElement('a');

  element.setAttribute('style', 'position: absolute; top: -9999px; left: -9999px');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};
