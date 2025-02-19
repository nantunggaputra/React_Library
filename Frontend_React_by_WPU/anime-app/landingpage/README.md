# WeeBoo | My Anime Landing Page

### WeeBoo Landing Page from Anime-App

[WeeBoo | My Anime Landing Page](https://nantunggaputra.github.io/React_Library/Frontend_React_by_WPU/anime-app/weeboo/landingpage) is a Front-End SPA (Single Page Application) subdomain Web project built using [React](https://react.dev/) to introduce and promote the features of the main Anime-App. This project uses [Vite](https://vitejs.dev/) for bundling and Visual Studio Code as the code editor. It serves as the landing page to showcase the vision, updates, and functionalities of WeeBoo | My Anime List.

WeeBoo is designed and developed by [Nantungga Putra](https://nantunggaputra.github.io/HTML/), also later dedicated development team under Open Source Contribution.

## Features (Under Development)

- Introduction and branding of WeeBoo | My Anime List.
- Shows the development progress and updates on the anime list page.
- Provides guides on how to use the anime list features and search functionalities.
- Demonstrates the login and registration experience for potential users.
- Easy and fast navigation between pages without reloading.
- ...

## Technologies used

- **React**: For building dynamic user interfaces.
- **Vite**: For fast bundling of the application.
- **React Router**: For seamless navigation between multiple pages.
- **...**

## Installation

1.  Clone this repository:

    ```bash
    git clone https://github.com/nantunggaputra/React_Library.git
    cd Frontend_React_by_WPU/anime-app/landingpage
    ```

    Wee would prefer you not change anything other than the anime-app directory. Thank you.

2.  Install dependencies:

    ```bash
    pnpm install
    ```

3.  Run the application:

    ```bash
    pnpm run dev
    ```

    The application will run at [localhost:5173](http://localhost:5173).

4.  Build the application:

    ```bash
    pnpm run build
    ```

    The application will build at [localhost:3000/Frontend_React_by_WPU/anime-app/weeboo/landingpage/index.html](http://localhost:3000/Frontend_React_by_WPU/anime-app/weeboo/landingpage/index.html).

## Project Structure

The recommended project structure is as follows:

```
anime-app/
├── landingpage/
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── AppMobile.css
│ │ ├── index.css
│ │ └── main.jsx
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package.json
│ ├── pnpm-lock.yaml
│ └── vite.config.js
├── weeboo/
│ ├── landingpage/ [Custom Build Output Directory]
```

## Routing and Navigation

This landing page uses React Router for navigation. The available routes include:

- / - The main landing page.
- /updates - Displays development progress and feature announcements.
- /help - Provides user guides.
- /login - Demo of login functionality.
- /signup - Demo of registration functionality.

## Deployment

This project is designed to be deployed as a subdomain or subfolder of the main Anime-App. It can be deployed by building and copying the build output to the release branch.

For example, the landing page is deployed at:

    weeboo/landingpage

or as a subdomain:

    landingpage.weeboo (if using a custom domain setup)

## Contributing

Wee welcome contributions. To contribute, follow these steps:

1.  Fork this repository.

2.  Create a new feature branch.

    ```bash
    git checkout -b your-feature
    ```

3.  Commit your changes.

    ```bash
    git commit -m 'Add new feature'
    ```

4.  Push to the branch.

    ```bash
    git push origin your-feature
    ```

5.  Create a Pull Request.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

### Contact Information

If you have any questions or suggestions, please contact us at anggunnantunggaputra@gmail.com or send our developer message on [Nantungga Putra | LinkedIn](https://www.linkedin.com/in/nantungga-putra-451779116/) or create an [issue](https://github.com/nantunggaputra/React_Library/issues/) in this repository.
