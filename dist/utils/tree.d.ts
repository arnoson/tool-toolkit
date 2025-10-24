export type TreeItem = {
    id: number;
    children?: TreeItem[];
};
export declare const findInTree: <T extends TreeItem>(items: T[], id: number) => T | null;
export declare const getMaxTreeId: <T extends TreeItem>(item: T) => number;
export declare const removeFromTree: <T extends TreeItem>(items: T[], id: number) => T | null;
export declare const insertIntoTreeBefore: <T extends TreeItem>(items: T[], targetId: number, newItem: T) => boolean;
export declare const insertIntoTreeAfter: <T extends TreeItem>(items: T[], targetId: number, newItem: T) => boolean;
export declare const flattenTree: <T extends TreeItem>(items: T[], result?: T[]) => T[];
