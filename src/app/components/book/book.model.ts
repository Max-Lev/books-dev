export class Book {

    private id: number;
    private title: string;
    private author: string;
    private image: string;
    private tags?: Array<string>;
    private date: Date;

    constructor(id: number, title: string, author: string,
        date: Date, image?: string, tags?: Array<string>) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
        this.image = image;
        this.tags = tags;
    }
}