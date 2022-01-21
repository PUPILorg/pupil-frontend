export const loadToken = () => {
    try{
        const serializedToken = localStorage.getItem('authToken');
        if(serializedToken === null){
            return undefined;
        }
        return JSON.parse(serializedToken);
    } catch (err){
        return undefined;
    }
};

export const saveToken = (token) => {
    try {
        const serializedToken = JSON.stringify(token);
        localStorage.setItem('authToken', serializedToken);
        console.log("Token saved");
    } catch (err){
        console.log("Error occurred saving token: " + err);
    }
}
