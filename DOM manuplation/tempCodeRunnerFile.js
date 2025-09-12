{
    // we can use await and async funtion insted of .then in promises 

    async function getData() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const parse_data = await data.json();
            return parse_data;
        }
        catch (err) {
            console.log(err);
        }
    }

    async function main() {
        console.log('Loading data');
        console.log("data load complete");
        const user_info = await getData();
        console.log(user_info);
    }
    main();
}