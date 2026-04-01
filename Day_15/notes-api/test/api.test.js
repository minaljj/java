const { describe, it } = require('mocha');
const request = require('supertest');
const { expect } = require('chai');

const app = require('../server');
describe('GET /notes', () => {
    it('should return all notes', async () => {
        const res = await request(app).get('/notes');
        expect(res.status).to.equal(200);
    });
    it('should return 404 for non existance note ID', async () => {
        const res = await request(app).get('/invalid');
        expect(res.status).to.equal(404);
    });
    it('should return 201 for POST success', async () => {
        const res = await request(app)
            .post('/notes')
            .send({
                title: 'Test Note',
                content: 'This is a test note'
            });
        expect(res.status).to.equal(201);
    });
    it('should return 400 for missing title', async () => {
        const res = await request(app)
            .post('/notes')
            .send({
                content: 'This is a test note'
            });
        expect(res.status).to.equal(400);
    });
    it('should return 400 POST missing content', async () => {
        const res = await request(app)
            .post('/notes')
            .send({
                title: 'This is a test note'
            });
        expect(res.status).to.equal(400);
    });
    it('should return 400 POST empty title', async () => {
        const res = await request(app)
            .post('/notes')
            .send({
                title: '',
                content: 'Some content'
            });
        expect(res.status).to.equal(400);
    });
    it('should return 400 POST empty content', async () => {
        const res = await request(app)
            .post('/notes')
            .send({
                title: 'Some title',
                content: ''
            });
        expect(res.status).to.equal(400);
    });
    it('should return 404 GET id not found', async () => {
        const res = await request(app).get('/notes/999999');
        expect(res.status).to.equal(404);
    });
    it('DELETE /notes/:id success', async () => {
        const createRes = await request(app)
            .post('/notes')
            .send({
                title: 'temp',
                content: 'temp note'
            });
        const notesRes = await request(app).get('/notes');
        const id = notesRes.body[notesRes.body.length - 1].id;
        const res = await request(app).delete(`/notes/${id}`);
        expect(res.status).to.equal(200);
    });
    it('should return 404 DELETE id not found', async () => {
        const res = await request(app).delete('/notes/999999');
        expect(res.status).to.equal(404);
    });

    it('should return 400 if status is not closed', async () => {

        const saveResponse = await request(app)
            .post('/notes/')
            .send({ title: 'Temp Note', content: 'Testing 400 status' })
            .expect(201);
        const response = await request(app)
            .put(`/notes/${saveResponse.body.id}`)
            .send({ status: 'create' })
            .expect(400);
        expect(response.body.error).to.equal("Status must be 'closed'");
    });

    it('should return 404 if note does not exist', async () => {
        await request(app)
            .put('/notes/123456')
            .send({ status: 'closed' })
            .expect(404)
            .then(res => {
                expect(res.body.error).to.equal('Note not found');
            });
    });
    it('should handle large content', async () => {
        const largeContent = 'A'.repeat(100);
        const res = await request(app)
            .post('/notes')
            .send({ title: 'Large Note', content: largeContent });
        expect(res.status).to.equal(201);
    });

    it('should not modify createdAt when updating note status', async () => {
        const createRes = await request(app).post('/notes').send({
                title: 'Timestamp',
                content: 'Check immutability'
            })
            .expect(201);
        const createdNote = createRes.body;
        const originalCreatedAt = createdNote.createdAt;
        const updateRes = await request(app)
            .put(`/notes/${createdNote.id}`)
            .send({ status: 'closed' })
            .expect(200);

        expect(updateRes.body.createdAt).to.equal(originalCreatedAt);
    });
    
    

  






});
