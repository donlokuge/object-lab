# Object Lab

A comprehensive 3D scene management system built with NestJS and modern web technologies.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Nx CLI (optional but recommended)

### Installation

```bash
npm install
```

### Development

#### Start the API server

```bash
npx nx run @object-lab/demo-api:serve
```

#### Start the viewer application

```bash
npx nx run @object-lab/viewer:dev
```

#### Run tests

```bash
nx run @object-lab/demo-api:test
```

#### Create a new app

```bash
npx nx g @nx/nest:app packages/${appname}
```

## 📚 API Documentation

Interactive Swagger documentation is available at: **http://localhost:3000/api/docs**

### API Overview

- **Version**: 1.0
- **Base URL**: `/api`
- **Documentation Standard**: OpenAPI 3.0

### Available Endpoints

#### App Controller

- **GET** `/api` - Application health check

#### Scene Objects

- **GET** `/api/scene-objects` - Get all scene objects
- **POST** `/api/scene-objects` - Create a new scene object
- **GET** `/api/scene-objects/{id}` - Get scene object by ID
- **PUT** `/api/scene-objects/{id}` - Update scene object by ID
- **DELETE** `/api/scene-objects/{id}` - Delete scene object by ID

## 🏗️ Project Structure

```
object-lab/
├── packages/
│   ├── demo-api/          # NestJS API server
│   └── viewer/            # Frontend viewer application
├── README.md
└── package.json
```

## 🛠️ Development Commands

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run serve`      | Start the demo API server            |
| `npm run dev`        | Start the viewer in development mode |
| `npm run test`       | Run API tests                        |
| `npm run create-app` | Generate a new NestJS application    |


## 🔧 Configuration

The API server runs on port 3000 by default. You can override this by setting the `PORT` environment variable:

```bash
PORT=8080 npx nx run @object-lab/demo-api:serve
```

## 📖 API Usage Examples

### Get all scene objects

```bash
curl http://localhost:3000/api/scene-objects
```

### Create a new scene object

```bash
curl -X POST http://localhost:3000/api/scene-objects \
  -H "Content-Type: application/json" \
  -d '{"name": "Cube", "position": {"x": 0, "y": 0, "z": 0}}'
```

### Get a specific scene object

```bash
curl http://localhost:3000/api/scene-objects/1
```
## 📄 License

This project is licensed under the MIT License.
