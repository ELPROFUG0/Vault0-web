/* ============================================
   Gmail Email Improvement Demo - TexTab Feature Demo
   ============================================ */

class GmailDemo {
    constructor(container) {
        this.container = container;
        this.originalEmail = "hey can you send me the report when you get a chance? i need it for the meeting tomorrow thanks";
        this.improvedEmail = "Hi there,\n\nCould you please send me the report at your earliest convenience? I'll need it for tomorrow's meeting.\n\nThank you!";
        this.init();
    }

    init() {
        this.render();
        this.startAnimation();
    }

    render() {
        this.container.innerHTML = `
            <div class="fd-container">
                <div class="demo-window gmail-demo">
                    <div class="demo-browser-bar">
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-url">mail.google.com</div>
                    </div>
                    <div class="demo-content gmail-composer">
                        <!-- Gmail Compose Header -->
                        <div class="gmail-header">
                            <span class="gmail-title">New Message</span>
                            <div class="gmail-header-actions">
                                <button class="gmail-header-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 12h14M12 5v14"/>
                                    </svg>
                                </button>
                                <button class="gmail-header-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- Gmail Fields -->
                        <div class="gmail-fields">
                            <div class="gmail-field">
                                <span class="gmail-field-label">To</span>
                                <div class="gmail-recipient">
                                    <span class="gmail-recipient-chip">john.doe@company.com</span>
                                </div>
                            </div>
                            <div class="gmail-field">
                                <span class="gmail-field-label">Subject</span>
                                <span class="gmail-subject-text">Report request</span>
                            </div>
                        </div>

                        <!-- Gmail Body -->
                        <div class="gmail-body-area">
                            <p class="gmail-body-text" id="gmail-text">${this.originalEmail}</p>
                        </div>

                        <!-- Selection highlight -->
                        <div class="demo-highlight gmail-highlight" id="gmail-highlight"></div>

                        <!-- Gmail Toolbar -->
                        <div class="gmail-toolbar">
                            <button class="gmail-send-btn">
                                <span>Send</span>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 10l5 5 5-5z"/>
                                </svg>
                            </button>
                            <div class="gmail-format-tools">
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.5 4l1.16 4.35-.96.26c-.45-.87-.91-1.74-1.83-2.13-.92-.39-2.03-.23-2.87.46V18h-2V4h6.5zM7 4v14H5V4h2z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                                    </svg>
                                </button>
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="gmail-more-actions">
                                <button class="gmail-tool-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                    </svg>
                                </button>
                                <button class="gmail-trash-btn">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <!-- TexTab Main Popup -->
                        <div class="textab-popup" id="gmail-main-popup">
                            <div class="textab-search">
                                <svg class="textab-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <input type="text" class="textab-search-input" placeholder="Search actions..." readonly>
                            </div>
                            <div class="textab-actions-list">
                                <div class="textab-action-row selected" id="gmail-action-professional">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                        <circle cx="12" cy="7" r="4"/>
                                    </svg>
                                    <span class="textab-action-name">Make Professional</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">P</span>
                                    </div>
                                </div>
                                <div class="textab-action-row" id="gmail-action-friendly">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                        <line x1="9" y1="9" x2="9.01" y2="9"/>
                                        <line x1="15" y1="9" x2="15.01" y2="9"/>
                                    </svg>
                                    <span class="textab-action-name">Make Friendly</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">F</span>
                                    </div>
                                </div>
                                <div class="textab-action-row">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 6h16M4 12h16M4 18h7"/>
                                    </svg>
                                    <span class="textab-action-name">Make it Shorter</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">S</span>
                                    </div>
                                </div>
                            </div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text">close</span>
                                </div>
                                <div class="textab-footer-hint">
                                    <span class="textab-key">↵</span>
                                    <span class="textab-footer-text">select</span>
                                </div>
                            </div>
                        </div>

                        <!-- TexTab Action Popup (Loading + Result) -->
                        <div class="textab-popup expanded" id="gmail-action-popup">
                            <div class="textab-popup-header">
                                <span class="textab-action-badge" id="gmail-action-badge">Make Professional</span>
                                <div class="textab-close-btn">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="gmail-action-content"></div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text" id="gmail-footer-text">cancel</span>
                                </div>
                                <div class="textab-result-actions" id="gmail-result-buttons" style="display: none;">
                                    <button class="textab-btn textab-btn-secondary">Copy</button>
                                    <button class="textab-btn textab-btn-primary" id="gmail-replace-btn">Replace</button>
                                </div>
                                <span class="textab-processing-text" id="gmail-processing-text">Processing...</span>
                            </div>
                        </div>

                        <!-- Cursor -->
                        <div class="demo-cursor" id="gmail-cursor">
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

                <!-- Shortcut Hint -->
                <div class="demo-shortcut" id="gmail-shortcut-hint">
                    <span class="textab-key" id="gmail-key-cmd">⌘</span>
                    <span class="textab-key" id="gmail-key-shift">⇧</span>
                    <span class="textab-key" id="gmail-key-space">Space</span>
                </div>
            </div>
        `;

        // Cache DOM elements
        this.gmailText = this.container.querySelector('#gmail-text');
        this.highlight = this.container.querySelector('#gmail-highlight');
        this.mainPopup = this.container.querySelector('#gmail-main-popup');
        this.actionPopup = this.container.querySelector('#gmail-action-popup');
        this.actionContent = this.container.querySelector('#gmail-action-content');
        this.actionRow = this.container.querySelector('#gmail-action-professional');
        this.cursorEl = this.container.querySelector('#gmail-cursor');
        this.cursorPointer = this.cursorEl.querySelector('.demo-cursor-pointer');
        this.cursorText = this.cursorEl.querySelector('.demo-cursor-text');
        this.shortcutEl = this.container.querySelector('#gmail-shortcut-hint');
        this.keyCmd = this.container.querySelector('#gmail-key-cmd');
        this.keyShift = this.container.querySelector('#gmail-key-shift');
        this.keySpace = this.container.querySelector('#gmail-key-space');
        this.resultButtons = this.container.querySelector('#gmail-result-buttons');
        this.processingText = this.container.querySelector('#gmail-processing-text');
        this.footerText = this.container.querySelector('#gmail-footer-text');
        this.replaceBtn = this.container.querySelector('#gmail-replace-btn');
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
        await this.delay(300);

        const demoContent = this.container.querySelector('.demo-content');
        const pos = this.getRelativePosition(this.gmailText, demoContent);
        const textLeft = pos.left;
        const textTop = pos.top;
        const textWidth = pos.width;
        const textHeight = pos.height;

        // Show cursor
        this.cursorEl.classList.add('visible');
        this.showPointerCursor();
        this.cursorEl.style.left = '50px';
        this.cursorEl.style.top = '250px';
        await this.delay(400);

        // Move to text area
        await this.animateCursor(textLeft, textTop + textHeight / 2, 400);
        await this.delay(200);

        // Change to text cursor
        this.showTextCursor();
        await this.delay(200);

        // Triple click to select all (simulate)
        this.cursorEl.classList.add('clicking');
        await this.delay(80);
        this.cursorEl.classList.remove('clicking');
        await this.delay(100);
        this.cursorEl.classList.add('clicking');
        await this.delay(80);
        this.cursorEl.classList.remove('clicking');
        await this.delay(100);
        this.cursorEl.classList.add('clicking');
        await this.delay(80);
        this.cursorEl.classList.remove('clicking');

        // Show selection
        this.highlight.style.left = textLeft + 'px';
        this.highlight.style.top = textTop + 'px';
        this.highlight.style.width = textWidth + 'px';
        this.highlight.style.height = textHeight + 'px';
        this.highlight.classList.add('visible');
        this.gmailText.classList.add('selected');
        await this.delay(400);

        // Change back to pointer
        this.showPointerCursor();
        await this.delay(300);

        // Show shortcut hint
        this.shortcutEl.classList.add('visible');
        await this.delay(300);

        // Animate key presses
        this.keyCmd.classList.add('pressed');
        await this.delay(80);
        this.keyShift.classList.add('pressed');
        await this.delay(80);
        this.keySpace.classList.add('pressed');
        await this.delay(600);

        // Release keys
        this.keySpace.classList.remove('pressed');
        await this.delay(80);
        this.keyShift.classList.remove('pressed');
        await this.delay(80);
        this.keyCmd.classList.remove('pressed');
        await this.delay(300);
        this.shortcutEl.classList.remove('visible');

        // Show main popup
        this.mainPopup.style.top = (textTop - 60) + 'px';
        this.mainPopup.style.left = textLeft + 'px';
        this.mainPopup.classList.add('visible');
        await this.delay(600);

        // Move cursor to action
        const actionPos = this.getRelativePosition(this.actionRow, demoContent);
        const actionX = actionPos.left + actionPos.width / 2;
        const actionY = actionPos.top + actionPos.height / 2;
        await this.animateCursor(actionX, actionY, 350);
        await this.delay(200);

        // Click action
        this.cursorEl.classList.add('clicking');
        this.actionRow.classList.add('clicking');
        await this.delay(120);
        this.cursorEl.classList.remove('clicking');
        this.actionRow.classList.remove('clicking');

        // Show action popup with loading
        await this.delay(100);
        this.mainPopup.classList.remove('visible');
        await this.delay(150);

        this.actionContent.innerHTML = `
            <div class="textab-loading-content">
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
            </div>
        `;
        this.resultButtons.style.display = 'none';
        this.processingText.style.display = 'block';
        this.footerText.textContent = 'cancel';

        this.actionPopup.style.top = (textTop - 60) + 'px';
        this.actionPopup.style.left = textLeft + 'px';
        this.actionPopup.classList.add('visible');

        this.cursorEl.classList.remove('visible');
        await this.delay(1400);

        // Show result
        this.actionContent.innerHTML = `
            <div class="textab-result-content">
                <div class="textab-result-text">${this.improvedEmail.replace(/\n/g, '<br>')}</div>
            </div>
        `;
        this.resultButtons.style.display = 'flex';
        this.processingText.style.display = 'none';
        this.footerText.textContent = 'close';
        await this.delay(600);

        // Move cursor to Replace button
        this.cursorEl.classList.add('visible');
        const popupPos = this.getRelativePosition(this.actionPopup, demoContent);
        this.cursorEl.style.left = (popupPos.left + 50) + 'px';
        this.cursorEl.style.top = (popupPos.top + 50) + 'px';
        await this.delay(200);

        const btnPos = this.getRelativePosition(this.replaceBtn, demoContent);
        const targetX = btnPos.left + btnPos.width / 2 - 8;
        const targetY = btnPos.top + btnPos.height / 2 - 5;
        await this.animateCursor(targetX, targetY, 350);
        await this.delay(200);

        // Click Replace
        this.cursorEl.classList.add('clicking');
        this.replaceBtn.classList.add('clicking');
        await this.delay(150);
        this.cursorEl.classList.remove('clicking');
        this.replaceBtn.classList.remove('clicking');

        // Hide popup and update text
        await this.delay(100);
        this.actionPopup.classList.remove('visible');
        this.highlight.classList.remove('visible');
        await this.delay(250);

        // Update email text
        this.gmailText.innerHTML = this.improvedEmail.replace(/\n/g, '<br>');
        this.gmailText.classList.remove('selected');
        this.gmailText.classList.add('improved');
        this.cursorEl.classList.remove('visible');
        await this.delay(1800);

        // Reset
        this.gmailText.classList.remove('improved');
        this.gmailText.textContent = this.originalEmail;
    }

    resetState() {
        this.gmailText.textContent = this.originalEmail;
        this.gmailText.classList.remove('selected', 'improved');
        this.highlight.classList.remove('visible');
        this.mainPopup.classList.remove('visible');
        this.actionPopup.classList.remove('visible');
        this.shortcutEl.classList.remove('visible');
        this.cursorEl.classList.remove('visible', 'clicking');
        this.showPointerCursor();
        this.actionContent.innerHTML = '';
        this.resultButtons.style.display = 'none';
        this.processingText.style.display = 'block';
    }

    showPointerCursor() {
        this.cursorPointer.style.display = 'block';
        this.cursorText.style.display = 'none';
    }

    showTextCursor() {
        this.cursorPointer.style.display = 'none';
        this.cursorText.style.display = 'block';
    }

    async animateCursor(x, y, duration = 300) {
        this.cursorEl.style.transition = `left ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), top ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        this.cursorEl.style.left = x + 'px';
        this.cursorEl.style.top = y + 'px';
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
    const container = document.getElementById('demo-gmail');
    if (container) {
        new GmailDemo(container);
    }
    const containerMain = document.getElementById('demo-gmail-main');
    if (containerMain) {
        new GmailDemo(containerMain);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GmailDemo };
}
window.GmailDemo = GmailDemo;
