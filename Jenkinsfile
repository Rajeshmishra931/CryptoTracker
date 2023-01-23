pipeline 
{
  agent any
  tools 
   {
    nodejs "node"
    }
  stages 
  {
    stage('Build') 
    {
      steps 
      {
        bat 'npm install'
      }
    }

    stage('Test') 
    {
      steps 
      {
        bat 'npm install request'
        bat 'npm install assert'
        bat 'node src/tests/TestCoinApi.js'
      }
    }


     

   
}
}
