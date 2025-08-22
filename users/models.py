from django.contrib.auth.models import AbstractUser, Group, Permission
from django.db import models

class CustomUser(AbstractUser):
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to="profile_pics/", blank=True, null=True)

    groups = models.ManyToManyField(
        Group,
        related_name="customuser_set",  # Add a unique related_name
        blank=True,
        help_text="The groups this user belongs to.",
        verbose_name="groups",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name="customuser_set",  # Add a unique related_name
        blank=True,
        help_text="Specific permissions for this user.",
        verbose_name="user permissions",
    )