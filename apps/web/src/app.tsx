import {Route, Switch} from "wouter";

import {HomePage} from "./pages/home";

export const App: React.FC = () => (
    <Switch>
        <Route path="/" component={HomePage} />
    </Switch>
);
