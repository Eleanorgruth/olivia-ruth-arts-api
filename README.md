# olivia-ruth-arts-api

This app is the back-end server for the [Olivia Ruth Arts showcase project](https://github.com/Eleanorgruth/olivia-ruth-arts-ui)

The back-end is an Express API serverless functions [deployed](https://olivia-ruth-arts-api.vercel.app/art) on Vercel 

### Installation
- Clone down this repo, and cd into it.
- `npm install` to download all dependencies
- `nodemon server.js`


### Endpoints

| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/art` | GET | not needed | An array containing all existing art pieces |
| `http://localhost:3001/art/:id` | GET | not needed | The requested art object: `{id: <Number> , type: <String>,  title: <String>, medium: <String>, date: <String>, dimension: <String>, description: <String>, url: <String>}` |
| `http://localhost:8080/api/v1/comicData` | POST | ``{id: <Number> , type: <String>,  title: <String>, medium: <String>, date: <String>, dimension: <String>, description: <String>, url: <String>}` | Created object: `{id: <Number> , type: <String>,  title: <String>, medium: <String>, date: <String>, dimension: <String>, description: <String>, url: <String>}` |
| `http://localhost:8080/api/v1/comicData:id` | DELETE | not needed |  An array containing all existing art pieces reflecting the new data without the deleted piece |
