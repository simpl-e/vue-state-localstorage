# Vue2 generic state management with localStorage

Save in `store.state` and `localStorage.setItem`, and make it Vue reactive.
```js
window.store.set("item", item);
```

Get from `store.state` or `localStorage.getItem`.
```js
window.store.get("item");
```

Get from `store.state` only.
```js
window.store.state.item;
```
