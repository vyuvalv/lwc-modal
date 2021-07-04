import { LightningElement } from 'lwc';

export default class App extends LightningElement {

    modalOpen = false;
    openModal() {
        this.modalOpen = true;
    }

    closeModal() {
        this.modalOpen = false;
    }
}
