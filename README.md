nardy
=====

[![Build Status](https://travis-ci.org/anardy/nardy.svg?branch=master)](https://travis-ci.org/anardy/nardy)

# Nardy.js

API para substiuir o `jQuery`.

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

Em desenvolvimento...

## Documentação

### Seletores e métodos

1. $ : Seletor de elementos.

```
$_.$(elemento)
```

2. append : cria um elemento

```
$_.$(element).append(elemento)
```

3. text : adição de texto em um elemento

```
$_.$(element).text('texto')
```

4. attr : alterar alguma propriedade de um elemento

```
$_.$(element).attr('attr', value)
```

6. val : pega o valor de um elemento

Setar o valor no atribudo value do elemento: 

```
$_.('element').val('texto')
```

Pegar o valor do atributo value do element: `$_.('element').val()`

5. click : funcionalidade de clicar em um elemento

```
$_.$(elemento).click(function() {
	/* ação após o click */
})
```

6. change : funcionalidade de change do elemento select

```
$_.$(elemento).change(function() {
	/* ação após change */
})
```

7. each : percorrer uma lista de objetos

```

$_.each(lista, function(i, item) {
	/* ação ao percorrer a lista */
})
```

8. selected : recupera o texto do select selecionado

```
$_.$(elemento).selected()
```

9. empty : limpar um elemento

```
$_.$(elemento).empty()
```

10. addClass : adiconar estilo ao elemento

```
$_.$(elemento).addClass('estilo')
```

## Chamadas Ajax

1. Http POST

EXEMPLO

2. Http GET

EXEMPLO

3. Generico

EXEMPLO

### Opções

* Error
* Sucesso
* Antes do envio
* Depois do Envio

## Encadeamento

Alguns dos métodos informados acima aceitam encadeamento, ou seja, consigo chamar um método após o outro.

Exemplo:

```
$_.$(elemento).text('texto').addClass('estilo');
```

Os elementos que suportam encadeamento são:

* $
* append
* text
* attr

## Referências

[http://code.tutsplus.com/tutorials/from-jquery-to-javascript-a-reference--net-23703](http://code.tutsplus.com/tutorials/from-jquery-to-javascript-a-reference--net-23703)

[http://sharedfil.es/js-48hIfQE4XK.html](http://sharedfil.es/js-48hIfQE4XK.html)