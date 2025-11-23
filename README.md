# Orv-Hub

A decentralized video payment platform that enables content creators to monetize their videos through cryptocurrency payments. Users can purchase and access premium video content using Tron (TRX) or TON blockchain networks.

## Project Status

**Note:** This project is currently under development and may not be complete. Some features may be missing or have issues. Please refer to the `TODO.md` file for a list of remaining tasks and incomplete components.

## Features

- **User Authentication**: Secure user registration and login system
- **Video Management**: Upload, list, and manage video content
- **Cryptocurrency Payments**: Support for Tron (TRX) and TON blockchain payments
- **Smart Contracts**: Solidity-based payment processing contracts
- **Video Library**: Users can view their purchased videos
- **Payment Verification**: Automated transaction verification on blockchain networks

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT-based authentication
- **Blockchain**: TronWeb SDK, TON API integration

### Frontend
- **Framework**: React
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Build Tool**: Vite (assumed)

### Smart Contracts
- **Language**: Solidity
- **Framework**: Hardhat
- **Network**: Tron (TRC20)

## Project Structure

```
Orv-Hub/
├── backend/              # Express.js backend API
│   ├── src/
│   │   ├── config/      # Configuration files (database, JWT, storage)
│   │   ├── controllers/ # Request handlers
│   │   ├── middleware/  # Authentication, validation, upload middleware
│   │   ├── models/      # MongoDB models (User, Video, Payment)
│   │   ├── routes/      # API route definitions
│   │   └── services/    # Business logic (auth, payment, video)
│   └── package.json
├── frontend/            # React frontend application
│   ├── src/
│   │   ├── components/  # React components (auth, payment, video, user)
│   │   └── store/       # Redux store and slices
│   └── package.json
└── smart-contracts/     # Solidity smart contracts
    ├── contracts/       # Payment contract implementations
    └── hardhat.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ItsOrv/Orv-Hub.git
cd Orv-Hub
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd ../frontend
npm install
```

4. Install smart contract dependencies:
```bash
cd ../smart-contracts
npm install
```

### Configuration

1. Backend configuration:
   - Create a `.env` file in the `backend/` directory
   - Configure MongoDB connection string
   - Set JWT secret key
   - Add Tron API keys and private keys
   - Configure storage settings

2. Frontend configuration:
   - Create a `.env` file in the `frontend/` directory
   - Set API endpoint URL

3. Smart contracts:
   - Configure Hardhat network settings
   - Set up Tron network configuration

### Running the Application

1. Start MongoDB service

2. Start the backend server:
```bash
cd backend
npm run dev
```

3. Start the frontend development server:
```bash
cd frontend
npm run dev
```

4. Deploy smart contracts (if needed):
```bash
cd smart-contracts
npx hardhat compile
npx hardhat deploy
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Videos
- `GET /api/videos` - List all videos
- `POST /api/videos` - Upload a new video
- `GET /api/videos/:id` - Get video details

### Payments
- `POST /api/payments/verify-payment-and-add-video` - Verify payment and add video to user library

### User
- `GET /api/user/purchased-videos` - Get user's purchased videos

## Smart Contracts

### TronPaymentProcessor
Handles TRC20 token payments on the Tron network. Features include:
- Payment reception from users
- Owner withdrawal functionality
- Event emission for payment tracking

## Development

This project uses TypeScript for type safety across both frontend and backend. Make sure to:
- Run type checking before committing: `npm run type-check`
- Follow existing code style and patterns
- Write meaningful commit messages

## Contributing

Contributions are welcome. Please ensure that:
- Code follows the existing style guide
- All new features are properly tested
- Documentation is updated accordingly

## License

This project is open source and available under the MIT License.

## Disclaimer

This project is in active development. Some features may be incomplete or non-functional. Use at your own risk.
