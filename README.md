<h1 align="center">
  <br>
  <br>
  NAMX
  <br>
</h1>

<h4 align="center">This is a node.js online car reservation application powered by Express that provides the main functions you'd expect, an admin system, etc. <a href="https://expressjs.com/fr/" target="_blank">Express</a>.</h4>

<p align="center">
  <a href="https://github.com/marouaneXan/namX/blob/main/Api/package.json">
    <img src="https://badge.fury.io/js/electron-markdownify.svg"
         alt="Merkoub.ma">
  </a>
</p>

<p align="center">
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a> •
  <a href="#resources">Api</a> 
</p>

![namx - Page 1](https://user-images.githubusercontent.com/93975817/204536759-3f4a28d7-0709-498b-8988-3d518daf619c.png)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

- Run the backend of the application:

```bash

# Go into the folder Api
$ cd namX/Api

# Install dependencies
$ npm install

# Run the backend
$ npm run server
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://nodejs.org/en/download/package-manager/) or use `node` from the command prompt.

## Credits

This application uses the following open source packages:

- [Express](http://express.com/)
- [Node.js](https://nodejs.org/)

## License

MIT

## Api

1- Auth
<br>
\*\* Auth for Client
<br>

- http://localhost:5000/api/v1/client/auth/login
- http://localhost:5000/api/v1/client/auth/register
  <br>
  \*\*Auth for Admin
  <br>
- http://localhost:5000/api/v1/admin/auth/login
- http://localhost:5000/api/v1/admin/auth/register

  2- Type

- http://localhost:5000/api/v1/types ====> method: GET, @desc: get all types
- http://localhost:5000/api/v1/trips ====> method:POST, @desc: create type
- http://localhost:5000/api/v1/trips/:type_id ====> method:DELETE, @desc: delete type
- http://localhost:5000/api/v1/trips/:type_id ====> method:PUT, @desc: update type

  3- Car

- http://localhost:5000/api/v1/cars ====> method: GET, @desc: get all cars
- http://localhost:5000/api/v1/cars/:type_id ====> method: POST, @desc: create car
- http://localhost:5000/api/v1/cars/:car_id ====> method: PUT, @desc: update car
- http://localhost:5000/api/v1/cars/:car_id ====> method: DELETE, @desc: delete car

  4- Color

- http://localhost:5000/api/v1/colors ====> method: GET, @desc: get all colors
- http://localhost:5000/api/v1/color ====> method: POST, @desc: create color
- http://localhost:5000/api/v1/color/:color_id ====> method: PUT, @desc: update color
- http://localhost:5000/api/v1/color/:color_id ====> method: DELETE, @desc: delete color

  3- Orders

- http://localhost:5000/api/v1/orders ====> method: GET, @desc: get all orders
- http://localhost:5000/api/v1/orders/:trip_id/:client_id ====> method: POST, @desc: make order

> GitHub [@marouaneXan](https://github.com/marouaneXan) &nbsp;&middot;&nbsp;
> Instagram [@itsmemarouane](https://www.instagram.com/itsmemarouane)
