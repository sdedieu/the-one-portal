# Portail

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Setting up environment

### Pre-requires

- Having [Node](https://nodejs.org/en) > 16 installed
- Having [Git](https://git-scm.com/) installed

## Backend

**In order to work, all application need the [Portal Backend](https://github.com/sdedieu/portal-backend) to be running. To do so, follow the [documentation](https://github.com/sdedieu/portal-backend).**

### Portal

As the-one-portal is a npm library, in order to install it, you'll have to host it first on a local npm repository.
In order to do that, we'll use [verdaccio](https://verdaccio.org/fr-fr/).
Follow [this steps](https://verdaccio.org/docs/installation/) to install it.
Then run it using the command `verdaccio` on a terminal.
And build and deploy this library.


### Middke earth demography

Make sure to have cloned [middle-earth-demography repository](https://github.com/sdedieu/middle-earth-demography).
Then in its root folder, run the command `npm i & npm run start`.

### The one quote

Make sure to have cloned [the-one-quote repository](https://github.com/sdedieu/the-one-quote).
Then in its root folder, run the command `npm i & npm run start`.
