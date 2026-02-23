export interface ImageProps{
    source:string;
    alternative:string;
}
export interface LinkProps{
    url:string;
    text?:string;
    image?:ImageProps;
}
export interface NavProps{
    logo:ImageProps;
    nav_links:Array<LinkProps>;
    bar_icon:ImageProps;
    cancel_icon:ImageProps;
}
export interface TitleSectionProp{
    title:string;
}
export interface ContainerProps{
    children:React.ReactNode;
    className?:string;
}
export interface CardProps{
    image:ImageProps;
    title:string;
    text:string;
    code:string;
    deploy:string;
}