pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/Papsy-ops/PI1.git'
            }
        }
        stage('Verify MongoDB Connection') {
            steps {
                sh 'mongosh "mongodb+srv://papetuanarina:FMySwBDqf2O93rar@ip1.90y7ear.mongodb.net/?retryWrites=true" --eval "show dbs"'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy to Render') {
            steps {
                sh 'node server.js'
            }
        }
    }

    post {
        failure {
            echo 'Deployment Failed. Check logs!'
        }
    }
}
