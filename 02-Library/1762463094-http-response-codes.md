---
link: "[[1762394716-python-from-zero-for-backend|Quest: Python from Zero for Backend]]
aliases: 
  - "HTTP Response Codes"
tags:
  - Knowledge
  - HTTP
  - HTTP_Status_Codes
created_date:
  "[[2025-11-06]]"
---
# HTTP Response Codes
## Useful Codes
- `200` – **OK**
  The request succeeded.
- `201` – **Created**
  The request succeeded, and a new resource was created as a result.  
  (Typically sent after `POST` or `PUT` requests.)
- `204` – **No Content**
  The request succeeded, but there is no content to send in the response.  
  (Common for successful `DELETE` operations.)
- `400` – **Bad Request**
  The server cannot process the request due to a client error (e.g., malformed syntax or invalid data).
- `401` – **Unauthorized**
  The client must authenticate itself to get the requested response.  
  (Used when authentication is missing or invalid.)
- `403` – **Forbidden**
  The client does not have permission to access the requested resource, even if authenticated.
- `404` – **Not Found**
  The server cannot find the requested resource.  
  (Common when the URL or resource ID doesn’t exist.)
- `405` – **Method Not Allowed**
  The HTTP method used is not supported for this resource.
- `409` – **Conflict**  
  The request could not be completed due to a conflict with the current state of the target resource.  
  (e.g., trying to create a user that already exists.)
- `422` – **Unprocessable Entity**
  The server understands the content type and syntax, but the request data is semantically invalid.  
  (FastAPI uses this for Pydantic validation errors.)
- `500` – **Internal Server Error**  
  A generic error response when something unexpected happens on the server.
- `502` – **Bad Gateway**  
  The server received an invalid response from an upstream server.
- `503` – **Service Unavailable**  
  The server is temporarily unable to handle the request (e.g., maintenance or overload).
- `504` – **Gateway Timeout**  
  The server did not receive a timely response from an upstream server.

## Related Links
- Possible response codes for [[1762403066-http-request-methods|HTTP Request Methods]]

## Source
[HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

