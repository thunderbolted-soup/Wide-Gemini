# Wide-Gemini 🚀

**Wide-Gemini** is a powerful browser extension for [gemini.google.com](https://gemini.google.com/) that lets you take full control of your workspace. Adjust the chat width to your liking and enjoy a minimalist, distraction-free environment with "Clean View."

## Key Features

-   **Dynamic Width Control:** Use a slider to expand Gemini to ultra-wide or custom sizes (up to 2560px).
-   **Clean View:** Toggle visibility of secondary elements like sidebars, upsell banners, and footers with one click.
-   **Multi-Language Support:** Fully localized for English, Polish, Korean, and Chinese.
-   **Performance Optimized:** Extremely lightweight, uses standard CSS for element visibility instead of heavy JavaScript observers.
-   **Secure & Private:** No tracking, minimal permissions, and strict Content Security Policy (CSP).

---

## What's New in v1.2.6?

We've completely overhauled the extension's internals for better performance and cross-browser compatibility:

1.  **Firefox Compatibility:** Added full support for Firefox (Manifest V3) with proper `browser_specific_settings`.
2.  **Engine Migration:** Replaced the heavy `MutationObserver` with **Native CSS Injection**. This significantly reduces CPU and RAM usage by letting the browser handle element visibility at the layout level.
3.  **Security Hardening:** Implemented a strict Content Security Policy (CSP) to protect against XSS and injection attacks.
4.  **Modern UI:** A fresh, Material Design-inspired popup with a more intuitive slider and toggle switch.
5.  **Robustness:** Improved CSS selectors to ensure "Clean View" works reliably even as the Gemini layout evolves.

---

## Installation

### For Chrome / Brave / Edge
1.  Download or clone this repository.
2.  Go to `chrome://extensions/` and enable **Developer mode**.
3.  Click **Load unpacked** and select the extension folder.

### For Firefox (Manual Installation)
1.  Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2.  Click **Load Temporary Add-on...**.
3.  Select `manifest.json` from the extension folder.
    *Note: Temporary add-ons are removed when Firefox restarts. For permanent use, the extension must be signed.*

---

## Visuals

### Standard View
<img width="1280" height="720" alt="Before" src="https://github.com/user-attachments/assets/218424b9-5a74-4796-a168-0adf20f5b2f2" />

### Wide-Gemini Optimized
<img width="1280" height="720" alt="After" src="https://github.com/user-attachments/assets/643c19bf-0edf-43ca-a481-3ee446782d89" />

---

## Technical Details

-   **Tech Stack:** Vanilla JavaScript, HTML5, CSS3 (No external frameworks/libraries for maximum performance).
-   **Manifest:** Version 3 (Modern extension standard).
-   **Permissions:** `storage` (to save your width preference), `activeTab` (to interact with Gemini only when active).

## License

Wide-Gemini is released under the **MIT License**.

## Author

**Sebastian Brzustowicz**  
[Se.Brzustowicz@gmail.com](mailto:Se.Brzustowicz@gmail.com)

---
*Maintained and optimized for performance, security, and cross-browser reliability.*
