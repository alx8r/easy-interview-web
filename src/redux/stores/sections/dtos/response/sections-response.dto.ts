interface TopicsInSections {
    id: string;
    name: string;
}

export interface SectionsResponseDto {
    id: string;
    name: string;
    topic: TopicsInSections[]
}