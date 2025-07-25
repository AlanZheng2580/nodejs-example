
const request = require('supertest');
const server = require('../src/index');

describe('API Server', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should return path, method, and headers', async () => {
    const response = await request(server)
      .get('/test-path')
      .set('X-Test-Header', 'test-value');

    expect(response.status).toBe(200);
    expect(response.body.path).toBe('/test-path');
    expect(response.body.method).toBe('GET');
    expect(response.body.headers['x-test-header']).toBe('test-value');
  });
});
