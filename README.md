# Photo dashboard app (in development)

Photo dashboard is a web application designed to be used on a second monitor to display a rolling series of images and the current datetime. The application is designed to be highly customisable for the user's preferences.

Currently the user can choose different categories, the interval between photos and the format of time and date display.

## Deployment

The app is currently deployed as a static website through Netlify and is available [here](https://photo-dashboard.netlify.app/)

![Capture](https://user-images.githubusercontent.com/67362834/113893558-0c8c4880-97bf-11eb-9836-cb6512824d1f.PNG)

## Technology

The UI is built entirely with React.js.

The photographs are sourced from Pixabay, using their API.

Currently, the application can only access the medium resolution Pixabay images. On a large, high resolution screen some of the images may appear a little blurry. I am working to obtain full access to the Pixabay API which includes full HD images.

## Motivation

Like all programmers, I utilise a second screen. But, generally I don't actually use it that often. I have always enjoyed the rolling screensavers that come with smart TV devices such as Amazon Fire TV and Google Chromecast but I am always disappointed that a) they are not very customisable, b) include a limited selection of photographs and c) they (especially Fire TV) turn off way too quickly. I wanted to re-create a similar experience for my second monitor.

Ultimately, the main motivation for this project was as a learning experience to become more comfortable with some of the more advanced React features such as useContext and useReducer for state management.

## Future Development

1. Get Full Access to Pixabay API for Full HD Images (or find alternative source).
2. Add customisable news element to display a ticker style news feed.
3. Add user login system (the application is currently just a static web app) so users can sync settings across devices (settings just saved in local storage for now).
4. Add more customisation.
5. Request full screen on start up.
