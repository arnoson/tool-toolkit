import { Component } from 'vue';
import { Layer } from '../types/layer';
declare const _default: <T extends Layer<T>>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly onCombine?: ((targetId: number, sourceId: number) => any) | undefined;
        readonly "onReorder-before"?: ((targetId: number, sourceId: number) => any) | undefined;
        readonly "onReorder-after"?: ((targetId: number, sourceId: number) => any) | undefined;
        readonly onDelete?: ((layer: T) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onDelete" | "onCombine" | "onReorder-before" | "onReorder-after"> & {
        items: T[];
        selectedItems: Set<T>;
        icons: Record<T["type"], Component | string>;
    } & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {};
    emit: ((evt: "combine", targetId: number, sourceId: number) => void) & ((evt: "reorder-before", targetId: number, sourceId: number) => void) & ((evt: "reorder-after", targetId: number, sourceId: number) => void) & ((evt: "delete", layer: T) => void);
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
