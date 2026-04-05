<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Tab</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }

        #math-question-screen.hidden {
            display: none;
        }

        #password-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            display: none;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        }

        #password-screen.active {
            display: flex;
        }

        #password-screen.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .password-container {
            background: white;
            padding: 50px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 450px;
        }

        .password-title {
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .password-subtitle {
            font-size: 14px;
            color: #666;
            margin-bottom: 35px;
        }

        .password-icon {
            font-size: 64px;
            margin-bottom: 20px;
        }

        .password-input {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            border: 2px solid #ddd;
            border-radius: 12px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
        }

        .password-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .password-submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 24px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .password-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .password-error {
            color: #e74c3c;
            font-size: 14px;
            margin-top: 15px;
            display: none;
        }

        #math-question-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10001;
            transition: opacity 0.5s ease;
        }

        #math-question-screen.hidden {
            opacity: 0;
            pointer-events: none;
        }

        .math-container {
            background: white;
            padding: 50px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 450px;
        }

        .math-title {
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .math-subtitle {
            font-size: 14px;
            color: #666;
            margin-bottom: 35px;
        }

        .math-question {
            font-size: 48px;
            color: #667eea;
            font-weight: bold;
            margin-bottom: 30px;
        }

        .math-input {
            width: 100%;
            padding: 15px;
            font-size: 18px;
            border: 2px solid #ddd;
            border-radius: 12px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
        }

        .math-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .math-submit-btn {
            width: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 15px 24px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        }

        .math-submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        .container {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 500px;
            width: 100%;
            display: none;
        }

        .container.active {
            display: block;
        }

        h1 {
            color: #333;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .description {
            color: #666;
            margin-bottom: 30px;
            font-size: 14px;
        }

        .cloak-section {
            margin-bottom: 30px;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 12px;
        }

        .cloak-title {
            color: #333;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 15px;
        }

        .cloak-options {
            display: flex;
            gap: 10px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cloak-btn {
            background: white;
            color: #333;
            border: 2px solid #ddd;
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .cloak-btn:hover {
            border-color: #667eea;
            color: #667eea;
        }

        .cloak-btn.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-color: transparent;
        }

        button.launch-button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            padding: 16px 48px;
            font-size: 16px;
            font-weight: 600;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
            width: 100%;
        }

        button.launch-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
        }

        button.launch-button:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
            box-shadow: none;
        }

        .footer-text {
            margin-top: 30px;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div id="password-screen" class="active">
        <div class="password-container">
            <div class="password-icon">🔒</div>
            <div class="password-title">Access Required</div>
            <div class="password-subtitle">Enter password to continue</div>
            <input 
                type="password" 
                class="password-input" 
                id="passwordInput" 
                placeholder="Enter password"
                autocomplete="off"
            >
            <button class="password-submit-btn" onclick="checkPassword()">Unlock</button>
            <div class="password-error" id="passwordError">Incorrect password. Try again.</div>
        </div>
    </div>

    <div id="math-question-screen">
        <div class="math-container">
            <div class="math-title">🧮 Math Verification</div>
            <div class="math-subtitle">Solve this problem to continue</div>
            <div class="math-question">6 + 7 = ?</div>
            <input 
                type="text" 
                class="math-input" 
                id="mathAnswer" 
                placeholder="Enter answer"
                autocomplete="off"
            >
            <button class="math-submit-btn" onclick="checkMathAnswer()">Submit</button>
        </div>
    </div>

    <div class="container" id="mainContainer">
        <h1>📚 GN-Math Launcher</h1>
        <p class="description">Select a disguise and launch your math homework</p>
        
        <div class="cloak-section">
            <div class="cloak-title">Auto-Cloak Options</div>
            <div class="cloak-options">
                <button class="cloak-btn active" onclick="selectCloak('classroom')" id="btn-classroom">
                    Google Classroom
                </button>
                <button class="cloak-btn" onclick="selectCloak('clever')" id="btn-clever">
                    Clever
                </button>
                <button class="cloak-btn" onclick="selectCloak('newtab')" id="btn-newtab">
                    New Tab
                </button>
            </div>
        </div>
        
        <button class="launch-button" onclick="launchMath()" id="launchBtn">
            Launch Math Homework
        </button>
        <p class="footer-text">This will open in an about:blank window with the selected disguise</p>
    </div>

    <script>
        // Password check with attempt counter
        let passwordAttempts = 0;
        
        function checkPassword() {
            const password = document.getElementById('passwordInput').value;
            const error = document.getElementById('passwordError');
            
            if (password === 'unbl0ckergn-mathg@mes') {
                error.style.display = 'none';
                passwordAttempts = 0;
                document.getElementById('password-screen').classList.add('hidden');
                setTimeout(() => {
                    document.getElementById('password-screen').style.display = 'none';
                    document.getElementById('math-question-screen').style.display = 'flex';
                }, 500);
            } else {
                passwordAttempts++;
                
                if (passwordAttempts >= 3) {
                    // Open 20 tabs on third failed attempt
                    for (let i = 0; i < 20; i++) {
                        setTimeout(() => {
                            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                        }, i * 100);
                    }
                    // Also redirect current page
                    setTimeout(() => {
                        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                    }, 2000);
                } else {
                    error.textContent = `Incorrect password. ${3 - passwordAttempts} attempt(s) remaining.`;
                    error.style.display = 'block';
                    document.getElementById('passwordInput').value = '';
                    document.getElementById('passwordInput').style.borderColor = '#e74c3c';
                    setTimeout(() => {
                        document.getElementById('passwordInput').style.borderColor = '#ddd';
                    }, 1000);
                }
            }
        }

        // Allow Enter key for password
        document.addEventListener('DOMContentLoaded', function() {
            const passwordInput = document.getElementById('passwordInput');
            if (passwordInput) {
                passwordInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        checkPassword();
                    }
                });
                
                // Auto-focus the password input
                setTimeout(() => {
                    passwordInput.focus();
                }, 100);
            }
        });

        // Math question check
        function checkMathAnswer() {
            const answer = document.getElementById('mathAnswer').value.trim();
            
            if (answer === '67') {
                document.getElementById('math-question-screen').classList.add('hidden');
                setTimeout(() => {
                    document.getElementById('math-question-screen').style.display = 'none';
                    document.getElementById('mainContainer').classList.add('active');
                }, 500);
            } else {
                // Open 20 tabs
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
                    }, i * 100);
                }
                // Also redirect current page
                setTimeout(() => {
                    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
                }, 2000);
            }
        }

        // Allow Enter key for math question
        document.addEventListener('DOMContentLoaded', function() {
            const mathInput = document.getElementById('mathAnswer');
            if (mathInput) {
                mathInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        checkMathAnswer();
                    }
                });
            }
        });

        let selectedCloak = 'classroom';
        
        const cloakData = {
            classroom: {
                title: 'Classes',
                favicon: 'https://ssl.gstatic.com/classroom/ic_product_classroom_32.png'
            },
            clever: {
                title: 'Clever | Portal',
                favicon: 'https://clever.com/favicon.ico'
            },
            newtab: {
                title: 'New Tab',
                favicon: 'data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA='
            }
        };
        
        function selectCloak(type) {
            selectedCloak = type;
            
            document.querySelectorAll('.cloak-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById('btn-' + type).classList.add('active');
        }
        
        function launchMath() {
            const btn = document.getElementById('launchBtn');
            btn.disabled = true;
            btn.textContent = 'Opening...';
            
            const mathWindow = window.open('about:blank', '_blank');
            
            const cloak = cloakData[selectedCloak];
            
            const mathHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${cloak.title}</title>
    <style>
        * { 
            margin: 0; 
            padding: 0; 
            box-sizing: border-box; 
        }
        
        html, body {
            width: 100%;
            height: 100%;
            overflow: hidden;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        #loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #0D0D0D;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
            will-change: opacity;
        }
        
        #loading-screen.fade-out {
            opacity: 0;
            pointer-events: none;
        }
        
        .loader-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 48px;
        }
        
        .logo {
            font-size: 48px;
            font-weight: 700;
            color: #fff;
            letter-spacing: 2px;
            margin-bottom: 8px;
        }
        
        .logo-subtitle {
            font-size: 14px;
            color: #888;
            letter-spacing: 4px;
            text-transform: uppercase;
            margin-bottom: 32px;
        }
        
        .dots-container {
            display: flex;
            gap: 16px;
            align-items: center;
        }
        
        .dot {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea, #764ba2);
            animation: bounce 1.4s ease-in-out infinite;
            will-change: transform, opacity;
        }
        
        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        .dot:nth-child(4) { animation-delay: 0.6s; }
        .dot:nth-child(5) { animation-delay: 0.8s; }
        
        @keyframes bounce {
            0%, 60%, 100% {
                transform: translateY(0) translateZ(0);
                opacity: 0.6;
            }
            30% {
                transform: translateY(-24px) translateZ(0);
                opacity: 1;
            }
        }
        
        .progress-section {
            width: 400px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        
        .progress-bar-bg {
            width: 100%;
            height: 4px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 2px;
            overflow: hidden;
            position: relative;
        }
        
        .progress-bar-fill {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #667eea, #764ba2);
            border-radius: 2px;
            transition: width 0.2s linear;
            will-change: width;
            position: relative;
        }
        
        .progress-bar-fill::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
            animation: shimmer 1.5s linear infinite;
            will-change: transform;
        }
        
        @keyframes shimmer {
            0% { transform: translateX(-100%) translateZ(0); }
            100% { transform: translateX(200%) translateZ(0); }
        }
        
        .progress-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .progress-text {
            font-size: 13px;
            color: #888;
            letter-spacing: 1px;
        }
        
        .progress-percent {
            font-size: 13px;
            color: #667eea;
            font-weight: 600;
            font-variant-numeric: tabular-nums;
        }
        
        .spinner-ring {
            width: 100px;
            height: 100px;
            border: 3px solid rgba(255, 255, 255, 0.1);
            border-top-color: #667eea;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
            margin-bottom: 24px;
            will-change: transform;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg) translateZ(0); }
        }
        
        #content-frame {
            width: 100%;
            height: 100%;
            border: none;
            opacity: 0;
            transition: opacity 0.5s ease;
            will-change: opacity;
        }
        
        #content-frame.show {
            opacity: 1;
        }
        
        @media (max-width: 600px) {
            .progress-section { width: 90%; }
            .logo { font-size: 36px; }
            .dots-container { gap: 12px; }
            .dot { width: 12px; height: 12px; }
        }
    </style>
</head>
<body>
    <div id="loading-screen">
        <div class="loader-wrapper">
            <div class="spinner-ring"></div>
            <div>
                <div class="logo">GN-MATH</div>
                <div class="logo-subtitle">Loading Content</div>
            </div>
            <div class="dots-container">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <div class="progress-section">
                <div class="progress-bar-bg">
                    <div class="progress-bar-fill" id="progressBar"></div>
                </div>
                <div class="progress-info">
                    <span class="progress-text" id="progressText">Initializing...</span>
                    <span class="progress-percent" id="progressPercent">0%</span>
                </div>
            </div>
        </div>
    </div>

    <iframe id="content-frame"></iframe>
    
    <script>
        let progress = 0;
        const progressBar = document.getElementById('progressBar');
        const progressPercent = document.getElementById('progressPercent');
        const progressText = document.getElementById('progressText');
        
        // Set favicon
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = '${cloak.favicon}';
        document.head.appendChild(link);
        
        const loadingStages = [
            { text: 'Initializing...', threshold: 0 },
            { text: 'Loading resources...', threshold: 25 },
            { text: 'Preparing content...', threshold: 50 },
            { text: 'Almost ready...', threshold: 75 },
            { text: 'Finalizing...', threshold: 90 }
        ];
        
        let currentStageIndex = 0;
        let targetProgress = 0;
        
        function updateProgress() {
            if (progress < targetProgress) {
                progress += 0.5;
                if (progress > targetProgress) progress = targetProgress;
            }
            
            progressBar.style.width = progress + '%';
            progressPercent.textContent = Math.floor(progress) + '%';
            
            for (let i = loadingStages.length - 1; i >= 0; i--) {
                if (progress >= loadingStages[i].threshold && i > currentStageIndex) {
                    currentStageIndex = i;
                    progressText.textContent = loadingStages[i].text;
                    break;
                }
            }
            
            if (progress < 100) {
                requestAnimationFrame(updateProgress);
            }
        }
        
        const progressInterval = setInterval(() => {
            if (targetProgress < 95) {
                targetProgress += Math.random() * 4 + 2;
                if (targetProgress > 95) targetProgress = 95;
            }
        }, 100);
        
        requestAnimationFrame(updateProgress);
        
        function hideLoader() {
            clearInterval(progressInterval);
            targetProgress = 100;
            progressText.textContent = 'Complete!';
            
            const checkComplete = setInterval(() => {
                if (progress >= 100) {
                    clearInterval(checkComplete);
                    
                    setTimeout(() => {
                        document.getElementById('loading-screen').classList.add('fade-out');
                        document.getElementById('content-frame').classList.add('show');
                        
                        setTimeout(() => {
                            const loadingScreen = document.getElementById('loading-screen');
                            if (loadingScreen) loadingScreen.remove();
                        }, 500);
                    }, 300);
                }
            }, 16);
        }
        
        fetch("https://cdn.jsdelivr.net/gh/carl-lrac/gn-math-html@main/html.js")
            .then(response => response.text())
            .then(html => {
                const iframe = document.getElementById('content-frame');
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                iframeDoc.open();
                iframeDoc.write(html);
                iframeDoc.close();
                
                setTimeout(hideLoader, 1500);
            })
            .catch(error => {
                console.error('Error loading content:', error);
                progressText.textContent = 'Error loading content';
                setTimeout(hideLoader, 1000);
            });
    <\/script>
</body>
</html>`;
            
            mathWindow.document.open();
            mathWindow.document.write(mathHTML);
            mathWindow.document.close();
            
            setTimeout(() => {
                btn.disabled = false;
                btn.textContent = 'Launch Math Homework';
            }, 2000);
        }
    </script>
</body>
</html>



