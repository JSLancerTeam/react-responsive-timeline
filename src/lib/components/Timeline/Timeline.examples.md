Timeline examples:

###### Simple Timeline
```js
import { Timeline } from 'react-responsive-timeline';

const data = [
  {
    title: 'C.A. Alexander, A Pattern Language, New York,, 1977.',
    sub: '10 May 2020',
  },
  {
    title: 'E. Yourdon, L. Constantine, Structured Design, N.J.,, 1978.',
    sub: '12 May 2020',
  },
  {
    title: 'C.A. Alexander, The Timeless Way of Building, New York,, 1979.',
    sub: '05 July 2020',
  },
  {
    title: 'N.S. Janoff, "Organizational Patterns at AG Systems"',
    sub: '27 September 2020',
  },
  {
    title: 'F.P. Brooks, The Mythical Man-Month: Essays, F.P. Brooks, The Myt',
    sub: '11 December 2020',
  },
];

<Timeline timelines={data} pivot="vertical" direction="center" tooltip={true} textLimit="none"  />

```
