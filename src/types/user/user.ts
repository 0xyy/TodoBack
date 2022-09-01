export interface UserInterface {
    id: string;
    email: string;
    pwdHash: string;
    name: string;
    salt: string;
    currentTokenId: string | null;
}