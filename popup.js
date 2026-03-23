// popup.js - Handles the slider, checkbox, and i18n for the extension popup.

document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('widthSlider');
    const checkbox = document.getElementById('cleanView');
    const titleEl = document.getElementById('title');
    const hintEl = document.getElementById('hint');

    // 1. Initialize Internationalization (i18n)
    if (titleEl) titleEl.textContent = chrome.i18n.getMessage("popupTitle");
    if (hintEl) hintEl.textContent = chrome.i18n.getMessage("popupHint");

    // 2. Load and Apply initial settings
    chrome.storage.local.get(['geminiWidth', 'cleanView'], (result) => {
        if (result.geminiWidth) {
            slider.value = result.geminiWidth;
        }
        if (result.cleanView !== undefined) {
            checkbox.checked = result.cleanView;
        } else {
            checkbox.checked = true; // Default to enabled
        }

        // Send initial state to Content.js
        updateContent(slider.value, checkbox.checked);
    });

    // 3. Listen for changes in the UI
    const handleUpdate = () => {
        const width = slider.value;
        const cleanView = checkbox.checked;
        updateContent(width, cleanView);
        chrome.storage.local.set({ geminiWidth: width, cleanView: cleanView });
    };

    slider.addEventListener('input', handleUpdate);
    checkbox.addEventListener('change', handleUpdate);

    /**
     * Sends the current settings to the active Gemini tab.
     */
    function updateContent(width, cleanView) {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab?.url?.includes("gemini.google.com")) {
                chrome.tabs.sendMessage(activeTab.id, {
                    action: "updateSettings",
                    width: width,
                    cleanView: cleanView
                }).catch(() => {
                    /* Expected if Content.js is not yet loaded/ready */
                });
            }
        });
    }
});
