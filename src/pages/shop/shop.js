import React from "react";

import CollectionsOverview from '../../components/collection-overview/collection-overview';
import { Route } from "react-router-dom";
import collectionPage from "../collection/collection";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={collectionPage}/>
  </div>
);

export default ShopPage;
