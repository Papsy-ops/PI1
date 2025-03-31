pipeline {
    agent any
    
    environment {
        MONGO_URI = 'mongodb+srv://papetuanarina:nRDTHrldbxqeYd8L@ip1.90y7ear.mongodb.net/?retryWrites=true&w=majority&appName=IP1'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Run npm install if you have a package.json and dependencies to install
                    // If you're using npm for frontend dependencies (e.g., React, Vue, etc.):
                    sh 'npm install'
                }
            }
        }
        
        stage('Lint and Test') {
            steps {
                script {
                    // Example: Run ESLint for JavaScript linting
                    sh 'npx eslint .'

                    // Example: Run your JS tests if any (e.g., Jest)
                    // sh 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // If you're using a build tool, run it here
                    // For example, if using React or Webpack:
                    // sh 'npm run build'
                    
                    // For simple static apps, this may not be needed.
                    // If you have assets to optimize, do so here.
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                // Deploy the static files to Render
                // You can use Render's CLI or other commands to deploy.
                // Example: Copy the build folder to the Render deployment directory
                sh 'cp -r * /path/to/render/deploy'  // Adjust to Render’s deployment command
                sh 'node server.js'  // If needed to start a node server for deployment
            }
        }
    }

    post {
        success {
            echo 'Deployment was successful!'
        }
        failure {
            echo 'There was an error with the pipeline.'
        }
    }
}
