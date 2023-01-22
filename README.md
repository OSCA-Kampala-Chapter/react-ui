<b><h1 align="center">React UI</h1></b>

<h1 align="center">The React Components Library:sparkles:</h1>

- :heavy_check_mark: Headless unstyled Components, build your custom UX!
- :rocket: Tailwind CSS Components, do <b>more with less</b> classes!

### Quick start

Inside your root project directory, run;

```sh
npm install @reactui-org/core --save
```

### Usage

```jsx
// Button Component Example
import { Button } from '@reactui-org/core'

<Button backgroundColor="#000" color="#fff">
My Button
<Button/>
```

| Button Props    | Expected Data Type |
| --------------- | ------------------ |
| backgroundColor | String             |
| color           | String             |
| props           | Any                |

:clipboard: [React UI Documentation](https://github.com/OSCA-Kampala-Chapter/react-ui/tree/main/reactui-docs)
:office: [Website](https://github.com/OSCA-Kampala-Chapter/react-ui/tree/main/website)


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

### Updating your Docusaurus version

There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in `package.json` to the desired version. Note that all `@docusaurus/`-namespaced packages should be using the same version.

```
{
  "dependencies": {
    "@docusaurus/core": "2.2.0",
    "@docusaurus/preset-classic": "2.2.0",
    // ...
  }
}
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

## :construction: Thanks to all Contributors.

Thank you for spending time to contribute to **our mission of creating the future of design systems, enabling everyone to build beautiful web apps with utility first customizable components**.
Thank you so much:heart:! Keep rocking:rocket:

[![Contributors](https://contrib.rocks/image?repo=OSCA-Kampala-Chapter/react-ui)](https://github.com/OSCA-Kampala-Chapter/react-ui/graphs/contributors)

Want to contribute? Get stared with our [Contributing Guide](https://github.com/OSCA-Kampala-Chapter/react-ui/blob/main/CONTRIBUTING.md).

## License

[MIT](https://github.com/OSCA-Kampala-Chapter/react-ui/blob/main/LICENSE)
