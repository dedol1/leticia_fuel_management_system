export interface TimelineImage {
    mediaType: string,
    privacy: string,
    images: Image[]
}


export interface Image {
    id: string,
    displayImageUrl: string,
    downloadImageUrl: string,
    mediaTitle: string,
    description: string
}
