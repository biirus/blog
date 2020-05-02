import './index-564ea8d0.js';
import { A as ActiveRouter } from './active-router-7c96c4c4.js';
import './match-path-760e1797.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
