from django.db import models
from PIL import Image
import io
from django.core.exceptions import ValidationError
def validate_min_length(value):
    if len(value) < 100:
        raise ValidationError('The value must be at least 100 characters long.')
class service(models.Model):
    service_name=models.CharField(max_length=255)
    service_description=models.CharField(max_length=255,validators=[validate_min_length])
    service_icon=models.CharField(max_length=25)

    def __str__(self):
     return self.service_name

# Create your models here.
class about_company(models.Model):
    title=models.CharField(max_length=250)
    description=models.TextField(max_length=1000)
    image=models.ImageField(upload_to='projects/')
    def save(self, *args, **kwargs):
        # Open the image using Pillow
        image = Image.open(self.image)

        # resize the image to the desired dimensions
        image = image.resize(( 400, 400))

        # Save the cropped image to a buffer
        buffer = io.BytesIO()
        image.save(buffer, 'JPEG')
        buffer.seek(0)

        # Save the buffer to the ImageField
        self.image.save(self.image.name, buffer, save=False)

        # Save the rest of the model
        super().save(*args, **kwargs)
    def __str__ (self):
     return self.title;


class Our_team(models.Model):
    Name=models.CharField(max_length=100)
    Role=models.CharField(max_length=50)
    image=models.ImageField(upload_to='projects/')
    fb=models.CharField(max_length=200,null=True,blank=True)
    linkedin=models.CharField(max_length=100,null=True,blank=True)

    def save(self, *args, **kwargs):
        # Open the image using Pillow
        image = Image.open(self.image)

        # resize the image to the desired dimensions
        image = image.resize((400, 400))

        # Save the cropped image to a buffer
        buffer = io.BytesIO()
        image.save(buffer, 'JPEG')
        buffer.seek(0)

        # Save the buffer to the ImageField
        self.image.save(self.image.name, buffer, save=False)

        # Save the rest of the model
        super().save(*args, **kwargs)

    def __str__(self):
        return self.Name;
class testimony(models.Model):
    name=models.CharField(max_length=100)
    image=models.ImageField(upload_to='projects/')
    comments=models.CharField(max_length=1000)

    def save(self, *args, **kwargs):
        # Open the image using Pillow
        image = Image.open(self.image)

        # resize the image to the desired dimensions
        image = image.resize((81, 81))

        # Save the cropped image to a buffer
        buffer = io.BytesIO()
        image.save(buffer, 'JPEG')
        buffer.seek(0)

        # Save the buffer to the ImageField
        self.image.save(self.image.name, buffer, save=False)

        # Save the rest of the model
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name;



