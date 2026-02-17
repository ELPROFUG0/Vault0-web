/* ============================================
   Grammar Fix Demo - TexTab Feature Demo
   ============================================ */

class GrammarDemo {
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
            <div class="fd-container">
                <div class="demo-window">
                    <div class="demo-browser-bar">
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-url">Notes.app</div>
                    </div>
                    <div class="demo-content">
                        <!-- Quote Text -->
                        <div class="demo-quote-container">
                            <p class="demo-quote" id="quote-text">"Simple can be harder than complex: You have to work hard to get your thinking clean to make it <span id="error-word">simpl</span>. But it's worth it in the end because once you get there, you can move mountains."</p>
                            <p class="demo-quote-author">— Steve Jobs</p>
                        </div>

                        <!-- Text cursor indicator -->
                        <div class="demo-text-cursor" id="text-cursor"></div>

                        <!-- Selection highlight -->
                        <div class="demo-highlight" id="selection-highlight"></div>


                        <!-- TexTab Main Popup (Action List) -->
                        <div class="textab-popup" id="main-popup">
                            <div class="textab-search">
                                <svg class="textab-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <input type="text" class="textab-search-input" placeholder="Search actions..." readonly>
                            </div>
                            <div class="textab-actions-list">
                                <div class="textab-action-row selected" id="action-grammar">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                    </svg>
                                    <span class="textab-action-name">Fix Grammar</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">G</span>
                                    </div>
                                </div>
                                <div class="textab-action-row">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 6h16M4 12h16M4 18h7"/>
                                    </svg>
                                    <span class="textab-action-name">Summarize</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">S</span>
                                    </div>
                                </div>
                                <div class="textab-action-row">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 8l6 6l6-6"/>
                                        <path d="M5 16l6 -6l6 6"/>
                                    </svg>
                                    <span class="textab-action-name">Translate</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">T</span>
                                    </div>
                                </div>
                                <div class="textab-new-action">
                                    <svg class="textab-new-action-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                                    </svg>
                                    <span class="textab-action-name">New Action</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">⇧</span>
                                        <span class="textab-key">N</span>
                                    </div>
                                </div>
                            </div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text">close</span>
                                </div>
                                <div class="textab-footer-hint">
                                    <span class="textab-key">↑</span>
                                    <span class="textab-key">↓</span>
                                </div>
                                <div class="textab-footer-hint">
                                    <span class="textab-key">↵</span>
                                    <span class="textab-footer-text">select</span>
                                </div>
                            </div>
                        </div>

                        <!-- TexTab Action Popup (Loading + Result) -->
                        <div class="textab-popup expanded" id="action-popup">
                            <div class="textab-popup-header">
                                <span class="textab-action-badge">Fix Grammar</span>
                                <div class="textab-close-btn">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="action-content">
                                <!-- Dynamic content: loading or result -->
                            </div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text" id="footer-action-text">cancel</span>
                                </div>
                                <div class="textab-result-actions" id="result-buttons" style="display: none;">
                                    <button class="textab-btn textab-btn-secondary">Copy</button>
                                    <button class="textab-btn textab-btn-primary" id="replace-btn">Replace</button>
                                </div>
                                <span class="textab-processing-text" id="processing-text">Processing...</span>
                            </div>
                        </div>

                        <!-- Cursor - Black Arrow with White Border -->
                        <div class="demo-cursor" id="demo-cursor">
                            <!-- Default pointer cursor (black with white border) -->
                            <svg class="demo-cursor-pointer" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" fill="black"/>
                            </svg>
                            <!-- Text cursor (I-beam) -->
                            <svg class="demo-cursor-text" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                <path d="M3 1H7M3 15H7M5 1V15" stroke="#000" stroke-width="1" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- Shortcut Hint -->
                <div class="demo-shortcut" id="shortcut-hint">
                    <span class="textab-key" id="key-cmd">⌘</span>
                    <span class="textab-key" id="key-shift">⇧</span>
                    <span class="textab-key" id="key-space">Space</span>
                </div>
            </div>
        `;

        // Cache DOM elements
        this.quoteText = this.container.querySelector('#quote-text');
        this.errorWord = this.container.querySelector('#error-word');
        this.textCursor = this.container.querySelector('#text-cursor');
        this.highlight = this.container.querySelector('#selection-highlight');
        this.mainPopup = this.container.querySelector('#main-popup');
        this.actionPopup = this.container.querySelector('#action-popup');
        this.actionContent = this.container.querySelector('#action-content');
        this.actionRow = this.container.querySelector('#action-grammar');
        this.cursorEl = this.container.querySelector('#demo-cursor');
        this.cursorPointer = this.container.querySelector('.demo-cursor-pointer');
        this.cursorText = this.container.querySelector('.demo-cursor-text');
        this.shortcutEl = this.container.querySelector('#shortcut-hint');
        this.keyCmd = this.container.querySelector('#key-cmd');
        this.keyShift = this.container.querySelector('#key-shift');
        this.keySpace = this.container.querySelector('#key-space');
        this.resultButtons = this.container.querySelector('#result-buttons');
        this.processingText = this.container.querySelector('#processing-text');
        this.footerActionText = this.container.querySelector('#footer-action-text');
        this.replaceBtn = this.container.querySelector('#replace-btn');
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
        // Reset state
        this.resetState();
        await this.delay(300);

        // Get error word position using offset properties (works with CSS scale)
        const demoContent = this.container.querySelector('.demo-content');
        const pos = this.getRelativePosition(this.errorWord, demoContent);
        const wordLeft = pos.left;
        const wordTop = pos.top;
        const wordWidth = pos.width;
        const wordHeight = pos.height;

        // Step 1: Show cursor entering
        this.cursorEl.classList.add('visible');
        this.showPointerCursor();
        this.cursorEl.style.left = '50px';
        this.cursorEl.style.top = '150px';
        await this.delay(400);

        // Step 2: Move cursor to the error word
        await this.animateCursor(wordLeft - 10, wordTop + wordHeight / 2, 500);
        await this.delay(200);

        // Step 3: Change to text cursor (I-beam)
        this.showTextCursor();
        await this.delay(200);

        // Step 4: Position cursor at start of word and show text cursor blinking
        this.textCursor.style.left = (wordLeft - 2) + 'px';
        this.textCursor.style.top = (wordTop - 2) + 'px';
        this.textCursor.style.height = (wordHeight + 4) + 'px';
        this.textCursor.classList.add('visible');
        await this.delay(300);

        // Step 5: Animate selection - drag to select the word
        await this.animateCursor(wordLeft + wordWidth + 5, wordTop + wordHeight / 2, 400);

        // Show selection highlight growing
        this.highlight.style.left = wordLeft + 'px';
        this.highlight.style.top = (wordTop - 2) + 'px';
        this.highlight.style.width = '0px';
        this.highlight.style.height = (wordHeight + 4) + 'px';
        this.highlight.classList.add('visible');

        // Animate width
        this.highlight.style.transition = 'width 0.4s ease-out';
        await this.delay(50);
        this.highlight.style.width = wordWidth + 'px';
        await this.delay(400);

        // Hide text cursor, show selected state
        this.textCursor.classList.remove('visible');
        this.errorWord.classList.add('selected');
        await this.delay(400);

        // Step 6: Change back to pointer cursor
        this.showPointerCursor();
        await this.delay(300);

        // Step 7: Show shortcut hint and press keys
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

        // Step 8: Show main popup (action list)
        this.mainPopup.style.top = (wordTop + wordHeight + 20) + 'px';
        this.mainPopup.style.left = wordLeft + 'px';
        this.mainPopup.classList.add('visible');
        await this.delay(600);

        // Step 9: Move cursor to Fix Grammar action
        const actionPos = this.getRelativePosition(this.actionRow, demoContent);
        const actionX = actionPos.left + actionPos.width / 2;
        const actionY = actionPos.top + actionPos.height / 2;
        await this.animateCursor(actionX, actionY, 350);
        await this.delay(200);

        // Step 10: Click on Fix Grammar action
        this.cursorEl.classList.add('clicking');
        this.actionRow.classList.add('clicking');
        await this.delay(120);
        this.cursorEl.classList.remove('clicking');
        this.actionRow.classList.remove('clicking');

        // Step 11: Hide main popup, show action popup with loading
        await this.delay(100);
        this.mainPopup.classList.remove('visible');
        await this.delay(150);

        // Show loading state
        this.actionContent.innerHTML = `
            <div class="textab-loading-content">
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
                <div class="textab-shimmer"></div>
            </div>
        `;
        this.resultButtons.style.display = 'none';
        this.processingText.style.display = 'block';
        this.footerActionText.textContent = 'cancel';

        this.actionPopup.style.top = (wordTop + wordHeight + 20) + 'px';
        this.actionPopup.style.left = wordLeft + 'px';
        this.actionPopup.style.width = '280px';
        this.actionPopup.classList.add('visible');

        // Hide cursor while loading
        this.cursorEl.classList.remove('visible');
        await this.delay(1400);

        // Step 12: Show result
        this.actionContent.innerHTML = `
            <div class="textab-result-content">
                <div class="textab-result-text">simple</div>
            </div>
        `;
        this.resultButtons.style.display = 'flex';
        this.processingText.style.display = 'none';
        this.footerActionText.textContent = 'close';
        await this.delay(600);

        // Step 13: Show cursor and move to Replace button
        this.cursorEl.classList.add('visible');
        const popupPos = this.getRelativePosition(this.actionPopup, demoContent);
        this.cursorEl.style.left = (popupPos.left + 50) + 'px';
        this.cursorEl.style.top = (popupPos.top + 50) + 'px';
        await this.delay(200);

        // Get button position and move cursor precisely to it
        const btnPos = this.getRelativePosition(this.replaceBtn, demoContent);
        const targetX = btnPos.left + btnPos.width / 2 - 8;
        const targetY = btnPos.top + btnPos.height / 2 - 5;
        await this.animateCursor(targetX, targetY, 350);
        await this.delay(200);

        // Step 14: Click on Replace button
        this.cursorEl.classList.add('clicking');
        this.replaceBtn.classList.add('clicking');
        await this.delay(150);
        this.cursorEl.classList.remove('clicking');
        this.replaceBtn.classList.remove('clicking');

        // Step 15: Hide popup and show corrected text
        await this.delay(100);
        this.actionPopup.classList.remove('visible');
        this.highlight.classList.remove('visible');
        await this.delay(250);

        // Update the word to corrected version
        this.errorWord.textContent = 'simple';
        this.errorWord.classList.remove('selected');
        this.errorWord.classList.add('corrected');
        this.cursorEl.classList.remove('visible');
        await this.delay(1500);

        // Reset and restart immediately
        this.errorWord.classList.remove('corrected');
        this.errorWord.textContent = 'simpl';
    }

    resetState() {
        this.errorWord.textContent = 'simpl';
        this.errorWord.classList.remove('selected', 'corrected');
        this.textCursor.classList.remove('visible');
        this.highlight.classList.remove('visible');
        this.highlight.style.width = '0px';
        this.highlight.style.transition = 'none';
        this.mainPopup.classList.remove('visible');
        this.actionPopup.classList.remove('visible');
        this.shortcutEl.classList.remove('visible');
        this.cursorEl.classList.remove('visible');
        this.cursorEl.classList.remove('clicking');
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
    const container = document.getElementById('demo-grammar');
    if (container) {
        new GrammarDemo(container);
    }
    const containerMain = document.getElementById('demo-grammar-main');
    if (containerMain) {
        new GrammarDemo(containerMain);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GrammarDemo };
}
window.GrammarDemo = GrammarDemo;
