interface TopicsInSections {
    id: string;
    name: string;
    image: string;
    position: number;
}

export interface SectionsResponseDto {
    id: string;
    name: string;
    position: number;
    topics: TopicsInSections[]
}