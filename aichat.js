// AI Chat Configuration
const API_ENDPOINT = 'https://stem-alive.vercel.app/response';
const MODEL = 'gemini-2.0-flash';
const USE_HISTORY = true;

let isWaitingForResponse = false;

function initAIChat(character, userId) {
    const aiHelpInput = document.getElementById('ai-help-input');
    const aiSendBtn = document.getElementById('ai-send-btn');
    const messagesContainer = document.getElementById('ai-messages');

    // Dynamic config based on character
    const CONFIG = `You are ${character}, the famous scientist. When helping with exercises:
    1. Guide the student toward the answer without giving it directly
    2. Ask probing questions to help them think critically
    3. Provide hints and explanations, not solutions
    4. Keep responses educational and concise`;

    function handleInputChange() {
        aiSendBtn.disabled = aiHelpInput.value.trim() === '' || isWaitingForResponse;
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!aiSendBtn.disabled) {
                handleSendMessage();
            }
        }
    }

    function handleSendMessage() {
        const message = aiHelpInput.value.trim();
        if (message === '' || isWaitingForResponse) return;
        
        addMessageToUI('user', message);
        aiHelpInput.value = '';
        isWaitingForResponse = true;
        aiSendBtn.disabled = true;
        
        addLoadingIndicator();
        sendToAPI(message, character, userId, CONFIG);
    }

    function addMessageToUI(role, content) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${role}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = `avatar ${role}-avatar`;
        const icon = document.createElement('i');
        icon.className = role === 'user' ? 'fas fa-user' : 'fas fa-robot';
        avatar.appendChild(icon);
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (role === 'assistant') {
            const nameDiv = document.createElement('div');
            nameDiv.className = 'character-name';
            nameDiv.textContent = character;
            messageContent.appendChild(nameDiv);
        }
        
        const textDiv = document.createElement('div');
        textDiv.textContent = content;
        messageContent.appendChild(textDiv);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        messagesContainer.appendChild(messageDiv);
        scrollToBottom();
    }

async function sendToAPI(message, character, userId) {
    try {
        // Simplified config that achieves the same goal without complex formatting
        const simpleConfig = `You are ${character}. Guide students without giving direct answers.  Provide hints and explanations, not solutions. If asked for answers,  respond "I'm here to help you learn, not give answers directly."`;
        
        const params = new URLSearchParams();
        params.append('prompt', message);
        params.append('model', MODEL);
        params.append('config', simpleConfig);
        params.append('character', character);
        params.append('use_history', USE_HISTORY);
        
        // Debug: Log the final URL
        console.log('Request URL:', `${API_ENDPOINT}?${params.toString()}`);
        
        const response = await fetch(`${API_ENDPOINT}?${params.toString()}`);
        
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.detail || `Request failed with status ${response.status}`);
        }

        const data = await response.json();
        
        removeLoadingIndicator();
        
        if (data?.response?.answer) {
            addMessageToUI('assistant', data.response.answer);
        } else {
            throw new Error('API returned an unexpected response format');
        }
        
    } catch (error) {
        console.error('API Error:', error);
        removeLoadingIndicator();
        addMessageToUI('assistant', `Sorry, I couldn't get a response. Please try again.`);
    } finally {
        isWaitingForResponse = false;
        handleInputChange();
    }
}

    // Loading indicator functions remain the same
    function addLoadingIndicator() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message assistant-message loading';
        loadingDiv.id = 'loading-indicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'avatar assistant-avatar';
        const icon = document.createElement('i');
        icon.className = 'fas fa-robot';
        avatar.appendChild(icon);
        
        const loadingContent = document.createElement('div');
        loadingContent.className = 'message-content';
        
        const dots = document.createElement('div');
        dots.className = 'loading-dots';
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dots.appendChild(dot);
        }
        loadingContent.appendChild(dots);
        
        loadingDiv.appendChild(avatar);
        loadingDiv.appendChild(loadingContent);
        messagesContainer.appendChild(loadingDiv);
        scrollToBottom();
    }

    function removeLoadingIndicator() {
        const indicator = document.getElementById('loading-indicator');
        if (indicator) indicator.remove();
    }

    function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Set up event listeners
    aiHelpInput.addEventListener('input', handleInputChange);
    aiHelpInput.addEventListener('keydown', handleKeyDown);
    aiSendBtn.addEventListener('click', handleSendMessage);

    // Initial setup
    handleInputChange();
}