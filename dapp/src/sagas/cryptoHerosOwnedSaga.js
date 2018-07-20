import { put, call } from 'redux-saga/effects';
import * as types from '../constants/actionTypes';
import { 
  doGetOwnedTokens
} from '../lib/cryptoHerosTokenService';

export function* getCryptoHerosTokenGetOwnedTokensResultSaga({networkId, address}) {
  try {
    yield put({ type: types.FETCHING}); 
    const cryptoHerosTokenGetOwnedTokensResult = yield call(doGetOwnedTokens, networkId, address);
    yield put({ type: types.FETCH_COMPLETE});
    
    yield put({ type: types.CRYPTOHEROS_TOKEN_GET_OWNED_TOKENS, result: cryptoHerosTokenGetOwnedTokensResult });
  } catch (err) {
    yield put({ type: types.SYSTEM_ERROR, error: err });
  }
};
