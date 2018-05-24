final String STATUS_PENDING = 'PENDING'
final String STATUS_SUCCESS = 'SUCCESS'
final String STATUS_FAILURE = 'FAILURE'
final String CONTEXT_HEALTH = 'health'
final String CONTEXT_LINT = 'health/lint'
final String CONTEXT_TEST_MAC = 'health/test/macOS'

pipeline {
    agent any
    stages {
        // Sets up Node and Yarn at the correct versions.
        stage('Provision-macOS') {
            agent {
                label 'master'
            }
            steps {
                setBuildStatus(CONTEXT_HEALTH, 'health checks started', STATUS_PENDING)
                sh '''#!/bin/bash -x
                    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
                    . $HOME/.bash_profile
                    nvm install 8.9.3
                    nvm use 8.9.3
                    curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.6.0'''
            }
        }
        stage('Health') {
            parallel {
                stage('Lint') {
                    agent {
                        label 'master'
                    }
                    steps {
                        setBuildStatus(CONTEXT_LINT, 'lint started', STATUS_PENDING)
                        yarnInstallUnixLike()
                        yarnRun('lint-report')
                    }
                    post {
                        always {
                            checkstyle()
                        }
                        success {
                            setBuildStatus(CONTEXT_LINT, 'no lint errors', STATUS_SUCCESS)
                        }
                        failure {
                            setBuildStatus(CONTEXT_LINT, 'lint errors found', STATUS_FAILURE)
                        }
                    }
                }
                stage('Test-macOS') {
                    agent {
                        label 'master'
                    }
                    steps {
                        setBuildStatus(CONTEXT_TEST_MAC, 'tests started', STATUS_PENDING)
                        yarnInstallUnixLike()
                        yarnRun('compile-all')
                        yarnRun('test-report')
                    }
                    post {
                        always {
                            step([
                                    $class: 'TapPublisher',
                                    testResults: 'packages/**/test-result.tap',
                                    verbose: true,
                                    planRequired: true
                            ])
                        }
                        success {
                            setBuildStatus(CONTEXT_TEST_MAC, 'all tests pass', STATUS_SUCCESS)
                        }
                        failure {
                            setBuildStatus(CONTEXT_TEST_MAC, 'tests are failing', STATUS_SUCCESS)
                        }
                    }
                }
            }
        }
    }
    post {
        success {
            setBuildStatus(CONTEXT_HEALTH, 'all health checks passed', STATUS_SUCCESS)
        }
        failure {
            setBuildStatus(CONTEXT_HEALTH, 'not all health checks passed', STATUS_FAILURE)
        }
    }
}

void setBuildStatus(String context, String message, String state) {
    step([
        $class: 'GitHubCommitStatusSetter',
        contextSource: [$class: 'ManuallyEnteredCommitContextSource', context: context],
        reposSource: [$class: 'ManuallyEnteredRepositorySource', url: 'https://github.com/HaikuTeam/mono'],
        errorHandlers: [[$class: 'ChangingBuildStatusErrorHandler', result: 'UNSTABLE']],
        statusResultSource: [
            $class: 'ConditionalStatusResultSource',
            results: [[$class: 'AnyBuildResult', message: message, state: state]]
        ]
    ])
}

void yarnInstallUnixLike() {
    sh '''#!/bin/bash -x
        . $HOME/.bash_profile
        yarn install --frozen-lockfile --force'''
}

void yarnRun(String command) {
    sh '''#!/bin/bash -x
        . $HOME/.bash_profile
        ''' + "yarn ${command}"
}