# API Documentation — DSRT App

Base URL:

/api

## Endpoints

### 1. Health Check

GET /api/health

Response:
```json
{ "status": "ok", "uptime": 12345 }

2. Background Removal (planned)

POST /api/remove-bg

Request:

{ "imageUrl": "https://example.com/photo.jpg" }

Response:

{ "success": true, "resultUrl": "https://cdn.dsrt.io/output/photo-nobg.png" }

3. Photo Optimization (planned)

POST /api/photo/optimize

4. Video Editing (planned)

POST /api/video/edit

5. Logo Export (planned)

POST /api/logo/export
