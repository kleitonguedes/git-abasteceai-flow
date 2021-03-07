function sum(...numbers) {
  return numbers.reduce(
    (numAcumlate, numCurrent) => numAcumlate + numCurrent, 0
  )
}
