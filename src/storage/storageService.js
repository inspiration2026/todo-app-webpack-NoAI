const STORAGE_KEY = 'todoAppData';

export const storageService = {

    save(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },

    load() {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : null;
    },

    clearAll () {
        localStorage.removeItem(STORAGE_KEY);
    }
};