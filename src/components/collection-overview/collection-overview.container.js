import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import collectionOverview from './collection-overview';
import WithSpinner from '../with-spinner/with-spinner';


const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

// const collectionOverviewContainer = connect(mapStateToProps)(WithSpinner(collectionOverview));

const CollectionsOverviewContainer = compose(connect(mapStateToProps), WithSpinner)(collectionOverview);

export default CollectionsOverviewContainer;
