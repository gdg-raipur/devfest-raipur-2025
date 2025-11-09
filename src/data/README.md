# Event Data Configuration

This directory contains the event data in JSON format, making it easy to update event information without changing any code.

## Files

### event.json

Contains all event-related data including:
- Event information (name, date, location)
- SEO metadata for all pages
- Speakers list with images
- Team members list

## How to Update Data

### Updating Event Information

Edit the `event` section in `event.json`:

```json
{
  "event": {
    "name": "DevFest Raipur 2025",
    "tagline": "Join the Celebration of the Google Developer Group",
    "date": "Saturday, November 15, 2025",
    "location": "International Institute of Information Technology, Naya Raipur",
    "description": "..."
  }
}
```

### Updating SEO Tags

Edit the `seo` section for each page:

```json
{
  "seo": {
    "home": {
      "title": "Page Title",
      "description": "Page description",
      "keywords": "keyword1, keyword2",
      ...
    }
  }
}
```

### Adding/Updating Mentors

Add mentor objects to the `mentors` array:

```json
{
  "mentors": [
    {
      "id": 1,
      "name": "Mentor Name",
      "title": "Mentor",
      "bio": "Short biography",
      "image": "https://example.com/image.jpg",
      "social": {
        "twitter": "https://twitter.com/username",
        "instagram": "https://instagram.com/username",
        "linkedin": "https://linkedin.com/in/username"
      }
    }
  ]
}
```

### Adding/Updating Speakers

Add speaker objects to the `speakers` array:

```json
{
  "speakers": [
    {
      "id": 1,
      "name": "Speaker Name",
      "title": "Speaker",
      "bio": "Short biography",
      "image": "https://example.com/image.jpg",
      "social": {
        "twitter": "https://twitter.com/username",
        "instagram": "https://instagram.com/username",
        "linkedin": "https://linkedin.com/in/username"
      }
    }
  ]
}
```

### Adding/Updating Team Members

Add team member objects to the `team` array:

```json
{
  "team": [
    {
      "id": 1,
      "name": "Team Member Name",
      "role": "Role/Position",
      "bio": "Short biography",
      "image": "/images/team/member.jpg",
      "social": {
        "twitter": "https://twitter.com/username",
        "instagram": "https://instagram.com/username",
        "linkedin": "https://linkedin.com/in/username"
      }
    }
  ]
}
```

### Event Social Media

The event organization's social media links:

```json
{
  "event": {
    ...
    "social": {
      "twitter": "https://twitter.com/gdgraipur",
      "instagram": "https://instagram.com/gdgraipur",
      "linkedin": "https://www.linkedin.com/company/gdg-raipur/"
    }
  }
}
```

## Notes

- Mentor and speaker images are hosted on Cloudinary (from GDG event page)
- Team member images should be placed in `/public/images/team/`
- All IDs should be unique within their respective arrays
- Social media links can be left empty ("") if not available
- Mentors section appears before speakers section on the speakers page
