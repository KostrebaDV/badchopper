type StaffItem = {
    _id: string;
    name: string;
    surname: string;
    patronymic: string;
    imageId: string;
    description: string;
    position: number;
    instagramUrl: string | null;
    facebookUrl: string | null;
};

export type StaffContextType = {
    staffList: StaffItem[];
    setAllStaff: ([]) => void;
    updateStaff: ([]) => void;
    setStaff: ([]) => void;
    removeStaff: ([]) => void;
};
