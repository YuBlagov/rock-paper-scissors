# Client-Side Rendering (CSR) vs Server-Side Rendering (SSR)

This project demonstrates the difference between Client-Side Rendering (CSR) and Server-Side Rendering (SSR) using a simple Rock-Paper-Scissors game.

---

## Performance

### Time to First Visible Content
- **SSR:** The HTML content is generated on the server and sent already filled to the browser. The user can see the page structure immediately.
- **CSR:** The browser first loads an almost empty HTML file and then waits for JavaScript to build the interface. This means visible content appears later.

### Perceived Loading Speed
- **SSR:** Feels faster because content is visible immediately, even before JavaScript finishes loading.
- **CSR:** Feels slower because the user may see a blank page until JavaScript executes.

### JavaScript Execution Impact
- **SSR:** JavaScript is mainly used for interactivity (button clicks, game logic).
- **CSR:** JavaScript is responsible for creating the entire UI and logic, so it has a bigger impact on performance.

---

## SEO

### Initial HTML Content
- **SSR:** The initial HTML already contains headings, buttons, and text. Search engines can read this content directly.
- **CSR:** The initial HTML is almost empty. Content is added only after JavaScript runs.

### Search Engine Interpretation
- **SSR:** Search engines can easily index the page because the content is present in the HTML.
- **CSR:** Search engines may have difficulty indexing the page if JavaScript is slow or disabled.

### Metadata Visibility
- **SSR:** Metadata and main content are available immediately in the HTML.
- **CSR:** Metadata may exist, but the main content depends on JavaScript to appear.

---

## User Experience

### Blank Screen vs Immediate Content
- **SSR:** The user sees content immediately (no blank screen).
- **CSR:** The user may see a blank screen while JavaScript loads.
    A loading message is displayed to avoid showing an empty interface.

### Dependency on JavaScript
- **SSR:** The page structure works even if JavaScript is slow. Only interactivity depends on JavaScript.
- **CSR:** The page depends completely on JavaScript to display anything.

### Reliability
- **SSR:** More reliable on slow devices or slow connections.
- **CSR:** If JavaScript fails or is blocked, the page may not work at all.

---

## Conclusion

Server-Side Rendering provides faster first content display and better SEO because the HTML is generated on the server.  
Client-Side Rendering relies fully on JavaScript and may result in slower initial display and weaker SEO.  

Both approaches can be useful, but SSR is generally better for performance and discoverability, while CSR is simpler for building fully dynamic interfaces.