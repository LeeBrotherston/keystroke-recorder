# keystroke-recorder

record and playback user keystrokes. use this tool ethically -- never collect user data without their explicit knowledge + consent.

## install

`npm i --save keystroke-recorder`

## usage

```js
import $ from 'jquery'
import KeystrokeRecorder from 'keystroke-recorder'
var keystrokeRecorder = new KeystrokeRecorder({
  omittedKeys: ['Tab', 'Meta', 'Control', 'Alt', 'Shift']
})

$('#record-btn').click(() => {
  keystrokeRecorder.record()
})

$('#stop-btn').click(() => {
  keystrokeRecorder.stop()
  console.log(keystrokeRecorder.json)
})

```

## API

### options

- #### `omittedKeys`

  an array of keys to be ignored during recording. _default: []_


### methods

- #### `record()`

  starts collecting keystroke data as json

- #### `stop()`

  stops collecting keystroke data

- #### `timeElapsed()`

  return milliseconds since recording started


### properties

- #### `json`

  returns json data for last keystroke recording

  ```json
  [
      {
          ms: 562
      },
      {
          ms: 771
      },
      {
          ms: 998
      },
      {
          ms: 1642
      }
  ]
  ```

- #### `startTime`

  time that last recording started at

- #### `recording`

  boolean indicating whether `keystrokeRecorder` is recording or not
