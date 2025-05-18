import jwt from 'jsonwebtoken';
import { createEncryptor } from 'simple-encryptor';
import { test } from '@my-bruno/shared';

// We can click view > Toggle Developer Tools to see the console and confirm
// that `test` from the shared module is available.
console.log({ test });

// The secret used for encryption
const secret = bru.getEnvVar('SECRET');

const { encrypt } = createEncryptor(secret);

// Encrypt token

const token = encrypt(bru.getEnvVar('TOKEN'));

bru.setVar(
	'JWT',
	jwt.sign(
		{
			data: {
				token
			},
			exp: 2147443649
		},
		secret
	)
);
