# 🤖 Social Media MCP Agent

[![Model Context Protocol](https://img.shields.io/badge/MCP-Standard-blue)](https://modelcontextprotocol.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A powerful automation suite built on the **Model Context Protocol (MCP)** that enables AI models to create, schedule, and publish content across multiple social media platforms including Twitter, Facebook, and Instagram.

---

## 🌟 Features

- **Multi-Platform Posting**: Unified interface to post content to Twitter (X), Facebook, and Instagram.
- **MCP Integration**: Uses the Model Context Protocol to give LLMs (like Claude or Gemini) direct tool access to your social media accounts.
- **Smart Formatting**: Automatically optimizes content length and formatting for each specific platform.
- **Streaming Client**: Real-time interaction with AI models via a high-performance streaming CLI.
- **Modular Architecture**: Separate Client and Server packages for easy scalability and maintenance.

---

## 🏗 Project Structure

```text
.
├── client/           # CLI tool for interacting with the AI Agent
├── server/           # MCP Server providing social media tools
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended) or Node.js v18+
- API Keys for:
  - OpenRouter or Google Gemini
  - Social Media Platform APIs (Twitter, Facebook, etc.)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arav-Menon/agent-suite.git
   cd agent-suite
   ```

2. **Setup Client:**
   ```bash
   cd client
   bun install
   cp .env.example .env # Add your API keys
   ```

3. **Setup Server:**
   ```bash
   cd ../server
   bun install
   ```

---

## 🛠 Usage

To start the interactive chat client and begin creating social media content:

```bash
cd client
bun run client.ts
```

**Example Commands:**
- *"Draft a tweet about the new SpaceX launch and post it."*
- *"Create an Instagram caption for this image: [image-url]"*
- *"Schedule a Facebook update about our upcoming webinar for tomorrow at 10 AM."*

---

## 🗺 Roadmap

- [ ] **Phase 1**: Initial Client/Server setup with OpenRouter integration.
- [ ] **Phase 2**: MCP Tool implementation for Twitter (X).
- [ ] **Phase 3**: Integration with Meta API (Facebook & Instagram).
- [ ] **Phase 4**: Image generation integration for social media assets.
- [ ] **Phase 5**: Web dashboard for post scheduling and analytics.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Developed with ❤️ by [Arav Menon](https://github.com/Arav-Menon)
