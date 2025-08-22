from rest_framework import serializers
from .models import Subject, VideoLecture, Quiz, Question, DiscussionPost

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '_all_'

class VideoLectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoLecture
        fields = '_all_'

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '_all_'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '_all_'

class DiscussionPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = DiscussionPost
        fields = '_all_'
