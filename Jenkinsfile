pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }

        stage('Verify Docker') {
            steps {
                bat 'docker version'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t devops-project:%BUILD_NUMBER% .'
            }
        }

        stage('Run Container') {
            steps {
                bat '''
                    docker rm -f devops-ci-test 2>nul || echo No existing test container
                    docker run -d --name devops-ci-test -p 3001:3000 devops-project:%BUILD_NUMBER%
                '''
            }
        }

        stage('Container Health Check') {
            steps {
                bat '''
                    timeout /t 5 /nobreak >nul
                    powershell -NoProfile -Command "$response = Invoke-RestMethod -Uri 'http://localhost:3001/health'; if ($response.status -ne 'UP') { exit 1 }"
                '''
            }
        }
    }

    post {
        always {
            bat 'docker rm -f devops-ci-test 2>nul || echo Test container already removed'
        }
    }
}