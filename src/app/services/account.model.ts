export class AccountData{
    name: string = '';
    email: string = '';
    age: number = 0;
    address: string = '';
    website: string;
    facebook: string;
    instagram: string;
    clear() {
        this.name = '';
        this.age = 0;
        this.email = '';
        this.website = '';
        this.address = '';
        this.facebook = '';
        this.instagram = '';
    }   
}


export class Personal {
    name: string = '';
    email : string = '';
    age: number = 0;
    address: string = '';
}

export class Social {
    website: string = '';
    facebook: string = '';
    instagram: string = '';
}