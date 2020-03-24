Timeline examples:

###### Simple Timeline

```js
import { Timeline } from 'react-rollup-boilerplate';

const data = [
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
  },
  {
    id: 4,
    title: 'N.S. Janoff, "Organizational Patterns at AG Systems"',
    sub: '27 September 2020',
  },
  {
    id: 5,
    title: ' F.P. Brooks, The Mythical Man-Month: Essays,',
    sub: '11 December 2020',
  },
];

<Timeline timelines={data} pivot="vertical" direction="left" />

```
