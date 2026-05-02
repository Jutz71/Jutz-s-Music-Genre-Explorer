// Include the fs module
const fs = require('fs');

// Read the file synchronously
const html = fs.readFileSync('Every Noise at Once.html', 'utf8');

const divs = [...document.getElementsByClassName('genre')] //me selecciona 6291 elementos

const genres = divs.map(d =>{
 
    const name = d.childNodes[0].textContent;
    const link = d.querySelector(".navlink")?.getAttribute("href") ?? null;
    const preview = d.getAttribute('preview_url');
    const previewTitle = d.getAttribute('title')? d.getAttribute('title').replace("e.g. ", "").split('"') : null;
    
    const artist = previewTitle?.[0]?.trim() || 'The Sorrys';
    const song = previewTitle?.[1] || 'No sample was found';

    return {
    name: name,
    link: link,
    preview: preview ? preview : null,
    previewArtist: artist,
    previewSong: song,
  };
}).filter(g => g.name && g.link && g.preview);

const data = JSON.stringify(genres, null, 2);

const blob = new Blob([data], { type: "application/json" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "genres.json";

document.body.appendChild(a);
a.click();

document.body.removeChild(a);
URL.revokeObjectURL(url);
