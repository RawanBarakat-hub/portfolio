export interface ImageProps{
    source:string;
    alternative:string;
}
export interface LinkProps{
    url:string;
    text:string;
}
export interface NavProps{
    logo:ImageProps;
    navLinks:Array<LinkProps>;
    
}