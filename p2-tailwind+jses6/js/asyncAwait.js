//async Await
const fetchData =() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}
const getData = async () => {
    const data = await fetchData();
    console.log(data);
}
getData();