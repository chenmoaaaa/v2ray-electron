const AutoLaunch = require('auto-launch')
const { app } = require('electron')

class AutoStart {
  constructor() {
    this.autoLauncher = new AutoLaunch({
      mac: {
        useLaunchAgent: true,
      },
      name: app.getName()
    });
  }

  isEnabled() {
    return this.autoLauncher.isEnabled();
  }

  toggle() {
    return this.isEnabled()
    .then(isEnabled => {
      if(isEnabled) {
        this.autoLauncher.disable()
      }
      else {
        this.autoLauncher.enable()
      }
      return isEnabled
    })
  }
}

exports.AutoStart = AutoStart