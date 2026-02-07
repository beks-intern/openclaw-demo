import test from 'node:test';
import assert from 'node:assert/strict';
import { resetPassword } from '../src/reset.js';

test('resetPassword should return 400 when email is missing', () => {
  const res = resetPassword({});
  assert.equal(res.status, 400);
  assert.match(res.body.error, /email/i);
});
