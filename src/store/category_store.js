import {action, observable} from 'mobx'

class CategoryStore {
    @observable
    dataList = [];

    @action.bound
    setDataList = (dataList) => {
        this.dataList = dataList
    }
}

export const categoryStore = new CategoryStore();
