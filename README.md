# News App

Responsive and mobile first news application for top news in India. Built with News API, React, Bootstrap, and Axios.

## News App Screen Shot

![Image to app](src/assets/screenshot.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000`

## API Key

### Setup your API key

1. Generate a free API key or use your API key from [News API](https://newsapi.org/)
2. Go to `src` folder and then to `App.js` file
3. Apply API key to the following line:

```
     var url =
      'http://newsapi.org/v2/top-headlines?' +
      'country=in&' +
      'apiKey=YOUR_API_KEY';
```
