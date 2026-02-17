/* ============================================
   Settings Demo - Create New Action Flow
   ============================================ */

class SettingsDemo {
    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.render();
        this.startAnimation();
    }

    render() {
        this.container.innerHTML = `
            <div class="demo-transition-wrapper">
            <div class="fd-container" id="settings-view">
                <div class="demo-window settings-demo">
                    <!-- macOS Title Bar -->
                    <div class="settings-titlebar">
                        <div class="settings-titlebar-left">
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                        </div>
                        <div class="settings-titlebar-center">
                            <span class="settings-titlebar-text">TexTab Settings</span>
                        </div>
                        <div class="settings-titlebar-right"></div>
                    </div>

                    <div class="demo-content settings-content">
                        <!-- Tab Bar -->
                        <div class="settings-tabs">
                            <div class="settings-tab">General</div>
                            <div class="settings-tab active">Actions</div>
                            <div class="settings-tab">Templates</div>
                            <div class="settings-tab">Plugins</div>
                            <div class="settings-tab">About</div>
                        </div>

                        <div class="settings-main">
                            <!-- Actions Sidebar -->
                            <div class="settings-sidebar">
                                <div class="settings-actions-list">
                                    <div class="settings-action-item">
                                        <span class="settings-action-icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M12 20h9"/>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                            </svg>
                                        </span>
                                        <span class="settings-action-name">Fix Grammar</span>
                                    </div>
                                    <div class="settings-action-item">
                                        <span class="settings-action-icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/>
                                                <path d="M5 19l1 3 3-1-1-3-3 1z"/>
                                                <path d="M19 5l1 3 3-1-1-3-3 1z"/>
                                            </svg>
                                        </span>
                                        <span class="settings-action-name">Improve Writing</span>
                                    </div>
                                    <div class="settings-action-item">
                                        <span class="settings-action-icon">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M4 6h16"/>
                                                <path d="M4 12h16"/>
                                                <path d="M4 18h10"/>
                                            </svg>
                                        </span>
                                        <span class="settings-action-name">Summarize</span>
                                    </div>
                                    <div class="settings-action-item" id="new-action-item" style="display: none;">
                                        <span class="settings-action-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                <!-- Back bubble with 文 -->
                                                <path d="M4 4h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H9l-3 3v-3H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                <text x="9" y="11" font-size="7" font-weight="600" fill="white" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">文</text>
                                                <!-- Front bubble with A -->
                                                <path d="M10 10h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2v3l-3-3h-5c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z"/>
                                                <text x="15" y="17" font-size="7" font-weight="700" fill="white" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">A</text>
                                            </svg>
                                        </span>
                                        <span class="settings-action-name">New Action</span>
                                    </div>
                                </div>

                                <!-- New Action Button -->
                                <div class="settings-new-action-btn" id="new-action-btn">
                                    <span class="settings-new-action-plus">+</span>
                                    <span class="settings-new-action-text">New Action</span>
                                </div>
                            </div>

                            <!-- Editor Area -->
                            <div class="settings-editor" id="settings-editor">
                                <!-- Empty State -->
                                <div class="settings-empty-state" id="empty-state">
                                    <div class="settings-empty-icon">
                                        <div class="settings-key-3d">&#8984;</div>
                                    </div>
                                    <div class="settings-empty-title">No Action Selected</div>
                                    <div class="settings-empty-text">Start by creating a new action or select an<br>existing one from the list.</div>
                                    <div class="settings-empty-btn" id="empty-new-btn">New Action</div>
                                </div>

                                <!-- Editor Form (hidden initially) -->
                                <div class="settings-editor-form" id="editor-form" style="display: none;">
                                    <!-- Header with Icon and Name -->
                                    <div class="settings-editor-header">
                                        <div class="settings-editor-icon" id="editor-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <!-- Back bubble with 文 -->
                                                <path d="M4 4h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H9l-3 3v-3H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                                <text x="9" y="11" font-size="7" font-weight="600" fill="white" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">文</text>
                                                <!-- Front bubble with A -->
                                                <path d="M10 10h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2h-2v3l-3-3h-5c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2z"/>
                                                <text x="15" y="17" font-size="7" font-weight="700" fill="white" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">A</text>
                                            </svg>
                                        </div>
                                        <input type="text" class="settings-editor-name" id="editor-name" placeholder="New Action" value="">
                                    </div>

                                    <!-- Shortcut Tooltip (appears above field, pushes content down) -->
                                    <div class="settings-tooltip" id="shortcut-hint">
                                        <div class="settings-tooltip-content">
                                            <span class="settings-tooltip-label">e.g.</span>
                                            <div class="settings-tooltip-key" id="key-cmd">&#8984;</div>
                                            <div class="settings-tooltip-key" id="key-shift">&#8679;</div>
                                            <div class="settings-tooltip-key" id="key-t">T</div>
                                        </div>
                                        <div class="settings-tooltip-text">
                                            <span class="settings-tooltip-title">Recording...</span>
                                            <span class="settings-tooltip-hint">Press &#8984; or &#8997; + key</span>
                                        </div>
                                        <div class="settings-tooltip-arrow"></div>
                                    </div>

                                    <!-- Shortcut Field -->
                                    <div class="settings-editor-shortcut" id="editor-shortcut">
                                        <span class="settings-shortcut-placeholder">Click to record shortcut...</span>
                                    </div>

                                    <!-- Prompt Field -->
                                    <div class="settings-editor-prompt-container">
                                        <textarea class="settings-editor-prompt" id="editor-prompt" placeholder="Enter your prompt here"></textarea>
                                        <div class="settings-enhance-btn">
                                            <span>Enhance</span>
                                        </div>
                                    </div>

                                    <!-- Action Buttons (like in the app) -->
                                    <div class="settings-editor-buttons">
                                        <button class="settings-btn-text settings-btn-delete" id="delete-btn">Delete</button>
                                        <button class="settings-btn-pill settings-btn-save" id="save-btn">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Cursor -->
                        <div class="demo-cursor" id="settings-cursor">
                            <svg class="demo-cursor-pointer" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" fill="black"/>
                            </svg>
                            <svg class="demo-cursor-text" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M3 1H7M3 15H7M5 1V15" stroke="#000" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                            </div>

            <!-- Browser View (hidden initially) -->
            <div class="fd-container" id="browser-view" style="display: none;">
                <div class="demo-window">
                    <div class="demo-browser-bar">
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-url">notes.app</div>
                    </div>
                    <div class="demo-content" id="browser-content">
                        <p class="demo-quote" id="browser-text">The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet.</p>

                        <!-- Text cursor indicator -->
                        <div class="demo-text-cursor" id="browser-text-cursor"></div>

                        <!-- Selection highlight -->
                        <div class="demo-highlight" id="browser-highlight"></div>

                        <!-- Action Popup (appears directly) -->
                        <div class="textab-popup" id="action-popup">
                            <div class="textab-popup-header">
                                <div class="textab-action-badge">Translate to Spanish</div>
                                <div class="textab-close-btn">✕</div>
                            </div>
                            <div id="action-content">
                                <div class="textab-loading-content">
                                    <div class="textab-shimmer"></div>
                                    <div class="textab-shimmer"></div>
                                    <div class="textab-shimmer"></div>
                                </div>
                            </div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-footer-text" id="footer-text">processing...</span>
                                </div>
                                <div class="textab-result-actions" id="result-buttons" style="display: none;">
                                    <button class="textab-btn textab-btn-secondary" id="copy-btn">Copy</button>
                                    <button class="textab-btn textab-btn-primary" id="replace-btn">Replace</button>
                                </div>
                            </div>
                        </div>

                        <!-- Shortcut Hint -->
                        <div class="demo-shortcut" id="browser-shortcut">
                            <div class="textab-key" id="browser-key-cmd">⌘</div>
                            <div class="textab-key" id="browser-key-shift">⇧</div>
                            <div class="textab-key" id="browser-key-t">T</div>
                        </div>

                        <!-- Cursor -->
                        <div class="demo-cursor" id="browser-cursor">
                            <svg class="demo-cursor-pointer" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" fill="black"/>
                            </svg>
                            <svg class="demo-cursor-text" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M3 1H7M3 15H7M5 1V15" stroke="#000" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                            </div>
            </div>
        `;

        // Cache DOM elements
        this.cursorEl = this.container.querySelector('#settings-cursor');
        this.cursorPointer = this.cursorEl.querySelector('.demo-cursor-pointer');
        this.cursorText = this.cursorEl.querySelector('.demo-cursor-text');
        this.newActionBtn = this.container.querySelector('#new-action-btn');
        this.emptyNewBtn = this.container.querySelector('#empty-new-btn');
        this.emptyState = this.container.querySelector('#empty-state');
        this.editorForm = this.container.querySelector('#editor-form');
        this.editorName = this.container.querySelector('#editor-name');
        this.editorShortcut = this.container.querySelector('#editor-shortcut');
        this.editorPrompt = this.container.querySelector('#editor-prompt');
        this.newActionItem = this.container.querySelector('#new-action-item');
        this.settingsContent = this.container.querySelector('.settings-content');
        this.shortcutEl = this.container.querySelector('#shortcut-hint');
        this.keyCmd = this.container.querySelector('#key-cmd');
        this.keyShift = this.container.querySelector('#key-shift');
        this.keyT = this.container.querySelector('#key-t');
        this.deleteBtn = this.container.querySelector('#delete-btn');
        this.saveBtn = this.container.querySelector('#save-btn');

        // Browser view elements
        this.transitionWrapper = this.container.querySelector('.demo-transition-wrapper');
        this.settingsView = this.container.querySelector('#settings-view');
        this.browserView = this.container.querySelector('#browser-view');
        this.browserContent = this.container.querySelector('#browser-content');
        this.browserText = this.container.querySelector('#browser-text');
        this.browserTextCursorEl = this.container.querySelector('#browser-text-cursor');
        this.browserHighlight = this.container.querySelector('#browser-highlight');
        this.actionPopup = this.container.querySelector('#action-popup');
        this.actionContent = this.container.querySelector('#action-content');
        this.resultButtons = this.container.querySelector('#result-buttons');
        this.footerText = this.container.querySelector('#footer-text');
        this.replaceBtn = this.container.querySelector('#replace-btn');
        this.browserShortcut = this.container.querySelector('#browser-shortcut');
        this.browserCursor = this.container.querySelector('#browser-cursor');
        this.browserCursorPointer = this.browserCursor.querySelector('.demo-cursor-pointer');
        this.browserCursorText = this.browserCursor.querySelector('.demo-cursor-text');
        this.browserKeyCmd = this.container.querySelector('#browser-key-cmd');
        this.browserKeyShift = this.container.querySelector('#browser-key-shift');
        this.browserKeyT = this.container.querySelector('#browser-key-t');
    }

    async startAnimation() {
        await this.waitForViewport();

        while (true) {
            await this.runCycle();
            await this.delay(500);
        }
    }

    // Get position relative to container using offset properties (unaffected by CSS transforms)
    getRelativePosition(element, container) {
        let left = 0, top = 0;
        let el = element;
        while (el && el !== container && el !== document.body) {
            left += el.offsetLeft;
            top += el.offsetTop;
            el = el.offsetParent;
        }
        return { left, top, width: element.offsetWidth, height: element.offsetHeight };
    }

    async runCycle() {
        this.resetState();
        await this.delay(500);

        // Show cursor
        this.cursorEl.classList.add('visible');
        this.showPointerCursor();
        this.cursorEl.style.left = '100px';
        this.cursorEl.style.top = '200px';
        await this.delay(400);

        // Move to "New Action" button in empty state
        const emptyBtnPos = this.getRelativePosition(this.emptyNewBtn, this.settingsContent);
        const emptyBtnX = emptyBtnPos.left + emptyBtnPos.width / 2;
        const emptyBtnY = emptyBtnPos.top + emptyBtnPos.height / 2;
        await this.animateCursor(emptyBtnX, emptyBtnY, 400);
        await this.delay(200);

        // Click on New Action button
        this.cursorEl.classList.add('clicking');
        this.emptyNewBtn.classList.add('clicking');
        await this.delay(120);
        this.cursorEl.classList.remove('clicking');
        this.emptyNewBtn.classList.remove('clicking');
        await this.delay(150);

        // Show editor form, hide empty state
        this.emptyState.style.display = 'none';
        this.editorForm.style.display = 'block';
        this.newActionItem.style.display = 'flex';
        this.newActionItem.classList.add('active');
        await this.delay(400);

        // Move to name field
        const namePos = this.getRelativePosition(this.editorName, this.settingsContent);
        const nameX = namePos.left + 20;
        const nameY = namePos.top + namePos.height / 2;
        await this.animateCursor(nameX, nameY, 350);
        await this.delay(200);

        // Click on name field
        this.showTextCursor();
        this.cursorEl.classList.add('clicking');
        await this.delay(100);
        this.cursorEl.classList.remove('clicking');
        this.editorName.classList.add('focused');
        await this.delay(300);

        // Type "Translate to Spanish"
        const actionName = "Translate to Spanish";
        for (let i = 0; i < actionName.length; i++) {
            this.editorName.value = actionName.substring(0, i + 1);
            await this.delay(50);
        }
        await this.delay(400);

        // Move to shortcut field
        this.showPointerCursor();
        this.editorName.classList.remove('focused');
        const shortcutPos = this.getRelativePosition(this.editorShortcut, this.settingsContent);
        const shortcutX = shortcutPos.left + 100;
        const shortcutY = shortcutPos.top + shortcutPos.height / 2;
        await this.animateCursor(shortcutX, shortcutY, 350);
        await this.delay(200);

        // Click on shortcut field
        this.cursorEl.classList.add('clicking');
        await this.delay(100);
        this.cursorEl.classList.remove('clicking');
        this.editorShortcut.classList.add('recording');
        await this.delay(300);

        // Show recording state
        this.editorShortcut.innerHTML = '<span class="settings-shortcut-recording">Recording...</span>';
        await this.delay(400);

        // Show tooltip (it will push content down)
        this.shortcutEl.classList.add('visible');
        await this.delay(200);

        // Animate key presses
        this.keyCmd.classList.add('pressed');
        await this.delay(80);
        this.keyShift.classList.add('pressed');
        await this.delay(80);
        this.keyT.classList.add('pressed');
        await this.delay(500);

        // Show the shortcut keys in the field
        this.editorShortcut.innerHTML = `
            <span class="settings-shortcut-key">&#8984;</span>
            <span class="settings-shortcut-key">&#8679;</span>
            <span class="settings-shortcut-key">T</span>
        `;
        this.editorShortcut.classList.remove('recording');

        // Release keys
        this.keyT.classList.remove('pressed');
        await this.delay(80);
        this.keyShift.classList.remove('pressed');
        await this.delay(80);
        this.keyCmd.classList.remove('pressed');
        await this.delay(200);
        this.shortcutEl.classList.remove('visible');
        await this.delay(300);

        // Move to prompt field
        const promptPos = this.getRelativePosition(this.editorPrompt, this.settingsContent);
        const promptX = promptPos.left + 20;
        const promptY = promptPos.top + 20;
        await this.animateCursor(promptX, promptY, 350);
        await this.delay(200);

        // Click on prompt field
        this.showTextCursor();
        this.cursorEl.classList.add('clicking');
        await this.delay(100);
        this.cursorEl.classList.remove('clicking');
        this.editorPrompt.classList.add('focused');
        await this.delay(300);

        // Type prompt
        const prompt = "Translate the following text to Spanish, maintaining the original tone and style.";
        for (let i = 0; i < prompt.length; i++) {
            this.editorPrompt.value = prompt.substring(0, i + 1);
            await this.delay(25);
        }
        await this.delay(400);

        // Update sidebar item name
        this.newActionItem.querySelector('.settings-action-name').textContent = 'Translate to Spanish';

        this.editorPrompt.classList.remove('focused');
        this.showPointerCursor();
        await this.delay(400);

        // Move to Save button
        const savePos = this.getRelativePosition(this.saveBtn, this.settingsContent);
        const saveX = savePos.left + savePos.width / 2;
        const saveY = savePos.top + savePos.height / 2;
        await this.animateCursor(saveX, saveY, 350);
        await this.delay(200);

        // Click Save button
        this.cursorEl.classList.add('clicking');
        this.saveBtn.classList.add('clicking');
        await this.delay(150);
        this.cursorEl.classList.remove('clicking');
        this.saveBtn.classList.remove('clicking');
        await this.delay(300);

        // Hide cursor and transition to browser view
        this.cursorEl.classList.remove('visible');
        await this.delay(300);

        // Slide out settings view horizontally
        this.settingsView.classList.add('slide-out-left');
        await this.delay(250);

        // Show browser view and slide it in from the right
        this.browserView.style.display = 'block';
        this.browserView.classList.add('slide-in-right');
        await this.delay(500);

        // Clean up after animations complete
        this.settingsView.style.display = 'none';
        this.settingsView.classList.remove('slide-out-left');
        this.browserView.classList.remove('slide-in-right');

        // Run browser demo
        await this.runBrowserDemo();
    }

    async runBrowserDemo() {
        const containerRect = this.browserContent.getBoundingClientRect();

        // Get text position - use offsetWidth/Height to get unscaled dimensions
        const textRect = this.browserText.getBoundingClientRect();
        const textLeft = this.browserText.offsetLeft;
        const textTop = this.browserText.offsetTop;
        const textWidth = this.browserText.offsetWidth;
        const textHeight = this.browserText.offsetHeight;

        // Show browser cursor
        this.browserCursor.classList.add('visible');
        this.showBrowserPointerCursor();
        this.browserCursor.style.left = '50px';
        this.browserCursor.style.top = '100px';
        await this.delay(400);

        // Move cursor to start of text
        await this.animateBrowserCursor(textLeft - 10, textTop + textHeight / 2, 400);
        await this.delay(200);

        // Change to text cursor (I-beam)
        this.showBrowserTextCursor();
        await this.delay(200);

        // Position text cursor at start
        this.browserTextCursorEl.style.left = (textLeft - 2) + 'px';
        this.browserTextCursorEl.style.top = (textTop - 2) + 'px';
        this.browserTextCursorEl.style.height = (textHeight + 4) + 'px';
        this.browserTextCursorEl.classList.add('visible');
        await this.delay(300);

        // Animate selection - drag to select the text
        await this.animateBrowserCursor(textLeft + textWidth + 5, textTop + textHeight / 2, 600);

        // Show selection highlight growing
        this.browserHighlight.style.left = textLeft + 'px';
        this.browserHighlight.style.top = (textTop - 2) + 'px';
        this.browserHighlight.style.width = '0px';
        this.browserHighlight.style.height = (textHeight + 4) + 'px';
        this.browserHighlight.classList.add('visible');

        // Animate width
        this.browserHighlight.style.transition = 'width 0.6s ease-out';
        await this.delay(50);
        this.browserHighlight.style.width = textWidth + 'px';
        await this.delay(600);

        // Hide text cursor
        this.browserTextCursorEl.classList.remove('visible');
        await this.delay(200);

        // Change back to pointer
        this.showBrowserPointerCursor();
        await this.delay(300);

        // Show shortcut hint
        this.browserShortcut.classList.add('visible');
        await this.delay(200);

        // Animate key presses
        this.browserKeyCmd.classList.add('pressed');
        await this.delay(80);
        this.browserKeyShift.classList.add('pressed');
        await this.delay(80);
        this.browserKeyT.classList.add('pressed');
        await this.delay(500);

        // Release keys
        this.browserKeyT.classList.remove('pressed');
        await this.delay(80);
        this.browserKeyShift.classList.remove('pressed');
        await this.delay(80);
        this.browserKeyCmd.classList.remove('pressed');
        await this.delay(300);
        this.browserShortcut.classList.remove('visible');

        // Show action popup directly (no main popup)
        this.actionPopup.style.top = (textTop + textHeight + 20) + 'px';
        this.actionPopup.style.left = textLeft + 'px';
        this.actionPopup.classList.add('visible');
        this.browserCursor.classList.remove('visible');
        await this.delay(1400);

        // Show result
        this.actionContent.innerHTML = `
            <div class="textab-result-content">
                <p class="textab-result-text">El rápido zorro marrón salta sobre el perro perezoso. Esta oración contiene todas las letras del alfabeto.</p>
            </div>
        `;
        this.resultButtons.style.display = 'flex';
        this.footerText.textContent = 'close';
        await this.delay(600);

        // Move cursor to Replace button
        this.browserCursor.classList.add('visible');
        const replaceRect = this.replaceBtn.getBoundingClientRect();
        const replaceX = replaceRect.left - containerRect.left + replaceRect.width / 2;
        const replaceY = replaceRect.top - containerRect.top + replaceRect.height / 2;
        await this.animateBrowserCursor(replaceX, replaceY, 350);
        await this.delay(200);

        // Click Replace
        this.browserCursor.classList.add('clicking');
        this.replaceBtn.classList.add('clicking');
        await this.delay(150);
        this.browserCursor.classList.remove('clicking');
        this.replaceBtn.classList.remove('clicking');

        // Hide popup and update text
        await this.delay(100);
        this.actionPopup.classList.remove('visible');
        this.browserHighlight.classList.remove('visible');
        await this.delay(250);

        // Update text with translation
        this.browserText.textContent = 'El rápido zorro marrón salta sobre el perro perezoso. Esta oración contiene todas las letras del alfabeto.';
        this.browserCursor.classList.remove('visible');
        await this.delay(2000);
    }

    resetState() {
        // Reset settings view
        this.settingsView.style.display = 'block';
        this.settingsView.classList.remove('slide-out-left');
        this.browserView.style.display = 'none';
        this.browserView.classList.remove('slide-in-right');
        this.emptyState.style.display = 'flex';
        this.editorForm.style.display = 'none';
        this.newActionItem.style.display = 'none';
        this.newActionItem.classList.remove('active');
        this.editorName.value = '';
        this.editorName.classList.remove('focused');
        this.editorShortcut.innerHTML = '<span class="settings-shortcut-placeholder">Click to record shortcut...</span>';
        this.editorShortcut.classList.remove('recording');
        this.editorPrompt.value = '';
        this.editorPrompt.classList.remove('focused');
        this.cursorEl.classList.remove('visible', 'clicking');
        this.showPointerCursor();
        this.newActionItem.querySelector('.settings-action-name').textContent = 'New Action';
        this.shortcutEl.classList.remove('visible');
        this.keyCmd.classList.remove('pressed');
        this.keyShift.classList.remove('pressed');
        this.keyT.classList.remove('pressed');
        this.saveBtn.classList.remove('clicking');

        // Reset browser view
        this.browserText.textContent = 'The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet.';
        this.browserTextCursorEl.classList.remove('visible');
        this.browserHighlight.classList.remove('visible');
        this.browserHighlight.style.width = '0px';
        this.browserHighlight.style.transition = 'none';
        this.actionPopup.classList.remove('visible');
        this.actionContent.innerHTML = `
            <div class="textab-loading-content">
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
            </div>
        `;
        this.resultButtons.style.display = 'none';
        this.footerText.textContent = 'processing...';
        this.browserCursor.classList.remove('visible', 'clicking');
        this.showBrowserPointerCursor();
        this.browserShortcut.classList.remove('visible');
        this.browserKeyCmd.classList.remove('pressed');
        this.browserKeyShift.classList.remove('pressed');
        this.browserKeyT.classList.remove('pressed');
    }

    showPointerCursor() {
        this.cursorPointer.style.display = 'block';
        this.cursorText.style.display = 'none';
    }

    showTextCursor() {
        this.cursorPointer.style.display = 'none';
        this.cursorText.style.display = 'block';
    }

    showBrowserPointerCursor() {
        this.browserCursorPointer.style.display = 'block';
        this.browserCursorText.style.display = 'none';
    }

    showBrowserTextCursor() {
        this.browserCursorPointer.style.display = 'none';
        this.browserCursorText.style.display = 'block';
    }

    async animateCursor(x, y, duration = 300) {
        this.cursorEl.style.transition = `left ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), top ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        this.cursorEl.style.left = x + 'px';
        this.cursorEl.style.top = y + 'px';
        await this.delay(duration);
    }

    async animateBrowserCursor(x, y, duration = 300) {
        this.browserCursor.style.transition = `left ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), top ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        this.browserCursor.style.left = x + 'px';
        this.browserCursor.style.top = y + 'px';
        await this.delay(duration);
    }

    waitForViewport() {
        return new Promise(resolve => {
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                    resolve();
                }
            }, { threshold: 0.5 });
            observer.observe(this.container);
        });
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Auto-initialize if container exists
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('demo-settings');
    if (container) {
        new SettingsDemo(container);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SettingsDemo };
}
