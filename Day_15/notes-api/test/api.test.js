const { describe, it } = require('mocha');
const request = require('supertest');
const { expect } = require('chai');

const app = require('../server'); 
describe('GET /notes', () => {
  it('should return all notes', async () => {
    const res = await request(app).get('/notes');

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });
  it('should return 404 for non existance note ID', async () => {
    console.log(request);
    const res = await request(app).get('/notes1234');

    expect(res.status).to.equal(404);
    
  });
});
