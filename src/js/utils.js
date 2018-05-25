'use strict'

export const filterUnique = (value, index, self) => self.indexOf(value) === index

export const filterStringMatch = (searchString, caseSensitive = false) => value => {
  if (caseSensitive) {
    value = value.toLowerCase()
    searchString = searchString.toLowerCase()
  }
  return !!~value.indexOf(searchString)
}
