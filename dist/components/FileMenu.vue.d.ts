type __VLS_Props = {
    filePickerId?: number;
    fileType: FilePickerAcceptType;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    open: (file: File | FileSystemFileHandle) => any;
    clear: () => any;
    save: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpen?: ((file: File | FileSystemFileHandle) => any) | undefined;
    onClear?: (() => any) | undefined;
    onSave?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dropZone: HTMLLIElement;
    fileInput: HTMLInputElement;
}, HTMLMenuElement>;
export default _default;
