export interface UserInterface {
    id: string;
    email: string;
    pwdHash: string;
    name: string;
    salt: string;
    currentTokenId: string | null;
}

export type RegisterResponse = {
    isSuccess: false,
    message: string;
} | {
    isSuccess: true,
    name: string,
    email: string,
}
