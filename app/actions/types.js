import {createExportableConstants} from 'Utils';

const actionTypes = [
  'RESIZE',
  'CREATE_NAVIGATOR_NODE',
  'UPDATE_NAVIGATOR_NODE',
  'DELETE_NAVIGATOR_NODE',
];

export default createExportableConstants(actionTypes);
