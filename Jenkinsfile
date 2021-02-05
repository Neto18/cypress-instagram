pipeline {
    agent {
        docker {
            image 'node:14.15.4-alpine3.11' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}