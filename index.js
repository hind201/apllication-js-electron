
const fs = require('fs');
const electron = require('electron');
const cookies = 'C:\\Users\\Youcode\\AppData\\Local\\Mozilla\\Firefox\\Profiles'
const rimraf = require("rimraf");
const path = require('path');
const getSize = require('get-folder-size');
const folder= './text/';
const btnDelete = document.getElementById('remove-file');
const btnAnalyse = document.getElementById('analyser');
const btnHistorique = document.getElementById('historique');
const array=[];

btnDelete.addEventListener('click', ()=>{

fs.readdir(folder, (err, filess) => {
  if (err) throw err;

  for (const file of filess) {
    fs.unlink(path.join(folder, file), err => {
      if (err) throw err;
    });
  }
});
alert("Successfully deleted the file.")
  rimraf(cookies, function () 
 { console.log("done");

});
});
btnAnalyse.addEventListener('click', ()=>{
    fs.readdir(folder,(err, files)=> {
      
         alert( files.length + 'Fichiers');
          array.push(files.length);
      
    });
   
 
    getSize(folder, (err, size) => {
      if (err) { throw err; }
     
      
      
    alert(size + ' bytes')
     array.push(size);
    });
    
});

btnHistorique.addEventListener('click',() =>{
  const history = array.join(" / ");
    alert(history);
});
  


  










