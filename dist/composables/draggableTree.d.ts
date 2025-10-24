import { Instruction } from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item';
import { Ref } from 'vue';
import { TreeItem } from '../utils/tree';
export type DraggableTreeOptions = {
    reorderBefore?: (targetId: number, sourceId: number) => void;
    reorderAfter?: (targetId: number, sourceId: number) => void;
    combine?: (targetId: number, sourceId: number) => void;
};
export declare const useDraggableTree: ({ reorderBefore, reorderAfter, combine, }: DraggableTreeOptions) => void;
export type DraggableTreeItemOptions = {
    isExpanded: Ref<boolean>;
    item: Ref<TreeItem>;
};
export declare const useDraggableTreeItem: (el: Ref<HTMLElement | null>, { isExpanded, item }: DraggableTreeItemOptions) => {
    isDragging: Ref<boolean, boolean>;
    isDraggedOver: Ref<boolean, boolean>;
    instruction: Ref<{
        operation: "combine";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | {
        operation: "reorder-before";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | {
        operation: "reorder-after";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | null, Instruction | {
        operation: "combine";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | {
        operation: "reorder-before";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | {
        operation: "reorder-after";
        blocked: boolean;
        axis: "horizontal" | "vertical";
    } | null>;
};
