# Reactified Shopify

This boiler plate is used to deploy a React App to Shopify.

## Getting Started

1. Make sure you have Node.js installed
2. Download the repository
3. Run `npm i` in the repository's root folder to setup
4. Run `npm start` to preview a live hot-reloading version of the app

## Developing an app

You can start writing your app code in the src folder, the starting point for the app is set to index.js through which the app is loaded into the *root* element on the Dom.

The files in the public folder are Shopify specifics and are used to load the app from any page the user lands on.

## Deploying

1. Build the app first by running `npm run build`.
2. Make sure you have themekit (Shopify's theme manager) installed on your machine.
3. Make a themekit configuration file having *store*, *theme_id* & *password* for *production* build; usually stored as a .yml file.
4. Deployment process has 4 options
    1. Deploy :: This simply uploads the theme to the server.
    2. Deploye:update-force :: This force updates files that might have been overwritten directly on the server.
    3. Deploy:replace :: This option replaces the files present on the server
    4. Deploy:replace-force :: This option replaces the files even if the server shows errors for some files.