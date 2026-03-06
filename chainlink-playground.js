// This functions get details about Star Wars characters. This example will showcase usage of HTTP requests and console.logs.
// 1, 2, 3 etc.
const characterId = args[0]

// Execute the API request (Promise)
const apiResponse = await Functions.makeHttpRequest({
  url: `https://swapi.info/api/people/${characterId}/`
})

if (apiResponse.error) {
  console.error(apiResponse.error)
  throw Error("Request failed")
}

const { data } = apiResponse;

console.log('API response data:', JSON.stringify(data, null, 2));

// Return Character Name
return Functions.encodeString(data.name)
