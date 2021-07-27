import { FC, ReactElement } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { generateProps } from './helpers';
import routes from './context';

const Provider: FC = (): ReactElement => (
  <BrowserRouter>
    <Switch>
      {
        routes.list.map((route) => (
          <Route {...{
            key: route.path,
            ...generateProps(route),
          }} />
        ))
      }
      <Route {...{
        path: '*',
        ...generateProps(routes.notFound),
      }} />
    </Switch>
  </BrowserRouter>
);

export default Provider;
