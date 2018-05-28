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

export const isCallable = fn => typeof fn === 'function' || Object.prototype.toString.call(fn) === '[object Function]'

export const objectToUrlString = obj => {
  return Object.keys(obj).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
  }).join('&')
}

export const urlStringToObject = urlStr => {
  return urlStr.substring(urlStr.indexOf('?') + 1).split('&').reduce((p, c) => {
    let keyValueArray = c.split('=')

    p[decodeURIComponent(keyValueArray[0])] = decodeURIComponent(keyValueArray[1])

    return p
  }, {})
}

export const allPossibleCases = (arr) => {
  if (!arr.length) return arr

  if (arr.length == 1) {
    return arr[0]
  } else {
    var result = []
    var allCasesOfRest = allPossibleCases(arr.slice(1))
    for (var i = 0; i < allCasesOfRest.length; i++) {
      for (var j = 0; j < arr[0].length; j++) {
				if (Array.isArray(allCasesOfRest[i])) {
	        result.push([arr[0][j], ...allCasesOfRest[i]])
				} else {
					result.push([arr[0][j], allCasesOfRest[i]])
				}
      }
    }
    return result
  }
}

export const priceSum = (flights, currency = '€', decimal = ',') => {
  return flights.reduce((price, flight) => {
    let withoutSymbol = flight.price.replace(currency, '')
    let withDot = withoutSymbol.replace(decimal, '.')
    let asFloat = parseFloat(withDot)
    price += asFloat
    return price
  }, 0)
}
