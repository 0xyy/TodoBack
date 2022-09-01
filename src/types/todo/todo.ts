export interface TodoInterface {
    id: string;
    todo: string;
    description: string;
    isImportant: string;
    createdAt: Date;
    expiresIn: Date;
    isFinished: boolean;
}