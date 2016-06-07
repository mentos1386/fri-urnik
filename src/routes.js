import { Route, IndexRoute } from 'react-router';

import { Root, Dashboard } from '~/containers';

const routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Dashboard} />
    </Route>
);

export default routes;