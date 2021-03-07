function subtract(...numbers) {
  return numbers.reduce(
    (numAcumlate, numCurrent, index) => (
      !!index ? numAcumlate - numCurrent : numAcumlate
    ),
    numbers[0]
  )
}

exports.subtract = subtract
