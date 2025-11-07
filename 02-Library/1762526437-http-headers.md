---
link: "[[1762394716-python-from-zero-for-backend|Quest: Python from Zero for Backend]]
aliases: 
  - "HTTP Headers"
tags:
  - Knowledge
  - HTTP
created_date:
  "[[2025-11-07]]"
---
# HTTP Headers
## Summary
- HTTP headers are key-value pairs exchanged between clients and servers to provide additional information with each HTTP request or response.  
- They are case-insensitive and differ slightly between protocol versions (e.g., lowercase and pseudo-headers in HTTP/2).  
- Historically, nonstandard headers used the `X-` prefix, but this was deprecated in favor of standardized field names registered in the IANA HTTP Field Name Registry.  
- Headers can be categorized by context (Request, Response, Representation, Payload) or by how proxies handle them (End-to-end vs Hop-by-hop).  
- They play a fundamental role in authentication, caching, conditionals, connection management, content negotiation, CORS, cookies, security, and many other aspects of HTTP communication.  

## Key Ideas
### Header Contexts
- **Request headers**: Provide information about the resource to fetch or the client making the request.  
- **Response headers**: Carry metadata about the response or the server.  
- **Representation headers**: Describe the resource body (type, encoding, etc.).  
- **Payload headers**: Describe transport-related information like content length or encoding.

### Proxy Behavior
- **End-to-end headers**: Must reach the final recipient and remain unmodified through intermediaries.  
- **Hop-by-hop headers**: Apply only to a single connection and are not forwarded by proxies.

### Authentication & Authorization
- Headers like `WWW-Authenticate`, `Authorization`, `Proxy-Authenticate`, and `Proxy-Authorization` manage access control and user verification.

### Caching & Conditionals
- Headers such as `Cache-Control`, `Expires`, `ETag`, and `Last-Modified` regulate caching, validation, and revalidation of responses.  
- Conditional headers (`If-Modified-Since`, `If-None-Match`) enable efficient cache updates.

### Content Negotiation
- Headers like `Accept`, `Accept-Encoding`, and `Accept-Language` allow clients to specify preferred formats, encodings, or languages.

### Connection & Control
- `Connection` and `Keep-Alive` manage persistent connections and network behavior.  
- `Expect` and `Max-Forwards` influence request handling.

### Cookies & CORS
- `Cookie` and `Set-Cookie` manage state and sessions.  
- `Access-Control-*` headers enforce cross-origin resource sharing policies.

### Security
- Headers such as `Content-Security-Policy`, `Strict-Transport-Security`, `X-Frame-Options`, and `Permissions-Policy` protect against attacks and enforce secure contexts.

### Other Key Categories
- **Range requests** (`Range`, `Content-Range`) enable partial content delivery.  
- **Redirects** (`Location`, `Refresh`) control navigation.  
- **Response context** (`Server`, `Allow`) identifies server software and supported methods.  
- **Client hints** provide device, network, and preference data for optimized responses.  
- **Experimental and Non-standard headers** (e.g., `X-Forwarded-For`, `NEL`, `Priority`) extend functionality for specific environments or emerging features.

## Related Links
- [[]]

## Source
[text]()

