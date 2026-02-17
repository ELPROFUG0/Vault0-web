/* ============================================
   Tweet Improvement Demo - TexTab Feature Demo
   ============================================ */

class TweetDemo {
    constructor(container) {
        this.container = container;
        this.originalTweet = "just launched my new app its pretty cool i think people will like it alot";
        this.improvedTweet = "Just dropped something I've been working on for months 👀\n\nIt's finally here. And honestly? I think you're gonna love it 🚀";
        this.init();
    }

    init() {
        this.render();
        this.startAnimation();
    }

    render() {
        this.container.innerHTML = `
            <div class="fd-container">
                <div class="demo-window tweet-demo">
                    <div class="demo-browser-bar">
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-dot"></div>
                        <div class="demo-url">x.com/compose/post</div>
                    </div>
                    <div class="demo-content tweet-composer">
                        <!-- X/Twitter Compose UI -->
                        <div class="tweet-header">
                            <div class="tweet-avatar">
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="20" fill="#1DA1F2"/>
                                    <circle cx="20" cy="16" r="8" fill="white"/>
                                    <ellipse cx="20" cy="34" rx="12" ry="10" fill="white"/>
                                </svg>
                            </div>
                            <div class="tweet-audience">
                                <span class="tweet-audience-text">Everyone</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7 10l5 5 5-5z"/>
                                </svg>
                            </div>
                        </div>

                        <div class="tweet-input-area">
                            <p class="tweet-text" id="tweet-text">${this.originalTweet}</p>
                        </div>

                        <!-- Selection highlight -->
                        <div class="demo-highlight tweet-highlight" id="tweet-highlight"></div>

                        <div class="tweet-toolbar">
                            <div class="tweet-tools">
                                <button class="tweet-tool-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"/>
                                        <circle cx="8.868" cy="8.309" r="1.868"/>
                                    </svg>
                                </button>
                                <button class="tweet-tool-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 10.5V8.8h-4.4v6.4h1.7v-2h2v-1.7h-2v-1H19zm-7.3-1.7h1.7v6.4h-1.7V8.8zm-3.6 1.6c.4 0 .9.2 1.2.5l1.2-1C9.9 9.2 9 8.8 8.1 8.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2c1 0 1.8-.4 2.4-1.1v-2.5H7.7v1.2h1.2v.6c-.2.1-.5.2-.8.2-.9 0-1.6-.7-1.6-1.6 0-.8.7-1.6 1.6-1.6z"/>
                                    </svg>
                                </button>
                                <button class="tweet-tool-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                        <path d="M14.829 14.828c-.39.39-.39 1.024 0 1.414.195.196.45.293.707.293.256 0 .512-.097.707-.293 1.602-1.602 1.602-4.209 0-5.811l-1.414-1.414c-.39-.39-1.024-.39-1.414 0s-.39 1.024 0 1.414l1.414 1.414c.781.781.781 2.047 0 2.828z"/>
                                    </svg>
                                </button>
                                <button class="tweet-tool-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-4.078-1.18-4.401-2.774-.149-.739.407-1.226 1.002-1.226h6.798c.595 0 1.151.487 1.002 1.226C16.078 14.82 14.224 16 12 16z"/>
                                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-2c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                                    </svg>
                                </button>
                                <button class="tweet-tool-btn">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6 3v18h12V3H6zm10.5 14.25h-1.578c-.156 0-.293-.08-.37-.21l-.99-1.654-.992 1.654c-.076.13-.214.21-.369.21H10.5v-1.5h1.086l1.383-2.327-1.326-2.173H10.5V9.75h1.578c.156 0 .293.08.37.21l.927 1.58.928-1.58c.077-.13.214-.21.37-.21H16.5v1.5h-1.142l-1.269 2.17 1.381 2.33H16.5v1.5z"/>
                                    </svg>
                                </button>
                            </div>
                            <div class="tweet-actions">
                                <span class="tweet-char-count">280</span>
                                <button class="tweet-post-btn">Post</button>
                            </div>
                        </div>

                        <!-- TexTab Main Popup -->
                        <div class="textab-popup" id="tweet-main-popup">
                            <div class="textab-search">
                                <svg class="textab-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="M21 21l-4.35-4.35"/>
                                </svg>
                                <input type="text" class="textab-search-input" placeholder="Search actions..." readonly>
                            </div>
                            <div class="textab-actions-list">
                                <div class="textab-action-row" id="tweet-action-improve">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                    </svg>
                                    <span class="textab-action-name">Improve Writing</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">I</span>
                                    </div>
                                </div>
                                <div class="textab-action-row selected" id="tweet-action-tweet">
                                    <svg class="textab-action-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                                    </svg>
                                    <span class="textab-action-name">Make it a Tweet</span>
                                    <div class="textab-action-shortcut">
                                        <span class="textab-key">⌘</span>
                                        <span class="textab-key">T</span>
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
                        <div class="textab-popup expanded" id="tweet-action-popup">
                            <div class="textab-popup-header">
                                <span class="textab-action-badge" id="tweet-action-badge">Make it a Tweet</span>
                                <div class="textab-close-btn">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M18 6L6 18M6 6l12 12"/>
                                    </svg>
                                </div>
                            </div>
                            <div id="tweet-action-content"></div>
                            <div class="textab-popup-footer">
                                <div class="textab-footer-hint">
                                    <span class="textab-key">esc</span>
                                    <span class="textab-footer-text" id="tweet-footer-text">cancel</span>
                                </div>
                                <div class="textab-result-actions" id="tweet-result-buttons" style="display: none;">
                                    <button class="textab-btn textab-btn-secondary">Copy</button>
                                    <button class="textab-btn textab-btn-primary" id="tweet-replace-btn">Replace</button>
                                </div>
                                <span class="textab-processing-text" id="tweet-processing-text">Processing...</span>
                            </div>
                        </div>

                        <!-- Cursor -->
                        <div class="demo-cursor" id="tweet-cursor">
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
                <div class="demo-shortcut" id="tweet-shortcut-hint">
                    <span class="textab-key" id="tweet-key-cmd">⌘</span>
                    <span class="textab-key" id="tweet-key-shift">⇧</span>
                    <span class="textab-key" id="tweet-key-space">Space</span>
                </div>
            </div>
        `;

        // Cache DOM elements
        this.tweetText = this.container.querySelector('#tweet-text');
        this.highlight = this.container.querySelector('#tweet-highlight');
        this.mainPopup = this.container.querySelector('#tweet-main-popup');
        this.actionPopup = this.container.querySelector('#tweet-action-popup');
        this.actionContent = this.container.querySelector('#tweet-action-content');
        this.actionRow = this.container.querySelector('#tweet-action-tweet');
        this.cursorEl = this.container.querySelector('#tweet-cursor');
        this.cursorPointer = this.cursorEl.querySelector('.demo-cursor-pointer');
        this.cursorText = this.cursorEl.querySelector('.demo-cursor-text');
        this.shortcutEl = this.container.querySelector('#tweet-shortcut-hint');
        this.keyCmd = this.container.querySelector('#tweet-key-cmd');
        this.keyShift = this.container.querySelector('#tweet-key-shift');
        this.keySpace = this.container.querySelector('#tweet-key-space');
        this.resultButtons = this.container.querySelector('#tweet-result-buttons');
        this.processingText = this.container.querySelector('#tweet-processing-text');
        this.footerText = this.container.querySelector('#tweet-footer-text');
        this.replaceBtn = this.container.querySelector('#tweet-replace-btn');
        this.charCount = this.container.querySelector('.tweet-char-count');
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
        const pos = this.getRelativePosition(this.tweetText, demoContent);
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
        this.tweetText.classList.add('selected');
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
        this.mainPopup.style.top = (textTop + textHeight + 15) + 'px';
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

        this.actionPopup.style.top = (textTop + textHeight + 15) + 'px';
        this.actionPopup.style.left = textLeft + 'px';
        this.actionPopup.classList.add('visible');

        this.cursorEl.classList.remove('visible');
        await this.delay(1400);

        // Show result
        this.actionContent.innerHTML = `
            <div class="textab-result-content">
                <div class="textab-result-text">${this.improvedTweet}</div>
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

        // Update tweet text
        this.tweetText.textContent = this.improvedTweet;
        this.tweetText.classList.remove('selected');
        this.tweetText.classList.add('improved');
        this.charCount.textContent = (280 - this.improvedTweet.length).toString();
        this.cursorEl.classList.remove('visible');
        await this.delay(1500);

        // Reset
        this.tweetText.classList.remove('improved');
        this.tweetText.textContent = this.originalTweet;
        this.charCount.textContent = '280';
    }

    resetState() {
        this.tweetText.textContent = this.originalTweet;
        this.tweetText.classList.remove('selected', 'improved');
        this.highlight.classList.remove('visible');
        this.mainPopup.classList.remove('visible');
        this.actionPopup.classList.remove('visible');
        this.shortcutEl.classList.remove('visible');
        this.cursorEl.classList.remove('visible', 'clicking');
        this.showPointerCursor();
        this.actionContent.innerHTML = '';
        this.resultButtons.style.display = 'none';
        this.processingText.style.display = 'block';
        this.charCount.textContent = '280';
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
    const container = document.getElementById('demo-tweet');
    if (container) {
        new TweetDemo(container);
    }
    const containerMain = document.getElementById('demo-tweet-main');
    if (containerMain) {
        new TweetDemo(containerMain);
    }
});

// Export for module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TweetDemo };
}
window.TweetDemo = TweetDemo;
