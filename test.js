let obj = {
  a: [0, 1],
  b: [0, 1]
}

let nobj = Object.keys(obj).reduce((acc, v) => ({...acc, [v]: undefined}), {})

console.log(nobj)