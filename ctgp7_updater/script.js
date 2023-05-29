function downloadFile(url, filename, callback) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Enregistrer le fichier localement
      const file = new File([blob], filename);
      saveAs(file);
      callback(null);
    })
    .catch(error => {
      callback(error);
    });
}

function handleFolderSelection(event) {
  event.preventDefault();
  const input = document.getElementById('folderInput');
  const selectedFolder = input.files[0];

  const destination = selectedFolder.name;
  const filename = 'CTGP-7updates.zip';
  const downloadUrl = 'https://github.com/PabloMK7/CTGP-7updates/archive/master.zip';

  downloadFile(downloadUrl, filename, (error) => {
    if (error) {
      console.error(`Une erreur s'est produite lors du téléchargement : ${error}`);
    } else {
      console.log('Le fichier a été téléchargé avec succès !');
      console.log(`Dossier de destination : ${destination}`);

      const unzipCommand = `unzip ${filename} -d ${destination}`;

      // Exécuter des opérations supplémentaires après le téléchargement
      // Par exemple, vous pouvez utiliser l'API File et l'API FileReader pour lire le contenu des fichiers extraits

      console.log('Commande d\'extraction :', unzipCommand);
    }
  });
}

document.getElementById('folderForm').addEventListener('submit', handleFolderSelection);
