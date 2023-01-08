# qr-ur-link
An application to generate a QR code from a link

Nowadays, QR codes exist everywhere and are pretty easy for people to scan to get the url rather than typing the url manually. In particular, people can make use of it in so many situations, for example, to get the menu in a café or restaurant, to buy a ticket in a cinema or other places, etc.

With this application, you can utilize it on your common tools' website, fork as your side projects, or just generate the link for your website!

## Techniques
- React
- tailwindcss
- [easyqrcodejs](https://www.npmjs.com/package/easyqrcodejs)
- Canvas to png?
  ```
    canvasHTMLDivElement.toDataURL('image/png')
  ```

## System Requirements
- git v2.13 or greater
- NodeJS 14 || 16 || 18
- npm v8.16.0 or greater


All of these must be available in your PATH. To verify things are set up properly, you can run this:

```
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/) or [macOS/Linux](https://stackoverflow.com/questions/24306398/how-to-add-mongo-commands-to-path-on-mac-osx/24322978#24322978).

## Setup
If you want to commit and push your work as you go, you'll want to fork first and then clone your fork rather than this repo directly.

After you've made sure to have the right things (and versions) installed, you should be able just to run a few commands to get set up:

```
git clone https://github.com/CagyJ/qr-ur-link.git
cd qr-ur-link
npm i
```

## Running the app
To get the app up and running, run:
```
npm start
```
This should open your browser and be on localhost:3000


## TODO
- *Warning: div: `ref` is not a prop.* needs to be fixed!