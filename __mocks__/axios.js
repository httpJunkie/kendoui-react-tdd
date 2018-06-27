const axiosMock = jest.genMockFromModule('axios');
let mockResponse = {
  data: {
    "locations": [
      {
        "city": "test city",
        "address": "test address"
      }
    ]
  }
};
axiosMock.get.mockImplementation(req);

function req() {
  return new Promise(function (resolve) {
    axiosMock.delayTimer = setTimeout(function () {
      resolve(mockResponse);
    }, 100);
  });
}

module.exports = axiosMock;
