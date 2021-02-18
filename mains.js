const { app, BrowserWindow } = require('electron')

//Référence globale à l'objet window
let win

// This method will be called when Electron has finished
// initialization and is ready to create browser windows
//Cette méthode sera appelée lorsque Electron aura terminé
// initialisation et est prêt à créer des fenêtres de navigateur
app.on('ready', function(){
    // Create the window
    win = new BrowserWindow({width: 800, height: 600 ,
        webPreferences: {
            nodeIntegration: true
        }})
    

    // Open and load index.html to the window
    //Ouvrez et chargez index.html dans la fenêtre
    win.loadURL('file://' + __dirname + '/index.html')


    win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object
        win = null
    });
})

// Quit the app if all windows are closed
app.on('window-all-closed', () => {
    app.quit()
})



//La méthode fs.stat () est utilisée pour renvoyer 
// des informations sur le fichier ou le répertoire donné. 
// Il renvoie un objet fs.Stat qui possède plusieurs propriétés et
//  méthodes pour obtenir des détails sur le fichier ou le répertoire.