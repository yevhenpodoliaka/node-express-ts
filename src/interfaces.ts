export interface IRequestError extends Error {
    status?: number;
    code?: number;
}