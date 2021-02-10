import request from 'supertest';
import app from './app';

describe('GET /', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
  });
});

describe('GET /api/whoami', () => {
  it('returns a JSON object with your IP address in the ipaddress key', async () => {
    const res = await request(app).get('/api/whoami');

    expect(res.body.ipaddress).toBeTruthy();
  });

  it('returns a JSON object with your preferred language in the language key', async () => {
    const res = await request(app)
      .get('/api/whoami')
      .set('Accept-Language', 'en-GB');

    expect(res.body.language).toBe('en-GB');
  });

  it('returns a JSON object with your software in the software key', async () => {
    const res = await request(app)
      .get('/api/whoami')
      .set('User-Agent', 'Mozilla/5.0');

    expect(res.body.software).toBe('Mozilla/5.0');
  });
});

describe(`GET /random-url`, () => {
  it('should return 404', async () => {
    const res = await request(app).get('/random-url');

    expect(res.status).toBe(404);
  });
});
