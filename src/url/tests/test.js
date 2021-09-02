const request = require('supertest')
const app = require('../../app')
const Router = require("koa-router");
const router = new Router();
router.use("/", require("../router"));
app.use(router.middleware());
const req = request(app);
// const bodyParser = require('koa-bodyparser')
// const {save} = require('./save_json.json')

describe('docs', () => {

  it('should return the docs web page', async () => {
    const response = await req.get('docs')
      .expect(response.status).toEqual(200)
      .expect(response.type).toEqual('text/html');
  });
});




















// jest.mock('./get.json', () => {[
//   {
//     urlCode:"123",
//     longUrl:"https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0",
//     shortUrl: "http://localhost:3000/123"
//   },
//   {
//     urlCode:"12123",
//     longUrl:"https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0",
//     shortUrl: "http://localhost:3000/12123"
//   }
// ]})
// let urlCode;

// let firstState;
// describe("server-routes", () => {
//   it("GET /states - success", async () => {
//     const { body } = await request(app).get("/states"); //use the request function that we can use the app// save the response to body variable
//     expect(body).toEqual([
//       {
//         state: "MI",
//         capital: "Lansing",
//         governor: "Gretchen Whitmer",
//       },
//       {
//         state: "GA",
//         capital: "Atlanta",
//         governor: "Brian Kemp",
//       },
//     ]);
//     firstState = body[0];
//   });
// it("GET /states/MI - success", async () => {
//     const { body } = await request(app).get(`/states/${urlCode}`);
//     expect(body).toEqual(urlCode);
//   });
// });

// jest.mock("./save_json", () => ({
//   save: jest.fn(),
// }));

// it("POST /states - success", async () => {
  
//   const { body } = await request(app).post("/api/url/shorten").send({
//     longUrl: "https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0",
//   });
//   expect(body).toEqual();
//   expect(save).toHaveBeenCalledWith([
//     {
//       urlCode:"123",
//       longUrl:"https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0",
//       shortUrl: "http://localhost:3000/123"
//     },
//     {
//       urlCode:"12123",
//       longUrl:"https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0",
//       shortUrl: "http://localhost:3000/12123"
//     }
//   ]);
// });


