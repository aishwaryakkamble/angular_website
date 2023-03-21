export class Users{
    id!:number;
    name!:string;
    description!:string;
    price!:number;
    imgUrl!:string;
    constructor(id:number,name:string,des:string,price:number,imgUrl:string){
        this.id=id;
        this.name=name;
        this.description=des;
        this.price=price;
        this.imgUrl=imgUrl;
    }

}