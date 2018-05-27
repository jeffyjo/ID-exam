'use strict'

export const filterUnique = (value, index, self) => self.indexOf(value) === index

export const filterStringMatch = (searchString, caseSensitive = false) => value => {
  if (!caseSensitive) {
    value = value.toLowerCase()
    searchString = searchString.toLowerCase()
  }
  return !!~value.indexOf(searchString)
}

export const removeDuplicateObjectsByKey = (arr, key) => {
  let values = arr.map(object => object[key])
  return arr.filter((object, position) => position === values.indexOf(object[key]))
}
