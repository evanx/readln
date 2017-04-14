# readln

It is implemented as follows:
```javascript

```

```
echo -e 'line 1\nline2' |
  node -e "
    //require('readln')(
    require('./index.js')(
        {},
        (accumulator, line, index) => console.log(index, line.length, line),
        (accumulator, index) => console.log(index, 'done')
    )
  "
```

<hr>

https://twitter.com/@evanxsummers
