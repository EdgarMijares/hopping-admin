export class Upload {
    $key:string;
    file:File;
    name:string;
    url:string;
    progres:number;
    fecha:Date = new Date();

    constructor(file:File) {
        this.file = file;
    }
}
