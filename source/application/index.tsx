import { render } from 'react-dom';

import Loadable from '@/components/loadable';

const Application = Loadable(() => import('./component'));

render(
  <Application />,
  document.getElementById('content'),
);
