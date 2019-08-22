import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import draggable from 'vuedraggable';

Vue.component('draggable', draggable);

export { DraggableModel } from './Draggable';

export const { version } = require('../package.json'); // eslint-disable-line global-require
