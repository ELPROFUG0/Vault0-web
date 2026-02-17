/* ============================================
   Code Generation Demo - TexTab Feature Demo
   ============================================ */

class CodeDemo {
    constructor(container) {
        this.container = container;
        this.originalComment = "// TODO: function to validate email format";
        this.generatedCode = `function validateEmail(email) {
    const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return regex.test(email);
}`;
        this.init();
    }

    init() {
        this.render();
        this.startAnimation();
    }

    render() {
        this.container.innerHTML = `
            <div class="fd-container">
                <div class="demo-window code-demo">
                    <!-- VS Code Style Title Bar -->
                    <div class="vscode-titlebar">
                        <div class="vscode-titlebar-left">
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                            <div class="demo-dot"></div>
                        </div>
                        <div class="vscode-title">utils.js — project</div>
                        <div class="vscode-titlebar-right"></div>
                    </div>

                    <div class="vscode-container">
                        <!-- Sidebar -->
                        <div class="vscode-sidebar">
                            <div class="vscode-sidebar-icon active">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"/>
                                </svg>
                            </div>
                            <div class="vscode-sidebar-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1.12 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"/>
                                </svg>
                            </div>
                            <div class="vscode-sidebar-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"/>
                                </svg>
                            </div>
                        </div>

                        <!-- Editor Area -->
                        <div class="vscode-editor">
                            <!-- Tab Bar -->
                            <div class="vscode-tabs">
                                <div class="vscode-tab active">
                                    <svg width="14" height="14" viewBox="0 0 32 32" fill="#f1e05a">
                                        <path d="M2 16.505l7.055 4.07 5.995-3.705v3.37L9.01 23.44 2 19.43v-2.925zm7.055 2.135L4.355 16l4.7-2.64 4.7 2.64-4.7 2.64zM9.01 8.56l6.04 3.2v3.37L9.055 11.93 2 16v-2.925l7.01-4.515zm6.04 14.88l6.99-4.07v2.925l-6.99 4.515V23.44zm6.99-12.31l-6.99 4.07v3.37l6.99-4.515v-2.925zm-6.99 2.135l4.7-2.64 4.7 2.64-4.7 2.64-4.7-2.64zM30 16l-7.01 4.44-.045-3.37 7.055-4.07v3zm-7.055 7.44L30 19.925V16l-7.01 4.07-.045 3.37z"/>
                                    </svg>
                                    <span>utils.js</span>
                                    <span class="vscode-tab-close">×</span>
                                </div>
                            </div>

                            <!-- Code Content -->
                            <div class="vscode-code-area">
                                <div class="vscode-line-numbers">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                </div>
                                <div class="vscode-code-content">
                                    <div class="code-line"><span class="code-keyword">import</span> <span class="code-variable">axios</span> <span class="code-keyword">from</span> <span class="code-string">'axios'</span>;</div>
                                    <div class="code-line"></div>
                                    <div class="code-line" id="code-comment"><span class="code-comment">${this.originalComment}</span></div>
                                    <div class="code-line"></div>
                                    <div class="code-line"><span class="code-keyword">export</span> <span class="code-keyword">function</span> <span class="code-function">fetchUser</span>(<span class="code-variable">id</span>) {</div>
                                    <div class="code-line">  <span class="code-keyword">return</span> <span class="code-variable">axios</span>.<span class="code-function">get</span>(<span class="code-string">\`/api/users/\${id}\`</span>);</div>
                                    <div class="code-line">}</div>
                                    <div class="code-line"></div>
                                </div>

                                <!-- Selection highlight -->
                                <div class="demo-highlight code-highlight" id="code-highlight"></div>

                                <!-- TexTab Main Popup -->
                                <div class="textab-popup" id="code-main-popup">
                                    <div class="textab-search">
                                        <svg class="textab-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <circle cx="11" cy="11" r="8"/>
                                            <path d="M21 21l-4.35-4.35"/>
                                        </svg>
                                        <input type="text" class="textab-search-input" placeholder="Search actions..." readonly>
                                    </div>
                                    <div class="textab-actions-list">
                                        <div class="textab-action-row selected" id="code-action-generate">
                                            <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <polyline points="16 18 22 12 16 6"/>
                                                <polyline points="8 6 2 12 8 18"/>
                                            </svg>
                                            <span class="textab-action-name">Generate Code</span>
                                            <div class="textab-action-shortcut">
                                                <span class="textab-key">⌘</span>
                                                <span class="textab-key">G</span>
                                            </div>
                                        </div>
                                        <div class="textab-action-row">
                                            <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                                <polyline points="14 2 14 8 20 8"/>
                                                <line x1="16" y1="13" x2="8" y2="13"/>
                                                <line x1="16" y1="17" x2="8" y2="17"/>
                                            </svg>
                                            <span class="textab-action-name">Explain Code</span>
                                            <div class="textab-action-shortcut">
                                                <span class="textab-key">⌘</span>
                                                <span class="textab-key">E</span>
                                            </div>
                                        </div>
                                        <div class="textab-action-row">
                                            <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M12 20h9"/>
                                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                                            </svg>
                                            <span class="textab-action-name">Refactor</span>
                                            <div class="textab-action-shortcut">
                                                <span class="textab-key">⌘</span>
                                                <span class="textab-key">R</span>
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
                                <div class="textab-popup expanded" id="code-action-popup">
                                    <div class="textab-popup-header">
                                        <span class="textab-action-badge" id="code-action-badge">Generate Code</span>
                                        <div class="textab-close-btn">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M18 6L6 18M6 6l12 12"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div id="code-action-content"></div>
                                    <div class="textab-popup-footer">
                                        <div class="textab-footer-hint">
                                            <span class="textab-key">esc</span>
                                            <span class="textab-footer-text" id="code-footer-text">cancel</span>
                                        </div>
                                        <div class="textab-result-actions" id="code-result-buttons" style="display: none;">
                                            <button class="textab-btn textab-btn-secondary">Copy</button>
                                            <button class="textab-btn textab-btn-primary" id="code-replace-btn">Insert</button>
                                        </div>
                                        <span class="textab-processing-text" id="code-processing-text">Processing...</span>
                                    </div>
                                </div>

                                <!-- Cursor -->
                                <div class="demo-cursor" id="code-cursor">
                                    <svg class="demo-cursor-pointer" width="19" height="25" viewBox="0 0 19 25" fill="none">
                                        <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                        <path d="M2 2L2 20L6.5 15.5L10 22L13 20.5L9.5 14L16 14L2 2Z" fill="black"/>
                                    </svg>
                                    <svg class="demo-cursor-text" width="10" height="16" viewBox="0 0 10 16" fill="none">
                                        <path d="M3 1H7M3 15H7M5 1V15" stroke="#fff" stroke-width="1" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </div>

                            <!-- Status Bar -->
                            <div class="vscode-statusbar">
                                <div class="vscode-statusbar-left">
                                    <span class="vscode-status-item">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687z"/>
                                        </svg>
                                        main
                                    </span>
                                </div>
                                <div class="vscode-statusbar-right">
                                    <span class="vscode-status-item">Ln 3, Col 1</span>
                                    <span class="vscode-status-item">UTF-8</span>
                                    <span class="vscode-status-item">JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shortcut Hint -->
                <div class="demo-shortcut" id="code-shortcut-hint">
                    <span class="textab-key" id="code-key-cmd">⌘</span>
                    <span class="textab-key" id="code-key-shift">⇧</span>
                    <span class="textab-key" id="code-key-space">Space</span>
                </div>
            </div>
        `;

        // Cache DOM elements
        this.codeComment = this.container.querySelector('#code-comment');
        this.highlight = this.container.querySelector('#code-highlight');
        this.mainPopup = this.container.querySelector('#code-main-popup');
        this.actionPopup = this.container.querySelector('#code-action-popup');
        this.actionContent = this.container.querySelector('#code-action-content');
        this.actionRow = this.container.querySelector('#code-action-generate');
        this.cursorEl = this.container.querySelector('#code-cursor');
        this.cursorPointer = this.cursorEl.querySelector('.demo-cursor-pointer');
        this.cursorText = this.cursorEl.querySelector('.demo-cursor-text');
        this.shortcutEl = this.container.querySelector('#code-shortcut-hint');
        this.keyCmd = this.container.querySelector('#code-key-cmd');
        this.keyShift = this.container.querySelector('#code-key-shift');
        this.keySpace = this.container.querySelector('#code-key-space');
        this.resultButtons = this.container.querySelector('#code-result-buttons');
        this.processingText = this.container.querySelector('#code-processing-text');
        this.footerText = this.container.querySelector('#code-footer-text');
        this.replaceBtn = this.container.querySelector('#code-replace-btn');
        this.codeArea = this.container.querySelector('.vscode-code-area');
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

        const pos = this.getRelativePosition(this.codeComment, this.codeArea);
        const commentLeft = pos.left;
        const commentTop = pos.top;
        const commentWidth = pos.width;
        const commentHeight = pos.height;

        // Show cursor
        this.cursorEl.classList.add('visible');
        this.showPointerCursor();
        this.cursorEl.style.left = '50px';
        this.cursorEl.style.top = '150px';
        await this.delay(400);

        // Move to comment line
        await this.animateCursor(commentLeft + 40, commentTop + commentHeight / 2, 400);
        await this.delay(200);

        // Change to text cursor
        this.showTextCursor();
        await this.delay(200);

        // Triple click to select line
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
        this.highlight.style.left = (commentLeft + 35) + 'px';
        this.highlight.style.top = commentTop + 'px';
        this.highlight.style.width = (commentWidth - 5) + 'px';
        this.highlight.style.height = commentHeight + 'px';
        this.highlight.classList.add('visible');
        this.codeComment.classList.add('selected');
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

        // Show main popup - centered in editor area
        this.mainPopup.style.top = (commentTop + commentHeight + 8) + 'px';
        this.mainPopup.style.left = '60px';
        this.mainPopup.classList.add('visible');
        await this.delay(600);

        // Move cursor to action
        const actionPos = this.getRelativePosition(this.actionRow, this.codeArea);
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

        this.actionPopup.style.top = (commentTop + commentHeight + 8) + 'px';
        this.actionPopup.style.left = '60px';
        this.actionPopup.classList.add('visible');

        this.cursorEl.classList.remove('visible');
        await this.delay(1600);

        // Show result with syntax highlighting - compact version
        this.actionContent.innerHTML = `
            <div class="textab-result-content">
                <div class="textab-result-text code-result"><span class="code-keyword">function</span> <span class="code-function">validateEmail</span>(<span class="code-variable">email</span>) { ... }</div>
            </div>
        `;
        this.resultButtons.style.display = 'flex';
        this.processingText.style.display = 'none';
        this.footerText.textContent = 'close';
        await this.delay(600);

        // Move cursor to Insert button
        this.cursorEl.classList.add('visible');
        const popupPos = this.getRelativePosition(this.actionPopup, this.codeArea);
        this.cursorEl.style.left = (popupPos.left + 50) + 'px';
        this.cursorEl.style.top = (popupPos.top + 50) + 'px';
        await this.delay(200);

        const btnPos = this.getRelativePosition(this.replaceBtn, this.codeArea);
        const targetX = btnPos.left + btnPos.width / 2 - 8;
        const targetY = btnPos.top + btnPos.height / 2 - 5;
        await this.animateCursor(targetX, targetY, 350);
        await this.delay(200);

        // Click Insert
        this.cursorEl.classList.add('clicking');
        this.replaceBtn.classList.add('clicking');
        await this.delay(150);
        this.cursorEl.classList.remove('clicking');
        this.replaceBtn.classList.remove('clicking');

        // Hide popup and update code
        await this.delay(100);
        this.actionPopup.classList.remove('visible');
        this.highlight.classList.remove('visible');
        await this.delay(250);

        // Update code with generated function
        this.codeComment.innerHTML = `
            <span class="code-keyword">function</span> <span class="code-function">validateEmail</span>(<span class="code-variable">email</span>) {
        `;
        this.codeComment.classList.remove('selected');
        this.codeComment.classList.add('generated');
        this.cursorEl.classList.remove('visible');
        await this.delay(2000);

        // Reset
        this.codeComment.classList.remove('generated');
        this.codeComment.innerHTML = `<span class="code-comment">${this.originalComment}</span>`;
    }

    resetState() {
        this.codeComment.innerHTML = `<span class="code-comment">${this.originalComment}</span>`;
        this.codeComment.classList.remove('selected', 'generated');
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
    const container = document.getElementById('demo-code');
    if (container) {
        new CodeDemo(container);
    }
    const containerMain = document.getElementById('demo-code-main');
    if (containerMain) {
        new CodeDemo(containerMain);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CodeDemo };
}
window.CodeDemo = CodeDemo;
