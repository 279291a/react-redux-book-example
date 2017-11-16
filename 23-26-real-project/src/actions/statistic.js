import { ASYNC } from 'redux-amrc';
import { customFetch } from '../utils/utils';

export default function loadStatics() {
  return {
    [ASYNC]: {
      key: 'statistic',
      promise: () => customFetch('/statistic'),
    },
  };
}
