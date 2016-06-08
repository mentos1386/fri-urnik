import { Route, IndexRoute } from 'react-router';

import { Root, Dashboard, Schedule } from '~/containers';

const routes = (
    <Route path="/" component={Root}>
        <IndexRoute component={Dashboard} />
        <Route path="group/:group" component={Schedule} />
    </Route>
);

export default routes;