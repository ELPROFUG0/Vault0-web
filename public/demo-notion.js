/* ============================================
   Notion Summarize Demo - TexTab Feature Demo
   ============================================ */

class NotionDemo {
    constructor(container) {
        this.container = container;
        this.originalText = "The quarterly sales report shows significant growth across all regions. Revenue increased by 23% compared to last quarter, with the highest performance in the APAC region at 31% growth. Customer acquisition costs decreased by 15% due to improved marketing efficiency. The team successfully launched three new product features that contributed to a 40% increase in user engagement.";
        this.summarizedText = "• Revenue up 23% vs last quarter\n• APAC region leading with 31% growth\n• Customer acquisition costs down 15%\n• 3 new features launched → 40% more engagement";
        this.init();
    }

    init() {
        this.render();
        this.startAnimation();
    }

    render() {
        this.container.innerHTML = `
            <div class="fd-container">
                <div class="demo-window notion-demo">
                    <!-- macOS Title Bar -->
                    <div class="notion-titlebar">
                        <div class="notion-titlebar-left">
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                        </div>
                        <div class="notion-titlebar-center">
                            <svg class="notion-logo" width="18" height="18" viewBox="0 0 100 100" fill="none">
                                <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#ffffff"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#000000"/>
                            </svg>
                            <span class="notion-titlebar-text">Notion - Q4 Report</span>
                        </div>
                        <div class="notion-titlebar-right"></div>
                    </div>
                    <div class="demo-content notion-page">
                        <!-- Notion Sidebar -->
                        <div class="notion-sidebar">
                            <div class="notion-sidebar-header">
                                <div class="notion-workspace">
                                    <span class="notion-workspace-icon">📋</span>
                                    <span class="notion-workspace-name">Workspace</span>
                                </div>
                            </div>
                            <div class="notion-nav">
                                <div class="notion-nav-item">
                                    <span class="notion-nav-icon">🔍</span>
                                    <span>Search</span>
                                </div>
                                <div class="notion-nav-item">
                                    <span class="notion-nav-icon">🏠</span>
                                    <span>Home</span>
                                </div>
                                <div class="notion-nav-item">
                                    <span class="notion-nav-icon">📥</span>
                                    <span>Inbox</span>
                                </div>
                            </div>
                            <div class="notion-pages">
                                <div class="notion-section-title">Private</div>
                                <div class="notion-page-item active">
                                    <span class="notion-page-icon">📊</span>
                                    <span>Q4 Report</span>
                                </div>
                                <div class="notion-page-item">
                                    <span class="notion-page-icon">📝</span>
                                    <span>Meeting Notes</span>
                                </div>
                                <div class="notion-page-item">
                                    <span class="notion-page-icon">✅</span>
                                    <span>Tasks</span>
                                </div>
                            </div>
                        </div>

                        <!-- Notion Editor -->
                        <div class="notion-editor">
                            <div class="notion-page-header">
                                <span class="notion-page-emoji">📊</span>
                                <h1 class="notion-page-title">Q4 Report</h1>
                            </div>

                            <div class="notion-content-area">
                                <p class="notion-text" id="notion-text">${this.originalText}</p>
                            </div>

                            <!-- Selection highlight -->
                            <div class="demo-highlight notion-highlight" id="notion-highlight"></div>
                        </div>

                        <!-- TexTab Main Popup -->
                        <div class="textab-popup" id="notion-main-popup">
                            <div class="textab-search">
                                <svg class="textab-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <input type="text" class="textab-search-input" placeholder="Search actions..." readonly>
                            </div>
                            <div class="textab-actions-list">
                                <div class="textab-action-row selected" id="notion-action-summarize">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <line x1="8" y1="6" x2="21" y2="6"/>
                                        <line x1="8" y1="12" x2="21" y2="12"/>
                                        <line x1="8" y1="18" x2="21" y2="18"/>
                                        <line x1="3" y1="6" x2="3.01" y2="6"/>
                                        <line x1="3" y1="12" x2="3.01" y2="12"/>
                                        <line x1="3" y1="18" x2="3.01" y2="18"/>
                                    </svg>
                                    <span class="textab-action-name">Summarize to Bullets</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">B</span>
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
                                <div class="textab-action-row">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    <span class="textab-action-name">Expand</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">E</span>
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
                        <div class="textab-popup expanded" id="notion-action-popup">
                            <div class="textab-popup-header">
                                <span class="textab-action-badge" id="notion-action-badge">Summarize to Bullets</span>
                                <div class="textab-close-btn">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="notion-action-content"></div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text" id="notion-footer-text">cancel</span>
                                </div>
                                <div class="textab-result-actions" id="notion-result-buttons" style="display: none;">
                                    <button class="textab-btn textab-btn-secondary">Copy</button>
                                    <button class="textab-btn textab-btn-primary" id="notion-replace-btn">Replace</button>
                                </div>
                                <span class="textab-processing-text" id="notion-processing-text">Processing...</span>
                            </div>
                        </div>

                        <!-- Cursor -->
                        <div class="demo-cursor" id="notion-cursor">
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
                <div class="demo-shortcut" id="notion-shortcut-hint">
                    <span class="textab-key" id="notion-key-cmd">⌘</span>
                    <span class="textab-key" id="notion-key-shift">⇧</span>
                    <span class="textab-key" id="notion-key-space">Space</span>
                </div>
            </div>
        `;

        // Cache DOM elements
        this.notionText = this.container.querySelector('#notion-text');
        this.highlight = this.container.querySelector('#notion-highlight');
        this.mainPopup = this.container.querySelector('#notion-main-popup');
        this.actionPopup = this.container.querySelector('#notion-action-popup');
        this.actionContent = this.container.querySelector('#notion-action-content');
        this.actionRow = this.container.querySelector('#notion-action-summarize');
        this.cursorEl = this.container.querySelector('#notion-cursor');
        this.cursorPointer = this.cursorEl.querySelector('.demo-cursor-pointer');
        this.cursorText = this.cursorEl.querySelector('.demo-cursor-text');
        this.shortcutEl = this.container.querySelector('#notion-shortcut-hint');
        this.keyCmd = this.container.querySelector('#notion-key-cmd');
        this.keyShift = this.container.querySelector('#notion-key-shift');
        this.keySpace = this.container.querySelector('#notion-key-space');
        this.resultButtons = this.container.querySelector('#notion-result-buttons');
        this.processingText = this.container.querySelector('#notion-processing-text');
        this.footerText = this.container.querySelector('#notion-footer-text');
        this.replaceBtn = this.container.querySelector('#notion-replace-btn');
        this.notionEditor = this.container.querySelector('.notion-editor');
        this.notionPage = this.container.querySelector('.notion-page');
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

        const pos = this.getRelativePosition(this.notionText, this.notionPage);
        const textLeft = pos.left;
        const textTop = pos.top;
        const textWidth = pos.width;
        const textHeight = pos.height;

        // Show cursor
        this.cursorEl.classList.add('visible');
        this.showPointerCursor();
        this.cursorEl.style.left = '50px';
        this.cursorEl.style.top = '200px';
        await this.delay(400);

        // Move to text area
        await this.animateCursor(textLeft + 20, textTop + 20, 400);
        await this.delay(200);

        // Change to text cursor
        this.showTextCursor();
        await this.delay(200);

        // Triple click to select all
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

        // Show selection (only use the class, not the highlight overlay)
        this.notionText.classList.add('selected');
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

        // Show main popup - position in editor area
        this.mainPopup.style.top = '50px';
        this.mainPopup.style.left = '210px';
        this.mainPopup.classList.add('visible');
        await this.delay(600);

        // Move cursor to action
        const actionPos = this.getRelativePosition(this.actionRow, this.notionPage);
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

        this.actionPopup.style.top = '50px';
        this.actionPopup.style.left = '210px';
        this.actionPopup.classList.add('visible');

        this.cursorEl.classList.remove('visible');
        await this.delay(1400);

        // Show result with bullet preview - compact
        this.actionContent.innerHTML = `
            <div class="textab-result-content notion-result-content">
                <div class="notion-result-bullet">• Revenue up 23% vs last quarter</div>
                <div class="notion-result-bullet">• APAC leading with 31% growth</div>
                <div class="notion-result-bullet">• Acquisition costs down 15%</div>
                <div class="notion-result-bullet">• 3 features → 40% engagement</div>
            </div>
        `;
        this.resultButtons.style.display = 'flex';
        this.processingText.style.display = 'none';
        this.footerText.textContent = 'close';
        await this.delay(600);

        // Move cursor to Replace button
        this.cursorEl.classList.add('visible');
        const btnPos = this.getRelativePosition(this.replaceBtn, this.notionPage);
        const targetX = btnPos.left + btnPos.width / 2;
        const targetY = btnPos.top + btnPos.height / 2;
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
        await this.delay(250);

        // Update text with Notion-style bullet list
        this.notionText.classList.remove('selected');
        this.notionText.innerHTML = `<div class="notion-final-bullets"><div>• Revenue up 23% vs last quarter</div><div>• APAC region leading with 31% growth</div><div>• Customer acquisition costs down 15%</div><div>• 3 new features launched → 40% more engagement</div></div>`;
        this.cursorEl.classList.remove('visible');
        await this.delay(2000);

        // Reset
        this.notionText.textContent = this.originalText;
    }

    resetState() {
        this.notionText.textContent = this.originalText;
        this.notionText.classList.remove('selected', 'summarized');
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
    const container = document.getElementById('demo-notion');
    if (container) {
        new NotionDemo(container);
    }
    const containerMain = document.getElementById('demo-notion-main');
    if (containerMain) {
        new NotionDemo(containerMain);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NotionDemo };
}
window.NotionDemo = NotionDemo;
