import React from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import LoginPage from "./pages/login";
import LectureListPage from "./pages/admin/LectureList";
import LectureNewPage from "./pages/admin/LectureNew";
import NoPage from "./pages/404";

const BASENAME = '/fe-admin-page';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter basename={BASENAME}>
        <Switch>
          {/* Pages */}
          <Route path="/login" component={LoginPage} />
          <Route path="/admin/center/list" component={NoPage} />
          <Route path="/admin/center/new" component={NoPage} />
          <Route path="/admin/lecture/list" component={LectureListPage} />
          <Route path="/admin/lecture/new" component={LectureNewPage} />
          <Route path="/admin/images" component={NoPage} />

          {/* Redirects */}
          <Redirect from="/admin/center*" to="/admin/center/list" />
          <Redirect from="/admin/lecture*" to="/admin/lecture/list" />
          <Redirect from="/admin" to="/admin/center" />
          <Redirect from="*" to="/login" />

        </Switch>
      </BrowserRouter>
    );
  }
}

export {
  Routes as default,
  BASENAME
};