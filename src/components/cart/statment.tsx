import { IPartOfProduct, IProduct } from "../../helpers/interfaces";

export const createSQLInsertStatment = (groupedSmartphones: string[], groupedComputers: string[], groupedSports: string[]):string => {
    const joinedSmartphones = groupedSmartphones.length > 0 ? groupedSmartphones.join(",") : '';
    const joinedComputers = groupedComputers.length > 0 ? groupedComputers.join(",") : '';
    const joinedSports = groupedSports.length > 0 ? groupedSports.join(",") : '';
    let statment = "";
    if (joinedSmartphones !== "") {
        statment = joinedSmartphones;
    }
    if (joinedComputers !== "") {
        if (statment !== "") {
            statment = statment + "," + joinedComputers;
        }
        else {
            statment = joinedComputers;
        }
    }
    if (joinedSports !== "") {
        if (statment !== "") {
            statment = statment + "," + joinedSports;
        }
        else {
            statment = joinedSports;
        }
    }
    return statment;
}
export const groupProducts = (shoppingCart: IPartOfProduct[]) => {
    const smartphones: IPartOfProduct[] = [];
    const computers: IPartOfProduct[] = [];
    const sport: IPartOfProduct[] = [];
    shoppingCart.forEach((item: IPartOfProduct) => {
        if (item.category.includes("computer")) {
            computers.push(item);
        }
        else if (item.category.includes("smartphone")) {
            smartphones.push(item);
        }
        else if (item.category.includes("sport")) {
            sport.push(item);
        }
    })
    //@ts-ignore
    const groupedSmartphones: string[] = smartphones.flatMap(
        (v: IPartOfProduct, i: number) => smartphones.slice(i + 1).map(w => `( ${v.id}, ${w.id}, 'smartphones')`)
    );
    //@ts-ignore
    const groupedComputers: string[] = computers.flatMap(
        (v: IPartOfProduct, i: number) => computers.slice(i + 1).map(w => `( ${v.id}, ${w.id}, 'computers')`)
    );
    //@ts-ignore
    const groupedSports: string[] = sport.flatMap(
        (v: IPartOfProduct, i: number) => sport.slice(i + 1).map(w => `( ${v.id}, ${w.id}, 'sport')`)
    );
    return { groupedSmartphones, groupedSports, groupedComputers }
}
export const breakToIdAndCategory = (shoppingCart: IProduct[]): IPartOfProduct[] => {
    const breakedCart: IPartOfProduct[] = [];
    const uniqueCart: IProduct[] = shoppingCart.filter((value, index, array) => array.findIndex(t => (t.p_name === value.p_name)) === index);
    uniqueCart.forEach(item => {
        breakedCart.push({ id: item.p_id, category: item.p_category });
    });
    return breakedCart;
}