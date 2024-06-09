
document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const outputDiv = document.getElementById('output');

  searchButton.addEventListener('click', () => {
    const geneName = document.getElementById('gene-name').value;
    fetch('gene_data.json')
      .then(response => response.json())
      .then(geneData => {
        const geneInfo = geneData[geneName];
        if (geneInfo) {
          outputDiv.innerHTML = `Cell type specific to ${geneName}: ${geneInfo.cellType}`;
        } else {
          outputDiv.innerHTML = `Gene not found: ${geneName}`;
        }
      })
      .catch(error => console.error(error));
  });
});