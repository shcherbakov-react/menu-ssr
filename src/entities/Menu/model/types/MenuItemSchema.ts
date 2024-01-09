export interface MenuItemSchema {
    id: number,
    title: string,
    url: string,
    imgPath: string,
    price: number,
    size?: string,
    composition: string
}