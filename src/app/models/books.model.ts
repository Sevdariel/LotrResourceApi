export interface Books {
    docs: Book[];
    total: number;
}

export interface Book {
    _id: string;
    name: string;
}