import { judge } from './judge.js';

const languageApi = {
  getAll(params) {
    const url = '/languages';
    return judge.get(url);
  },

  get(id) {
    const url = `/languages/${id}`;
    return judge.get(url);
  },
};

export { languageApi };
