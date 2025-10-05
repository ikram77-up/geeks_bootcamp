import { fetchData } from "./fetch-data.js";

async function main() {
    const data = await fetchData();
    if (data.length > 0) {
        data.forEach((post) => {
            console.log(`${post.title}`);
        });
    } else {
        console.log("No posts found.");
    }

}
main();