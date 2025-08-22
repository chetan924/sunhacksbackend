from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SubjectViewSet, VideoLectureViewSet, QuizViewSet, QuestionViewSet, DiscussionPostViewSet

router = DefaultRouter()
router.register(r'subjects', SubjectViewSet)
router.register(r'videos', VideoLectureViewSet)
router.register(r'quizzes', QuizViewSet)
router.register(r'questions', QuestionViewSet)
router.register(r'discussions', DiscussionPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
]