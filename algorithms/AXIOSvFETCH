# AXIOS v FETCH

## Issues with Fetch API

1. Handing error with fetch api.

2.Getting api response in 2 steps.

3. No timeout functionality available.

4. Cancelling request.

5. Fetch does not support upload progress.

6. No cookies by default

## Handing error with fetch api

A very simple API request using fetch looks like this:

```

fetch("http://httpstat.us/500")
    .then(function() {
        console.log("ok");
    }).catch(function() {
        console.log("error");
    });
```
Now you might be expecting above code to log “ok” if api contains a success HTTP status code while log “error” if api contains a error HTTP status code. But that was the case when you used to work in jQuery world. In fetch request, you will get “error” only if network error is encountered while in all other cases if will log “ok”.
The good is news is fetch provides a simple ok flag that indicates whether an HTTP response’s status code is in the successful range or not. For instance the following code logs “Error: Internal Server Error(…)”:
```

fetch("http://httpstat.us/500")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
    
 ```
To keep this code DRY and reusable, you probably want to create a generic error handling function you can use for all of your fetch() calls. The following code refactors the error handling into a handleErrors() function:

```
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

fetch("http://httpstat.us/500")
    .then(handleErrors)
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
    
```

You can also use ES6 arrow functions to make the callback formatting a little less verbose:


```
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
fetch("http://httpstat.us/500")
    .then(handleErrors)
    .then(response => console.log("ok") )
    .catch(error => console.log(error) );
    
 ```
 
### Getting api response in 2 steps:


Let’s consider basic fetch api call as below:
fetch("http://httpstat.us/500")
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

That’s great, but this is not the data you are looking for. That is the response from the server letting you know that your request went through just fine. Great, but you can’t do much with that.
To get to that data, you have to pass it to .json() first and then you can see it.
fetch("http://httpstat.us/500")

```
.then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    }).then(function(response) {
        console.log(response);
    }).catch(function(error) {
        console.log(error);
    });

```
Now, this is the data from API that we wanted.


So we have solved first two problem but still you can’t use fetch if you need features like cancelling request, request timeout & upload progress.
fetch api is great step in the right direction of getting http request native in ES6. But for now, if you are using it, you have to apply some gotchas for it to work for your requirement.
In order to fix all my problem, i find Axios for my rescue. Axios is a Promise based HTTP client for the browser and node.js.


## No cookies be default

Fetch does not send cookies with api calls be default. To enable that, you have to add following:

```
fetch(url, {
  credentials: "same-origin"
}).then(...).catch(...);

```
## Summary

Advantages of using Axios: 

1. Transformers: allow performing transforms on data before request is made or after response is received.

2. Interceptors: allow you to alter the request or response entirely (headers as well). also perform async operations before request is made or before Promise settles.

3. Built-in XSRF protection.

4. Make XMLHttpRequests from the browser & http requests from node.js

5. Cancel requests and timeout feature.

Advantages of using Axios

```
A simple POST request using Axios is like:
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  ```
In above example, you will get expected json without processing it further like in case of fetch API. 

