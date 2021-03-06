import * as fromItems from 'DUCKS/items';
import { ItemRecord } from 'DUCKS/items/Item';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { AppStateRecord } from 'STORE/AppState';
import InfiniteScrollView from './InfiniteScrollView';

interface StateProps {
  currentPage: number;
  error: boolean;
  lastPage: number;
  requested: boolean;
  items: List<ItemRecord>;
}

interface DispatchProps {
  fetchItems(page: number): void;
}

const mapStateToProps = (state: AppStateRecord) => ({
  currentPage: fromItems.getItemsCurrentPage(state),
  error: fromItems.getItemsError(state),
  items: fromItems.getItems(state),
  lastPage: fromItems.getItemsLastPage(state),
  requested: fromItems.getItemsRequested(state),
});

const mapDispatchToProps = {
  fetchItems: fromItems.fetchItems,
};

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(
  InfiniteScrollView
);
