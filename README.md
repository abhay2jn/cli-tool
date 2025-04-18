# CLI Tool

A Node.js command-line interface (CLI) tool that prints colorful and styled terminal messages using multiple npm packages. Built for quick experimentation, testing, or as a base template for creating your own CLI utilities.

---

## 🚀 Features

- Two core commands: `--start` and `--build`
- Colorful output using `chalk` for better terminal experience
- Custom configuration support via `tool.config.js`
- Graceful handling of invalid commands with short error messages
- Built using multiple Node.js packages including `debug`, `chalk`, and more

---

## 📦 Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/abhay2jn/cli-tool
   ```

2. **Install Dependencies**  
   ```bash
   cd cli-tool/tool
   npm install
   ```

3. **Link the CLI Tool Globally**  
   This step allows you to use the `tool` command from anywhere on your machine.
   ```bash
   npm link
   ```

---

## 🛠️ Usage

1. Navigate to the `test-project` folder:
   ```bash
   cd ../../test-project
   ```

2. Run the CLI commands:

### ▶️ Start Command
```bash
tool --start
```
Prints multiple lines of colorful messages to the terminal.

### 🏗️ Build Command
```bash
tool --build
```
Prints a different set of colorful output messages to the terminal.

---

## ❌ Invalid Commands

If you enter an incorrect or unsupported command like:

```bash
tool -s
```

The tool will respond with a clear and concise error message.

---

## 📁 Project Structure

```
cli-tool/
│
├── .gitignore
├── README.md
│
├── test-project/                  # Sample project to test the CLI
│   ├── package.json
│   ├── package-lock.json
│   └── tool.config.js
│
└── tool/                          # Main CLI tool code
    ├── package.json
    ├── package-lock.json
    ├── bin/
    │   └── index.js               # CLI entry point
    ├── src/
        ├── logger.js             # Utility for logging
        ├── commands/             # CLI command handlers
        │   ├── build.js
        │   └── start.js
        └── config/               # Configuration management
            ├── config-mgr.js
            └── schema.json
```

---

## 🧰 Dependencies

This project uses several npm packages for CLI handling, output styling, and debugging. Some of them include:

- `chalk`
- `debug`
- `args`

> Check the `package.json` inside the `tool/` directory for the full list of dependencies.

---

## ✅ Quick Start

```bash
git clone https://github.com/abhay2jn/cli-tool
cd cli-tool/tool
npm install
npm link
cd ../test-project
tool --start
tool --build
```

---
