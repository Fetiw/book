import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { BookReducerState, reducer as bookReducer } from './book.reducer';

export interface AppState {
  book: BookReducerState;
}

export const reducers: ActionReducerMap<AppState> = {
  book: bookReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
