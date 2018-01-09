# Webpack

## Install Webpack and webpack server

  - Install it locally
    yarn add webpack --dev
    yarn add webpack-dev-server --dev

## Run commands

  - Run dev environment (with server: virtual files)
    - yarn build:dev
    - yarn build:dev:watch
  - Run prod environment (with ugifly output to create files)
    - yarn build:pro
    - yarn build:pro:watch
  - Run pro server
    - yarn start-pro

## Webpack configuration

  - All the configuration will be in the file webpack.config.js and extended by files within build-uitls folder
  - I can trate this module as an object or as a function which return a object with all the config.
  - The function syntax give me the ability to pass an `env` variable though the command to manage different enviroments. ie: webpack --env.foo=1 --env.bar=2

### Different config files

  I can use diffent config js file for different purposes

  - webpack.config.js
    Will manage all the environments by the commands. This will retunr the last config object
  - build-utils/webpack.common.js
    All the common configuration for all the environments
  - build-utils/webpack.pro.js
    Pro Environment
  - build-utils/webpack.dev.js
    Dev Environment
  - build-utils/webpack.paths.js (recommended)
    In order to get all the paths gather in a place, this fil will contain all the paths information

### Merge config files

  For merging multiple files (ie webpack.common.js with webpack.dev) we can use `webpack-merge` package and merge them before we return the last

### Add features (addons)

  This is the way of add features/plugins without affecting the final bundle for different scenarios/environments.
  ie: yarn build:pro -- --env.addons=bundlebuddy

  - WebpackBundleAnalyzer => Check the syze of every file part of the bundle
  - bundle-buddy => Help me to find source code duplication across my JS chunks/splits
  - myFirstPlugin => I can create my own plugin as I can see in `webpack.firstPlugin.js`

### Debug node

  I can debug my node modules by using native node debug in terminal
  - node --inspect --debug-brk ./node_modules/webpack/bin/webpack.js

### Use webpack server

  Express server provided by webpack `webpack-dev-server`. Automatically emit bundles in memory and fire websockets request for autmatically changes. NOTE: this will create the bundles files virtualy. if I want to see the bundle files phisicaly, I will have to use `webpack` instead of `webpack-dev-server`

### Plugins

  Some mandatory plugins:

  - DEV: `html-webpack-plugin` will generate a index.html boiler plate and add it to dist folder. This is helpful when the bundle's name use `chunkhash`. ie: `[chunkhash].bundle.js`
  - PRO: `extract-text-webpack-plugin` which moves all the required *.css modules in entry chunks into a separate CSS file. So your styles are no longer inlined into the JS bundle, but in a separate CSS file (styles.css). If your total stylesheet volume is big, it will be faster because the CSS bundle is loaded in parallel to the JS bundle.
  - PRO: `uglifyjs-webpack-plugin` to minify the bundle files
  - PRO: `compression-webpack-plugin` to compress the bundle files

### Loaders

  - `url-loader and file-loader`
    Allow my to convert any assets url required by js or css, into B64 string and inline into my bundle. Also I can put the limit if I want to include it or not
      yarn add url-loader file-loader --dev
  - `style-loader and css-loader`
    This does a `hot module replacement` by default. How to inject the css modules requested
  - `eslint`
    I can add it to a rules if I load the package `eslint and eslint-loader` and create the config file `.eslintrc.json`

## Use React

  First I have to add react to my project `yarn add react` and also `yarn add babel-preset-react` for jsx files

  - Need to add the template to my output html file using `htmlWebpackPlugin`. When I create the instance I have to pass the template, the name of the output file and the part I want to inject from the template

  - Add react plugin to eslint in order not get errors with the jsx files

  - Add extension in `webpack.common.js` in order to dont have to write the extension for `js or jsx` files when imported

  ### Serve files

  - Dev environment

    Im going to use `copy-webpack-plugin` for dev environments.
    For this I will serve all the images in public folder into a virtual folder within my output dist

       new CopyWebpackPlugin([
          { from: './public/', to:'assets' }
        ])

  - Pro environment

    I will use my express server `server.js`, serving all the files within the dist directory `server.use(express.static(__dirname + '/dist'))` staticaly

  ### Use Bootstrap 4

    First install bootstrap 4 `yarn add [last version of bootstrap4]`. Later on set up the bootstrap4 in `webppack.commun.js`.

      new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: ['popper.js', 'default'],
          'Tether': 'tether',
          'window.Tether': 'tether',
          // In case you imported plugins individually, you must also require them here:
          Util: "exports-loader?Util!bootstrap/js/dist/util",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
        })

    Now import the bootstrap in the module prefered ie: import `'bootstrap/dist/css/bootstrap-reboot.min.css'`

  ### Use font-Awesome

    Install font-awesome `yarn add font-awesome`
    Add new rule in `webpack.common.js`

      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    Now you can `import font-awesome`


