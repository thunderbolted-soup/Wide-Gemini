// Content.js - Handles page width and element visibility via CSS injection.

/**
 * Applies the custom width and visibility settings by injecting/updating a style tag.
 * Using CSS is much more efficient than MutationObserver for hiding elements.
 */
function applySettings(width, cleanView) {
    const styleId = 'gemini-wide-extension-style';
    let styleTag = document.getElementById(styleId);

    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = styleId;
        document.head.appendChild(styleTag);
    }

    const selectorsToHide = [
        '.desktop-ogb-buffer',
        '.buttons-container.adv-upsell',
        '.gds-label-m-alt.desktop-spacing',
        '.boqOnegoogleliteOgbOneGoogleBar',
        '.top-bar-actions',
        '.hallucination-disclaimer',
        'aside[data-test-id="sidebar"] + div + div > div:has(a[href*="plan"])' // Example of dynamic upsell
    ];

    const hideCss = cleanView 
        ? `${selectorsToHide.join(',\n')} { display: none !important; }` 
        : '';

    styleTag.textContent = `
        /* Main conversation and input area width */
        .conversation-container,
        .bottom-container,
        main > div:has(.conversation-container),
        .conversation-container user-query {
            max-width: ${width}px !important;
            width: 100% !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }

        /* Input area styling */
        .input-area-container:not(.is-zero-state), form {
            max-width: ${width}px !important;
            width: 100% !important;
            margin: 0 auto !important;
        }

        .input-area-container.is-zero-state {
            max-width: ${width}px !important;
            width: 95% !important;
            margin: 0 auto !important;
        }

        [class*="user-query-container"] {
            padding-bottom: 0px !important;
        }

        /* Clean View specific styles */
        ${hideCss}
    `;
}

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request) => {
    if (request.action === "updateSettings") {
        applySettings(request.width, request.cleanView);
    }
});

// Apply initial settings on load
chrome.storage.local.get(['geminiWidth', 'cleanView'], (result) => {
    const width = result.geminiWidth || 1800;
    const cleanView = result.cleanView !== false;
    applySettings(width, cleanView);
});
