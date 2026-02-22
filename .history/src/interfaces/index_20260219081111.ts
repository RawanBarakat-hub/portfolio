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
    nav_links:Array<LinkProps>;
    bar_icon:ImageProps;
    cancel_icon:ImageProps;
}
export interface TitleSectionProp{
    
}