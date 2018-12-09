import cloneDeep from 'lodash/cloneDeep';

import notes from './database'

const delay = 500;
const failureThreshold = 1;


const fetchNote = (id) => {

  const data = {text: cloneDeep(notes[id])};
  if (data) data.id = id;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!data)
        reject("Not found");
      else if (Math.random() < failureThreshold)
        resolve(data);
      else
        reject("Request failed");
    }, delay);
  });
};


export {
  fetchNote,
}

