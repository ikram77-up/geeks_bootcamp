import * as datefns from "date-fns";
export function dateoperations() {

    const date = new Date();
    const time = datefns.addHours(date, 2);
    console.log(time);
    const days = datefns.addDays(date, 5);
    console.log(days);
    const currrentDate = datefns.format(date, "yyyy-MM-dd");
    console.log(currrentDate);
}
