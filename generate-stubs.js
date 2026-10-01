const fs = require('fs');
const path = require('path');

// Your base production URL
const BASE_URL = "https://prodigalhouse.net";

// A streamlined version of your audiobook array with only the necessary metadata
const audiobooks = [
    {
        id: "all-you-got",
        title: "All You Got",
        author: "Jason Deramo",
        synopsis: "Thomas Peterson is an idealist teacher facing his biggest challenge yet: Eli Sinclair, a brilliant but troubled student with a bit of an attitude. That all changes when Thomas opens a new world for Eli using the sport of fencing as a metaphor for conquering life's challenges.",
        coverUrl: "audio/all-you-got/art/ayg_album.png"
    },
    {
        id: "my-son-rising",
        title: "My Son Rising",
        author: "Jason Deramo",
        synopsis: "A message of hope and redemption for wandering souls desperate to know true freedom. Reclaim your rightful purpose as spiritual sons, and discover timeless wisdom and healing found within these letters.",
        coverUrl: "audio/my-son-rising/art/msr_album.jpg"
    },
    {
        id: "prone",
        title: "Prone",
        author: "Jason Deramo",
        synopsis: "Young men are largely absent from leadership and lacking in accountability among their families and society at large. So, where are they? The heart of the matter is not where you find them, but where they are found. Prone examines the perils of this alarming phenomenon while seeking fresh insights from Biblical and ancient sources of wisdom.",
        coverUrl: "audio/prone/art/pront_album.png"
    },
    {
        id: "shells-of-infinity",
        title: "Shells of Infinity",
        author: "Jason Deramo",
        synopsis: "Dana Ripley is a young savant majoring in theoretical physics at MIT. She soon finds herself interning at a leading biotech company on the verge of a scientific breakthrough. What Dana accidentally uncovers will not only jeopardize her own safety but potentially impact humanity at large.",
        coverUrl: "audio/shells-of-infinity/art/shells_album.png"
    }
];

audiobooks.forEach(book => {
    // 1. Create the routing directory (e.g., ./my-son-rising)
    const dirPath = path.join(__dirname, book.id);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    // 2. Build the static HTML template
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${book.title} - Prodigal House Publishing</title>
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${BASE_URL}/${book.id}/" />
    <meta property="og:title" content="${book.title} by ${book.author}" />
    <meta property="og:description" content="${book.synopsis}" />
    <meta property="og:image" content="${BASE_URL}/${book.coverUrl}" />
    
    <!-- Twitter / X -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${BASE_URL}/${book.id}/" />
    <meta name="twitter:title" content="${book.title} by ${book.author}" />
    <meta name="twitter:description" content="${book.synopsis}" />
    <meta name="twitter:image" content="${BASE_URL}/${book.coverUrl}" />

    <script>
        // Instantly redirect human users to the main page and trigger the auto-expand hash
        window.location.replace("${BASE_URL}/#${book.id}");
    </script>
</head>
<body>
    <p>Redirecting to audiobook...</p>
</body>
</html>`;

    // 3. Write the index.html file into the new directory
    fs.writeFileSync(path.join(dirPath, 'index.html'), html);
    console.log(`Generated Open Graph stub for: /${book.id}/index.html`);
});
