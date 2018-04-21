//https://vuejs.org/v2/guide/state-management.html

/* globals localStorage, Vue */

window.store = {
    state: {
        //
    },
    get: function (key) {
        if (this.state[key]) {
            return this.state[key];
        }

        var json = localStorage.getItem(key) || null;
        if (json) {
            var value = null;
            try {
                value = JSON.parse(json);
            } catch (e) {
                //
            }

            Vue.set(this.state, key, value);
            return value;
        }
    },
    set: function (key, value) {
        Vue.set(this.state, key, value);
        var json = JSON.stringify(value);
        localStorage.setItem(key, json);
    }
};
