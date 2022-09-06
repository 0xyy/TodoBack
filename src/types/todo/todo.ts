export interface TodoInterface {
    id: string;
    todo: string;
    description: string | null;
    isImportant: boolean;
    isFinished: boolean;
    expiresIn: Date;
    createdAt: Date;
}