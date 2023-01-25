<b><h1 align="center">React UI</h1></b>

<h1 align="center">The React Components Library:sparkles:</h1>

### Quick start

```sh
$ pnpm install
```

### Starts the development server.

```sh
$ pnpm start
```

This command starts a local development server at [http://localhost:3000/](http://localhost:3000/) and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build Documentation Website

The [website directory](https://github.com/OSCA-Kampala-Chapter/react-ui/tree/main/website) is where we have the documentation that is built on top of [docusaurus v2](https://docusaurus.io/) which uses concepts of [react.js](https://reactjs.org/) so anyone that has done react can just work with it.

### Running the development server

To preview your changes as you edit the files, you can run a local development server that will serve your website and reflect the latest changes.

```bash
cd react-ui
pnpm run start
```

By default, a browser window will open at http://localhost:3000.  
[pnpm](https://pnpm.io/) is a package manager just like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

Congratulations! You have just created your first Docusaurus site! Browse around the site to see what's available.

### Build

Docusaurus is a modern static website generator so we need to build the website into a directory of static contents and put it on a web server so that it can be viewed. To build the website:

```bash
pnpm run build
```

Then, in the directory containing `package.json`, run your package manager's install command:

```bash
pnpm install
```

To check that the update occurred successfully, run:

```bash
npx docusaurus --version
```

You should see the correct version as output.

Alternatively, if you are using Yarn, you can do:

```bash
yarn upgrade @docusaurus/core@latest @docusaurus/preset-classic@latest
```
