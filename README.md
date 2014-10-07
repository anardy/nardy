[![Build Status](https://travis-ci.org/anardy/nardy.svg?branch=master)](https://travis-ci.org/anardy/nardy)

# Nardy.js

API estilo `jQuery`.

## Instalação

### Instalando manualmente:

```
<script src='nardy.min.js'></script>
```

### Instalando via bower:

```
bower install nardy
```

Ainda não diponível.

### Usando a API com RequireJS

```js
define(['nardy'], function(Nardy) {
	Nardy.$(element).text('RequireJS');
});
```

## Documentação

### Seletores e métodos

1. $ : Seletor de elementos.

```js
Nardy.$(elemento)
```

2. append : cria um elemento

```js
Nardy.$(element).append(elemento)
```

3. text : adição de texto em um elemento

```js
Nardy.$(element).text('texto')
```

4. attr : alterar alguma propriedade de um elemento

```js
Nardy.$(element).attr('attr', value)
```

5. val : pega o valor de um elemento

Setar o valor no atribudo value do elemento: 

```js
Nardy.$('element').val('texto')
```

Pegar o valor do atributo value do element: `Nardy.$('element').val()`

6. click : funcionalidade de clicar em um elemento

```js
Nardy.$(elemento).click(function() {
	/* ação após o click */
})
```

7. change : funcionalidade de change do elemento select

```js
Nardy.$(elemento).change(function() {
	/* ação após change */
})
```

8. each : percorrer uma lista de objetos

```js
Nardy.each(lista, function(i, item) {
	/* ação ao percorrer a lista */
})
```

9. selected : recupera o texto do select selecionado

```js
Nardy.$(elemento).selected()
```

10. empty : limpar um elemento

```js
Nardy.$(elemento).empty()
```

11. addClass : adiconar estilo ao elemento

```js
Nardy.$(elemento).addClass('estilo')
```

## Chamadas Ajax

1. Http POST

2. Http GET

3. Generico

### Opções

* Error
* Sucesso
* Antes do envio
* Depois do Envio

## Encadeamento

Alguns dos métodos informados acima aceitam encadeamento, ou seja, consigo chamar um método após o outro.

Exemplo:

```js
Nardy.$(elemento).text('texto').addClass('estilo');
```

Os elementos que suportam encadeamento são:

* $
* append
* text
* attr

## Referências

[http://code.tutsplus.com/tutorials/from-jquery-to-javascript-a-reference--net-23703](http://code.tutsplus.com/tutorials/from-jquery-to-javascript-a-reference--net-23703)

[http://sharedfil.es/js-48hIfQE4XK.html](http://sharedfil.es/js-48hIfQE4XK.html)

[http://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-a-practical-example--cms-21998](http://code.tutsplus.com/articles/the-beginners-guide-to-type-coercion-a-practical-example--cms-21998)