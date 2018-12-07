import db from './database'

const delay = 500;
const failureThreshold = 1;

const fetchNode = (id, depth = 1) => {

  if (depth < 1) {
    return Promise.reject("invalid argument");
  }

  let {root, nodes} = db.navigator;

  // const ids = [id];
  // do {
  //   ids.slice().forEach(id => {
  //     ids.push();
  //     nodes[id] ? nodes[id].descendants : root;      
  //   });
  // } while (--depth > 0);

  //const ids = nodes[id] ? nodes[id].descendants : root;
  
  //let data = ids.map(id => ({...nodes[id], id}));/*{id, title, nodeId, childrenIds}*/
  let data = Object.keys(nodes).map(id => ({...nodes[id], id:id }));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (Math.random() < failureThreshold) ? resolve(data) : reject("failed");
    }, delay);
  });
};

const fetchNode1 = (id) => {

  let {root, nodes} = db.navigator;

  const ids = nodes[id] ? nodes[id].descendants : root;
  let data = ids.map(id => ({...nodes[id], id}));/*{id, title, nodeId, childrenIds}*/

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (Math.random() < failureThreshold) ? resolve(data) : reject("failed");
    }, delay);
  });
};

export {
  fetchNode,
}

