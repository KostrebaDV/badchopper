export type GalleryOptions = {
    galleryName: string;
    activeElement: number;
    autoPlaytime: number;
    infiniteScroll: boolean;
    galleryItemTemplate: () => void;
};

export type GalleryItem = {
    extension: string;
    name: string;
    path: string;
    _id: string;
};

export type GalleryItems = GalleryItem[]
