# Vue2 generic state management with localStorage

```js
// Save in `store.state` and `localStorage.setItem`, and make it Vue reactive
window.store.set("item", item);
```

```js
// Get from `store.state` or `localStorage.getItem`
window.store.get("item");
```

```js
// Get from `store.state` only (ignore localStorage)
window.store.state.item;
```
