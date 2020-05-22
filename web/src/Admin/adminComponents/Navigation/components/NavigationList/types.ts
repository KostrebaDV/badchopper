export type NavigationItemType = {
    label: string;
    route: string | null;
    items: NavigationItemType[]
    id: string;
    hasRoute: boolean;
}

export type NavigationListProps = {
    navigationList: NavigationItemType[]
};
