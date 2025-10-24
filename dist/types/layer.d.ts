export type Layer<T> = {
    id: number;
    type: string;
    name: string;
    isLocked: boolean;
    isHidden: boolean;
    children?: T[];
};
