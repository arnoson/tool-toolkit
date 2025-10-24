type __VLS_Props = {
    label: string;
};
type __VLS_PublicProps = {
    'horizontal': number | undefined;
    'vertical': number | undefined;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:horizontal": (value: number | undefined) => any;
    "update:vertical": (value: number | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:horizontal"?: ((value: number | undefined) => any) | undefined;
    "onUpdate:vertical"?: ((value: number | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
