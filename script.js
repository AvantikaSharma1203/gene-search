document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const outputDiv = document.getElementById('output');
  
    searchButton.addEventListener('click', () => {
      const markerInput = document.getElementById('marker-input').value;
      fetch('/gene_data.json')
       .then(response => response.json())
       .then(geneData => {
          console.log('Received gene data:', geneData);
          let cellType = '';
          geneData.forEach(item => {
            if (item.marker === markerInput) {
              cellType = item.celltype;
            }
          });
          if (cellType) {
            outputDiv.innerHTML = `Cell type specific to ${markerInput}: ${cellType}`;
          } else {
            outputDiv.innerHTML = `Marker not found: ${markerInput}`;
          }
        })
       .catch(error => console.error(error));
    });
  });
