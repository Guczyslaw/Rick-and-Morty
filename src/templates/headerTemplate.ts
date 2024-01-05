const headerTemplate = `
  <h1>Rick and Morty</h1>
  <p>Base of characters from Rick and Morty TV series</p>
`;

export function buildHeader() {
  const headerBlock = document.createElement("header");
  headerBlock.id = "page-header";
  headerBlock.innerHTML = headerTemplate;

  document.body.appendChild(headerBlock);
}
