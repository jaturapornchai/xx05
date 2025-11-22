# RAG Feature Setup Guide

This project now includes a Retrieval-Augmented Generation (RAG) feature using OpenAI and MongoDB Atlas Vector Search.

## Prerequisites

1.  **Environment Variables**: Add the following to your `.env.local` file:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    OPENAI_API_KEY=your_openai_api_key
    ```

2.  **MongoDB Atlas Vector Search Index**:
    You must create a Vector Search Index on your `products` collection in MongoDB Atlas.
    
    -   Go to your Atlas Cluster -> **Atlas Search** -> **Create Search Index**.
    -   Select **JSON Editor**.
    -   Select the **Database** and **Collection** (e.g., `test.products`).
    -   Name the index: `vector_index`.
    -   Use the following definition:
        ```json
        {
          "fields": [
            {
              "numDimensions": 1536,
              "path": "embedding",
              "similarity": "cosine",
              "type": "vector"
            }
          ]
        }
        ```

## Usage

### API Endpoint
`POST /api/rag`

**Request Body:**
```json
{
  "query": "What products do you have?"
}
```

**Response:**
```json
{
  "answer": "We have...",
  "context": [...]
}
```

## Data Seeding
To use the RAG feature, you need to populate your database with documents that have embeddings. You can create a script to:
1.  Read your data.
2.  Generate embeddings using OpenAI `text-embedding-3-small`.
3.  Save to MongoDB.
