/**
 * readyState 
 *  0 -> request not yet initialized
 *  1 -> request set up
 *  2 -> request sent
 *  3 -> request in process
 *  4 -> request complete
 */

const response = (request) =>{
    if(request.readyState === 4){
        if(request.status === 200){
            console.log(request.responseText);
        }else{
            console.error(request.status,request.responseText);
        }
        
    }
}

const createRequest = function(url){
    console.log(url);
    const request = new XMLHttpRequest(url);
    request.addEventListener('readystatechange', () => response(request));
    request.open('GET',url);
    request.send();
}

createRequest('https://jsonplaceholder.typicode.com/comments');