const api = require("../index");
const axios = require("axios");

const mockedAxios = {
  data: {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }
};

describe("index.js", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(api.somaDoisNumeros(1, 2)).toMatchSnapshot();
  });

  it("expect to mock axios request", async () => {
    const spy = jest.spyOn(axios, "get");
    spy.mockReturnValue(mockedAxios);
    const apiResponse = await api.pegaPost(1);
    expect(apiResponse).toMatchSnapshot();
  });
});
