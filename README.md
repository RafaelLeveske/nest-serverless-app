# 🧾 nest-serverless-app

> AWS SQS queue consumer for service order indexing, built with NestJS + AWS Lambda in a serverless architecture.

## 📚 Overview

This project is a microservice built with **NestJS**, deployed on AWS as a **Lambda Function**. It acts as a **consumer for an AWS SQS queue**, processing messages that represent service orders to be indexed. These messages are sent by a backend-for-frontend (BFF) system via **API Gateway + SQS**.

This serverless approach ensures automatic scalability, cost-efficiency, and decoupling between services.

---

## ⚙️ Architecture

```
[BFF/API Gateway] ---> [SQS] ---> [Lambda (NestJS Consumer)]
![image](https://github.com/user-attachments/assets/4c127248-0454-4ed2-9de8-415730ebc63f)

```

- **BFF/API Gateway**: Receives external HTTP requests and forwards service orders to the SQS queue.
- **SQS**: A message queue for asynchronous communication and guaranteed delivery.
- **Lambda (NestJS)**: A serverless function that consumes messages and handles the indexing logic.

---

## 🧑‍💻 Tech Stack

- **Node.js / TypeScript**
- **NestJS**
- **AWS Lambda**
- **AWS SQS**
- **Serverless Framework**

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/)
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) configured with valid credentials

---

### 1. Install dependencies

```bash
npm install
```

---

### 2. Deploy the application using Serverless Framework

```bash
npm run deploy
```

---

### 3. Send a test message to the queue

Use AWS CLI to simulate a message being sent:

```bash
aws sqs send-message \
  --queue-url https://sqs.us-east-1.amazonaws.com/123456789012/index-orders-dev \
  --message-body '{"order_id": "123", "description": "Test order"}'
```

---

## 📁 Project Basic Structure

```bash
nest-serverless-app/
│
├── src/
│   ├── orders/            # Main module for order processing
│   └── main.ts            # NestJS Lambda bootstrap
│
├── serverless.yml         # Serverless Framework config
└── README.md              # This file
```

---

## 🤝 Contributing

1. Fork this repository  
2. Create a feature branch: `git checkout -b my-feature`  
3. Commit your changes: `git commit -m 'feat: new feature'`  
4. Push to the branch: `git push origin my-feature`  
5. Open a Pull Request

---

## 💡 Future Improvements

- Integrate with a database to persist orders  
- Add monitoring and alerting with CloudWatch  
- Add a Dead Letter Queue (DLQ) for failed messages  
- Load configuration via **SSM Parameters**

---

## 🧑‍🏫 Author

Developed by **Rafael Vieira**  
[LinkedIn](https://www.linkedin.com/in/rafael-eraldo-vieira/)  
[GitHub](https://github.com/RafaelLeveske)
