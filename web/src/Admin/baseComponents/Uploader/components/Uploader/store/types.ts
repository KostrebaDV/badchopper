export type uploaderContextProps = {
    files: [];
    addFile: (files: []) => void;
    removeFile: (index: number) => void;
    uploadFiles: (url: string, data: any, handleUploadProgress: () => void) => any;
    changeFileName: (name: string, index: number) => void;
    removeAllFiles: () => void;
    isPending: boolean;

}