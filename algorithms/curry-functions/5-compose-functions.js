

const compose = (...fns) => fns.reduce((f,g) => (...args) => f(g(...args)))

const recompose = (...ass) => reduce((k, l) => (...args) => k(l(..args)));