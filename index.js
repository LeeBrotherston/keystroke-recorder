import $ from 'jquery'
import includes from 'lodash.includes'
import loop from 'raf-loop'
import Tock from 'tocktimer'
import last from 'lodash.last'

class KeystrokeRecorder {

  constructor (opts = {}) {
    this.omittedKeys = opts.omittedKeys || []
    this.json = []
    this.startTime = null
    this.recording = false
  }

  record () {
    this.stop()
    this.json = []
    this.startTime = Date.now()
    this.recording = true
    var self = this
    $(document).keydown(function (e) {
      if (!includes(self.omittedKeys, e.key)) {
        var ms = self.timeElapsed()
        self.json.push({ ms: ms })
      }
    })
  }

  timeElapsed () {
    if (this.recording) {
      return this.startTime ? Date.now() - this.startTime : 0
    } else {
      return last(this.json).ms
    }
  }

  stop () {
    this.recording = false
    $(document).off('keydown')
  }

  // 'private'

  _renderText ($element, text) {
    includes(['INPUT', 'TEXTAREA'], $element[0].tagName) ? $element.val(text) : $element.text(text)
  }

}

export default KeystrokeRecorder
