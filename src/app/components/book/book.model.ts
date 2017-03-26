export class Book {

    public id: number;
    private title: string;
    private author: string;
    private image: string;
    private tags?: Array<string>;
    public date: number;

    constructor(id: number, title: string, author: string,
        date: number, image?: string, tags?: Array<string>) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = date;
        this.image = image;
        this.tags = tags;
    }
}