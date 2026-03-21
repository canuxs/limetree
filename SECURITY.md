# 🛡️ LimeTree CLI | Security Policy

## 📌 Supported Versions

We are committed to maintaining the security and integrity of the LimeTree development ecosystem. Security updates are prioritized for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.1.1   | ✅ YES (Current)    |
| 1.1.0   | ⚠️ Critical Only   |
| 1.0.0   | ❌ End of Life     |

---

## 🛠️ Security Hardening in v1.1.1
In our latest release, we have implemented several security measures to protect your story assets:

* **Sanitized Path Execution:** The CLI now sanitizes portal paths to prevent directory traversal attacks (e.g., trying to access files outside the `@start` directory).
* **Buffer Overflow Protection:** Improved handling of large string inputs in `self.label.text` to prevent memory-related exploits in the Player.
* **ZIP Validation:** The build engine now verifies the integrity of the generated `.zip` archive to ensure no corrupted or malicious scripts are injected during compression.

---

## 🛡️ Reporting a Vulnerability

If you discover a security vulnerability within the LimeTree CLI or Player, please follow these steps:

1.  **Do Not Publicize:** Please avoid creating public GitHub issues for security vulnerabilities.
2.  **Private Report:** Send a detailed report at the Feedback page.
3.  **Details to Include:**
    * The version of the CLI you are using.
    * A brief description of the vulnerability.
    * Steps to reproduce the issue (if possible, include a sample `!script.txt`).

---

## 🚀 Our Commitment
* **Response Time:** We aim to acknowledge security reports within **48 hours**.
* **Patch Cycle:** Once a vulnerability is confirmed, we will release a hotfix within **7 business days**.
* **Public Credit:** We will credit the researcher in our `CHANGELOG.md` unless anonymity is requested.

---
**"Securing the branches of every story."** *Internal Security Revision: 2024.S1*
