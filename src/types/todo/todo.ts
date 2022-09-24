export interface TodoInterface {
    id: string;
    todo: string;
    description: string | null;
    isImportant: boolean;
    isFinished: boolean;
    expiresIn: Date;
    createdAt: Date;
}

export type AddTodoResponse = {
    isSuccess: boolean,
    message: string,
};

export type RemoveTodoResponse = AddTodoResponse;

export type MarkTodoResponse = {
    isSuccess: true,
} | {
    isSuccess: false,
    message: string,
};