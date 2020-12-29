import { ICategory, IProduct } from "../../helpers/interfaces";

export const createSQLInsertStatment = (groupedSmartphones: string[], groupedComputers: string[], groupedSports: string[]): string => {
    const joinedSmartphones:string = groupedSmartphones.length > 0 ? groupedSmartphones.join(",") : '';
    const joinedComputers:string = groupedComputers.length > 0 ? groupedComputers.join(",") : '';
    const joinedSports:string = groupedSports.length > 0 ? groupedSports.join(",") : '';
    let statment: string = "";
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
export const groupProducts = (shoppingCart: ICategory[]) => {
    const smartphones: ICategory[] = [];
    const computers: ICategory[] = [];
    const sport: ICategory[] = [];
    shoppingCart.forEach((item: ICategory) => {
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
    const date = new Date();
    const formatedDate = `'${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}'`
    //@ts-ignore
    const groupedSmartphones: string[] = smartphones.flatMap(
        (v: ICategory, i: number) => smartphones.slice(i + 1).map(w => {
            let smallerID = v.id < w.id ? v.id.toString() + w.id.toString() : w.id.toString() + v.id.toString();
            return `( ${v.id}, ${w.id}, ${smallerID}, ${formatedDate})`;
        })
    );
    //@ts-ignore
    const groupedComputers: string[] = computers.flatMap(
        (v: ICategory, i: number) => computers.slice(i + 1).map(w => {
            let smallerID = v.id < w.id ? v.id.toString() + w.id.toString() : w.id.toString() + v.id.toString();
            return `( ${v.id}, ${w.id}, ${smallerID}, ${formatedDate})`;
        })
    );
    //@ts-ignore
    const groupedSports: string[] = sport.flatMap(
        (v: ICategory, i: number) => sport.slice(i + 1).map(w => {
            let smallerID = v.id < w.id ? v.id.toString() + w.id.toString() : w.id.toString() + v.id.toString();
            return `( ${v.id}, ${w.id}, ${smallerID}, ${formatedDate})`;
        })
    );
    return { groupedSmartphones, groupedSports, groupedComputers };
}
export const breakToIdAndCategory = (shoppingCart: IProduct[]): ICategory[] => {
    const breakedCart: ICategory[] = [];
    const uniqueCart: IProduct[] = shoppingCart.filter((value, index, array) => array.findIndex(t => (t.p_name === value.p_name)) === index);
    uniqueCart.forEach(item => {
        breakedCart.push({ id: item.p_id, category: item.p_category });
    });
    return breakedCart;
}