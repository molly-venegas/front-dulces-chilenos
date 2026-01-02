import {createContext, useContext, useState} from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

type CartItem ={
    product: Product;
    quantity: number;
}

type CartContextValue ={
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (product: Product) => void;
    getQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }:{ children: ReactNode}){

    const [items, setItems]= useState<CartItem[]>([]);

    function addItem(product: Product){
        setItems((prevItems) => {
            const newItems: CartItem[]=[];
            let found = false;

            for (const item of prevItems) {
                if (item.product.id === product.id) {
                    newItems.push({
                        product: item.product,
                        quantity: item.quantity + 1,
                    });
                    found: true;
                } else {
                    newItems.push(item)
                }
            }

            if (!found) {
                newItems.push({
                    product:product, 
                    quantity: 1
                });
            }
            
            return newItems;
        })
    }

    function removeItem(product: Product){
        setItems((prevItems)=>{
            const newItems: CartItem[]= [];
            for(const item of prevItems){
                if(item.product.id===product.id){
                    const newQuantity= item.quantity-1;

                    if (newQuantity >0){
                        newItems.push({
                            product: item.product,
                            quantity: newQuantity
                        });
                    }
                } else {
                    newItems.push(item);
                }
            }
            return newItems;
        });
    }

    function getQuantity (productId: string){
        for(const item of items){
            if(item.product.id===productId){
                return item.quantity;
            }
        } 
        return 0;
    }

    return(
        <CartContext.Provider value={{ items, addItem, removeItem, getQuantity}}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const  ctx = useContext(CartContext);

    if(ctx===null) {
        throw new Error("useCart deberia ser usado dentro de cartProvider");
    }

    return ctx;
}