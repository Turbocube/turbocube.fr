export const getServerInfos = () => (
    fetch(`https://eu.mc-api.net/v3/server/ping/${process.env.REACT_APP_MC_SERVER_URL}`).then(response =>
        response.json().then(data => ({
                data: data,
                status: response.status
            })
        ).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                return (res.data)
            }
        }).catch(error => {
            console.log(error)
        }))
)
