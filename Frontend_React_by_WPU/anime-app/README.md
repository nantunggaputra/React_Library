# WeeBoo | My Anime List

WeeBoo | My Anime List is a Front-End SPA (Single Page Application) Web project built using React to display a list of anime. This project uses Vite for bundling and Visual Studio Code as the code editor. Mostly anime data is fetched from the Jikan - Unofficial MyAnimeList API.

## Features (under development)

- Display anime list based on user searches.
- Search for anime by title.
- Provides anime by editor's choice, recommended category, genre, featured, nostalgic 2000s anime, and more.
- Detailed information about search results anime, including year of release, score, rating, status, synopsis, and more.
- Easy and fast navigation (about, contact, etc) between pages without reloading (coming soon).

## Technologies used

- **React**: For building dynamic user interfaces.
- **Vite**: For fast bundling of the application.
- **Jikan REST API v4**: For fetching anime data.
- **...**

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/nantunggaputra/React_Library.git
   cd Frontend_React_by_WPU/anime-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the application:

   ```bash
   pnpm run dev
   ```

The application will run at [localhost:5173](http://localhost:5173).

4. Build the application:

   ```bash
   pnpm run build
   ```

The application will build at [localhost:3000/weeboo/index.html]([http://localhost:3000/weeboo/index.html]).

## Project Structure

The recommended project structure is as follows:

anime-app/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── pages/
│ ├── services/
│ ├── App.css
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── weeboo/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── pnpm-lock.yaml
├── README.md
└── vite.config.js

## Using the Jikan REST API v4

To use the Jikan REST API v4, you need to import and call the provided endpoints. Example of an API call to get the latest anime list:

```jsx
import axios from "axios";

const fetchAnime = async () => {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime`);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    setTimeout(() => {
      alert(`${error}\nYour Error Message.`);
      window.location.reload();
    });
    return [];
  }
};
```

### Contributing

Wee welcome contributions. To contribute, follow these steps:

    Fork this repository.
    Create a new feature branch (git checkout -b your-feature).
    Commit your changes (git commit -m 'Add new feature').
    Push to the branch (git push origin your-feature).
    Create a Pull Request.

### License

This project is licensed under the MIT License. See the LICENSE file for more information.

### Contact

If you have any questions or suggestions, please create an issue in this repository or contact me via email at anggunnantunggaputra@gmail.com or send me message on [Nantungga Putra | LinkedIn](https://www.linkedin.com/in/nantungga-putra-451779116/).
