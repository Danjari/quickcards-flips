# Flips - AI-Powered Flashcard Generator

Flips is a web application designed to help users generate educational flashcards automatically from PDF files. Using AI to extract and structure data from documents, it simplifies the process of learning by generating flashcards that aid in active recall and retention.

## Features

- **PDF Upload**: Upload a PDF file, and Flips will automatically extract and process the content.
- **AI-Generated Flashcards**: The application uses OpenAI to generate flashcards from the document’s content.
- **User Authentication**: Secured by Firebase and Clerk for user authentication.
- **Firebase Integration**: Uploaded PDFs and flashcard data are stored in Firebase for each user.
- **Responsive Design**: Fully responsive and mobile-friendly user interface.

## Tech Stack

- **Next.js**: For the web application framework.
- **Firebase**: Used for storage and Firestore for real-time database.
- **OpenAI API**: For generating flashcards from the extracted content.
- **UnstructuredClient API**: For partitioning and extracting text from the uploaded PDF.
- **TailwindCSS**: For styling and responsive design.
- **Clerk**: Used for user authentication.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14+)
- **npm** or **yarn**
- Firebase account and project setup
- OpenAI API Key
- UnstructuredClient API Key

### Clone the repository

```bash
git clone https://github.com/Danjari/quickcards-flips.git
cd quickcards-flips
```
### Install dependencies
```bash
npm install
```

### your API Keys 

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id

OPENAI_API_KEY=your-openai-api-key
UNSTRUCTURED_API_KEY=your-unstructured-api-key
UNSTRUCTURED_API_URL=your-unstructured-api-url

CLERK_API_KEY=your-clerk-api-key
```

### Firebase Setup

Make sure Firebase is properly set up with the following:

	1.	Go to the Firebase Console and create a new project.
	2.	Enable Firestore and Firebase Storage.
	3.	Obtain your credentials from the Firebase console and put them into the .env.local file.

Running the Project

Once you have your environment variables set and dependencies installed, you can start the development server:
```bash
npm run dev
```
If you are deploying on Vercel, Make sure to increase the Max Duration to 60 sec or more. Other wise you will get a Server Error. ( We still need to work on response time from the different APIs 
