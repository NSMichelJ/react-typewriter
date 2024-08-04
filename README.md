# @nsmichelj/react-typewriter

React library to create typewriter animations.

## Installation

```bash
npm install @nsmichelj/react-typewriter
```

## Usage

```javascript
import Typewriter from "@nsmichelj/react-typewriter";
function App() {
  return <Typewriter text="Hello world" />;
}

export default App;
```

## Props

| Prop Name      | Type    | Default  | Description                                                                       |
| -------------- | ------- | -------- | --------------------------------------------------------------------------------- |
| text           | string  | Required | The text to be displayed with the typewriter effect.                              |
| delay          | number  | 100      | The initial delay before typing starts (in milliseconds).                         |
| typingSpeed    | number  | 100      | The time between typing each character (in milliseconds).                         |
| loop           | boolean | false    | If true, the typewriter effect will loop after finishing the text.                |
| delayOnRestart | number  | 100      | The delay before restarting the typewriter effect when looping (in milliseconds). |
| cursor         | boolean | false    | If true, a blinking cursor will be displayed at the end of the typing text.       |
