# Electron Boilerplate

> A simple boilerplate for electron apps.

## Build Setup

```bash
# install dependencies
$ npm install

# launch electron and dev-server at localhost:8080 for renderer process
# * electron app will automatically restart when main.js or preload.js is changed
# * renderer process supports HMR
$ npm run dev

# build electron app for production
$ npm run build
```

## TODO

- [x] Secure configuration
  - [x] Disalble nodeIntegration
  - [x] Enable contextIsolation
- [x] IPC example
- [x] HMR for renderer process
- [ ] HMR for main process
- [x] Auto restart electron app (instead of HMR for main process)
- [x] Open DevTools(press F12, development build only)
- [ ] React template
- [ ] Vue template
- [ ] TypeScript template
