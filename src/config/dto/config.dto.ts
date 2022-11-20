export interface corsDto {
    origin: string
    methods: string,
    preflightContinue: boolean,
    optionsSuccessStatus: number
}