# vue-state-localstorage
Vue2 generic state management with localStorage

Save in `store.state` and `localStorage.setItem`, and make it Vue reactive.
```js
store.set("item", item);
```

Get from `store.state` or `localStorage.getItem`.
```js
store.get("item");
```

Get from `store.state` only.
```js
store.state.item;
```
