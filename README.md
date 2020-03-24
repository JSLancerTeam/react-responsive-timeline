# react-responsive-timeline
<!-- [![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url] -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


Simple responsive timeline implemented in ReactJS

### Demo
- To run demo on your computer:
  - Clone this repository
  - `npm install`
  - `npm run dev`

### Screenshot

pivot: vertical; direction: left

![alt text](https://raw.githubusercontent.com/JSLancerTeam/react-responsive-timeline/master/images/screen-shot.png)

pivot: vertical; direction: center

![alt text](https://raw.githubusercontent.com/JSLancerTeam/react-responsive-timeline/master/images/vertical-center.png)

### Usage

##### Simple timeline
```
import { Timeline } from 'react-responsive-timeline';

<Timeline
  pivot="vertical"
  direction="left"
  timelines={[
    {
      id: 1,
      title: 'C.A. Alexander, A Pattern Language, New York,, 1977.',
      sub: '10 May 2020',
    },
    {
      id: 2,
      title: 'E. Yourdon, L. Constantine, Structured Design, N.J.,, 1978.',
      sub: '12 May 2020',
    },
    {
      id: 3,
      title: 'C.A. Alexander, The Timeless Way of Building, New York,, 1979.',
      sub: '05 July 2020',
    }
  ]} />
```

You can combine pivot and direction together


##### Props
|Prop name |Prop type|Default value|Description|
|---------|---------|-------------|-----------|
timelines | array | Required | data |
pivot | string | vertical | Describe vertical, horizontal |
direction | string | left | Describe left, center, right |

### Author
- Tony Nguyen - nhattruong1811@gmail.com

### License
MIT

[package-url]: https://npmjs.org/package/react-responsive-timeline