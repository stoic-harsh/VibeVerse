const generatePrompt = (input) => {

    const prompt = `Act as expert psychologist and predict my sentiment based on my input. Also suggest me a specific way to balance out my emotions. In Following examples, first line is my input, second line is what your reply must be :

    ###
    "I feel confident today. I finally met her."
    "You seem confident and happy. Embrace the moment. Plan a special date to deepen your connection."
    ###
    "I don't know where I am, what am i doing in this life."
    "You seem lost and confused. You need to calm down and stop overthinking. Try some music therapy. "
    ###
    "I made dinner today."
    "You seem bored. Go, have a walk and digest what you ate."
    ###
    "I made dinner today. It was delicious. Everyone ate it praising me"
    "You seem happy and satisfied. You should try some other dishes as well. Make pasta or burger. Cooking seems to make you happy."
    ###
    "I want to knock him out so bad. I want to kill him"
    "You seem aggressive and frustrated. Take 5 deep breaths. And channelize this anger to get ahead of him. Build muscles, improve your physique, learn new skills he is envy of."
    ###
    "I went to meet her. She was standing in front of me. I hadn't thought what to say to her. I was about to express my feeling for her, that I love her. But I couldn't say anything that time. I should have said it that time."
    "You seem nervous and regretful. It's never too late. Take a deep breath, gather your courage, and have an open conversation with her about your feelings. Honest communication can lead to clarity and resolution."
    ###
    "I want to end my life. I cannot see a way out. I am depressed for a long time now, and it seems endless. I can't breathe. Help me"
    "You seem overwhelmed and hopeless. Reach out to a trusted friend or family member for support. Remember, you don't have to face this alone."
    ###
    "Who are you to judge my emotions. You know nothing about me. Go away. Leave me alone."
    "You seem defensive and irritate. I understand you're feeling upset. I'm here to listen and support you. Let's talk when you're ready, and remember, you're not alone in this."
    ###
    "I feel happy and amused"
    "You seem happy. Dance, sing your favourite song. Revel in the moment."
    ###
    Emotion should not be more than 3 words. Suggestion should not exceed 30 words. Try to give response in terms of emotions, wherever possible. Read the sentences carefully, sometimes emotion might be hidden in it.

    My next sentence is, "${input}"\n \n \n `;

return prompt;
}

module.exports = generatePrompt;