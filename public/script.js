function createNewUser(userData) {
    fetch('http://localhost:3333/compliments', {
        method: 'POST',
        mode: 'cors',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(userData)
    }).then(async response => {
        const complimentData = await response.json()
        const complimentKeys = Object.entries(complimentData)

        complimentKeys.forEach(complimentProperty => {
            const textWillBePrinted = `
            <h4>${complimentProperty[0]}:</h4> 
            <span>${complimentProperty[1]}</span> 
            <br>
            `
            
            document.write(textWillBePrinted)
        })
    })
}

createNewUser({
    tag_id:"6eb6f3c7-4639-4a72-8977-c9c585a1e54b",
	user_sender: "dcb19aaa-c174-4705-89db-7e9fbbd20b15",
	user_receiver: "aa4ea8d0-a744-4377-8d73-a296a235ee4e",
	message: "obrigado pela ajuda"
})
