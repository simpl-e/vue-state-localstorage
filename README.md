# Vue2 manejo genérico del state con localStorage

```js
// Guardar en `store.state` y `localStorage.setItem`, y hacer reactivo en Vue
window.store.set("item", item);
```

```js
// Obtener de `store.state` o `localStorage.getItem`
window.store.get("item");
```

```js
// Obtener de `store.state` solo (ignorar localStorage)
window.store.state.item;
```
