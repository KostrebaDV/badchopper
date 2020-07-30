export type TranslationType = {
    id?: string;
    translationCode: number;
    ru: string;
    ua: string;
    en: string;
};

export type TranslationsDTOType = TranslationType[];

export type TranslationsResponseType = {
    ops: TranslationsDTOType[]
}
