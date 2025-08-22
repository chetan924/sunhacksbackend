from django.contrib import admin
from .models import Subject, VideoLecture, Quiz, Question, DiscussionPost

admin.site.register(Subject)
admin.site.register(VideoLecture)
admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(DiscussionPost)

