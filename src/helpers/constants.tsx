import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const MENU_HEIGHT: number = 50;
export const ICON_SIZE: number = 35;
export const TICKER_HEIGHT: number = 33;

export const IMAGE_SIZE: number = width * 0.65;
export const DOT_SIZE: number = 20;


export const ICON_TOP: number = 15;
export const ICON_SPACE: number = 10;
export const DETAILS_CONTAINERS_HEIGHT: number = height / 4;

export const CART_CONTAINER_WIDTH: number = width * 0.7;
export const CART_CONTAINER_HEIGHT: number = height / 1.8;
export const EMPTY_CART_SIZE: number = 100;

export const CART_IMAGE_SIZE: number = (height + width) / 12;
export const CART_PRODUCT_CONTAINER_WIDTH: number = width * 0.85;
export const CART_PRODUCT_CONTAINER_HEIGHT: number = height / 5.4;
export const DELETE_ICON_SIZE: number = 25;

export const DETAILS_IMAGE_SIZE: number = (width + height) / 14;

export const YELLOW_BUTTON_WIDTH: number = width / 1.6;
export const YELLOW_BUTTON_HEIGHT: number = 50;
export const DETAILS_PRODUCT_WIDTH:number = 125;
export const DETAILS_PRODUCT_HEIGHT:number = 150;
