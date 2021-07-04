
import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import MainApp from 'ui/app';

const app = createElement('main-app', { is: MainApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('.lightning-component').appendChild(app);
