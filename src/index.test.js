// @flow
const api = require('./index');
const axios = require('axios');

describe('index.js', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(api.somaDoisNumeros(1,2)).toMatchSnapshot();
  })
  
  it('expect to mock axios request', async () => {
    const spy = jest.spyOn(axios, 'get');
    spy.mockReturnValue('MockedValue');
    const apiResponse = await api.pegaPost(1);
    expect(apiResponse).toBe('MockedValue');
    expect(spy).toHaveBeenCalled();
  })
})

