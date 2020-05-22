export type MediaImagesType = {
    _id: string;
    name: string;
    path: string;
    extension: string;
}[]

export type MediaContextType = {
    images: MediaImagesType,
    setAllImages: ([]: MediaImagesType) => void;
};
