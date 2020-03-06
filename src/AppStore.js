import { observer } from "mobx-react"
import { observable, computed } from 'mobx'

class AppStore {
    @observable items = [];
    @observable pendingRequest = 0;

    constructor() {

    }

    @computed get completedItemsCount() {
        return this.items.filter(item => item.complete === true).length;
    }

    @computed get report() {
        if(this.items.length === 0) {
            return "none";
        }
        const nextItem = this.items.find(item => item.complete === false);
        return `Next Item: ${nextItem? nextItem.task: "none"}`
    }

    addItem(task) {
        this.items.push({
            task: task,
            completed: false,
            assign: null
        })
    }
}



export default AppStore;