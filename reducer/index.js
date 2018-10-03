
import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import selectionReducer from './selectionReducer';
import changeLib from './changeLib';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: selectionReducer,
  oldId: changeLib

});
