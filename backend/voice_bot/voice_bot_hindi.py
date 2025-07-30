import speech_recognition as sr
from gtts import gTTS
import pygame
import time
import os
import random

# Initialize pygame mixer once
pygame.mixer.init()


def speak_hindi(text):
    try:
        # Cache small segments to avoid repeated TTS generation
        segments = [seg.strip() for seg in text.split('।') if seg.strip()]
        for seg in segments:
            sentence = seg + '।'
            filename = f"cache_{hash(sentence)}.mp3"
            if not os.path.exists(filename):
                tts = gTTS(text=sentence, lang='hi')
                tts.save(filename)
            pygame.mixer.music.load(filename)
            pygame.mixer.music.play()
            while pygame.mixer.music.get_busy():
                time.sleep(0.01)
            time.sleep(0.1)
    except Exception as e:
        print(f"⚠️ Voice Error: {e}")


def listen_hindi(timeout=5, phrase_time_limit=7):
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source, duration=0.5)
        print("सुन रहा हूँ...")
        try:
            audio = r.listen(source, timeout=timeout, phrase_time_limit=phrase_time_limit)
        except sr.WaitTimeoutError:
            speak_hindi("आपने कुछ नहीं कहा, कृपया फिर से प्रयास करें।")
            return None

    try:
        text = r.recognize_google(audio, language="hi-IN")
        print(f"आपने कहा: {text}")
        return text
    except (sr.UnknownValueError, sr.RequestError) as e:
        speak_hindi("खेद है, समस्या हुई। कृपया पुनः प्रयास करें।")
        return None
