import * as crypto from 'crypto';

export const hashPwd = (pwd: string, salt: string): string => {
    const hmac = crypto.createHmac('sha512', salt);
    hmac.update(pwd);
    return hmac.digest('hex');
};
