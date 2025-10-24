declare const _default: <T extends {
    id: number;
    name: string;
}>(__VLS_props: NonNullable<Awaited<typeof __VLS_setup>>["props"], __VLS_ctx?: __VLS_PrettifyLocal<Pick<NonNullable<Awaited<typeof __VLS_setup>>, "attrs" | "emit" | "slots">>, __VLS_expose?: NonNullable<Awaited<typeof __VLS_setup>>["expose"], __VLS_setup?: Promise<{
    props: __VLS_PrettifyLocal<Pick<Partial<{}> & Omit<{
        readonly "onUpdate:modelValue"?: ((value: T[]) => any) | undefined;
        readonly onDrag?: ((e: MouseEvent, frame: T) => any) | undefined;
        readonly onRemove?: ((frame: T) => any) | undefined;
        readonly "onUpdate:selected"?: ((value: T["id"]) => any) | undefined;
        readonly onAdd?: (() => any) | undefined;
        readonly onDuplicate?: ((frame: T) => any) | undefined;
        readonly onRename?: ((frame: T, name: string) => any) | undefined;
        readonly onDragStart?: ((e: MouseEvent, frame: T) => any) | undefined;
        readonly onDragCancel?: ((frame: T) => any) | undefined;
        readonly onDragEnd?: ((e: MouseEvent, frame: T) => any) | undefined;
    } & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps, never>, "onUpdate:modelValue" | "onDrag" | "onDragStart" | "onRemove" | "onUpdate:selected" | "onAdd" | "onDuplicate" | "onRename" | "onDragCancel" | "onDragEnd"> & ({
        modelValue: T[];
        selected?: T["id"];
    } & {
        sortable?: boolean;
        draggable?: boolean;
        rename?: boolean;
        size?: "medium" | "small" | "big";
    }) & Partial<{}>> & import('vue').PublicProps;
    expose(exposed: import('vue').ShallowUnwrapRef<{}>): void;
    attrs: any;
    slots: {
        heading?(_: {}): any;
        preview?(_: {
            frame: T;
        }): any;
    };
    emit: (((evt: "drag", e: MouseEvent, frame: T) => void) & ((evt: "remove", frame: T) => void) & ((evt: "add") => void) & ((evt: "duplicate", frame: T) => void) & ((evt: "rename", frame: T, name: string) => void) & ((evt: "dragStart", e: MouseEvent, frame: T) => void) & ((evt: "dragCancel", frame: T) => void) & ((evt: "dragEnd", e: MouseEvent, frame: T) => void)) & (((evt: "update:modelValue", value: T[]) => void) & ((evt: "update:selected", value: T["id"]) => void));
}>) => import('vue').VNode & {
    __ctx?: Awaited<typeof __VLS_setup>;
};
export default _default;
type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};
