import cloneDeep from 'lodash/cloneDeep';

import status from 'Api/responseStatus';

import notes from './database'

const delay = 500;
const failureThreshold = 1;


const fetchNote = (id) => {

  const note = notes[id];
  
  const response = {
    status: (note) ? status.OK : status.NOT_FOUND,
  };

  if (response.status === status.OK) {
    response.data = {
      id,
      content: cloneDeep(note),
    }
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failureThreshold)
        resolve(response);
      else
        reject("Request failed");
    }, delay);
  });
};


export {
  fetchNote,
}

