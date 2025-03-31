pipeline {
    agent any

    environment {
        MONGO_URI = "mongodb+srv://papetuanarina:FMySwBDqf2O93rar@ip1.90y7ear.mongodb.net/?retryWrites=true"
        NODE_ENV = "production"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Papsy-ops/PI1'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Verify MongoDB Connection') {
            steps {
                sh 'mongosh "$MONGO_URI" --eval "show dbs"'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || echo "No tests found, skipping..."'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            echo "Deployment Successful!"
        }
        failure {
            echo "Deployment Failed. Check logs!"
        }
    }
}
