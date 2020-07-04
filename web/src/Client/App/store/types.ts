export type DepartmentType = {
    publicId?: string;
    name: string;
    description: string;
    image: {
        path: string
    };
    staff: object[]
};

export type AppContextType = {
    departments: DepartmentType[];
    assistance: object[];
    feedbacks: object[];
    galleries: {
        mainPageGallery: object[];
        galleryImages: object[];
    },
    setDepartments: (departments) => void;
    setGalleries: (galleries) => void;
    setAssistance: (assistance) => void;
    setFeedbacks: (comments) => void;
};
