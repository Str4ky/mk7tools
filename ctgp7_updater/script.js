const https = require('https');
const fs = require('fs');
const { exec } = require('child_process');

const url = 'https://github.com/PabloMK7/CTGP-7updates/archive/master.zip';

function downloadFile(url, destination, callback) {
  const file = fs.createWriteStream(destination);

  https.get(url, (response) => {
    response.pipe(file);

    file.on('finish', () => {
      file.close(callback);
    });
  }).on('error', (err) => {
    fs.unlink(destination);
    if (callback) callback(err.message);
  });
}

function handleFolderSelection(event) {
  event.preventDefault();
  const input = document.getElementById('folderInput');
  const selectedFolder = input.files[0].path;

  const destination = `${selectedFolder}/CTGP-7updates.zip`;

  downloadFile(url, destination, (error) => {
    if (error) {
      console.error(`Une erreur s'est produite lors du téléchargement : ${error}`);
    } else {
      console.log('Le fichier a été téléchargé avec succès !');
      console.log(`Dossier de destination : ${selectedFolder}`);

      exec(`unzip ${destination} -d ${selectedFolder}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Une erreur s'est produite lors de l'extraction du fichier zip : ${error}`);
        } else {
          console.log('Le fichier zip a été extrait avec succès !');
          // Faites quelque chose avec les fichiers extraits
        }
      });
    }
  });
}

document.getElementById('folderForm').addEventListener('submit', handleFolderSelection);