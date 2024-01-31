const apiRequest = async (url = '',optionObj = null , errMsg = null) =>{

    try {
        const response = await fetch(url,optionObj)
    if(!response.ok)throw Error("Please Reload the page")
    } catch (err) {
        errMsg = err.message
    }

    return errMsg


}

export default apiRequest;

