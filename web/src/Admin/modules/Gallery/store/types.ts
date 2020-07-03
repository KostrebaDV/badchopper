export type GalleriesType = {
    _id: string;
    name: string;
    systemName: string;
    imagesIds: string[];
}[]

export type GalleriesContextType = {
    galleries: GalleriesType,
    setAllGalleries: ([]: GalleriesType) => void;
    setGallery: (GalleriesType) => void;
    removeOneGallery: (GalleriesType) => void;
    updateGallery: (GalleriesType) => void;
};
