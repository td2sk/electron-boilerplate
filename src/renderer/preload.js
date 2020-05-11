import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('ipc', {
  invoke: ipcRenderer.invoke,
});
