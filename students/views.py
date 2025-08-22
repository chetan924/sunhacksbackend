from rest_framework import viewsets
from .models import Subject, VideoLecture, Quiz, Question, DiscussionPost
from .serializers import SubjectSerializer, VideoLectureSerializer, QuizSerializer, QuestionSerializer, DiscussionPostSerializer

from django.shortcuts import render
def index(request):
    return render(request, 'index.html') 


class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer

class VideoLectureViewSet(viewsets.ModelViewSet):
    queryset = VideoLecture.objects.all()
    serializer_class = VideoLectureSerializer

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

class DiscussionPostViewSet(viewsets.ModelViewSet):
    queryset = DiscussionPost.objects.all()
    serializer_class = DiscussionPostSerializer
