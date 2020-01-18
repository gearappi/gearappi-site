import optionsStore from "./optionsStore";
import LocaleStore from "./localeStore";

class mainStore {
    constructor() {
        this.LocaleStore = new LocaleStore();      
    }
}
export default mainStore;