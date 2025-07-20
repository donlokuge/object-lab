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

### Running the Application

#### 1. Start the API Server
```bash
make serve
```
**or**
```bash
npx nx run @object-lab/demo-api:serve
```

The API server will start on **http://localhost:3000**

#### 2. Start the Client Application
```bash
make run
```
**or**
```bash
npx nx run @object-lab/viewer:dev
```

The client application will be available at **http://localhost:4200**

### Development Workflow

1. **Install dependencies**: `npm install`
2. **Start the server**: `make serve` (runs on port 3000)
3. **Start the client**: `make run` (runs on port 4200)
4. **Navigate to**: http://localhost:4200

### Testing

```bash
nx run @object-lab/demo-api:test
```

### Create New Application

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
│   ├── api-client/        # API client for the demo
│   └── viewer/            # Frontend viewer application
├── Makefile               # Make commands for easy development
├── README.md
└── package.json
```

## 🛠️ Development Commands

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `make serve`          | Start the demo API server            |
| `make run`            | Start the viewer client application  |
| `npm run test`        | Run API tests                        |
| `npm run create-app`  | Generate a new NestJS application    |

### Alternative Commands (without Make)

| Command                                      | Description                          |
| -------------------------------------------- | ------------------------------------ |
| `npx nx run @object-lab/demo-api:serve`     | Start the demo API server            |
| `npx nx run @object-lab/viewer:dev`         | Start the viewer in development mode |
| `nx run @object-lab/demo-api:test`          | Run API tests                        |

## 🔧 Configuration

### Port Configuration

- **API Server**: Default port 3000
- **Client Application**: Default port 4200

You can override the API server port by setting the `PORT` environment variable:

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