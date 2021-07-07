import { humanYearsCatYearsDogYears } from "./util"

describe("Calculate dog years",() => {
  it("should calculate dog and cat years from 30 human years",() => {
    const humanYears = 30
    const expected = [humanYears, 136, 164]

    const result = humanYearsCatYearsDogYears(humanYears) 

    expect(result).toEqual(expected)
  })

  it("should calculate dog and cat years from 25 human years",() => {
    const humanYears = 25
    const expected = [humanYears, 116, 139]

    const result = humanYearsCatYearsDogYears(humanYears) 

    expect(result).toEqual(expected)
  })

  it("should calculate dog and cat years from 22 human years",() => {
    const humanYears = 22
    const expected = [humanYears, 104, 124]

    const result = humanYearsCatYearsDogYears(humanYears) 

    expect(result).toEqual(expected)
  })

  it("should calculate dog and cat years from 1 human year",() => {
    const humanYears = 1
    const expected = [humanYears, 15, 15]

    const result = humanYearsCatYearsDogYears(humanYears) 

    expect(result).toEqual(expected)
  })

})
