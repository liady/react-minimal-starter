# React Minimal Boilerplate

A very lean React boilerplate, using webpack.

## Development
Run the following commands:
```
npm install
npm run dev
```
Navigate your browser to `localhost:8181` to see the results. The files are watched, so all changes are automatically built.

## Production
Run the following commands:
```
npm install
npm run webpack
```
The bundled file is created in `public/js/bundle.js`

## File structure
```
public/
    js/
        bundle.js
    index.html
src/
    components/
        Item.js
        List.js
        Root.js
    styles/
        styles.scss
    index.js
package.json
webpack.config.js
```

## Included libraries
- [Webpack](http://webpack.github.io/)
- [Babel](https://babeljs.io/)
- [React](http://facebook.github.io/react/)
    - [Introduction resources](https://github.com/facebook/react/wiki/Articles-and-Videos)
    - [Examples](https://github.com/facebook/react/wiki/Examples)
    - [Complementary Tools](https://github.com/facebook/react/wiki/Complementary-Tools)
- [ReactCSS](http://reactcss.com/)

## License

[MIT](http://rem.mit-license.org)
