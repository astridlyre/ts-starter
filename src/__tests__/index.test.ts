import helloWorld from '../index'

describe('helloWorld', () => {
  it('greets the world', () => {
    const got = helloWorld()
    const want = 'Hello, World!'
    expect(got).toBe(want)
  })
})
