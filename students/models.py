from django.conf import settings
from django.db import models
from django.db import models
class Subject(models.Model):
    name = models.CharField(max_length=100)

    def _str_(self):
        return self.name 


class VideoLecture(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    youtube_id = models.CharField(max_length=50)

class Quiz(models.Model):
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    text = models.TextField()
    correct_answer = models.CharField(max_length=255)

from django.conf import settings
from django.db import models

class DiscussionPost(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,  # Use the custom user model
        on_delete=models.CASCADE,
        related_name="discussion_posts"
    )
    # Other fields...
