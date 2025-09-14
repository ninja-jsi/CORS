# CORS Tester Projects

This repository contains two web-based tools to test CORS (Cross-Origin Resource Sharing) configurations and inspect HTTP responses directly from your browser:

1. **Normal CORS Tester** – basic tool to check response headers and status.
2. **Advanced CORS Tester** – allows spoofing the `Origin` header, selecting HTTP method, and viewing beautified response bodies by also adding custom headers plus attributes if needed.

---

## Features

### Normal CORS Tester
- Enter a URL and send a request.
- View HTTP response status.
- View all response headers in a readable format.

### Advanced CORS Tester
- Enter a URL and choose HTTP method (GET, POST, PUT, DELETE, etc.).
- Spoof the `Origin` header to test CORS vulnerabilities.
- View HTTP response status code and text.
- View response headers in structured format.
- Beautify response body for JSON, HTML, XML, or plain text.
- Side-by-side display of headers and response body.

---

## Usage

1. Open the project in a browser:  
   - **Normal CORS Tester:** [https://cors-indol-theta.vercel.app/]  
   - **Advanced CORS Tester:** [https://cors-advance-adjggq7gr-ninja-jsis-projects.vercel.app/cors-test.html]

2. Enter the URL you want to test.  
3. (Advanced only) Select the HTTP method and optionally enter an `Origin` to spoof.  
4. Click **Send**.  
5. Inspect the response status, headers, and body in the interface.
