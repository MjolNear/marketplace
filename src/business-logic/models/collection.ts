export interface Collection {
    title: string,
    description: string,
    logoImg: string,
    headerImg: string
    externals: ExternalLinks
}

export interface ExternalLinks {
    website?: string,
    twitter?: string,
    discord?: string,
    instagram?: string
}