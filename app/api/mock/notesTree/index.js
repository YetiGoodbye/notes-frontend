import cloneDeep from 'lodash/cloneDeep';

import notesTree from './database'

const delay = 500;
const failureThreshold = 1;

const fetchAllNodes = () => {
  let data = cloneDeep(notesTree);
  data = data.map( (node, id) => ({...node, id }));

  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < failureThreshold)
        resolve(data);
      else
        reject("Request failed");
    }, delay);
  });
}

const fetchNode = (id) => {

  const data = cloneDeep(notesTree[id]);
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
  fetchAllNodes,
  fetchNode,
}

