let extendStatics = (function () {
  function getStaticExtendWithForIn(Son, Parent) {
    for (const key in Parent) {
      if (Object.prototype.hasOwnProperty.call(Parent, key)) {
        Son[key] = Parent[key]
      }
    }
  }

  function getStaticExtendWithObjKeys(Son, Parent) {
    Object.keys(Parent).forEach(key => {
      Son[key] = Parent[key]
    })
  }

  function getStaticExtendWithProto(Son, Parent) {
    Son.__proto__ = Parent
  }

  return function (Son, Parent) {
    extendStatics = Object.setPrototypeOf || getStaticExtendWithForIn || getStaticExtendWithObjKeys || getStaticExtendWithProto
    return extendStatics(Son, Parent)
  }
})()

module.exports = extendStatics
