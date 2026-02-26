# Rock-Paper-Scissors — CSR vs SSR

This project demonstrates the difference between **Client-Side Rendering (CSR)** and **Server-Side Rendering (SSR)** using a simple Rock-Paper-Scissors game built with **HTML, CSS, and Vanilla JavaScript**.  

It was created as an assignment for **Hyper Island**.

---

## Project Overview

The project has **two versions** of the game:

- **SSR (`ssr.html`)** – All main content is included in the HTML; JavaScript is only used for interactivity.  
- **CSR (`csr.html`)** – The interface is rendered dynamically using JavaScript after the page loads.  

Both versions:

- Display identical content  
- Use the same layout and styling  
- Differ only in **how and when the content is rendered**

---

## Live Demo

You can try the project here:  
👉 [Live Demo](https://yublagov.github.io/rock-paper-scissors/)

---

## How to Play

1. Open the **SSR** or **CSR** version.  
2. Click on **Rock**, **Paper**, or **Scissors**.  
3. The computer randomly selects a move.  
4. The result and score are displayed on the screen.

---

## Project Structure

├── index.html # Main page linking to SSR and CSR versions
├── ssr.html # Server-Side Rendered version
├── csr.html # Client-Side Rendered version
├── style.css # Shared styling
├── script.js # Game logic
├── analysis.md # Written analysis of CSR vs SSR
└── README.md


---

## Learning Goals

- Understand the difference between CSR and SSR  
- Compare performance, SEO, and user experience  
- Practice building interactive web applications with HTML, CSS, and Vanilla JavaScript  

---

## How to Run Locally

No build tools are required. Open `index.html` in your browser to choose between **SSR** and **CSR** versions.  
Alternatively, serve the project using a local server for faster reloads during development.

---

## Analysis

A written comparison of CSR and SSR is included:  
📄 [Analysis](analysis.md)  

It covers:

- Performance  
- SEO  
- User experience
