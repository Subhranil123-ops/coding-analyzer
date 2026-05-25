# 🚀 Coding Analyzer & Expression Evaluator

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![Crow](https://img.shields.io/badge/Crow-C++%20Web%20Framework-0A66C2)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)
![Project](https://img.shields.io/badge/Project-FullStack-blue)
![DSA](https://img.shields.io/badge/DataStructure-Stack-orange)
![Status](https://img.shields.io/badge/status-active-success)

A full-stack web application that analyzes code complexity and evaluates mathematical expressions using core data structures.

---

## 📌 Overview

This project demonstrates the real-world application of **Data Structures (Stack)** by building:

* 🔢 Expression Evaluator (Infix, Prefix, Postfix)
* 📊 Code Complexity Analyzer (loop depth & estimation)

The system is built using a **C++ backend (Crow)** and a **Node.js server**, with a responsive web interface.

---

## 🧠 Core Concepts Used

* Stack (Expression Evaluation)
* Parsing & Conversion Algorithms
* Time Complexity Estimation
* REST API Design

---

## ⚙️ Tech Stack

### 🔹 Backend (Core Logic)

* C++
* Crow Framework
* Custom logic for parsing & evaluation

### 🔹 Server Layer

* Node.js
* Express.js
* Axios

### 🔹 Frontend

* EJS
* Bootstrap 5
* Font Awesome

---

## 🏗️ Architecture

```
Browser (UI)
     ↓
Node.js (Express Server)
     ↓
C++ API (Crow)
     ↓
Data Structure Logic (Stack / Analysis)
```

---

## ✨ Features

### 🔹 Expression Evaluator

* Supports:

  * Infix
  * Prefix
  * Postfix
* Converts between formats
* Evaluates final result

### 🔹 Code Analyzer

* Counts:

  * for loops
  * if / else
  * while loops
* Calculates:

  * Maximum nesting depth
  * Estimated time complexity

### 🔹 Error Handling

* Structured JSON responses
* Handles:

  * Invalid expressions
  * Empty input
  * Division by zero
  * Invalid code input

---

## 📦 API Endpoints

### 🔹 POST `/expression`

#### Request:

```json
{
  "expression": "5 6 2 * + 3 -"
}
```

#### Response:

```json
{
  "result": 14,
  "prefix": "- + 5 * 6 2 3",
  "infix": "((5 + (6 * 2)) - 3)",
  "postfix": "5 6 2 * + 3 -"
}
```

---

### 🔹 POST `/analyze`

#### Request:

```json
{
  "code": "for(int i=0;i<n;i++){...}"
}
```

#### Response:

```json
{
  "for": 1,
  "if": 0,
  "while": 0,
  "maxDepth": 1,
  "estimatedComplexity": "O(n)"
}
```

---

## 🧪 Testing

The API has been tested using:

* Curl
* Browser integration

Test cases include:

* Valid expressions
* Invalid inputs
* Edge cases (empty input, divide by zero)
* Nested loops for complexity

---

## 🚀 Getting Started

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 🔹 2. Setup Node.js

```bash
npm install
```

---


### 🔹 4. Run C++ Server

```bash
g++ main.cpp -o app -lpthread
./app
```

---

### 🔹 5. Run Node Server

```bash
node index.js
```

---

### 🔹 6. Open in browser

```
http://localhost:3000/home
```

---

## 📸 Screenshots

### 🏠 Homepage
![Homepage](assets/screenshots/home.png)

### 🧮 Expression Evaluator
![Expression](assets/screenshots/expression.png)

### 📊 Code Analyzer
![Analyzer](assets/screenshots/analyzer.png)

### ⚠️ Error Handling
![Error](assets/screenshots/error.png)

---

## 📈 Future Improvements

* Live evaluation (no page reload)
* Expression history
* Step-by-step stack visualization
* Support for variables

---

## 👨‍💻 Author

**Subhranil Mandal**

---

## 📄 License

This project is for educational purposes.


# Future Improvements / Roadmap

## UI & UX Improvements
- [ ] Add hover effects on result cards
- [ ] Add smooth animations and transitions
- [ ] Improve mobile responsiveness
- [ ] Add icons for loops, conditions, complexity, etc.
- [ ] Add loading states while analyzing
- [ ] Add toast notifications for errors/success
- [ ] Add dark/light theme toggle
- [ ] Improve typography and spacing consistency

---

## Visualization Features

### Charts & Graphs
- [ ] Add bar chart for loop/condition counts
- [ ] Add pie chart for code structure distribution
- [ ] Add complexity visualization meter
- [ ] Add nesting depth tree visualization
- [ ] Add execution flow visualization
- [ ] Add expression conversion step visualization

---

## Expression Analyzer Improvements
- [ ] Step-by-step infix to postfix conversion
- [ ] Stack visualization during conversion
- [ ] Expression tree generation
- [ ] Expression validation with error highlighting
- [ ] Support variables and functions
- [ ] Support advanced mathematical operators
- [ ] Add expression evaluation support

---

## Code Analyzer Improvements
- [ ] Better time complexity detection
- [ ] Space complexity estimation
- [ ] Detect recursion
- [ ] Detect nested loops more accurately
- [ ] Detect switch/case statements
- [ ] Detect functions/classes
- [ ] Detect unreachable code
- [ ] Detect infinite loops
- [ ] Add cyclomatic complexity analysis
- [ ] Add code smell detection

---

## Advanced Features
- [ ] Syntax highlighting
- [ ] Monaco editor integration
- [ ] File upload support
- [ ] Export analysis report as PDF
- [ ] Save analysis history
- [ ] Authentication system
- [ ] AI-based code suggestions
- [ ] Real-time analysis while typing

### Multi-language Support
- [ ] C++
- [ ] Java
- [ ] Python
- [ ] JavaScript

---

## Dashboard Ideas
- [ ] Analysis statistics dashboard
- [ ] Previous analysis history
- [ ] Complexity trend graphs
- [ ] Most used structures analytics
- [ ] User performance analytics

---

## Dev Tool Inspired Features
- [ ] Git visualizer
- [ ] Regex engine visualizer
- [ ] Debugger simulation
- [ ] AST (Abstract Syntax Tree) visualization
- [ ] Compiler pipeline visualization
- [ ] Memory/stack visualization
- [ ] Tokenizer visualization

---

## Performance Improvements
- [ ] Optimize parser speed
- [ ] Improve large code handling
- [ ] Lazy rendering for large outputs
- [ ] Better state management
- [ ] Backend optimization

---

## Long-Term Vision
- [ ] Turn project into a complete developer toolkit
- [ ] Add interactive learning mode
- [ ] Add DSA visualization support
- [ ] Add competitive programming utilities
- [ ] Add collaborative sharing features
- [ ] Add plugin architecture for custom analyzers
