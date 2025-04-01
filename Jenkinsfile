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
                sh 'nohup node server.js > output.log 2>&1 &'
            }
        }
    }

    post {
        success {
            script {
                emailext subject: 'Deployment Successful',
                    body: "The deployment of the project was successful!",
                    to: 'papetua.narina@student.moringaschool.com',
                    from: 'papetua.narina@student.moringaschool.com'
            }
        }

        failure {
            script {
                emailext subject: 'Deployment Failed',
                    body: "The deployment of the project failed. Check Jenkins logs for details.",
                    to: 'papetua.narina@student.moringaschool.com',
                    from: 'papetua.narina@student.moringaschool.com'
            }
        }
    }
}
