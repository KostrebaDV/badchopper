export type DepartmentType = {
    publicId?: string;
    address: {
        number: string;
        street: {
            ua: string;
            ru: string;
            en: string;
        };
    };
    description: string;
    departmentYClients: string;
    phone: string;
    image: {
        path: string
    };
    staff: object[]
};

export type AppContextType = {
    departments: DepartmentType[];
    assistance: object[];
    feedbacks: object[];
    languageCode: string;
    galleries: {
        mainPageGallery: object[];
        galleryImages: object[];
    },
    setDepartments: (departments) => void;
    setGalleries: (galleries) => void;
    setAssistance: (assistance) => void;
    setFeedbacks: (comments) => void;
    setLanguageCode: (languageCode: string) => void;
};
