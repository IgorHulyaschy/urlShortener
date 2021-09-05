const request = require('supertest');
const app = require('../../app');

let server;
beforeAll(async () => {
  jest.setTimeout(10000);
  server = app.callback();
});
afterAll((done) => {
  done();
});
describe('GET - docs', () => {
  it('should return the docs web page', async () => {
    const response = await request(server).get('/docs');
    expect(response.status).toEqual(200);
  });
});

describe('POST - /api/url/shorten', () => {
  it('should return already exsisting short URL', async () => {
    const url = {
      longUrl:
        'https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0',
    };
    const response = await request(server).post('/api/url/shorten').send(url);
    expect(response.body).toStrictEqual({
      url: {
        shortUrl: 'http://localhost:3000/8XTrYwxuT',
      },
    });
  });
  it('should return error - 400', async () => {
    const url = {
      longUrl: '123456',
    };
    const response = await request(server).post('/api/url/shorten').send(url);
    expect(response.body).toStrictEqual({
      message: 'Invalid long URL',
    });
  });
  it('should return error - 500', async () => {
    const url = {
      longUrl: 1,
    };
    await request(server).post('/api/url/shorten').send(url).expect(500);
  });
});

describe('GET - /:urlCode', () => {
  it('should redirect to longUrl', async () => {
    const urlCode = '8XTrYwxuT';
    await request(server).get(`/${urlCode}`).expect(302);
  });
  it('should return error - 500', async () => {
    const urlCode = '8XTrY';
    await request(server).get(`/${urlCode}`).expect(500);
  });
});
